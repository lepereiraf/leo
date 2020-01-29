package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {

	//fmt.Println("Condicionales en Go")

	miedad, _ := strconv.Atoi(os.Args[2])
	//comvirtiendo string a entero

	colores := []string{"rojo", "azul", "verde", "amarillo"}

	println("hola: " + os.Args[1]) //reciviendo el nombre como parametro
	mEdad(miedad)
	esPar(miedad)
	bucle(colores)
	bucleForeach(colores)

}

func bucleForeach(array []string) { //foreach

	for _, array := range array {
		fmt.Println(array)
	}
}
func bucle(array []string) {
	//recorriendo e imprimiendo un array con GO!

	for i := 0; i < len(array); i++ {

		fmt.Println(array[i])
	}
}

func esPar(edad int) {
	if edad%2 == 0 {
		fmt.Println("es par")
	} else {
		fmt.Println("es impar")
	}
}

func mEdad(edad int) {

	if edad >= 18 {

		fmt.Println("eres mayor de edad")

	} else {
		fmt.Println("eres menor de edad")
	}
}
