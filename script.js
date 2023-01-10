const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
   h1.className = "active";
   console.log()
}

h1.addEventListener("click", handleTitleClick)

console.log("Hello World")