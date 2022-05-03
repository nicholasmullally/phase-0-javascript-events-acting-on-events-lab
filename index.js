// Your code here
dodger.style.backgroundColor = "#FF69B4";

const dodger = document.getElementById("dodger");

//Moves dodger left. 
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  //Moves dodger right. 

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  };
  document.addEventListener("keydown", function (event) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


