dodger = document.getElementById('dodger'); 

dodger.style.backgroundColor = "#FF69B4"; 

const findLeftNumber = function(element) {
   return parseInt(element.style.left.replace('px', ''), 10);
}

function moveDodgerLeft() {
   let left = findLeftNumber(dodger)
   if (left > 0) {
      dodger.style.left = `${left - 1}px`;
   };
}

function moveDodgerRight() {
   let left = findLeftNumber(dodger)
   if (left < 360) {
      dodger.style.left = `${left + 1}px`;
   };
}

document.addEventListener("keydown", function(e) {
   if (e.key === "ArrowLeft") {
      moveDodgerLeft();
   } else if (e.key === "ArrowRight") {
      moveDodgerRight();
   }
});