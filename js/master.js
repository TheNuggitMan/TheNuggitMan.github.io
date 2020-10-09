const hovering = document.getElementById("onHover").addEventListener("mouseover", mouseOver);
const hoverOut = document.getElementById("onHover").addEventListener("mouseout", mouseOut);



function mouseOver () {
  setTimeout(() => document.getElementById("name").style.color = "white", 200);
}

function mouseOut() {
  document.getElementById("name").style.color = "firebrick";
}

function softScroll(pressed) {
switch (pressed) {
  case about:
    document.getElementById("about").scrollIntoView({behavior:'smooth'})
    console.log('about');
    break;
  case projects:
    document.getElementById("projects").scrollIntoView({behavior:'smooth'})
    console.log('projects');
    break;
  case contact:
    document.getElementById("contact").scrollIntoView({behavior:'smooth'})
    console.log('contact');
    break;
  case top:
    document.querySelector("html").scrollIntoView({behavior:'smooth'});
    console.log('top');
    break;
  default:
    console.log('none pressed');
}
};
