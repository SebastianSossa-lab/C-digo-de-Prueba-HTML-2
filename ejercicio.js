let = check = false;
let saldoCuenta = 30000;

while(check != true){
    alert(`Bienvenido, seleccione \n 1. consultar saldo \n 2. retirar`);
    let opcion = Number(prompt(`Ingrese la opción:`));
    switch (opcion) {
        case 1: alert(`Su saldo es ${saldoCuenta}`); break;
        case 2: {
            let retirar;
            do {
                retirar = Number(prompt(`Ingrese el valor a retirar:`));
                if (retirar > saldoCuenta) {
                    alert(`Saldo insuficiente`);
                } else {
                    saldoCuenta -= retirar;
                    alert(`Su saldo es ${saldoCuenta}`);
                }
            } while (retirar > saldoCuenta);
            break;
        }
        case 3: check = true; break;
    }
}

