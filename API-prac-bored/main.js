// const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"

// const select = document.querySelector('.breeds')

// fetch(BREEDS_URL)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         const breedsObject = data.message; //Turn message into an object
//         const breedsArray = Object.keys(breedsObject) //Turn the object into an array
//         for (let i = 0; i < breedsArray.length; i++){
//             const option = document.createElement('option')//only creates <option></option>
//             option.value = breedsArray[i] //<option value = breeds being iterated through>
//             option.innerText = breedsArray[i] // adds text to value = breeds
//             select.appendChild(option) //creating a list of options to be used in select tag
//         }
//     })


//     select.addEventListener('change', event => {
//         let url = `https://www.boredapi.com/api/activity?`
//         getDoggoImg(url)
//     })

//     const img = document.querySelector('.dog-img')

//     const getDoggoImg = url =>{
//         fetch(url) //going to the api url above
//             .then(res =>{
//                 return res.json(); //get json message back - can't see anything yet
//             })
//             .then(data => {
//                 img.src = data.message //extract message from JSON and attach to img tag as new source
//             })
//     }

// document.querySelector('button').addEventListener('click', getFetch)

fetch(`https://www.boredapi.com/api/activity?`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.activity)
      document.querySelector('h2').innerText = data.activity
    })
    .catch(err => {
        console.log(`error ${err}`)
    });