console.log("hloo frontend");

let items=document.getElementsByClassName('items');

Array.from(items).forEach(function(item){
  
    item.addEventListener("click",function(){
        removeActive();
        item.classList.add("active");
    });

});

function removeActive(){

   Array.from(items).forEach(function(item){
       item.classList.remove("active");
   });

}