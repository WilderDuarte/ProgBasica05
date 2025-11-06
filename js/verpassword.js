const password = document.getElementById("password");

toggle_password.addEventListener("click", () => {
    const tipo_elemento = password.type === "password" ? "text" : "password";
    password.type = tipo_elemento;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
})

function validar(){
    let password = document.getElementById("password").value;
    let lowercase = /[a-z]/.test(password);
    let uppercase = /[A-Z]/.test(password);
    let number = /\d/.test(password);
    let specialchar = /[\W_]/.test(password);
    if(password.length < 8){
        Swal.fire(
            "Error",
            "La contraseña debe tener al menos 8 caracteres",
            "error"
        );
        return
    }
    if(lowercase && uppercase && number && specialchar){
        Swal.fire(
            "Felicidades",
            "Su contraseña es correcta",
            "success"
        );
    }else{
        Swal.fire({
            icon: "error",
            title: "Contraseña invalida según:",
            html: `
                <ul style="text-aling:left; margin-left:20px;">
                    <li>${number ? "✅" : "❌"} Al menos un número</li>
                    <li>${lowercase ? "✅" : "❌"} Al menos una minúscula</li>
                    <li>${uppercase ? "✅" : "❌"} Al menos una mayúscula</li>
                    <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
                </ul>
            `
        });
    }
}
