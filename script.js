// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("idCard").style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("idCard").style.display = "none";
  }
};


function previewCard() {
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var clas = document.getElementById("class").value;

  document.getElementById("showName").innerText = name;
  document.getElementById("showDate").innerText = date;
  document.getElementById("showClass").innerText = clas;

  var elements = document.getElementsByName('new');
  var names = document.getElementsByName('newName');

  document.getElementById("idCard").style.display = "block";
  window.location = "#idCard";

  var k = 0;
  elements.forEach((element) => {
    let b = document.createElement("b");
    b.appendChild(document.createTextNode(names[k].innerText+':'));
    document.getElementById("setField").appendChild(b);
    let i = document.createElement("i");
    i.appendChild(document.createTextNode(element.value));
    document.getElementById("setField").appendChild(i);
    let br = document.createElement("br");
    document.getElementById("setField").appendChild(br);
    k++;
  })
}

var loadFile = function (event) {
  var image = document.getElementById("showPhoto");
  image.src = URL.createObjectURL(event.target.files[0]);
};

/*
function downloadCard() {
    var a = document.createElement('a');
    a.href = "./index.html#idCard";
    a.download = "output.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}*/

function newField() {
  modal.style.display = "none";
  modal2.style.display = "block";
}
var labelName = '';
function addField() {
  //let labelName = document.getElementById("labelName").value;
  //document.getElementById("labelName").value = "";

  labelName = document.getElementById("labelName").value;
  //let labeltype = document.getElementById("labelType").value;
  let labelVal = document.getElementsByName("labelType")[0];
  let labelType = labelVal.options[labelVal.selectedIndex].text;

  let label = document.createElement("label");
  let br = document.createElement("br");
  let inputType = document.createElement("input");

  label.appendChild(document.createTextNode(labelName));
  label.setAttribute("name", 'newName');
  inputType.setAttribute("type", labelType);
  inputType.setAttribute("name", 'new');


  document.getElementById("newField").appendChild(label);
  document.getElementById("newField").appendChild(inputType);
  document.getElementById("newField").appendChild(br);


  modal2.style.display = "none";
  modal.style.display = "block";
}

function cancelField() {
  modal.style.display = "block";
  modal2.style.display = "none";
}
