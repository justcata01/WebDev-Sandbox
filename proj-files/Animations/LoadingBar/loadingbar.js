let progress = 0;

window.onload = function(){
    t=setInterval(animate,10);
}

function load(){  
    if(progress<=0)
    {
        t=setInterval(animate,10);
    }

}  

function animate(){
    if(progress <= 100)
    {
        let s = progress.toString();
        document.getElementById("bar").style.width = s+"%";
        document.getElementById("p1").textContent = s+"%";
        progress+=1;
    }
    else{
        clearInterval(t);
        progress = 0;
    }
    
}