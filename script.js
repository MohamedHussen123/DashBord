let myTasks = document.querySelectorAll ('.tasks .task-row');
let deleteBtn = document.querySelectorAll ('.tasks .task-row i');
// console.log (deleteBtn);
// console.log (myTasks);

deleteBtn.onclick = myTasks.forEach (function (ele) {
  ele.onclick = function () {
    myTasks.forEach (function (ele) {
      ele.classList.remove ('done');
    });
    ele.classList.add ('done');
  };
});

// myTasks.forEach (function (ele) {
//     ele.onclick = function () {
//       myTasks.forEach (function (ele) {
//         ele.classList.remove ('done');
//       });
//       ele.classList.add ('done');
//     };
//   });
