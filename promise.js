const details = [{title:'POST2'},{title : 'POST3'}];

const posts = async () => {
    const createPost = new Promise((resolve, reject) => {
        setTimeout(() =>{
            details.push({title:'POST4'});
            resolve(details);
        },3000)
    })
    const getPost = await createPost;

    const deletePost = new Promise ((resolve, reject) => resolve(details.pop()));

    const updateLastUserActivityTime = new Promise((resolve, reject) => resolve(`User Last Activity time ${new Date().getTime()}`));

    const [deletedPost , activeTime] = await Promise.all([deletePost, updateLastUserActivityTime]);

    console.log(`The Deleted post is - ${deletedPost.title}, ${activeTime}`);


}

posts().then(arr => {
    // arr.forEach(element => {
    //     console.log(element);
    // });

    console.log(arr);

});


// const prom1 = createPost();
// // .then(console.log(details))
// const prom2 = updateLastUserActivityTime();
// // .then(updateLastUserActivityTime)
// // .then(mes => console.log(mes))
// // const prom3 = deletePost();
// Promise.all([prom1,prom2]).then(mes => console.log(mes));

