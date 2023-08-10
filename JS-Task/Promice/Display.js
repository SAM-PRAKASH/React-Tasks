let myPromise = new Promise((resolve, reject) => {
    var a = "Recived";
    if (a == "Recived") {
        resolve();
    } else {
        reject()
    }
})

myPromise.then(
    setTimeout(function () {
        console.log("File Recived");
    }, 4000),
    function () {
        console.log("File not Recived");
    }
    )