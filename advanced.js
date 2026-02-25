let box=document.querySelector(".box")

function changeColor(color,delay,nextColor){
    setTimeout(() => {
        if(nextColor)nextColor()
            box.style.backgroundColor=color
    },delay);
}

changeColor("blue",2000, ()=>{
    changeColor("red",2000, ()=>{
        changeColor("green",2000,()=>{
            changeColor("yellow",2000,()=>{
                changeColor("orange",2000)
            })
        })
    })
})