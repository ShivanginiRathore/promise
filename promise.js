const details = [];

function createPost(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            // let date = new Date();
            details.push({title:'POST1'});
            resolve(details);
        },1000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(details.length > 0){
                let date = new Date();
                resolve(`User Last Activity time ${date.getTime()}  `);
            } else {
                reject('ERROR');
            }
            
        },1000)
    })
}

function deletePost(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            // let date = new Date();
            
            resolve(details.pop());
        },1000)
    })
}

const prom1 = createPost();
// .then(console.log(details))
const prom2 = updateLastUserActivityTime();
// .then(updateLastUserActivityTime)
// .then(mes => console.log(mes))
// const prom3 = deletePost();
Promise.all([prom1,prom2]).then(mes => console.log(mes));

