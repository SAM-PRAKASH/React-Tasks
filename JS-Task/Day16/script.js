function countdown(seconds, callback) {
    if (seconds > 0) {
      console.log(seconds);
      setTimeout(function () {
        countdown(seconds - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  countdown(2, function () {
    console.log("Happy Independence Day!");
  });
  