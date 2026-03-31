/* Color Palette & Reset based on image analysis */
:root {
    --bg-cream: #FFFaf5;
    --pastel-pink: #FFC0CB;
    --deep-pink: #FF6B81;
    --text-dark: #333333;
    --text-light: #777777;
    --white: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-cream);
    color: var(--text-dark);
}

h1, h2, .logo {
    font-family: 'Playfair Display', serif;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background: transparent;
}

.logo {
    font-size: 24px;
    color: var(--deep-pink);
    font-weight: bold;
}

.nav-links a {
    color: var(--text-dark);
    margin-left: 30px;
    text-decoration: none;
    font-weight: 400;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--deep-pink);
}

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 10%;
    min-height: 70vh;
}

.hero-text {
    max-width: 50%;
}

.hero-text h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    color: var(--text-dark);
    margin-bottom: 20px;
}

.hero-text p {
    color: var(--text-light);
    margin-bottom: 30px;
    font-size: 1.1rem;
}

/* Circular Image Styling */
.hero-image img {
    width: 450px;
    height: 450px;
    object-fit: cover;
    border-radius: 50%; /* Makes it a circle */
    box-shadow: 0 15px 30px rgba(255, 107, 129, 0.2);
    border: 10px solid var(--white);
}

/* Buttons */
.primary-btn {
    padding: 15px 35px;
    background-color: var(--deep-pink);
    color: var(--white);
    border: none;
    border-radius: 30px;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(255, 107, 129, 0.3);
    transition: transform 0.3s, background 0.3s;
}

.primary-btn:hover {
    background-color: #ff4762;
    transform: translateY(-3px);
}

/* Exclusive Cakes Section */
#exclusive {
    padding: 80px 10%;
    background-color: var(--white);
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--text-dark);
}

.section-title p {
    color: var(--deep-pink);
    font-weight: 500;
}

/* Horizontal Cards Layout */
.product-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.product {
    background: var(--bg-cream);
    padding: 20px;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.product:hover {
    transform: translateY(-10px);
}

.product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 15px;
}

.product h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
}

.product p {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.product-price {
    font-weight: bold;
    color: var(--deep-pink);
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.card-btn {
    background: transparent;
    border: 2px solid var(--deep-pink);
    color: var(--deep-pink);
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.card-btn:hover {
    background: var(--deep-pink);
    color: var(--white);
}

/* Contact & Footer */
.contact-section {
    text-align: center;
    padding: 60px 20px;
}

.whatsapp-btn {
    background-color: #25D366;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-size: 1rem;
    margin-top: 20px;
    cursor: pointer;
}

footer {
    background: var(--text-dark);
    color: var(--white);
    text-align: center;
    padding: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }
    .hero-text {
        max-width: 100%;
        margin-bottom: 40px;
    }
    .hero-image img {
        width: 300px;
        height: 300px;
    }
    .nav-links {
        display: none; /* Can be updated to a hamburger menu later */
    }
}
