package main

import "fmt"

func main() {

	//arrays en GO fijos

	var peliculas [3]string

	peliculas[0] = "Advengers"
	peliculas[1] = "Spiderman"
	peliculas[2] = "Jocker"

	animales := [3]string{"perro", "gato", "lagartija"}

	fmt.Println(peliculas)
	fmt.Println(animales)

	//array dinamico GO o slice

	villanos := []string{} //slice vacio

	villanos = append(villanos, "thanos") //llenando slice
	villanos = append(villanos, "voldemort")
	villanos = append(villanos, "mojojojo")

	fmt.Println(villanos)
	fmt.Println(len(villanos)) //obteniendo el largo del array
	fmt.Println(villanos[0:2]) //onteniendo un rango del  array (dos elementos)
}
