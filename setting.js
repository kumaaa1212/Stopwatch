// setTimeoutを使用して一定時間後にメッセージを表示する
const timeoutID = setTimeout(() => {
  console.log("メッセージを表示します");
}, 5000); // 5秒後に実行

// clearIntervalを使用して一定時間後に表示されるメッセージを止める
setTimeout(() => {
  clearInterval(timeoutID);
  console.log("メッセージの表示を止めました");
}, 10000); // 10秒後に実行
