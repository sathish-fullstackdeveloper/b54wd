// Promise Chaining
// anonymous promise object
new Promise((resolve, reject) => {
    console.log('initial state');
    resolve();
})
    .then(() => {
        console.log('do this');
    })
    .catch(() => {
        console.log('do that');
        throw new Error();
    })
    .then(() => {
        console.log('do this, no matter what happened before');
    })
    .then(() => {
        console.log('execute this too');
    })
    .catch(() => {
        console.log('do that, no matter what happened before');
    })
    .then(() => {
        console.log('execute this after');
    })