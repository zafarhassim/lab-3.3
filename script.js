var text = document.getElementById("text");
var number = document.getElementById("number");
var lim = 45;
number.textContent = 0 + "/" + lim;

text.addEventListener("input",function(){
    var textLength = text.value.length;
    number.textContent = textLength + "/" + lim;

    if(textLength === lim){
        text.style.borderColor = "#FF050A";
        number.style.color = "#FF050A";
    }
    else if (textLength === 46){
        alert("limit has been reached");
    }
    else if(textLength === 51){
        document.getElementById("text").disabled = true;
       text.style.borderColor = "#D6CCBF";
        number.style.color = "#A89175";
        document.getElementById("number").innerHTML = "Limit has been reached!";
        }
});