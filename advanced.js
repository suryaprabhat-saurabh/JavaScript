//  Callback Hell --


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

// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success(internetSpeed);
//   } else {
//     failure(internetSpeed);
//   }
// }

// saveToDb(
//   "Vishnu",
//   (internetSpeed) => {
//     console.log("Data 1 Saved :", internetSpeed);
//     saveToDb(
//       "Surya",
//       (internetSpeed) => {
//         console.log("Data 2 Saved :", internetSpeed);
//         saveToDb(
//           "Amaan",
//           (internetSpeed) => {
//             console.log("Data 3 Saved :", internetSpeed);
//           },
//           (internetSpeed) => {
//             console.log("Failed to Save Data 3 :", internetSpeed);
//           },
//         );
//       },
//       (internetSpeed) => {
//         console.log("Failed to Save Data 2 :", internetSpeed);
//       },
//     );
//   },
//   (internetSpeed) => {
//     console.log("Failed to Save Data 1 :", internetSpeed);
//   },
// );


// Promises -- 

// States of Promise 
// -- Fulfill -- Reject


// function saveToDb(data){

//     return new Promise((res,rej)=>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;

//     if(internetSpeed>4){
//         res(`Data 1 Saved : @ ${internetSpeed}`);
//     }
//     else{
//         rej(`Not Enough Speed : @ ${internetSpeed}`);
//     }
//     })
    
// }

//  To handle Promises : .then and catch methods are used

// saveToDb("Surya")

// Then is used for every Success

// .then(()=>{
//     console.log("Data 1 Saved")
//     return saveToDb("Aman")
// })
// .then(()=>{
//     console.log("Data 2 Saved")
//     return saveToDb("Sunil")
// })
// .then(()=>{
//     console.log("Data 3 Saved")
//     return saveToDb("Mohit")
// })
// .then(()=>{
//     console.log("Data 4 Saved")
//     return saveToDb("Lucky")
// })
// .then(()=>{
//     console.log("Data 5 Saved")
// })

// Catch can handle Multiple Errors

// .catch(()=>{
//     console.log("Not Enough Speed")
// })


// let box=document.querySelector(".box")

// function changeColor(color, delay){
//     return new Promise((res,rej)=>{
//     setTimeout(() => {
//             box.style.backgroundColor=color
//             res()
//     },delay);
//     })
    
// }

// changeColor("red",2000)
// .then(()=>{
//     return changeColor("blue",2000)
// })
// .then(()=>{
//     return changeColor("green",2000)
// })
