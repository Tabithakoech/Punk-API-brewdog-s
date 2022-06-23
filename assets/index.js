// const fetchCocktails= async()=>{
//     const response = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=')
//     const data = await response.json()
//     console.log (data);
//     const results= data.results
//     // return data
// }
// fetchCocktails()

// console.log ('hello')

// const fetchPeople = async () => {
//     const response = await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=");
//     const data = await response.json();
//     console.log(data);
//     const results = data.results;
  
//     results.map((person) => renderPerson(person));
//     console.log(results);
//   };
  
//   fetchPeople();

let url = "https://api.punkapi.com/v2/beers";
fetch(url)
    .then((response) =>(response.json()))
    .then((data) => {
        console.log(data);
        let html = "";
        data.map((value) => {
            html +=`
            <div class="col-md-4">
                <div class="card" style="width:350px">
                    <img class="card-img-top" src="${value.image_url}" alt="Card image" style="width:100%">
                    <div class="card-body">
                      <h4 class="card-title">${value.name}</h4>
                      <p class="card-text">${value.tagline}</p>
                      <p class="card-text">${value.description}</p>
                      <p class="card-text">${value.food_pairing}</p>
                      <a href="#" class="btn btn-primary">${value.abv}abv</a>
                    </div>
                </div>

            </div>
            `
        document.getElementById("content").innerHTML = html;
        });
    })
    .catch((error) => {
        console.log(error);
    } )