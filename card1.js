
function submitCard() {

//name//
    var nameElement = document.getElementById("name");
    var nameValue = nameElement.value;
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    //no of coming//
    var comingValue = document.getElementById("coming").value;
    document.getElementById("cardComing").innerHTML = comingValue;

    //reguest messages//
    var addmsgValue = document.getElementById("addmsg").value;
    document.getElementById("cardRequest").innerHTML = addmsgValue;

    document.getElementById("card").style.display = "block";
}
