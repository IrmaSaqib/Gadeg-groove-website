   // .............sticky header work start

const header = document.querySelector("header");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
})

// ..............counter work start

var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc(){
    for(let i=0; i<count.length; i++){
        inc.push(1);
        if(inc[i] != count[i].getAttribute("max-data")){
            inc[i]++;
        }
        count[i].innerHTML = inc[i];
    }
}
 setInterval(intervalFunc, 100);  
//    var main = document.getElementsByClassName("counting-sec");
//    window.onscroll = function(){
//     setInterval(()=>{
//     var topElem = main.offsetTop;
//     var btmElem = main.offsetTop + main.clientHeight;
//     var topScreen =window.pageYOffset;
//     var btmScreen = window.pageYOffset + window.innerHeight;
//     if(btmScreen > topElem && topScreen < btmElem){
//         intervalFunc();
//     }else{
        
//     }

//     }, 1000)
//    }