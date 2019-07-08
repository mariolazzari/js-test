let i = 0;
let intervalId = 0;

const callback = (id, type) => {
  console.log(id, type, i);

  console.log(`${type} callback: ${i}`);
  if (i == 5) {
    clearInterval(id);
  }
  i = i + 1;
};

intervalId = setInterval(callback, 1000, intervalId, "setInterval");
