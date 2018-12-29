const MAX_IMAGES = 6;
var current_IMAGE = 1;

// pre load all the images
for(var i = 0; i < MAX_IMAGES; i+=1){
  var Image = document.createElement("img")
  Image.src = "../assets/images/" + String(i) + ".jpg";
  // Image.className = "d-none"
  Image.width = 0;
  Image.height = 0;
  document.body.appendChild(Image);
}

function changeImage(){
  document.getElementById("changing").src="../assets/images/" + String(current_IMAGE) + ".jpg";
  current_IMAGE = (current_IMAGE+1)%MAX_IMAGES;
}
