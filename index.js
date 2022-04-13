const btns = document.querySelector('button'); //получаем элемент, над которым хотим произвести действия
const overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//    alert("You've got to be kidding me!");
// };
//
// btn.onclick = function () {
//    alert("Second click");// Если мы используем свойство ещё раз, то оно просто перезаписывает предыдущее и в алерте будет только Second click
// };
//


// btn.addEventListener('click', ()=> { //Эта функция запускается только после клика пользователя
//    alert("You've got to be kidding me!");
// });
//
// btn.addEventListener('click', ()=> { //Эта функция запускается только после клика пользователя
//    alert("Second click");
// });


// let i = 0;
const deleteElement = (e) => {
   console.log(e.target);
   console.log(e.type);
}
//    i++;
//    if (i == 1) {
//       btn.removeEventListener('click', deleteElement); //В консоль выведется только 1 раз button, т.к. итератор уже равен единице, один раз он сработал
//    }
// };

// btn.addEventListener('click', deleteElement);
// // { // при наведении мышки на кнопку в консоль выводится сообщение
// //                                                 // console.log("Hover");
// //    //console.log(event);// показывает, что произошло с элементом: выводятся координаты, где была мышь, была ли нажата shift
// //
// // });
//
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
   btn.addEventListener('click', deleteElement);
})


const link = document.querySelector('a');

link.addEventListener('click', function(event){
   event.preventDefault();// Мы предотвращаем стандартное поведение браузера
   console.log(event.target);
});

<!--Навешиваем один обработчик на все кнопки -->

// Перебираем псевдомассив button и на каждый элемент навешиваем обработчик

