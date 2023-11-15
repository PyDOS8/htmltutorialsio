var randNum = Math.floor(Math.random() * 2);
if(randNum == 0){
  document.getElementById("examples").innerHTML = "<div id='examples'><iframe src='example1.html'></iframe></div>";
}else{
  document.getElementById("examples").innerHTML = "<div id='examples'><iframe src='example2.html'></iframe></div>";
}
