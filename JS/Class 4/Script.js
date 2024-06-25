// Callback function:

function display(ans) {
  // console.log(ans);
}

function add(a, b, display) {
  let sum = a + b;

  display(sum);
}

setTimeout(add(10, 5, display), 5000);

// Promise:

// Async - await

async function display() {
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    if (x == 0) {
      myResolve("Okay");
    } else {
      myReject("Error");
    }
  });

  await myPromise
    .then((data) => {
      // console.log(data)
    })
    .catch((err) => {
      // console.log(err)
    });
}

display();

// DOM -> (Document Object Model)

document.getElementById("demo").innerText = "hi";

let ans = document.getElementsByClassName("sample")[0]

ans.innerHTML = "<h1>Hello World</h1>"
ans.style.color = "red"
ans.style.fontSize = "3em"

// console.log(ans);
