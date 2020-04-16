function SearchImages(){
    let accessKey = "k1sdfis1JxoP_jg1wr2zEhJs-aN6JqUzcecLoMAyTwI";
    let query = document.getElementById("search").value;
    let url = "https://api.unsplash.com/search/photos?client_id="+accessKey+"&query="+query;
    //let url = "https://api.unsplash.com/search/photos?page=1&query=office";

    //API request
    fetch(url)
        .then(function(data){
            return data.json();
        })
        // appending pictures recieved to the HTML file
        
        .then(function(data){ 
            console.log(data); 
            const myDiv = document.getElementById("imagelist");

            data.results.forEach(photo => {
                let listItem = document.createElement('img');
                let source = photo.urls.regular;
                console.log(source);
                listItem.src = source;
                listItem.height = '300';
                listItem.width = '300';
                listItem.onclick = (function() {SetBackground(this)});
                myDiv.append(listItem);
            });

        });
        
}

//function setting background
function SetBackground(img){

    var check;

    check = confirm("Do you want to set this image as background?");

    if(check == true){
        var urlString = 'url(' + img.src + ')';
        document.getElementById("mainBd").style.backgroundImage = urlString;
    }
    

}
