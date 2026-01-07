const btn = document.getElementById("changePhotoBtn");
const photo = document.getElementById("photo");

btn.addEventListener("click", () => {
  photo.src = "image2.jpg";
});
