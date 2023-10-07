
var typed = new Typed("#text",{
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});

let number = document.getElementById('number');
let counter = 0;

setInterval(() =>{
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + '%';
    }
    
},30)