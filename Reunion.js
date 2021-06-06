
function preview(){
  var inName, inDate, inTo, inGreeting;
  inName = document.getElementById("inName").value;
  inDate = document.getElementById("inDate").value;
  inTo = document.getElementById("inTo").value;
  inGreeting = document.getElementById("inGreeting").value;

putName = document.getElementById('name');
putDate = document.getElementById('date');
putTo = document.getElementById('to');
putGreeting = document.getElementById('greeting');

putName.innerHTML = inName;
putDate.innerHTML = inDate;
putTo.innerHTML = inTo;
putGreeting.innerHTML = inGreeting;
}
