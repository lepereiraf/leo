package main

import "fmt"

func main() {

	fmt.Println(Autos(45))
	fmt.Println(Autos(10))
	Smarphone("nokia", "7.1", "azul", "64GB")

}

func Smarphone(especificaciones ...string) {
	for _, especificaciones := range especificaciones {
		fmt.Println(especificaciones)
	}
}

func Autos(pedido int) (string, int) {

	precio := func() int {

		return pedido * 7500
	}

	return "el precio del a pedido de autos es: ", precio()
}
