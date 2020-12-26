function apiCall(){
    
    var value = document.getElementById("searchBox").value;
   
    fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=${value}`)
    .then(response => response.json())
    .then(result => {

        let arrayLink = result[3];
        let arrayTitle = result[1];
        let count = 0; 
        let innerContent = "";
        arrayLink.forEach(element => {
            //<div class="card"><div class="container"><p>Surendra Singh</p></div></div>
            innerContent+=`<li><a href=${element} target="_blank">${arrayTitle[count++]}</a></li>`
        
        });

        document.getElementById("result").innerHTML = innerContent;
    })
}

// setInterval(apiCall, 500);


// document.getElementById("searchBox").oninput = ()=>{
//     apiCall();
// }