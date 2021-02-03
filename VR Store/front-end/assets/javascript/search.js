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

function search() {
    const productCard = document.querySelectorAll(".product-card"); // get all product cards
    let input = document.getElementById("search").value; // the search box
    let inputF = input.toLowerCase(); // formats all letters to lowercase
    for (i = 0; i < productCard.length; i++) {
        let productArr = productCard[i].querySelectorAll(".product-name")[0]; // the name of the product in the h3
        let productValue = productArr.textContent || productArr.innerHTML;
        console.log(productCard, productArr, productValue);
        if (productValue.toLowerCase().indexOf(inputF) > -1) { // -1 allows us to look back on the previous index
            productCard[i].style.display = "block";
        } else {
            productCard[i].style.display = "none";
        }
    }
};

function filterByPrice(x) {
    let currentCards = document.querySelectorAll(".product-name"); // get all product cards
    console.log(currentCards)
    let productList = []
    for (i = 0; i < currentCards.length; i ++) {
        productList.push(currentCards[i].innerHTML);
    };
    console.log(productList);
    let currentData = []
    for (i =0; i < dataArr.length; i++) {
        if (productList.includes(dataArr[i].productName)) {
            currentData.push(dataArr[i]);
        };
    };
    console.log(currentData);

    productGrid.innerHTML = "" // removes current product cards
    console.log(x);
    if (x === 'High-Low') { // sorts the data based off filter option
        currentData.sort((a, b) => (a.price < b.price) ? 1 : -1);
    } else if (x === 'Low-High') {
        currentData.sort((a, b) => (a.price > b.price) ? 1 : -1);
    };

    for (i = 0; i < currentData.length; i++) {
        productGrid.innerHTML += `
        <div class="product-card">
                <div class="product-card-link">
                    <a href="detail.html" target="_blank">
                    <img src="${currentData[i].productImg}" alt="${currentData[i].productName}"></a>
                </div>
                <div class="product-card-description">
                    <h3 class="product-name">${currentData[i].productName}</h3>
                    <p class="product-price">$${currentData[i].price}</p>    
                </div>
                <button type="submit">Add to Cart</button>
            </div>`
    };
};

function categoryFilter(x) {
    console.log(dataArr);
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