// Alericciardo
// Camminatore post it

var w, h;
var d = 50; // diametro quadrato
var quanti = 10 // numero pallini
var c = []; // array vuoto che contiene gli oggetti che sono i camminatori
var speedMax = 0.2; // velocità movimento

function setup() {
  createCanvas(w = windowWidth, h = windowHeight,);
  //noStroke(); // senza outline

  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i)); // pusho elementi "i" di classe Camminatore dentro l'array "c"
  }
}

function draw() {
  strokeWeight(0.5);
  //background(0,50); // nero con opacità 40
  //noStroke()
  //orbitControl()

  // per tutti i camminatori chiama i diversi metodi utili (metodo = funzione)
  for (var i = 0; i < quanti; i++) {
    c[i].move(); // esegue .move (= metodo) all'elemento "i" dell'array "c"
    c[i].display(); // esegue .display all'elemento "i" dell'array "c" 
  }
}

// Classe:
// La classe è un insieme di metodi (funzioni) e di variabili, 
// è un insieme di "caratteristiche" che si applicano all'oggetto
// CLASSE = camminatore 

// c = Array di oggetti di tipo camminatore

function Camminatore(_id) { // _id = variabile locale che definisce la singola particella
  background(255); // do sfondo nero altrimenti all'inizio vedi sfumatura dal bianco

  // costruttore = inizializza delle variabili, riferite all'elemento i che si trova in quel momento dentro camminatore
  this.id = _id; // con this mi riferisco solo a quella particella lì: ad esempio all'inizio sulla prima pallina

  this.x = random(w); // x inizio
  this.y = random(h); // y inizio

  this.speed = random(0, speedMax); // velocità = num casuale (da 0 a speedMax) 

  this.noiseX = random(200); // attribuisco un noise ad ogni pallina 
  //non mettere un valore troppo basso altrimenti troppo raggruppati
  this.noiseY = random(200); // valore diverso altrimenti vanno in diagonale

  // metodo move
  this.move = function() {
    this.x = w * noise(this.noiseX); // piu speed è alto piu la particella si muove per spazi piu ampi
    this.y = h * noise(this.noiseY);

    this.noiseX += 0.05 * this.speed;
    this.noiseY += 0.05 * this.speed;
  }

  // metodo display
  this.display = function() {
  rect(this.x,this.y, d);
  
    
//rect(this.x, this.y, d);
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}