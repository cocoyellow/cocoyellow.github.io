let bars = document.querySelector("#bars")
var button = document.querySelector(".bus");
button.addEventListener("click", getData);

// full typing, replaced with fat arrow method of declaring functions
// function getData(){
//     fetch('data.json')
//     .then(function(response){
//        do sth;
//     })
//     .then(function(data){
//         do sth
//     });
// }

function getData(){
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        let barData = data;
    bars.innerHTML = barData.value;
     ;})
        
    }


  
