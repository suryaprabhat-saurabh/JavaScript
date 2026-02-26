// let box=document.querySelector(".box")

// function changeColor(color,delay,nextColor){
//     setTimeout(() => {
//         if(nextColor)nextColor()
//             box.style.backgroundColor=color
//     },delay);
// }

// changeColor("blue",2000, ()=>{
//     changeColor("red",2000, ()=>{
//         changeColor("green",2000,()=>{
//             changeColor("yellow",2000,()=>{
//                 changeColor("orange",2000)
//             })
//         })
//     })
// })

// function saveToDb (data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1

//     if(internetSpeed>4){
//         success(internetSpeed)
//     }
//         else{
//             failure(internetSpeed)
//     }
// }

// saveToDb("Vishnu",(internetSpeed)=>{
//     console.log("Data 1 Saved :" , internetSpeed)
// },(internetSpeed)=>{
//     console.log("Failed to Save Data 1 :" , internetSpeed)
// })