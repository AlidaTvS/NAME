
/*  **********************************************************
    **                BEGIN klasse Cirkel                   **
    ********************************************************** */


class Cirkel {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.snelheid = 3;
    this.diameter = this.x / 5;
    this.kleur = 'mediumaquamarine';
  }

  teken() {
      push();
      noStroke();
      fill(this.kleur);
      ellipse(this.x,this.y,this.diameter);
      pop();
  }

  beweeg() {
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.x > canvas.width) {
      this.x = 0;
    }
  }

  beweeg1() {
    this.kleur = 'mediumaquamarine';
    if (keyCode == LEFT_ARROW) {
      this.x -= this.snelheid;
      this.kleur = 'green';
    }
    if (keyCode == RIGHT_ARROW) {
      this.x += this.snelheid;
      this.kleur = 'olive';
    }
    this.beweeg();
  }

  beweeg2() {
    this.kleur = 'mediumaquamarine';
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.snelheid;
      this.kleur = 'green';
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.snelheid;
      this.kleur = 'olive';
    }
    this.beweeg();
  }
}

/*  **********************************************************
    **      EINDE klasse Cirkel   BEGIN hoofdprogramma      **
    ********************************************************** */


var kleurenSet = ['hotpink','deeppink','mediumvioletred','palevioletred','royalblue','cornflowerblue','skyblue','steelblue'];
var kleurNummer = 0;
var tekst = '';

function setup() {
  // initialisatie

  var myCanvas = createCanvas(700,400);
  canvas = myCanvas; // zoomfix
  myCanvas.parent('processing');
  c1 = new Cirkel(canvas.width / 2, canvas.height / 4);
  c2 = new Cirkel(canvas.width / 2, 3 * canvas.height / 4);
  textFont("Georgia");
  textSize(90);
  textAlign(CENTER,CENTER);
  fill('white');
}

function draw() {
  background(kleurenSet[kleurNummer]);
  c1.beweeg1();
  c1.teken();
  c2.beweeg2();
  c2.teken();
  text(tekst,0,0,canvas.width,canvas.height);
}

function keyTyped() {
  kleurNummer = floor(random(0,kleurenSet.length));
  if (c1.x == c2.x) {
    tekst='gelukt!';
  }
  else {
    tekst='c1: '+c1.x+ ' | c2: '+c2.x;
  }
}

/*  **********************************************************
    **               EINDE hoofdprogramma                   **
    ********************************************************** */