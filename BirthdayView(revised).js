
function preview(){

  var inName = document.getElementById("inName").value;
  var inDate = document.getElementById("inDate").value;
  var inTo = document.getElementById("inTo").value;
  var inGreeting = document.getElementById("inGreeting").value;

  document.getElementById("name").textContent = inName;
  document.getElementById("date").innerHTML = inDate;
  document.getElementById("to").innerHTML = inTo;
  document.getElementById("greeting").innerHTML = eventName;

//putDate = document.getElementById('date');
//putTo = document.getElementById('to');
//putGreeting = document.getElementById('greeting');


//putName.innerHTML = inName;
//putDate.innerHTML = inDate;
//putTo.innerHTML = inTo;
//putGreeting.innerHTML = inGreeting;
}
