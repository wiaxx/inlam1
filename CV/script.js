//import data from './data.js';

const data = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1470596914251-afb0b4510279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1497996541515-6549b145cd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1484766280341-87861644c80d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1464&q=80"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1515497957908-4d6377430754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    }
]

//console.log(data[2].url);

//document.querySelector(body).addEventListener()

let latestNumber = 0;


function randomImg () {
    let randomNumber = Math.floor(Math.random() * data.length)
    while(randomNumber === latestNumber) {
        randomNumber = Math.floor(Math.random() * data.length)
    }
    if(randomNumber !== latestNumber) {
        latestNumber = randomNumber
        console.log(data[randomNumber].url)
        return document.body.style.backgroundImage = `url('${data[randomNumber].url}')`;
   }
}
document.querySelector("#imgbutton").addEventListener('click',randomImg);



// function randomImg () {
//     let randomNumber = Math.floor(Math.random() * data.length)
//     while(randomNumber === latestNumber) {
//         randomNumber = Math.floor(Math.random() * data.length)
//     }
//     if(randomNumber !== latestNumber) {
//         latestNumber = randomNumber
//         console.log(randomNumber)
//    }
// }
// document.querySelector("#imgbutt").addEventListener('click',randomImg);

