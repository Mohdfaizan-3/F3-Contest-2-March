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

document
  .querySelector(".btn")
  .addEventListener("click", () => {
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

  data.forEach((post) => {
    const html = `
      <div class="post">
        <p>User Id: ${post.userId}</p>
        <p>${post.title}</p>
        <p>status: ${post.body}</p>
        </div>
    `;

    document.querySelector(".post-container").innerHTML +=
      html;
  });
}

function render2(products) {
  //console.log(products);
  const data = products.products;
  //console.log(data);

  data.forEach((product) => {
    const html = `
      <div class="item">
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="">
            <p>${product.description}</p>
            <p>${product.price}</p>
          </div>
    `;

    document.querySelector(
      ".product-container"
    ).innerHTML += html;
  });
}



function render3(todos) {
 // console.log(todos);
  const data = todos.todos;
  //console.log(data);

  data.forEach((todo) => {
    const html = `
      <div class="item">
              <h3>${todo.userId}</h3>
              <p>${todo.todo}</p>
              <p>${todo.completed}</p>
      </div>
    `;

    document.querySelector(
      ".todos-container"
    ).innerHTML += html;
  });
}
