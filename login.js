function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Reset errors
    usernameError.style.display = "none";
    passwordError.style.display = "none";
    document.getElementById("username").classList.remove("error");
    document.getElementById("password").classList.remove("error");

    // Validación de usuario
    if (username === "") {
        isValid = false;
        usernameError.style.display = "block";
        document.getElementById("username").classList.add("error");
    }

    // Validación de contraseña
    if (password === "" && userType !== "guest") {
        isValid = false;
        passwordError.style.display = "block";
        document.getElementById("password").classList.add("error");
    }

    
    // Validación de tipo de usuario
    if (userType === "guest" && password !== "") {
        isValid = false;
        passwordError.style.display = "block";
        passwordError.textContent = "Los invitados no necesitan contraseña.";
        document.getElementById("password").classList.add("error");
    }

    if (isValid) {
        alert(`Bienvenido, ${username} (${userType})`);
    }
}
