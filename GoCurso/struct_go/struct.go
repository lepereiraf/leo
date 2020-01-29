package main

import "fmt"

type Auto struct { //tipo de dato personalizado
	marca     string
	color     string
	precio    int
	electrico bool
}

func main() {

	var miAuto = Auto{ //creando una variable de ese tipo
		marca:     "nissan",
		color:     "rojo",
		precio:    10000000,
		electrico: false}

	var otroAuto = Auto{"ferrari", "negro", 18000000, false} //forma simplificada

	fmt.Println(miAuto)
	fmt.Println(otroAuto)
	fmt.Println(miAuto.marca, miAuto.color) //accediendo a los datos

}
