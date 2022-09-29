var list = [];

var addNametoList = document.getElementById("addName").onclick = function() {
    var Name=document.getElementById("name").value;
    list = Name.split("\n");
    console.log(list);
    document.getElementById("name").value="";
    document.getElementById("afterAddingNames").value="Data added successfully";
}
generateWinner = () => {
    const randItemIndex = Math.floor(Math.random() * list.length);
    const randItem = list[randItemIndex];
    if(randItem != undefined) {
        document.getElementById("randWinner").innerHTML = randItem;
    } 
    else {
        document.getElementById("randWinner").innerHTML = "No Winner";
    } 
    document.getElementById("randWinner").style.display = "block";
}
window.onload = () => {
    addNametoList();
    generateWinner();
}
