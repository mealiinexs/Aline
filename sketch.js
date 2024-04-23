function setup() {
    createCanvas(1280, 720);
    colorMode(HSB,360,100,100)
  }
  
  function draw() {
    background(220);
    
    
    
    
      fill(200,30,100)
    rect(width/2-width/6,
         height/2-height/6,
         width/3,height/3)
    
    fill(0,0,100)
    rect(width/2-width/6+30,
         height/2-height/6+160,
         width/10,height/10)
    
    fill(0,0,100)
    rect(width/2-width/6+270,
         height/2-height/6+160,
         width/10,height/10)
    
    
            //選択肢 
    if(mouseX>
         width/2-width/6+30){
    if(mouseX<
         width/2-width/6+30+width/10){
    if(mouseY>
         height/2-height/6+160){
    if(mouseY<
         height/2-height/6+160+height/10){
            
            fill(200,50,100)
      rect(width/2-width/6+30,
         height/2-height/6+160,
         width/10,height/10)
      
        }}}}
    
      if(mouseX>
         width/2-width/6+270){
    if(mouseX<
         width/2-width/6+270+width/10){
    if(mouseY>
         height/2-height/6+160){
    if(mouseY<
         height/2-height/6+160+height/10){
            
            fill(200,50,100)
      rect(width/2-width/6+270,
         height/2-height/6+160,
         width/10,height/10)
      
        }}}}
    
    fill(0,0,0)
    textSize(50)
    text('YES',width/2-width/6+40,
         height/2-height/6+215)
    
    fill(0,0,0)
    textSize(50)
    text('NO',width/2-width/6+300,
         height/2-height/6+215)
    
    fill(0,0,0)
    textSize(80)
    text('Login',width/2-width/12,
         height/2-height/18)
  
    
    
    
    
    
    
    
    
    
    
    
  }