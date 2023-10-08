
// type js function
var typed = new Typed("#text",{
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});


// radial animate function
let number = document.getElementById('number');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');

let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(() =>{
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + '%';
    }
    
},25)

// problem solving
setInterval(() =>{
    if(counter2 == 87){
        clearInterval();
    }else{
        counter2 += 1;
        number2.innerHTML = counter2 + '%';
    }
    
},23)

//communication
setInterval(() =>{
    if(counter3 == 71){
        clearInterval();
    }else{
        counter3 += 1;
        number3.innerHTML = counter3 + '%';
    }
    
},25)

//creativity
setInterval(() =>{
    if(counter4 == 63){
        clearInterval();
    }else{
        counter4 += 1;
        number4.innerHTML = counter4 + '%';
    }
    
},25)


// dynamically update year
const updateYear = new Date().getFullYear();
document.getElementById("year").innerHTML=updateYear;