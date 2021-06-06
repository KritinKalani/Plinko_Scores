var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var turn = 0;
var gameState = "play";

var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  // mousePressed();

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(20)
  //text("Score : "+score,20,30);
  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  /* if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
    score++;
  } */

  /* for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  } */
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  if (particle != null) {l

    particle.display();
    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 250 && particle.body.position.x > 0) {
        score = score + 500;
        particle = null;
        turn++
      } else if (particle.body.position.x > 250 && particle.body.position.x < 490) {
        score = score + 300;
        particle = null;
        turn++
      } else if (particle.body.position.x > 500 && particle.body.position.x < 800) {

        score = score + 100;
        particle = null;
        turn++
      }
    }
  }

  if (turn === 5) {
    gameState = "end";
  }

  text("Score: " + score, 50, 50);
  if (gameState === "end") {
    textSize(20);
    text("Game Over", 400, 400);
    //text("500",)
  }
  text("500", 30, 520);
  text("500", 110, 520);
  text("500", 190, 520);
  text("300", 270, 520);
  text("300", 350, 520);
  text("300", 430, 520);
  text("100", 510, 520);
  text("100", 590, 520);
  text("100", 670, 520);
  text("100", 750, 520);
}

function mousePressed() {
  if (gameState !== "end") {
    //  score++
    particle = new Particle(mouseX, 10, 10);
  }
}