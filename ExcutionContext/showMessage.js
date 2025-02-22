const message = 'Hello, JavaScript!';

const showMessage = () => {
    console.log(message); // A ReferenceError
    let message = 'Hello, ES6!';
    console.log(message); // B 'Hello, ES6!'
};

showMessage();

// A에서는 message가 함수 내에서 선언된 적이 없기 때문에 ReferenceError가 발생한다.
// B에서는 message가 바로 윗줄에서 함수 내 지역변수로 선언되어 let으로 선언된 message를 불러온다.