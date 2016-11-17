var pictureNumber = 25;

$(document).ready(function() {
  console.log(1);
  $("button#flip").click(function() {
    console.log(2);
    var date = new Date();
    var selectedImage = (Math.floor((Math.random() * pictureNumber) + 1)) + ".png?reload=" + date.getTime();
    console.log(3);
    $("img#birthdayImage").attr("src", selectedImage);
    console.log(4);
  })
});
