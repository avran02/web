package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/hello",
		func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("I'm Andrey, coding my way to greatness! 😎"))
		})
	http.HandleFunc("/",
		func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("200 OK, but am I? 🤔"))
		})
	http.HandleFunc("/coffee",
		func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusTeapot)
			w.Write([]byte("418 I'm a teapot ☕"))
		})

	if err := http.ListenAndServe(":3000", nil); err != nil {
		panic(err)
	}
}
