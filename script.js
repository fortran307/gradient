function randomHEX(){
    let letters = "0123456789ABCDEF",
    firstColor = '#',
    lastColor = '#'
 
   //Добавляем по одному случайному символу из строки-массива letters
   for (let i = 0; i < 6; i++) {
      firstColor += letters[(Math.floor(Math.random() * 16))]
      lastColor += letters[(Math.floor(Math.random() * 16))]
    }  
 
    document.body.style.background = 'linear-gradient(to right, ' + firstColor + ', ' + lastColor + ')'
}

document.addEventListener('click', randomHEX)