package main

import (
	"encoding/json"
	"fmt"

	"log"
	"net/http"

	"github.com/gorilla/mux"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

//Funcion para conectar a mongo DB
func getSession() *mgo.Session {

	session, err := mgo.Dial("mongodb://localhost")

	if err != nil {

		panic(err)
	}

	return session
}

var collection = getSession().DB("curso_go").C("movies") //variable para apuntar a nuestra collection de mongo

//metodos para simplificar el response
func resMovie(w http.ResponseWriter, status int, results Movie) {

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(status)
	json.NewEncoder(w).Encode(results)

}
func resListMovie(w http.ResponseWriter, status int, results []Movie) {

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(status)
	json.NewEncoder(w).Encode(results)
}

//Funciones que seran consumidas por nuestras rutas
func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Servidor corriendo con Go")
}

func MovieList(w http.ResponseWriter, r *http.Request) {

	var results []Movie
	err := collection.Find(nil).Sort("-_id").All(&results)

	if err != nil {

		log.Fatal(err)
	} else {
		fmt.Println("resultados: ", results)
	}

	resListMovie(w, 200, results)

}

func MovieShow(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r) //recogiendo parametros desde la url
	movieId := params["id"]
	fmt.Println(movieId)

	if !bson.IsObjectIdHex(movieId) {

		w.WriteHeader(404)
		return
	}

	oid := bson.ObjectIdHex(movieId)

	results := Movie{}
	err := collection.FindId(oid).One(&results)

	if err != nil {
		w.WriteHeader(404)
		return
	}

	resMovie(w, 200, results)

}

func MovieAdd(w http.ResponseWriter, r *http.Request) {

	decoder := json.NewDecoder(r.Body)
	var movie_data Movie
	err := decoder.Decode(&movie_data)

	if err != nil {
		panic(err)
	}

	defer r.Body.Close()
	err = collection.Insert(movie_data)

	if err != nil {
		w.WriteHeader(500)
		return
	}

	//resMovie(w, 200, movie_data)
	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(200)
	json.NewEncoder(w)

}

func MovieUpdate(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	movieId := params["id"]

	if !bson.IsObjectIdHex(movieId) {

		w.WriteHeader(404)
		return
	}
	oid := bson.ObjectIdHex(movieId)

	decoder := json.NewDecoder(r.Body)

	var movie_data Movie

	err := decoder.Decode(&movie_data)

	if err != nil {
		panic(err)
		w.WriteHeader(500)
		return
	}

	defer r.Body.Close()

	document := bson.M{"_id": oid}
	change := bson.M{"$set": movie_data}

	err = collection.Update(document, change)

	if err != nil {

		w.WriteHeader(404)
		return

	}

	resMovie(w, 200, movie_data)

}

func MovieDel(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	movieId := params["id"]
	fmt.Println(movieId)

	if !bson.IsObjectIdHex(movieId) {

		w.WriteHeader(404)
		return
	}

	oid := bson.ObjectIdHex(movieId)

	err := collection.RemoveId(oid)

	if err != nil {
		w.WriteHeader(404)
		return
	}

	result := Message{"success", "La pelicula se eliminó"}

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(200)
	json.NewEncoder(w).Encode(result)

}

func MovieDelName(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	nombre := params["name"]
	fmt.Println(nombre)

	err := collection.Remove(nombre)

	if err != nil {
		fmt.Println(err)
		w.WriteHeader(404)
		return
	}

	result := Message{"success", "La pelicula se eliminó"}

	w.Header().Set("Content-Type", "application/json")

	w.WriteHeader(200)
	json.NewEncoder(w).Encode(result)

}
