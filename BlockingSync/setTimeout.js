console.log("Start");
setTimeout(function () {
    console.log("Async Operation Complete");
}, 1000);
console.log("End")

// setTime() 함수는 비동기적으로 실행한다.
// start가 출력되고 function()에 제어권을 넘겼다가 바로 돌려받는다.
// 제어권이 바로 돌아왔기 때문에 End를 출력하고 function()의 결과를 진행한다.