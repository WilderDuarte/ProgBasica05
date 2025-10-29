const password = document.getElementById("password");

toggle_password.addEventListener("click", () => {
    const tipo_elemento = password.type === "password" ? "text" : "password";
    password.type = tipo_elemento;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
})