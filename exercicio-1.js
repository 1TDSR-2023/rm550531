const botao1 = document.getElementById('botao1');
const img = document.getElementById('img');
const botao2 = document.getElementById('botao2');
const msg = document.getElementById('msg');
const botao3 = document.getElementById('botao3');
const elemento = document.getElementById('oculto');

function altCor() {
    let r=0,g=0,b=0;
    r= Math.round(Math.random()*255);
    g= Math.round(Math.random()*255);
    b= Math.round(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
};

function addNome() {
    const texto = document.getElementById("texto").value;
    const lista = document.getElementById("lista");
    const nomeNovo = document.createElement("li");
    nomeNovo.innerText = texto;
    lista.appendChild(nomeNovo);
    document.getElementById("texto").value = "";
  };

  
  botao1.addEventListener('click', function() {
    if (img.getAttribute('src') === 'tucano.jpg') {
      img.setAttribute('src', 'papagaio.jpg');
      img.setAttribute('alt', 'Imagem do papagaio');
      nome.textContent = 'Papagaio';
    } else if(img.getAttribute('src') === 'papagaio.jpg') {
      img.setAttribute('src', 'tucano.jpg');
      img.setAttribute('alt', 'Imagem do tucano');
      nome.textContent = 'Tucano';
    } 
  });

botao2.addEventListener('click', function() {
    if (msg.textContent === ' ') { 
      msg.textContent = 'Deus é bom';
    } else {
        msg.textContent = ' ';
    }
});

botao3.addEventListener('click', function() {
    oculto.style.display = 'none';
  });