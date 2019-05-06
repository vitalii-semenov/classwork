let async1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

let async2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1500);
})

let async3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
})

let arrs = [async1, async2, async3];

function doAsyncOper(list, flag){
    if (flag){
        return Promise
                .all(list)
                .then(values => {
                    console.log(values);
                })
    }
    for (let i = 0; i < list.length; i++){
        list[i].then((values) => {
            return console.log(values);
        })
    }

}
doAsyncOper(arrs, false);