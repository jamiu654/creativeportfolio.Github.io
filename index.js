//function divide(a,b,c){
   // console.log(a/b/c)
  //  return a/b/c
//}
//divide(120,6,2)//

console.log("welcome")

const button = document.getElementsByClassName("hamburger")
const nav = document.querySelector(".nav")
const body = document.getElementsByTagName("body");
button[0].style.color ='blue'

button[0].addEventListener("click", function(){
  nav.classList.toggle("show")
  if (nav.classList.contains("show")){
    nav.style.left = '-100%'
    button[0].innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
  else{
    nav.style.left = '0%'
    button[0].innerHTML = '<i class="fa-solid fa-x"></i>'
  
  }



})
const buttoncontainers = document.querySelector(".button-containers");

fetch('https://dummyjson.com/products/category-List')
.then(res => res.json())
.then(function (data)  {
  console.log("CATTEGORIES", data);
  const categories = data;
  categories.forEach(function (category) {
    const button = document.createElement("button");
    button.textContent = category;
    buttoncontainers.appendChild(button);

    let filter = "fragrances";
    button.addEventListener("click", function (){
      filter = category;
      fetchData(filter);
    })
  })
  
});