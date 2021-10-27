let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);

let vidas = 3;

let numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'));

while (numeroMaquina !== numeroUsuario && vidas > 1) {
    
    let mensaje = (numeroMaquina < numeroUsuario) ? 'Pista 😨 el numeroMaquina es mayor': 'Pista 😨 el numeroMaquina es menor'
    
    console.log('Te equivocaste! 😞' + " te quedan " + vidas + " vidas");
    console.log(mensaje);   
    numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'));
    vidas--;
}

if (numeroMaquina === numeroUsuario) {
    console.log('Ganaste 😍');
} else {
    console.log('Perdiste 😢');
}