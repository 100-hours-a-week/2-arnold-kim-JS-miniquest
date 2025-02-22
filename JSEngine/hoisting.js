console.log(messageLet);
let messageLet = "Hello with let!";

console.log(messageConst);
const messageConst = "Hello with const";

console(greet());
const greet = () => "Hello, Arrow Function";

// let과 const 변수는 var와 다르게 호이스팅의 대상이 아니다. 그렇기 때문에 ReferenceError가 발생한다.
// 함수는 함수 선언문에서는 호이스팅이 되지만, 화살표함수(함수 표현식)에서는 호이스팅이 되지 않는다.

// 브라우저가 HTML을 읽으면 자바크립트 엔진이 실행됩니다.
// 자바스크립트 엔진은 이 과정에서 실행 컨텍스트를 생성하고, 렉시컬 환경을 설정하며, 호이스팅을 처리합니다.
// 코드를 AST로 변환하여 JIT 컴파일러를 통해 바이트코드로 변환시킵니다. 이 때 변수를 할당하고 스코프 체인을 통해 상위 컨텐스트에서 변수를 찾습니다.