package main

import (
	"fmt"
	"time"
)

func main() {

	fmt.Println("ejemplo Switch")

	momento := time.Now()
	hoy := momento.Weekday()

	switch hoy {

	case 0:
		fmt.Println("domingo")

	case 1:
		fmt.Println("lunes")

	case 2:
		fmt.Println("martes")

	case 3:
		fmt.Println("miercoles")
	default:
		fmt.Println("es otro dia xD")
	}
}
