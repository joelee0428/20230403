let points =  [[-2,9],[-4,7],[-8,-2],[-8,-8],[-6,-8],[-6,-2],[-3,-2],[-3,-4],[-3,-5],[-3,-11],[-4,-10],[-5,-10],[-6,-11],[-6,-12],
[-5,-13],[-4,-13],[-2,-12],[-2,-16],[0,-16],[0,-12],[2,-13],[3,-13],[4,-12],[4,-11],[3,-10],
[2,-10],[1,-11] ,[1,-4],[1,-2],[4,-2],[4,-8],[6,-8],[6,-2],[2,7],[0,9],[0,1],[-2,1]]; 


function setup() {   
  createCanvas(windowWidth, windowHeight); 
  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}


function draw() {
  background(255);
  stroke(0)
  strokeWeight(4)
  text("教科一A李紹宇",mouseX,mouseY)
  
  translate(mouseX, mouseY); 
  scale(1, -1); 

  for (let i = 0; i < points.length-1; i++) {
    let ratio1 = map(i, 0, points.length-1, 0, 1);
    let ratio2 = map(i+1, 0, points.length-1, 0, 1);
    let clr = lerpColor(color("#1D1075"), color("#feca1e"), ratio1);
    let middlecolor = lerpColor(color("#90e0ef"), color("#766153"), (ratio1+ratio2)/2)
    stroke(clr);
    strokeWeight(10);
    for(k=1;k<6;k++){
      textSize(25*(mouseX/1000)*k)
      line(points[i][0]*(mouseX/1000)*k, points[i][1]*(mouseX/1000)*k, points[i+1][0]*(mouseX/1000)*k, points[i+1][1]*(mouseX/1000)*k);
    }
  }
  let clr = lerpColor(color("#90e0ef"), color("#766153"), map(0, 0, points.length-1, 0, 1));
  stroke(clr);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); 
}