var hero, house, basic, basic2, basic3, heart1, heart2, heart3, heart4, heart5;
var button, lava, snake, trap;
var home, grass, stage1, stagehall, stageleft, stageright, stageboss, endscreen;
var bricks, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11,
wall12, wall13, wall14, wall15, wall16, wall17,
wall18, wall19, wall20, wall21, wall22, wall23, wall24,
wall25, wall26, wall27, wall28, wall29, wall30, wall31, 
wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40;
var shield, sword, chest1, chest2;
var boss, bossfire;

function preload() {
  houseImage = loadImage("image/house.png");
  stage1Image = loadImage("image/houseBG.png");
  herosteps = loadAnimation("image/leg1.png", "image/leg2.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stage1 = createSprite(width/2, height/2, 100, 100);
  stage1.addImage(stage1Image);
  stage1.scale = 3
  house = createSprite(width/2, height/2, 50, 50);
  house.addImage(houseImage);
  house.scale = 0.4
  hero = createSprite(displayWidth / 2, displayHeight / 2);
  hero.addAnimation("herosteps", herosteps);
  hero.scale = 2;
  house.setCollider("rectangle", 0, 0, 350, 350);
  
}


function draw() {
  background("black");  
  drawSprites();
  hero.collide(house)  
  heroMOVE()
}


function heroMOVE() {

  if (keyDown("up")){

    hero.y=hero.y-10
  }
  if (keyDown("down")){

    hero.y=hero.y+10
  }
  if (keyDown("right")){

    hero.x=hero.x+10
  }
  if (keyDown("left")){

    hero.x=hero.x-10
  }

}