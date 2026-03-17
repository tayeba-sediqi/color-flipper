let colors = ["red","blue","green","pink","black"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomnumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
    
};