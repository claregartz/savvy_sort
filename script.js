/*PROBLEM: IF THE ANSWER IS WRONG SCORE STILL COUNTS IT AS CORRECT and the score resets when it loops*/
/* VARIABLES */
let beginB1;
let nextB1;
let nextB2;
let startB1;
let screen = 0;
let amount = 0;
let timer;
let testtt;
let trashCan;
let recycleCan;
let compostCan;
let scCan;
let listOfItems = ["chip bag","can","e-waste", "banana peel", "bubble wrap", "candy wrapper", "cardboard box", "apple core","paper towel"];
let item;
let index = 0;
let myFont;
let tPic;
let rPic;
let cPic;
let sPic;
let fPic;
let flower;
let border;
let bPic;
let border2;
let dPic1;
let dPic2;
let dPic3;
let dPic4;
let dec1;
let dec2;
let dec3;
let dec4;

/* PRELOAD LOADS FILES */
function preload(){
  myFont = loadFont('assets/PatuaOne-Regular.ttf');
  tPic = loadImage('assets/IMG_0780-removebg-preview.png');
  rPic = loadImage('assets/IMG_0781-removebg-preview.png');
  cPic = loadImage('assets/IMG_0782-removebg-preview.png');
  sPic = loadImage('assets/IMG_0783-removebg-preview.png');
  fPic = loadImage('assets/IMG_0784-removebg-preview.png');
  bPic = loadImage('assets/BOARDER-removebg-preview.png');
  dPic1 = loadImage('assets/IMG_0786-removebg-preview.png');
  dPic2 = loadImage('assets/IMG_0787-removebg-preview.png');
  dPic3 = loadImage('assets/IMG_0788-removebg-preview.png');
 


  
};
/* SETUP RUNS ONCE */
function setup() {
  //Setup
  createCanvas(400,400);
  textAlign(CENTER);
  noStroke();
  textFont(myFont);
  angleMode(DEGREES);
  // Home Screen
  background("lightblue");
  fill("black");
  textSize(30);
  text("Welcome to Savvy Sort!", 200, 150);
   //Creation of all sprites
  beginB1 = new Sprite(200,250);
  nextB1 = new Sprite(-400,-400);
  nextB2 =  new Sprite(-450,-450);
  startB1 = new Sprite(-500,-500);
  testtt = new Sprite(-600,-600);
  trashCan = new Sprite(-650,-650);
  recycleCan = new Sprite(-700,-700);
  compostCan = new Sprite(-750,-750);
  scCan = new Sprite(-800,-800);
  item = new Sprite(-1000,-100);
  flower = new Sprite(-1050,-1050);
  border = new Sprite(-1100,-1100);
  border2 = new Sprite(-1150,-1150);
  dec1 = new Sprite(-1200,-1200);
  dec2 = new Sprite(-1250,-1250);
  dec3 = new Sprite(-1300,-1300);
  
  
};
/* DRAW LOOP REPEATS*/
function draw() {
  //Style
  rectMode(CENTER); 
  angleMode(DEGREES);
  startB1.w = 200;
  startB1.h = 50;
  startB1.collider = "k";
  startB1.text = "Play the game";
  startB1.color = "white";
  nextB1.w = 100;
  nextB1.h = 50;
  nextB1.collider = "k";
  nextB1.color = "white";
  nextB1.text = "Next";
  nextB2.w = 100;
  nextB2.h = 50;
  nextB2.collider = "k";
  nextB2.text = "Next";
  nextB2.color = "white";
  
  //sprite for the timer
   testtt.w = 100;
   testtt.h = 60;
   testtt.collider = "k";
   testtt.color = "white";
   testtt.textSize = 15;
   testtt.text = "time left:  " + timer;

  //Display of beginB1 
  textSize(20);
  beginB1.w = 100;
  beginB1.h = 50;
  beginB1.collider = "k";
  beginB1.color = "white";
  beginB1.text = "Begin"; 
  
  
   //slide progression 
  if(screen == 0){
    borderImagesCode();
  };
  if (beginB1.mouse.presses()){
  showScreen1();
  screen = 1;};
  if (screen == 1) { 
     if (nextB1.mouse.presses()){
      showScreen2()
      screen = 2;
  }
  };
  if (screen == 2){
    if(nextB2.mouse.presses()){
     showScreen3()
     screen = 3;}
   };
  if (screen == 3){
  if (startB1.mouse.presses()){ 
    showScreen4();
    
    screen = 4;}
  };
  if (screen == 4){ 
      textSize(7);
      testtt.pos = {x: 300, y: 
       50};
      textSize(40);
      showItems();
      advanceIndex();

     };
   //Timer code
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
    
  
  };
  if (timer == 0) {
    showScreen5();
    screen = 5; };
    
}; //end of draw()
/* FUNCTIONS */ 
function showScreen1(){
  background("#B0F2B4");
  text("So What?", 200,50);
  textSize(14);
  textAlign(LEFT);
  text("Protecting our planet is important because it is home\nto 8.7 million species of plants and animals. Right now,\nour actions have hurt the planet, so we need to do the\n best we can to heal it. Education and collaboration are\n key parts to combatting the climate crises. The first step\n is having the willingness to learn, adapt, and advocate.\n  Every person and every action counts!", 25, 100);
  textAlign(CENTER);
  border.pos = {x:-1100,y:-1100};
  border2.pos = {x:-1150,y:-1150};
  beginB1.pos = {x: -550, y: -550};
  nextB1.pos = {x: 200, y: 350};
  
  dec1.pos = {x:64,y:275};
  dec1.img = dPic1;
  dec1.scale = .2;
  dec2.pos = {x:330,y:275};
  dec2.img = dPic2;
  dec2.scale = .2;
  dec3.pos = {x:200,y:275};
  dec3.img = dPic3;
  dec3.scale = .2;
  
  
};
function showScreen2(){
  background("#F2BAC9");
  textSize(20);
  text("Sorting", 200,50);
  textSize(14);
  textAlign(LEFT);
  text("An action that you can take is to sort your garbage, but\nit is even better to just limit your consumption in the first\nplace. There are generally four ways to sort: trash, recycling,\ncompost, and special collection. Some rules are specific\nto your collection service, but these are the main rules:\n\nTrash - wrappers, foam containers, and plastic utensils\nRecycling - glass, plastic bottles, metal cans, cardboard,\nand foil\nCompost - food scraps, napkins, paper towels, tea bags,\nand yard trimmings\nSpecial Collection- e-waste, plastic bags, styrofoam, bubble\n wrap, and plastic mailers.", 25, 100);
  textAlign(CENTER);
  nextB1.pos = {x: -400, y: -400};
  nextB2.pos = {x: 200, y: 350};
  
  
  dec1.pos = {x:-1200,y:-1200};
  dec2.pos = {x:-1250,y:-1250};
  dec3.pos = {x:-1300,y:-1300};
};
function showScreen3(){
  background("#F2E2BA");
  textSize(20);
  text("The Game", 200,50);
  textSize(14);
  textAlign(LEFT);
  text("Want to test your knowledge? The rules of the game \nare simple: when an item appears on the screen, \nclick the letter that corresponds to the bin \nthat you think it should be sorted in. When the time is \nup, your results will be displayed on the screen. It\n is okay to make mistakes, because you are just learning.\n This is applicable to your real life, so if you are\n interested in learning more, there will be links\n to resources at the end of the game.", 25, 100);
  textAlign(CENTER);
  nextB2.pos = {x: -450, y: -450};
  startB1.pos = {x: 200, y: 350};
  
  
  
  

};
function showScreen4(){ 
  background("#BAD7F2");

  timer = 10;
  startB1.pos = {x: -500 , y: -500 };
  
  testtt.pos = {x: 350, y: 50};
  testtt.w = 100;
  testtt.h = 60;
  testtt.collider = "k";
  testtt.color = "white";
  testtt.text = "time left:  " + timer;
  textSize(13);
  textAlign(LEFT);
  text("Click the letter that corresponds\n to the bin that you think the item\nbelongs in. When the time is up, your\nresults will be displayed on the screen.", 22, 35);
  textAlign(CENTER);
  trashCan.pos = {x: 50, y: 200};
  trashCan.collider = "k";
  trashCan.img = tPic;
  trashCan.scale = .2;
  
  recycleCan.pos = {x: 150, y: 200};
  recycleCan.collider = "k";
  recycleCan.img = rPic;
  recycleCan.scale = .2;

  compostCan.pos = {x: 250, y: 200};
  compostCan.collider = "k";
  compostCan.img = cPic;
  compostCan.scale = .2;

  scCan.pos = {x: 350, y: 200};
  scCan.collider = "k";
  scCan.img = sPic;
  scCan.scale = .2;

  item.text = (listOfItems[index]);

  


};
function showScreen5(){
  amount = index
  background("#BAF2E9");
  textSize(27);
  text("You did it! \nYou sorted " + amount + " items,\n  Look how your compost\n helped your garden!",200,90);
  testtt.pos = {x:-600, y:-600};
  trashCan.pos = {x: -650,y: -650};
  recycleCan.pos = {x: -700,y: -700};
  compostCan.pos = {x: -750,y: -750};
  scCan.pos = {x: -800,y: -800};
  flower.pos = {x:200,y:300};
  flower.img = fPic;
  flower.scale = .3;
 
  
};
function showItems(){ 
     item.pos = {x:200,y: 350};
     item.w = 500
     item.h = 50
     item.color = "White";
  
    if(kb.presses("t") && (item.text == "chip bag" || item.text== "candy wrapper")){
    amount++;
   
    } else if(kb.presses("r") && (item.text == "can"|| item.text=="cardboard box")){
    amount++;
     
    }else if(kb.presses("c") && (item.text == "banana peel"||item.text == "paper towel"||item.text == "apple core")){
    amount++;
     
    }else if(kb.presses("s") && item.text == "bubble wrap"||item.text == "e-waste"){
    amount++;
    }
    else {};  
    
   };
function advanceIndex(){if(kb.presses("s")||kb.presses("t")||kb.presses("c")||kb.presses("r")){
   item.text = (listOfItems[index+1]);
    index = index+1;
    
  if(index==listOfItems.length-1){
    index=0;
    
  }
  

};}; 
function borderImagesCode(){
  border.pos = {x: 200,y: 50};
  border.img = bPic;
  border.scale = .3;
  border2.pos = {x: 200,y: 350};
  border2.img = bPic;
  border2.scale = .3;
};

   


 
  
  


