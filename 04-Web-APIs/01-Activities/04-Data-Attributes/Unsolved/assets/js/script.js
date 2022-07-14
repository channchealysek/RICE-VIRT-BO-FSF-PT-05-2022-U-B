var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
 console.log(element.dataset);
 if (element.dataset.state === "hidden"){
  element.dataset.state = "visible";
  element.dataset.box = "1" 
 }else{
  element.dataset.state = "hidden";
 }
  // TODO: Complete function

  // taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
});
