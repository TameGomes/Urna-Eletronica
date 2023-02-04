let branco = false;
let button = document.querySelector('button');
let number1 = document.querySelector('.number-1');
let number2 = document.querySelector('.number-2');
let img = document.querySelector('img');
let party = document.querySelector('.party');
let name = document.querySelector('.name');

function clicou(button) {
   if (number1.innerHTML == '') {
    number1.innerHTML = button;
   }
   else if (number2.innerHTML == '') {
    number2.innerHTML = button;
   }
   let number = number1.innerHTML + number2.innerHTML;
   console.log(number);
   if (number == '44') {
    name.innerHTML = 'NOME: JHIN';
    party.innerHTML = 'PARTIDO: PERFEIÇÃO';
    img.src = 'images/jhin.jfif';
    img.style.display = 'flex';
   }
   else if (number == '37') {
    name.innerHTML = 'NOME: CAMILLE';
    party.innerHTML = 'PARTIDO: ORDEM';
    img.src = 'images/camillee.jpg';
    img.style.display = 'flex';
   }
   else if (number == '54') {
    name.innerHTML = 'NOME: GANGPLANK';
    party.innerHTML = 'PARTIDO: PIRATARIA';
    img.src = 'images/gangplank.jpg';
    img.style.display = 'flex';
   }
}

function confirm() {
    let number = number1.innerHTML + number2.innerHTML;
    if (number == '44' || number == '37' || number == '54' || branco == true) {
       document.querySelector('.description-left').style.display = 'none';
       document.querySelector('.description-img').style.display = 'none';
       document.querySelector('.mensagem-tela').style.display = 'none';
       alert('SEU VOTO FOI FINALIZADO');
       document.querySelector('.fim').style.display = 'flex';
    }
    else {
        alert('OS CAMPOS PRECISAM ESTAR PREENCHIDOS CORRETAMENTE PARA QUE ESS AÇÃO SEJA REALIZADA.')
    }
}

function correct() {
    if (number1 !== null) {
    number2.innerHTML = '';
    number1.innerHTML = ''; 
    name.innerHTML = '';
    party.innerHTML = '';
    img.style.display = 'none'; 
}  
  else if (branco == true) {

  }
}

function white() {
    let number = number1.innerHTML + number2.innerHTML;
    if (number !== null || number == '') {
        branco = true;
        document.querySelector('.description-img').style.display = 'none';
        document.querySelector('.description-name').style.display = 'none';
        document.querySelector('.white-message').style.display = 'flex';
        document.querySelector('.mensagem-tela').style.marginTop = '50px';
        document.querySelector('.confirm').addEventListener('click', (e) => {
            document.querySelector('.white-message').style.display = 'none';
            confirm();
        })
}
}


