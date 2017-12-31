// Example of running out of call stack space ("blowing the call stack")
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + "came first.");
