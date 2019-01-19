const MAX_IMAGES = 9+1;
const IMAGE_INFO = [
  "Eres<br>Acrylic on canvas 5x5 ft",
  "Euphoria<br>Serigraph on paper, 16 panels, each panel 18x18 in.",
  "Etéreo<br>Oil on board, 16x16 in.",
  "Elation<br>6 block, 3 color woodblock print on cotton wove paper, 50x46 in. Limited edition of 8, numbered and signed by the artist.",
  "Disquiet<br>Serigraph on paper, 14 panels, each panel 18x18 in.",
  "Window<br>Acrylic, epoxy resins, stainless steel, 24x18x2 in.",
  "The Artificialist Manifesto<br>Inkjet prints on biaxially-oriented polyethylene terephthalate, stainless steel, steel fixtures, 11x8x0.5 in.",
  "CMY book<br>Inkjet prints on biaxially-oriented polyethylene terephthalate, steel fixtures, 11x8x0.25 in.",
  "One<br>Relief monotype print on cotton wove paper, 40x40 in.",
  "Two<br>Relief monotype print on cotton wove paper, 40x40 in."
];
var current_IMAGE = -1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function prefetch(){
  // pre load all the images
  document.onclick = function(e) {whitespaceClick(e)};
  for(var i = current_IMAGE + 1; i < MAX_IMAGES; i+=1){
    var Image = document.createElement("img")
    Image.src = "../assets/images/" + String(i) + ".jpg";
    // Image.className = "d-none"
    Image.width = 0;
    Image.height = 0;
    document.body.appendChild(Image);
  }
}

function changeImage(){
  current_IMAGE = (current_IMAGE+1)%MAX_IMAGES;
  document.getElementById("changing").src="../assets/images/" + String(current_IMAGE) + ".jpg";
  document.getElementById("caption").innerHTML = IMAGE_INFO[current_IMAGE];
}

function whitespaceClick(e){
    if (e.target.tagName !== "P" && e.target.id !== "name" ) {
        changeImage();
    }
}
