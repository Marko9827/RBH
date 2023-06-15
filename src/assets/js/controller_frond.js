 
var card = [],
API_URL = "https://test.localhost/APP32424259353/";
products = [
    {
      "id": "234234",
      "title": "Hanburger",
      "price": "80 - 50",
      "img": "upload/234234/3243243.png"
    },
    {
      "id": "234235",
      "title": "Hanburger",
      "price": "80 - 50",
      "img": "upload/234234/3243243.png"
    }
  ];  
  function addTcard(idf){
    var id = idf.getAttribute("data-id");
    card.push({
        "id":id,
        "title":document.querySelector(`.card-f[data-id="${id}"] h5`).innerHTML,
        "price": document.querySelector(`.card-f[data-id="${id}"] span`).innerHTML,
        "img":document.querySelector(`.card-f[data-id="${id}"] img`).getAttribute("src"),
    });
    document.querySelector(`.card-f[data-id="${id}"]`).classList.add("added");
     console.log(card);
    generate_card_js(card);    
    document.querySelector(`.rounded-pill`).innerHTML = card.length;

  }
  function cardcardsdjenerator(j = []){

  }
function emptycard(){
    card = [];
    document.querySelectorAll(`.card-f`).forEach(function(f){
        if(f.classList.contains("added")){
             f.classList.remove("added");
        }
    });
    document.querySelector(`.rounded-pill`).innerHTML = card.length;
    generate_card_js();
} 
function generate_card_js(){
  var djenerated = "",
  card_generatorFront = document.querySelector("app-cards-modal");
  

    var data = card;
    
    for (const rijesponse of data) {
       
      djenerated += ` 
      <div class="card mb-3"  >
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${rijesponse.img}" class="card-img" alt="${rijesponse.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${rijesponse.title}</h5>
           <p class="card-text"><small class="text-muted">${rijesponse.price}</small></p>
        </div>
      </div>
    </div>
  </div>`;
    }
    card_generatorFront.innerHTML = djenerated;
  
}
function generateCards(){ 
  var djenerated = "",
  card_generatorFront = document.querySelector(".card-generatorFront");
  card_generatorFront.innerHTML = '';
  fetch(API_URL).then((response) => response.json())
  .then((data) => {
 
    
    for (const rijesponse of data) {
       
      djenerated += ` 
      <app-cart class="card h-100f card-f"   data-id="${rijesponse.id}"  >
 
          <img class="card-img-top" src="${API_URL}${rijesponse.img}"  alt="${rijesponse.title}" /> 
          <div class="card-body p-4">
              <div class="text-center"> 
                  <h5  class="fw-bolder">${rijesponse.title}</h5>  
                 <span>${rijesponse.price}</span>
              </div>
          </div>
        
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto"   href="#" onclick="addTcard(this)" data-id="${rijesponse.id}"     >Add to card</a></div>
              <div class="text-center btn-remove-card"><a class="  btn btn-outline-dark mt-auto"   href="#" onclick="emptycard()" data-id="${rijesponse.id}"     >Remove from card</a></div>
  
          </div>
      </app-cart>`;
    }
    card_generatorFront.innerHTML = djenerated;
  }); 
}
  
 document.body.onload = function(){
  
generateCards();
 }