package main

type Movie struct {
	_Id      string `json:"_id`
	Name     string `json:"name"`
	Year     string `json:"year"`
	Director string `json:"director"`
	Genero   string `json:"genero"`
	Poster   string `json:"poster"`
}

type Movies []Movie

type Message struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}
