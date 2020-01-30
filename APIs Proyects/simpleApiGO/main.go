package main

import (
	"log"
	"net/http"

	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})

	router := NewRouter() //importando todas nuestras rutas
	handler := c.Handler(router)

	server := http.ListenAndServe(":3013", handler)

	log.Fatal(server)

}
