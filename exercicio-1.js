const botao1 = document.getElementById('botaoImagem');
const img = document.getElementById('img');
const botao2 = document.getElementById('botaoTexto');
const msg = document.getElementById('msg');
const botao3 = document.getElementById('botaoOculta');
const elemento = document.getElementById('oculto');

    /*------------> Altera a cor <------------*/

    /*------------> Altera a cor <------------*/

function altCor() {
    let r=0,g=0,b=0;
    r= Math.round(Math.random()*255);
    g= Math.round(Math.random()*255);
    b= Math.round(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
};
    /*------------> Fim cor <------------*/

    /*------------> Adiciona o nome <------------*/

function addNome() {
    const texto = document.getElementById("texto").value;
    const lista = document.getElementById("lista");
    const nomeNovo = document.createElement("li");
    nomeNovo.innerText = texto;
    lista.appendChild(nomeNovo);
    document.getElementById("texto").value = "";
  };

    /*------------> Fim nome <------------*/

    /*------------> Imagem <------------*/

botaoImagem.addEventListener('click', function() {
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
    /*------------> Fim Imagem <------------*/

    /*------------> Texto <------------*/

botaoTexto.addEventListener('click', function() {
    if (msg.textContent === ' ') { 
      msg.textContent = 'Deus é bom';
    } else {
        msg.textContent = ' ';
    }
});
    /*------------> Fim Texto <------------*/

    /*------------> Oculta <------------*/

botaoOculta.addEventListener('click', function() {
    oculto.style.display = 'none';
  });
    /*------------> Fim Oculta <------------*/