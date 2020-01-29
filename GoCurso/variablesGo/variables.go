package main

import "fmt"

func main() {

	var suma int = 8 + 9 //definicion de variables cin tipo de dato
	var resta int = 10 - 5
	var nombre string = "Leonardo"
	var apellidos string = "pereira"

	nombre = "Leo"

	pais := "Chile" //variable que adivina el tipo de dato

	const year int = 2020 //constante

	fmt.Println(suma)
	fmt.Println(resta)

	fmt.Println("hola mundo, desde go!  con: " + nombre + " " + apellidos + " " + pais)
	fmt.Println(year)

}
