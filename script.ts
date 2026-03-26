const products = [
    {
        name: "Birthday Cake",
        price: "₹800",
        image: "https://source.unsplash.com/200x150/?birthday-cake"
    },
    {
        name: "Chocolate Brownie",
        price: "₹300",
        image: "https://source.unsplash.com/200x150/?brownie"
    },
    {
        name: "Ice Cream Cake",
        price: "₹1000",
        image: "https://source.unsplash.com/200x150/?ice-cream-cake"
    },
    {
        name: "Cupcakes",
        price: "₹250",
        image: "https://source.unsplash.com/200x150/?cupcake"
    }
];

const productList = document.getElementById("productList");

products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="orderNow()">Order</button>
    `;

    productList.appendChild(div);
});

function orderNow() {
    const phone = "919876543210"; // change number
    const message = "Hi! I want to order cakes from Bhuva Cakes";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}