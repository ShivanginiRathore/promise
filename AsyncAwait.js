console.log('Person 1 : shows ticket');
console.log('Person 2 : shows ticket');

const preMovie = async () => {
    const wifeBringTick = new Promise((resolve, reject)=>{
        setTimeout(() => resolve('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('PopCorn'));

    const getButter = new Promise((resolve, reject) => resolve('Butter'));

    let ticket = await wifeBringTick;

    console.log(`W : I got the ${ticket}`);
    console.log('H : we should go in');
    console.log('W : No I am hungry');

    let pop = await getPopcorn;

    console.log(`H : I got the ${pop}`);
    console.log('H : we should go in');
    console.log('W : No I want butter on my popcorn');

    let butter = await getButter;
    console.log(`H : I got the ${butter}`);
    console.log('W : LETS GO!!!!!');

    return ticket;  
}

preMovie().then(mes => console.log(`Person 3 : shows ${mes}`));

console.log('Person 4 : shows ticket');
console.log('Person 5 : shows ticket');