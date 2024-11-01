// Función de inicio de sesión
function iniciarSesion() {
    const usuario = prompt("Ingrese su nombre de usuario: ");
    const contrasena = prompt("Ingrese su contraseña: ");

    // Validación simple para el usuario y la contraseña
    if (usuario === "admin" && contrasena === "1234") {
        console.log("Inicio de sesión exitoso.");
        return true;
    } else {
        console.log("Nombre de usuario o contraseña incorrectos.");
        return false;
    }
    return iniciarSesion
}

// Función para calcular el costo del consumo de agua de un apartamento
function calcularCosto(consumo) {
    if (consumo <= 15) {
        return consumo * 500;
    } else if (consumo <= 30) {
        return consumo * 700;
    } else {
        return consumo * 1000;
    }
}

// Inicio del programa
if (iniciarSesion()) {
    let totalMensual = 0;
    let continuar = true;

    while (continuar) {
        const consumo = parseFloat(prompt("Ingrese el consumo de agua del apartamento en m³: "));
        
        if (isNaN(consumo) || consumo < 0) {
            console.log("Por favor ingrese un valor válido para el consumo.");
            continue;
        }

        // Calcular el costo de consumo de agua para el apartamento
        const costo = calcularCosto(consumo);
        totalMensual += costo;
        console.log(`Costo para este apartamento: $${costo}`);

        // Preguntar si hay otro apartamento
        const respuesta = prompt("¿Desea ingresar el consumo de otro apartamento? (s/n): ").toLowerCase();
        if (respuesta !== "s") {
            continuar = false;
        }
    }

    console.log(`El costo total mensual de agua del edificio es: $${totalMensual}`);
} else {
    console.log("Acceso denegado.");
}
