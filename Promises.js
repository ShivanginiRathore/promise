console.log('Person 1 : shows ticket');
console.log('Person 2 : shows ticket');

const wifeBringTick = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('ticket');
    },3000)
});
const getPopcorn = wifeBringTick.then(mes => {
    console.log('W : I got the ticket');
    console.log('H : we should go in');
    console.log('W : No I am hungary');
    return new Promise((resolve, reject) => resolve(`${mes} popcorn`));
});

const getButter = getPopcorn.then(mes => {
    console.log('H : I got the popcorn');
    console.log('H : we should go in');
    console.log('W : No I want butter on my popcorn');
    return new Promise((resolve, reject) => resolve(`${mes} butter`));
});

getButter.then(mes => console.log(mes));

console.log('Person 4 : shows ticket');
console.log('Person 5 : shows ticket');