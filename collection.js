var productContainer = document.getElementById("products")
var  search = document.getElementById("search")
var prodctlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function){
    var enteredValue =event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count++){
        var productname=prodctlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            prodctlist[count].style.display="none"
        }
        else{
            prodctlist[count].style.dsiplay="block"
        }
    }
}