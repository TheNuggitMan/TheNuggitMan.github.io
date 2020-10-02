document.getElementById("onHover").addEventListener("mouseover", mouseOver);
document.getElementById("onHover").addEventListener("mouseout", mouseOut);

function mouseOver () {
  setTimeout(() => document.getElementById("name").style.color = "white", 200);
  console.log("check");
}

function mouseOut() {
  document.getElementById("name").style.color = "firebrick";
}


function softScroll(){
document.getElementById("about").scrollIntoView({behavior:'smooth'});
}
