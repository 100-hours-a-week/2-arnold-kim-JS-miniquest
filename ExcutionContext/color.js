const color = 'blue';

const firstLevel = () => {
    let color = 'red';

    const secondLevel = () => {
        let color = 'green';
        console.log(color); // (1) green
    };

    secondLevel();
    console.log(color); // (2) red
};

firstLevel();
console.log(color); // (3) blue

// (1)에서는 color가 secondLevel 함수 내의 지역변수로 선언되어 출력된다.
// (1)에서 선언된 color는 지역변수이기 때문에 함수 외부에는 영향을 주지 않는다.
// 그렇기 때문에 (2)에서는 (1)과 상관없이 red로 선언된 color가 출력된다.
// 마찬가지로 (3)에서는 blue가 출력된다.