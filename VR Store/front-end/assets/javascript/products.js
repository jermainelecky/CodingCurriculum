var productGrid = document.querySelector(".product-grid") // location where the products go in the html
var dataArr = [];

fetch(`http://localhost:8000/products`) // fetches the products from my database
    // decoding json back to an array of products. from the struct in the go file
    .then(response => {
        return response.json()
    })
    // loop through the database to return the data in html
    .then(data => {
        console.log(data);
        for (i = 0; i < data.length; i++) {
            productGrid.innerHTML += `
            <div class="product-card">
                <div class="product-card-link">
                    <a href="detail.html" target="_blank">
                    <img src="${data[i].productImg}" alt="${data[i].productName}"></a>
                </div>
                <div class="product-card-description">
                    <h3 class="product-name">${data[i].productName}</h3>
                    <p class="product-price">$${data[i].price}</p>    
                </div>
                <button type="submit">Add to Cart</button>
            </div>`
        }
        // returned to utilize in sortPrice()
        return dataArr = data;
    });

function categoryFilter(x) {
    console.log(x);
    productGrid.innerHTML = "" // removes current product cards
    for (i = 0; i < dataArr.length; i++) {
        let category = dataArr[i].category;
        if (category === x) {
            productGrid.innerHTML += `
            <div class="product-card">
                <div class="product-card-link">
                    <a href="detail.html" target="_blank">
                    <img src="${dataArr[i].productImg}" alt="${dataArr[i].productName}"></a>
                </div>
                <div class="product-card-description">
                    <h3 class="product-name">${dataArr[i].productName}</h3>
                    <p class="product-price">$${dataArr[i].price}</p>    
                </div>
                <button type="submit">Add to Cart</button>
            </div>`
        }
    }
};