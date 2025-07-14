document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");
    const toggleThemeBtn = document.querySelector(".toggle-theme");
    const rememberMe = document.getElementById("rememberMe");

    // Dark Mode Toggle
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    // Load Dark Mode Preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Show/Hide Password
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerHTML = `<i class="fa fa-eye-slash"></i>`;
        } else {
            passwordInput.type = "password";
            togglePassword.innerHTML = `<i class="fa fa-eye"></i>`;
        }
    });

    // Remember Me
    if (localStorage.getItem("email")) {
        emailInput.value = localStorage.getItem("email");
        rememberMe.checked = true;
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!email || !password) {
            alert("Please fill in both fields.");
            return;
        }
        if (email === "test@example.com" && password === "123456") {
            alert("Login successful!");
            if (rememberMe.checked) {
                localStorage.setItem("email", email);
            } else {
                localStorage.removeItem("email");
            }
        } else {
            alert("Invalid email or password.");
        }
    });
});
