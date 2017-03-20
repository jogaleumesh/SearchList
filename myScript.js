var myList = ['Australia','Bangladesh', 'Brazil','China',
                  'Egypt','Iceland',
'India','Jamaica','Pakistan','Sri Lanka'];

var ul = document.getElementById("myUL");

for (var x=0 ; x <myList.length; x++){
  var li = document.createElement("li");
  li.textContent= myList[x];
  ul.appendChild(li);
}

function myFunction() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
  
    var list =document.getElementsByTagName('li');  
    for (var i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(filter) !== -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}