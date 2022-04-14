fetch("https://api.nasa.gov/planetary/apod?api_key=HaVL5I2ySJBghEdmSGMPvctALjBoMseNJ1phqRkD")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log(data.media_type)

      if(data.media_type === 'image'){
        document.querySelector('img').src = data.url
        
      }else{
        document.querySelector('iframe').src = data.url
      }

      document.querySelector('h2').innerText = data.title
      document.querySelector('.date').innerText = data.date
      document.querySelector('.about').innerText = data.explanation
      document.querySelector('.copyright').innerText = data.copyright
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
