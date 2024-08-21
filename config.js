// numbers

let num = 0

function posi(){
    num++
    let i =document.getElementById("poga").innerHTML = num;
}
function nig(){
    if(num <= 0){
        num = 1
    }
    num--
    i = document.getElementById("poga").innerHTML = num;
}
//---------------------------------------------------------------------------------
//hover images

function image1(){
    document.getElementById("big_img").src = "images/image-product-1.jpg";
}
function image2(){
    document.getElementById("big_img").src = "images/image-product-2.jpg";
}
function image3(){
    document.getElementById("big_img").src = "images/image-product-3.jpg";
}
function image4(){
    document.getElementById("big_img").src = "images/image-product-4.jpg";
}

//----------------------------------------------------------------------------------------

// cart i dont know
let nam = "Fall Limited Edition Sneakers";
function cart(){
    document.getElementById("empty").innerHTML = "";
    document.getElementById("ppo").style.display = "flex";
    document.getElementById("pri").innerHTML = "$125.00 x "+num;
    document.getElementById("resl").innerHTML = "$"+125 * num;
    document.getElementById("omar").style.display = "flex";
    document.getElementById("info").innerHTML = num;
}

//------------------------------------------------------------------------------------
// screen
// function changeBackground(color) {
//     document.body.style.background = color;
//   }
// window.addEventListener("load", function() {
//   changeBackground('#00000060'); // Change to your desired color
// });
  

function ima(){
    document.getElementById("big_im").src = "images/image-product-1.jpg";
}
function image8(){
    document.getElementById("big_im").src = "images/image-product-2.jpg";
}
function image7(){
    document.getElementById("big_im").src = "images/image-product-3.jpg";
}
function image5(){
    document.getElementById("big_im").src = "images/image-product-4.jpg";
}
//-------------------------------------------------------------------------------------------------------
function toggleDisplay() {
    document.getElementById("d14").style.display = "flex";
}
function toggleDispla() {
    document.getElementById("d14").style.display = "none";
}
function myFunction() {
    document.getElementById("ppo").style.display = "none";
  }
function cartr(){
    document.getElementById("cartt").style.display = "block"
}
//--------------------------------------------------------------------------------------------------
