function messageMaker(message) {
    return function makeMessage(additionalMessage) {
        return message + additionalMessage;
    };
}

let message = messageMaker("Init ");
console.log(message("message"));