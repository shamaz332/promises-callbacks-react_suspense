console.log("number 1 action");

function food(callbackfood) {
  setTimeout(() => {
    console.log("food action");
    callbackfood("call back food");
  }, 20);
}

const foodCall = (valu) => {
    console.log("ready", valu);
    toast(toastCall)
  };

function toast(callbacktoast) {
    setTimeout(() => {
      console.log("toast action");
      callbacktoast("call back toast");
    }, 20);
  }


const toastCall = (valu) => {
    console.log("ready", valu);
  };
food(foodCall);

console.log("last");
