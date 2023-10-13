// const API_KEY = "XPjn427qQAldoIk6n3DxCaXXNh6defUR";


const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('dd1d9587-d92f-46ea-85f4-5803233b5c59');


 async function getImages () {
    alert("jump")
    const inputElement = document.querySelector("input")
    var resp = await deepai.callStandardApi("text2img", {
        text: inputElement,
});
console.log("image data = ",resp);
}

// const getImages = async () =>{
// const options = {
//  method: "POST" ,
//  headers :{
//     "Authorizations": `Bearer ${API_KEY}`,
//     'Content-Type': "application/json"
//  },
//  body : JSON.stringify({
//     "prompt": inputElement.value,
//     "n": 4,
//     "size":"1024x1024"
//  })
// }
//     try{
//       const response = await fetch('https://api.openai.com/v1/images/generations', options)
//         const data = await response.json()
//     } catch (error){
//         console.error(error)
//     }
// }




 