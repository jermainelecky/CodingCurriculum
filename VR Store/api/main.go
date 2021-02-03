package main

import (
	"database/sql"
	"encoding/json"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type product struct {
	ProductID   int    `json:"productID"`
	ProductName string `json:"productName"`
	Price       int    `json:"price"`
	Category    string `json:"category"`
	ProductImg  string `json:"productImg"`
}

var db *sql.DB

// Cross Origin Resource Sharing
// * allows open access for everyone. but can be restricted through a list
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

// Init Router /
// matches requests with routes and call a handler for that route that matches the URL
func main() {
	router := mux.NewRouter()
	router.HandleFunc("/products", fetchProducts).Methods("GET")
	http.ListenAndServe(":8000", router)
}

// w constructs a http response / r takes in the request given
func fetchProducts(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	// err := godotenv.Load(".env")
	// if err != nil {
	// 	panic(err.Error())
	// }
	// password := os.Getenv("MYSQL_PASSWORD")

	// gets the products table and puts it into the db variable
	db, err := sql.Open("mysql", "root:MyDatabaseLogin12@tcp(database:3306)/products_db")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	// empty slice with the product struct format
	var products []product
	query := "SELECT productID, productName, price, category, ProductImg FROM products"

	results, err := db.Query(query)
	if err != nil {
		panic(err.Error())
	}

	for results.Next() {
		var product product

		err := results.Scan(&product.ProductID, &product.ProductName, &product.Price, &product.Category, &product.ProductImg)
		if err != nil {
			panic(err.Error())
		}
		products = append(products, product)
	}
	w.WriteHeader(http.StatusOK)                       // sets status 200
	w.Header().Set("Content-Type", "application/json") // lets browser know we are sending json
	json.NewEncoder(w).Encode(products)                // converts products slice into json
}
