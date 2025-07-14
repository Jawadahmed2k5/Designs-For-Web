document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");
    const cartItemsContainer = document.getElementById("cart-items");
    let cart = [];
    let total = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h3").innerText;
            const productPrice = parseFloat(product.querySelector("p").innerText.replace("$", ""));
            
            cart.push({ name: productName, price: productPrice });
            total += productPrice;
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.innerHTML = `${item.name} - $${item.price} <button class="remove-item" data-index="${index}">❌</button>`;
            cartItemsContainer.appendChild(div);
        });

        cartCount.innerText = cart.length;
        totalPrice.innerText = total.toFixed(2);

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                total -= cart[index].price;
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const category = button.getAttribute("data-category");
            document.querySelectorAll(".product").forEach(product => {
                if (category === "all" || product.getAttribute("data-category") === category) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});
