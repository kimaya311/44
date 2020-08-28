class Form{
    constructor(){
this.input = createInput("Name");
this.button = createButton("PLAY");
this.title = createElement('h1');
this.statement = createElement("h2");

//boyimage
Boy = createSprite(displayWidth/2+120,displayHeight/2+140,20,40);
Boy.addImage("farmboy",farmboy);
Boy.scale = 0.18;
//girlimage
Girl = createSprite(displayWidth/2-80,displayHeight/2+130,40,40);
Girl.addImage("farmgirl",farmgirl);
Girl.scale = 0.28; 
 }
 hide(){
  this.input.hide();
  this.button.hide();
  this.title.hide();
  this.statement.hide();

} 
display(){
    this.input.position(displayWidth/2,displayHeight/2-200);
    this.button.position(displayWidth/2+200,displayHeight);
    this.title.html("EduFarm");
    this.title.position(displayWidth/2,displayHeight-displayHeight);
    this.statement.html("Choose your character");
    this.statement.position(displayWidth/2-100,displayHeight/2-100);

   this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.statement.hide();
        name = this.input.value();
        this.greeting=createElement('h2');
        this.greeting.html("Hello " +name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
         this.kharif=createButton("KHARIF SEASON");
         this.kharif.position(displayWidth/2,displayHeight/2);
         this.rabi=createButton("RABI SEASON");
         this.rabi.position(displayWidth/2,displayHeight/2+300);
      })
    drawSprites();
}
};