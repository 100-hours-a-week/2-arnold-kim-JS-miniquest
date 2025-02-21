async function waitForMessage(message) {
    setTimeout(() =>{
        console.log(message);
    }, 1000)
}

await waitForMessage("Hello, Async/Await!");