"use strict";

const API1 = "https://dummyjson.com/posts";
const API2 = "https://dummyjson.com/products";
const API3 = "https://dummyjson.com/todos";

const promiseAPI1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(API1)
        .then((response, error) => {
      
          return response.json();
              console.error(error);
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);
  });
};
const promiseAPI2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(API2)
        .then((response, error) => {
      
          return response.json();
              console.error(error);
        })
        .then((data) => {
          //console.log(data);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
  });
};

const promiseAPI3 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(API3)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 3000);
  });
};
const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    promiseAPI1()
      .then((response) => {
        if (response) {
          render1(response);
          return promiseAPI2();
        }
      })
      .then((response) => {
        if (response) {
          render2(response);
          return promiseAPI3();
        }
      })
      .then((response) => {
        if (response) {
            render3(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

function render1(posts) {
  const data = posts.posts;
  //console.log(data);
  btn.classList.add("active");
  data.forEach((post) => {
    const html = `
      <div class="post">
        <p><span style="text-transform: capitalize; font-size: medium; font-weight: 700;">User Id:</span> ${post.userId}</p>
        <p><span style="text-transform: capitalize; font-size: medium; font-weight: 700;">Title:</span> ${post.title}</p>
        <p><span style="text-transform: capitalize; font-size: medium; font-weight: 700;">Body: </span>${post.body}</p>
        </div>
    `;

    document.querySelector(".post-container").innerHTML +=
      html;
  });
}

function render2(products) {
  //console.log(products);
  btn.classList.add("active");
  const data = products.products;
  //console.log(data);

  data.forEach((product) => {
    const html = `
      <div class="product">
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="">
            <p>${product.description}</p>
            <p>₹: ${product.price}</p>
          </div>
    `;

    document.querySelector(
      ".product-container"
    ).innerHTML += html;
  });
}



function render3(todos) {
 // console.log(todos);
 btn.classList.add("active");
  const data = todos.todos;
  //console.log(data);

  data.forEach((todo) => {
    const html = `
      <div class="todo">
              <h3>User ID: ${todo.userId}</h3>
              <p>${todo.todo}</p>
              <p  class="${
                todo.completed ? "green" : "red"
              }">${todo.completed} </p>
      </div>
    `;

    document.querySelector(
      ".todos-container"
    ).innerHTML += html;
  });
}
