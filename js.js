let input = document.getElementById("input");

function getdata() {
  document.getElementById("btn").addEventListener("click", () => {
    let data = input.value;
    console.log(data);

    if (data > " ") 
    {
      let html = document.getElementById("container");
      html.innerHTML += `<div class='data-container'><span class='data-item'>${data}</span> <button class='remove'>remove</button></div> `;
      deletefinal();
      document.getElementById("input").value = "";
    } else alert("please first fill the data");
  });
}
getdata();

// setInterval(() => {

// }, 200);
function deletefinal() {
  var close = document.getElementsByClassName("remove");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
// function underLine(){
//   let under=document.getElementsByClassName('data-item');
// Array.from(under).forEach('click',(e)=>{

// })}