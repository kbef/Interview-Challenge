function SearchImages(){
    let accessKey = "k1sdfis1JxoP_jg1wr2zEhJs-aN6JqUzcecLoMAyTwI";
    let query = document.getElementById("search").value;
    let url = "https://api.unsplash.com/search/photos?client_id="+accessKey+"&query="+query;
    //let url = "https://api.unsplash.com/search/photos?page=1&query=office";

    //API request

    /*loadJSON(url, dataRecieve, jsonp);
    console.log(data);

    data.results.forEach(photo => {
        let res = `
               <img src="${photo.urls.regular}">
               <a href="${photo.links.download}">
        `;
        document.getElementById("result"). append(res);
    });*/


    fetch(url)
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            console.log(data); // Log to see 
            data.results.forEach(photo => {
                let res = `
                       <img src="${photo.urls.regular}"></img>
                       <a href="${photo.links.download}">
                `;
                document.getElementById("result").append(res);
            });
        });
        
}

function dataRecieve(data){



}