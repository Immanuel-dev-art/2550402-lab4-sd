function displayContents(){
    for(let i =0; i < countries.length; ++i){
        
    }
    
}





fetch('https://restcountries.com/')
    .then(response => {

        if(!response.ok){
            throw new Error('Network response was not okay');
        }

        return response.json();
    })

    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.error('There was a problem with the fetch operation', error)
    });




