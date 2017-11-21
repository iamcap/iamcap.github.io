function wait(ms) {
  var start = new Date().getTime(),
      end = start;
  while ((end - start) < ms){
    end = new Date().getTime();
  }
}
console.log("execution started");
wait(10000);
console.log("execution ended");