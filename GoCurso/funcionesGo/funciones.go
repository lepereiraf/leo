package main

import "fmt"

func main() {

	holaMundo()
	operacion(14, 4, "dividir")
	fmt.Println(retornaDatos())

}

func holaMundo() {
	fmt.Println("hola mundo xD")

}
func retornaDatos() (dato1 string, dato2 int) {

	dato1 = "Leonardo Pereira"
	dato2 = 24

	return

}

func operacion(n1 int, n2 int, op string) {
	result := 0

	if op == "sumar" {
		result = n1 + n2

	}
	if op == "restar" {
		result = n1 - n2
	}
	if op == "multiplicar" {
		result = n1 * n2
	}
	if op == "dividir" {
		result = n1 / n2

	}

	fmt.Print("Resultado: ")
	fmt.Println(result)

}
