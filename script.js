// Array updated to match the specific cakes mentioned in the image analysis
const products = [
    {
        name: "Sweetheart",
        desc: "A lovely strawberry delight perfect for your loved ones.",
        price: "₹650",
        image: "https://images.unsplash.com/photo-1615837197154-2e801f41ed91?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Blackforest",
        desc: "Classic chocolate sponge layered with cherries and fresh cream.",
        price: "₹750",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=300&q=80"
    },
    {
        name: "Chocolate",
        desc: "Rich, gooey, and indulgent premium chocolate layer cake.",
        price: "₹800",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80"
    }
];

const productList = document.getElementById("productList");

// Dynamically generate the rectangular product cards
products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    
    // Fixed the missing backticks (`) for the template literal string
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="product-price">${product.price}</div>
        <button class="card-btn" onclick="orderNow('${product.name}')">Order Now</button>
    `;
    productList.appendChild(div);
});

// WhatsApp redirect function
function orderNow(itemName) {
    const phone = "919876543210"; // Change this to your actual WhatsApp number
    const message = `Hi! I would like to order the ${itemName} from Bhuva Cakes.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// Simple smooth scroll for the "Explore Menu" button
function scrollToMenu() {
    document.getElementById("exclusive").scrollIntoView({ behavior: 'smooth' });
}
