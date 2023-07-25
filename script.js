
const plus = document.getElementById('plus')
const card = document.getElementById("card");
const cardfliped = document.getElementById("card-fliped");
   
function onChange() {
console.log("hello")
card.setAttribute("style","transform: rotateY(180deg);  transition: all 0.5s ease; opacity: 0; visibility: hidden;");
cardfliped.setAttribute("style","transform: rotateY(0deg);  transition: all 0.5s ease; opacity: 1;     visibility: visible; box-shadow: 2px 5px 10px 1px #d1d1d1c7; ");

}
function onChangeFliped() {
    console.log("hello")
    card.setAttribute("style","transform: rotateY(0deg);  transition: all 0.5s ease;  opacity: 1;     visibility: visible;");
    cardfliped.setAttribute("style","transform: rotateY(180deg);  transition: all 0.5s ease; opacity: 0;  visibility: hidden; ");
    
    }
