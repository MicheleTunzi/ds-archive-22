// 🌚🌝🌚🌝🌚🌝🌚🌝🌚🌝🌚🌝🌚🌝
//      _          _      __  __
//     | |        | |    / _|/ _|
//  ___| |__  _ __| |__ | |_| |_
// / __| '_ \| '__| '_ \|  _|  _|
//| (__| | | | |  | |_) | | | |
// \___|_| |_|_|  |_.__/|_| |_|
//
// 🌚🌝🌚🌝🌚🌝🌚🌝🌚🌝🌚🌝🌚🌝

// self-avoiding random walkers 0.1 by chrbff [random walkers]
// 2022 © chrbff, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Help:
// [mouse click] to add a random walker
// [key press] to delete a random walker
//________________________________________

let Palline = []; // < array di linee
let n = 40; // < numero palline iniziali

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  background(0, 0, 0);
  colorMode(HSB);
 
  // gruppo iniziale di Linee
  for (let i=0; i<n; i++) {
    Palline.push(new Astronave(i));
  }
}

function draw() {
  background(0, 0, 0);
  
  push();
  translate(0,0);
  
  // mostra gruppo di Linee
  for (var i=0; i<Palline.length; i++) {

      Palline[i].mostrati();
      Palline[i].spostati();
    }
  pop();
}

// aggiungi camminatori se premi il mouse
function mousePressed() {
  Palline.push(new Astronave(Palline.length));
}

// togli ultimo camminatore se premi un tasto
function keyPressed() {
  Palline.pop();
}

// definizione della classe pallina
function Astronave(_id) {

  // dati e costruttore
  this.id = _id;
  this.x = width/2 + random (-width/5,width/5);
  this.y = height/2 + random (-height/5,height/5);

  this.colore = random(360);

  // funzionalità

  this.mostrati = function() {
    stroke(this.colore, 70, 50);
    fill(this.colore, 70, 50);
    rect(this.x,this.y,20+(sin(frameCount/10)*5),20);
  }

  /*this.spostati = function() {
    this.x += 10 * random(-1,1);
    this.y += 10 * random(-1,1);
  }*/
  let tx= 10 * random(-1,1);
  let ty= 10 * random(-1,1);
  
  let v = random(0.001, 0.005)
  
   this.spostati = function() {
     this.x = map(noise(tx), 0, 1, 0, width);
     this.y = map(noise(ty), 0, 1, 0, height);
     tx += v;
     ty += v;

};

//da inserire sempre utilizzando windowWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}