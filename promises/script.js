//Following along with this tutorial https://www.youtube.com/watch?v=vQ3MoXnKfuQ


let myPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        resolve('Good to go!');
    }, 1000);

    setTimeout(() => { 
        reject('nonono')
    }, 500)

})

//Two methods to catch errors

// 1) using an arrow method for the second paramter
// myPromise.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })

// 2) using promise.catch to handle errors
myPromise.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})