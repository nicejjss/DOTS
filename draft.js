//JS from pause scene to run scene
let i = 0;
setInterval(() => {
    i++;
    console.log("Time: "+i);
}, 1000);
setTimeout(function(){
    console.log("Game Run!!");
},4000);