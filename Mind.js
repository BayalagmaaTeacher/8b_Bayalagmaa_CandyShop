let value = "";
let num1 = ""; //ehnii too
let num2 = ""; //hoyrdah too
let op = ""; // tuhain daragdsan temdegt
let isOperationClicked = false; // ymar negen temdegt ehnii udaa daragdaagui bn.
//Ene function-ruu zuvhon too l orno
function Num(a) {
  // a n HTML -ees irj bga toon utga
  value += a;
  //isOperation == true gsen utgatai bval 2dah toog avna, ugui bol 1deh toog hadgalj avna
  isOperationClicked ? (num2 += a) : (num1 += a);
  document.getElementById("result").innerHTML = value;
}

// Ene function ruu temdegtuud orno
function Operation(b) {
  // b n HTML ees orj bga temdegt
  value += b;
  //Temdegt deer darsan n unen bol valueg HTML -ruu hevleh
  if (isOperationClicked) document.getElementById("result").innerHTML = value;
  // temdegtuudees ali neg n l taarch baival ->{orood
  // op hairtsagnd hamgiin suuld daragdsan temdgiig oruulna}
  // || ene temdegt n or gsen ug buyu esvel gsen ug
  if (
    b == "^" ||
    b == "%" ||
    b == "/" ||
    b == "*" ||
    b == "-" ||
    b == "+" ||
    b == "." ||
    b == "+/-"
  ) {
    op = b;
  }
  // Odoo hariu gargah hsegiig hiij bn
  if (b == "=") {
    //parseInt gdeg n too bish utgiig too-ruu horvuuldeg method.
    // `${}` ene n text dotor programming-iin uildel hiilgej chaddag
    value = `${parseInt(num1, 10)} ${op} ${parseInt(num2, 10)}`;
    //eval() ene method n math uildel hiij chadna.
    // jishee n: eval('22*3') uunees 66 gsen hariu butsna
    document.getElementById("result").innerHTML = eval(value);
  }
  isOperationClicked = true;
  //odoo delete hiitsgeey, tom C jijig c hoyr yalgaataig anhaarch bicheerei
  //buh utaga avch bsan haritsaguudaa tseverlene
  if (b == "C") {
    value = "";
    document.getElementById("result").innerHTML = value;
    num1 = "";
    num2 = "";
    op = "";
    isOperationClicked = false;
  }
}

//Calculator-iig iluu aldaagui ajiluulahiin tuld
// oshoo nemelt code-uud bichix bolno.
