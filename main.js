const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let starttime;
let timeoutID;
let elapsedTime = 0;
function countup(){
  const d = new Date(Date.now() - starttime + elapsedTime);
  const m = String(d.getMinutes()).padStart(2,'0');
  const s = String(d.getSeconds()).padStart(2,'0');
  const ms = String(d.getMilliseconds()).padStart(3,'0');
  timer.textContent = `${m}:${s}.${ms}`;

  timeoutID = setTimeout(() =>{
    countup();
  },10);
}

function setButtonStateInitial() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}

function setButtonStateRunning() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
}

function setButtonStateStopped() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
}

setButtonStateInitial();
start.addEventListener('click', () =>{
setButtonStateRunning();
  starttime = Date.now();
  countup();
  // スタートボタンを何回も押すと、何回も起動してしまって一回のstopでは止まらない
})
stop.addEventListener('click', () =>{
setButtonStateStopped();
 clearTimeout(timeoutID);
 elapsedTime += Date.now() - starttime;
//  ここを+=にしてあげないと前の値を保持することができない。
// startimeはスタート押した時間になるから、毎回押したぶんを足してあげないといけない

// stopを何回も押すと、elaspdtimeが何回を更新されておかしな値になる。
})
reset.addEventListener('click', () =>{
 timer.textContent ='00:00.000'
 elapsedTime = 0;
})


// new Dateはオブジェクトで取得する。
// オブジェクトから数字で取得したい時は、get___.
// gettime使うと、どこに行っても使うことができる、ミリ単位を取得することができる
// Date nowはm秒で1970年からの取得する


// disabledはdivとかに使うことができない。
// if(timer.classList.contains('active') ===ture){
//   return;
// }
// とかをボタン押した時の処理の前に書いてあげるて、retunしてあげる。

