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

// --- API Fetching ---
// What is API?
// Application Programming Interface.
// There are two methods to Fetch API

// 1. fetch()
// 2. axios()

// let url="https://jsonplaceholder.typicode.com/posts"

// fetch (url)

// .then((res)=>{
// console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
//     for(let i=0;i<data.length;i++){
//         console.log(data[i].title)
//         let h1=document.createElement("h1")
//         h1.innerText=data[i].title

//      document.querySelector("body").append(h1)
//     }
// })

// .catch((err)=>{
//     console.log(err)
// })


// let url = "https://catfact.ninja/fact"

// let ul=document.createElement("ul")

// function getFact(){
// fetch(url)

// .then((res)=>{
//     // console.log(res)
//     return res.json()
// })
// .then((data)=>{
//         console.log(data)
//         let li=document.createElement("li")
//         li.innerText=(data.fact)
//         ul.append(li)
//         document.querySelector("body").append(ul)
// })

// .catch((err)=>{
//     console.log(err)
// })

// }

// let url="https://dog.ceo/api/breeds/image/random"

// function getNewDog(){

// fetch(url)
// .then((res)=>{
//     // console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     // console.log(data)
//     let img=document.createElement("img")
//     img.src=data.message
//     img.style.height="100px"

//     let div=document.querySelector(".dogs-img").append(img)
// })
// fetch(url0)

// .then((res)=>{
//     // console.log(res)
//     return res.json()
// })
// .then((data)=>{
//         console.log(data)
//         let li=document.createElement("li")
//         li.innerText=(data.fact)
//         ul.append(li)
//         document.querySelector("body").append(ul)
// })

// }