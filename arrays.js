console.log('arrays.js');

var test = "cats";
var opp = test.split("").reverse().join("");

if(test === opp){
    console.log("same?", true);

} else {
    console.log("same?", false);

}



// var animals = ['fish', 'dog', 'cat'];
// var animalsElement= document.getElementById('animals');

// for(var i=0; i<animals.length; i++){
//     //console.log("animal", animals[i]);
// }
// animalsElement.innerHTML += animals{i};


var book= "Catch 22";
var bookSplit = book.split("");
var realNumz =[];
for(var j=0; j<bookSplit.length; j++){
    if(bookSplit[j]*1){
    realNumz.push(bookSplit[j]);
    
}
}
console.log("answer", realNumz.join(""))

