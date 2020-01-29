package main

import (
	"log"
	"net/http"
)

func main() {

	router := NewRouter() //importando todas nuestras rutas

	server := http.ListenAndServe(":3013", router)

	log.Fatal(server)

}
