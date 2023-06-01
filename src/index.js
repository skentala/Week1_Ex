import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const myButton = document.getElementById("my-button");
myButton.addEventListener("click", function(){
  console.log("hello world")
  document.getElementById("my-text").innerHTML = "My notebook";  
});
const addDataButton = document.getElementById("add-data");
addDataButton.addEventListener("click", function(){
  const myList = document.getElementById("my-list")
  const newElement = document.createElement("li");
  const newText = document.getElementById("new-text").value;
  const newListValue = document.createTextNode(newText);
  newElement.appendChild(newListValue);
  myList.appendChild(newElement);
});

