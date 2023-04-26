console.log('Person 1 : shows ticket');
console.log('Person 2 : shows ticket');

const preMovie = async () => {
    const wifeBringTick = new Promise((resolve, reject)=>{
        setTimeout(() => reject('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('PopCorn'));

    const getCandy = new Promise((resolve, reject) => resolve('Candy'));

    const getCoke = new Promise((resolve, reject) => resolve('Coke'));
    let ticket;
    try{
        ticket = await wifeBringTick;
        const [pop,candy,coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
        console.log(`${pop}, ${candy}, ${coke}`);
    
    }catch(e){
        ticket = 'Sad Face';
    }
    

    return ticket;  
}

preMovie().then(mes => console.log(`Person 3 : shows ${mes}`));

console.log('Person 4 : shows ticket');
console.log('Person 5 : shows ticket');