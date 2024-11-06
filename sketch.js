//Posição e tamanho da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 100;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//Pontuação
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBolinha();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  //colisaoMinhaRaqueteBiblioteca();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos;
}
  
  function mostraBolinha(){
    fill("red");
  circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }
  
  function verificaBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  }
  
  function mostraRaquete(){
    fill("blue");
    rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura, 20);
  }

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteLargura && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca(){
  collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
}

//desenha a raquete do  oponente
function mostraRaqueteOponente (){
  fill("green");
  rect(xRaqueteOponente, yRaqueteOponente, raqueteLargura, raqueteAltura, 20);
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaqueteOponente() {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu ==true){
        velocidadeXBolinha *= -1;
    }
}

function incluirPlacar(){
  fill("rgb(205, 200, 201)");
  textSize(32);
  text("Eu "+meusPontos, 230, 26);
  text("Ele " + pontosOponente, 330, 26);
}

function marcaPontos(){
  if(xBolinha > 595){
    meusPontos += 1;
  }
  if(xBolinha < 5){
    pontosOponente += 1;
  }
}

function movimentaraqueteoponente(){
  let chance = random(1); // Gera um número aleatório entre 0 e 1
  
  if (chance < 0.3) { // 30% de chance do oponente seguir a bolinha
    velocidadeyoponente = ybolinha - yraqueteoponente - alturaraqueteoponente / 2;
    yraqueteoponente += velocidadeyoponente * 0.1; // Ajusta a velocidade para que a raquete siga a bolinha suavemente
  }
  // Caso contrário (70% de chance), a raquete não se move
}