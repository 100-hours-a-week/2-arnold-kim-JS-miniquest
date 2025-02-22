function createCounter() {
    let count = 0;

    return{
        increment() {
            count += 1;
        },
        decrement() {
            count -= 1;
        },
        getCount() {
            return count;
        }
    }
}

let counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());