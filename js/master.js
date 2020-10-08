document.getElementById("onHover").addEventListener("mouseover", mouseOver);
document.getElementById("onHover").addEventListener("mouseout", mouseOut);

function mouseOver () {
  setTimeout(() => document.getElementById("name").style.color = "white", 200);
}

function mouseOut() {
  document.getElementById("name").style.color = "firebrick";
}

function softScroll2(pressed) {
switch (pressed) {
  case about:
    document.getElementById("about").scrollIntoView({behavior:'smooth'})
    console.log('success');
    break;
  case projects:
    document.getElementById("projects").scrollIntoView({behavior:'smooth'})
    console.log('success p');
    break;
  case contact:
    document.getElementById("contact").scrollIntoView({behavior:'smooth'})
    console.log('success c');
    break;
  default:
    console.log('none pressed');
}
};

function scrollUp() {
  console.log('tada?');
  document.querySelector("html").scrollIntoView({behavior:'smooth'});
};
