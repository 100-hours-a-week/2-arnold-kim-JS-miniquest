const myFirstPromise = new Promise((resolve, reject) => {
    // 여기에 코드를 작성하세요.
    resolve("Hello, Promise!")
});

// 아래 코드는 수정하지 마세요.
myFirstPromise.then(message => {
    console.log(message);
});