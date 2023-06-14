 
var card = [],
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
  ];  document.querySelector(`.card-f[id="234234"] h5`).innerHTML
  function addTcard(idf){
    var id = idf.getAttribute("id");
    card.push({
        "id":id,
        "title":document.querySelector(`.card-f[id="${id}"] h5`).innerHTML,
        "price": document.querySelector(`.card-f[id="${id}"] span`).innerHTML
    });
    document.querySelector(`.card-f[id="${id}"]`).classList.add("added");
    document.querySelector(`.rounded-pill`).innerHTML = card.length;
    console.log(card);
  }
function emptycard(){
    card = [];
    document.querySelectorAll(`.card-f`).forEach(function(f){
        if(f.classList.contains("added")){
             f.classList.remove("added");
        }
    });
    document.querySelector(`.rounded-pill`).innerHTML = card.length;
}
  

