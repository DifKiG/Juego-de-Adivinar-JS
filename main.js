let randomNumber = Math.floor(Math.random() * 50) + 1;
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult')
    const lowOrHi = document.querySelector('.lowOrHi')

    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
    
    let guessCount = 1;
    let resetButton;
    guessField.focus(); // este metodo focus pone el cursor automaticamente en el campo para que el usuario tenga mejor experiencia  

    //userGuess establece su valor al valor actual que ingresa en el campo de texto
    //Se usa el constructor Number para asegurar que el valor ingresado solo sea número  
    function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1){
    guesses.textContent = 'Intentos anteriores: ';
    }
    guesses.textContent += userGuess + ' '; 

    // este condicional indica con un mensaje que el jugador ha ganado 
    //indica la cantidad de turnos que ha utilizado el jugador
    if(userGuess === randomNumber){
    lastResult.textContent = '¡Felicidades lo adivinaste!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();

    //indica si es el ultimo intento del jugador y tambien si no gano!
    }else{
    lastResult.textContent = '¡Incorrecto!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber){
        lowOrHi.textContent = 'El número es muy bajo!';
    }else if (userGuess > randomNumber){
        lowOrHi.textContent = 'El número es muy grande';
    }
    }

    // incrementa en 1, se vacia el campo de texto y enfoca para ingresar nuevo valor
    guessCount++;
    guessField.value = ' ';
    guessField.focus();

}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar Juego Nuevo';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ''; 
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 50) + 1;
}