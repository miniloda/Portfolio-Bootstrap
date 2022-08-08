document.onscroll = function() {
    document.querySelector(".box").style.display = "none";
}

setInterval(()=>{
    if(window.scrollY === 0 ){
        document.querySelector(".box").style.display = "block";
    }
}, 1000);
setInterval(()=>{

}, 1000);