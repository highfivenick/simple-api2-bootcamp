    fetch('https://randomfox.ca/floof')
    .then (res => res.json())
    .then (data => {
        console.log(data.image)
        
        document.querySelector('img').src = data.image
        
        
        
    })
    .catch(err => {
        alert(`error ${err}`)
    })


