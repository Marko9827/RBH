var card = [],
  API_URL = "https://test.localhost/APP32424259353/"; //"https://app32424259353demo.eronelit.com/api/";
products = [
  {
    id: "234234",
    title: "Hanburger",
    price: "80 - 50",
    img: "upload/234234/3243243.png",
  },
  {
    id: "234235",
    title: "Hanburger",
    price: "80 - 50",
    img: "upload/234234/3243243.png",
  },
];

function emptycard_id(idf, fori) {
  card.pop(fori);
  document.querySelector(`.card-f[data-id="${idf}"]`).classList.remove("added");

  generate_card_js(card);
  document.querySelectorAll(`.rounded-pill`).forEach(function (ca) {
    ca.innerHTML = card.length;
  });
}
function addTcard(idf) {
  var id = idf.getAttribute("data-id");
  card.push({
    id: id,
    title: document.querySelector(`.card-f[data-id="${id}"] h5`).innerHTML,
    price: document.querySelector(`.card-f[data-id="${id}"] span`).innerHTML,
    img: document
      .querySelector(`.card-f[data-id="${id}"] img`)
      .getAttribute("src"),
  });
  document.querySelector(`.card-f[data-id="${id}"]`).classList.add("added");
 
  generate_card_js(card);
  document.querySelectorAll(`.rounded-pill`).forEach(function (ca) {
    ca.innerHTML = card.length;
  });
}
function cardcardsdjenerator(j = []) {}
function emptycard() {
  card = [];
  document.querySelectorAll(`.card-f`).forEach(function (f) {
    if (f.classList.contains("added")) {
      f.classList.remove("added");
    }
  });
  document.querySelectorAll(`.rounded-pill`).forEach(function (ca) {
    ca.innerHTML = card.length;
  });
  generate_card_js();
}
function showhide() {
  var d = document.querySelector("app-cards-modal");
  if (d.classList.contains("show")) {
    d.classList.remove("show");
  } else {
    d.classList.add("show");
  }
}
function pricecalc(){
  var c  = 0 ;
  document.querySelectorAll(".pricef").forEach(function(tt){
    c += parseInt(tt.innerHTML);
  });
  return c;
}
function generate_card_js() {
  var djenerated = "",
    card_generatorFront = document.querySelector("app-cards-modal");
  
  var data = card,
    i = 0;
  for (const rijesponse of data) {
    djenerated += ` 
      <div class="card mb-3" data-int="${i}" data-id="${rijesponse.id}"  >
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${rijesponse.img}" class="card-img" alt="${rijesponse.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${rijesponse.title}</h5>

           <p class="card-text"><small class="text-muted pricef">${rijesponse.price}</small></p>
        </div>
      </div>
    </div>
  </div>`;
    i++;
  }
  card_generatorFront.innerHTML = `<div class="div_card_srcoll">${djenerated}</div>`;
  card_generatorFront.innerHTML += `<div class="btn_f"><span><i class="bi bi-trash"></i> Cancel
</span><span ><i class="bi bi-credit-card"></i> Pay - $${pricecalc()}</span></div>`; ;
}
function generateCards() {
  var djenerated = "",
    card_generatorFront = document.querySelector(".card-generatorFront");
  card_generatorFront.innerHTML = "";
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      var i = 0;
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
              <div class="text-center btn-remove-card"><a class="  btn btn-outline-dark mt-auto"   href="#" onclick="emptycard_id(${rijesponse.id},${i})" data-id="${rijesponse.id}"     >Remove from card</a></div>
  
          </div>
      </app-cart>`;
        i++;
      }
      card_generatorFront.innerHTML = djenerated;
    });
}

document.body.onload = function () {
  generateCards();
};
