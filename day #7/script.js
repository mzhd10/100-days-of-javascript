/* document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newtask input").value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;
    document.querySelector("#newtask input").value = "";
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};


var push = document.querySelector("#push");

push.addEventListener("click", function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div id="tasks">
    <span id='taskname'>
    ${document.querySelector("#newtask input").value}
    </span>
    <button class='delete'><i class="far fa-trash-alt"></i>
    </button>
    </div>
    `;
    document.querySelector("#newtask input").value = "";
    var current_tasks = document.querySelector(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }
  }
});
*/
"use strict";
document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newtask input").value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;
    document.querySelector("#newtask input").value = "";
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
