const jogadores = [
  
  {
    id: 0,
    number: 10,
    nome: "Neymar Jr",
    pais: "Brazil",
    imagem: "./playerimages/neymar.jpg",
  },

  {
    id: 1,
    number: "21",
    nome: "Alguém 1",
    pais: "Algum lugar",
    imagem: "./playerimages/default.jpg",
  },

  {
    id: 2,
    number: "34",
    nome: "Alguém 2",
    pais: "Algum lugar",
    imagem: "./playerimages/default.jpg",
  },

  {
    id: 3,
    number: "57",
    nome: "Alguém 3",
    pais: "Algum lugar",
    imagem: "./playerimages/default.jpg",
  },

  {
    id: 4,
    number: "89",
    nome: "Alguém 4",
    pais: "Algum lugar",
    imagem: "./playerimages/default.jpg",
  },

]


const nomeJogador = document.getElementById("nomeJogador");

const paisJogador = document.getElementById("nomePais");

const imagemJogador = document.getElementById("imagemJogador");

const primeiroDigito = document.getElementById("primeiroDigito");

const segundoDigito = document.getElementById("segundoDigito");

const feedback = document.getElementById("feedback");


let confirmAllow = 0;

let numberChange = 0;


function changeNumber(x) {
  if (numberChange==0) {
    primeiroDigito.innerHTML = x;
    numberChange++;
    return;
  }
  if (numberChange==1) {
    segundoDigito.innerHTML = x;
    numberChange++;
    procurarJogador(primeiroDigito.innerHTML, segundoDigito.innerHTML);
    return;
  }
}

function softreset() {
  primeiroDigito.innerHTML = 0;
  segundoDigito.innerHTML = 0;
  nomeJogador.innerHTML = "";
  paisJogador.innerHTML = "";
  imagemJogador.src = "./playerimages/default.jpg"
  numberChange=0;
  confirmAllow=0;
}

function branco() {
  softreset();
  feedback.innerHTML = "Parabéns, você votou em branco com sucesso!";
}

function reset() {
  softreset();
  feedback.innerHTML = "";
}

function confirm() {
  if(confirmAllow==1) feedback.innerHTML = "Parabéns, você votou com sucesso!";
  else feedback.innerHTML = "Por favor, termine de inserir os digitos do seu jogador";
}


function procurarJogador(x , y) {

  let wantedNumber = x.concat(y);

  for (i=0 ; i < jogadores.length ; i++) {

    if (wantedNumber == jogadores[i].number) {
      nomeJogador.innerHTML = jogadores[i].nome;
      paisJogador.innerHTML = jogadores[i].pais;
      imagemJogador.src = jogadores[i].imagem;
      confirmAllow = 1;
      return;
    }
    
    reset();
    feedback.innerHTML = "Jogador não encontrado, por favor tente novamente";

  }

}