// var myCanva = document.getElementById("myCanva");
// var context = myCanva.getContext("2d");
// character = {
//     x:100, y:500
// }
// setInterval(start,100);
// function start() {
//     context.fillStyle='red';
//     context.clearRect(0,0,300,600);
//     context.fillRect(character.x,character.y,25,25);
//     impact();
// }
// function impact() {
//     if(character.x <= 0 || character.x + 25 >= 300 && character.y <=0 ||character.y + 25 >= 600){
//         console.log("thua");
//     }
// }

// document.addEventListener("keydown", key => {
//     switch(key.keyCode) {
//         case 37:
//             if(character.x > 0)
//             character.x -=3;
//             break;
//         case 38:
//             if(character.y > 0)
//             character.y -=3;
//             break;
//         case 39:
//             if(character.x +25 <=300)
//             character.x +=3;
//             break;
//         case 40:
//             if(character.y +25 <=300)
//             character.y +=3;
//             break;
//     }
// });
// -----------------------------------
// function showDialog() {
//     alert('HI nhat day !');
// }
// function writeLog() {
//     var myString = '';
//     for(var param of arguments) {
//         myString += `${param} + `;
//     }
//    
// }
// writeLog('Bin 1','Bin 2','Bin 3');
// var lastName = 'Nhat';
// var firstName = 'Tran';
// console.log(`Tên của tui là : ${lastName} ${firstName}`);

var myString = "Hoc Js tại nhà Bảo Nhật";

console.log(myString.slice(6,10));