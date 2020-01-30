package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Route struct {
	Name       string
	Method     string
	Pattern    string
	HandleFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router { //metodo que retorna nuestras rutas

	router := mux.NewRouter().StrictSlash(true)

	for _, route := range routes {
		router.Methods(route.Method).
			Name(route.Name).
			Path(route.Pattern).
			Handler(route.HandleFunc)

	}
	return router
}

var routes = Routes{ //array que contiene nuestras rutas

	Route{
		"Index",
		"GET",
		"/",
		Index,
	},
	Route{
		"MovieList",
		"GET",
		"/peliculas",
		MovieList,
	},
	Route{
		"MovieShow",
		"GET",
		"/pelicula/{id}",
		MovieShow,
	},
	Route{
		"MovieAdd",
		"POST",
		"/newpelicula",
		MovieAdd,
	},
	Route{
		"MovieUpdate",
		"PUT",
		"/update/{id}",
		MovieUpdate,
	},
	Route{

		"MovieDel",
		"DELETE",
		"/delete/{id}",
		MovieDel,
	},
	Route{

		"MovieDelName",
		"DELETE",
		"/delname/{name}",
		MovieDelName,
	},
}
