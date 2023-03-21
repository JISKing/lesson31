function getDataAll(url) {
  url = "https://jsonplaceholder.typicode.com/todos";
  let result = fetch(url);
  result
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then((data) => {
      let userA = document.querySelector(".user-a");
      let userAB = document.querySelector(".user-ab");

      let filteredDataA = data.filter((dataElement) => {
        let element = dataElement.title;
        let valueKey = element.split("");
        return valueKey[0] === "a";
      });

      let filteredDataAB = data.filter((dataElement) => {
        let element = dataElement.title;
        let valueKey = element.split("");
        return valueKey[0] === "a" && valueKey[1] === "b";
      });

      filteredDataA.forEach((dataElement) => {
        let div = document.createElement("div");
        let objStr = JSON.stringify(dataElement);
        div.textContent = objStr;
        userA.appendChild(div);
      });

      filteredDataAB.forEach((dataElement) => {
        let div = document.createElement("div");
        let objStr = JSON.stringify(dataElement);
        div.textContent = objStr;
        userAB.appendChild(div);
      });
    })
    .then(() => btnAll.removeEventListener("click", getDataAll))
    .catch((error) => console.log(error.message));
}

function getDataA(url) {
  url = "https://jsonplaceholder.typicode.com/todos";
  let result = fetch(url);
  result
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then((data) => {
      let userA = document.querySelector(".user-a");

      let filteredDataA = data.filter((dataElement) => {
        let element = dataElement.title;
        let valueKey = element.split("");
        return valueKey[0] === "a";
      });

      filteredDataA.forEach((dataElement) => {
        let div = document.createElement("div");
        let objStr = JSON.stringify(dataElement);
        div.textContent = objStr;
        userA.appendChild(div);
      });
    })
    .then(() => btnA.removeEventListener("click", getDataA))
    .catch((error) => console.log(error.message));
}

function getDataAB(url) {
  url = "https://jsonplaceholder.typicode.com/todos";
  let result = fetch(url);
  result
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then((data) => {
      let userAB = document.querySelector(".user-ab");

      let filteredDataAB = data.filter((dataElement) => {
        let element = dataElement.title;
        let valueKey = element.split("");
        return valueKey[0] === "a" && valueKey[1] === "b";
      });

      filteredDataAB.forEach((dataElement) => {
        let div = document.createElement("div");
        let objStr = JSON.stringify(dataElement);
        div.textContent = objStr;
        userAB.appendChild(div);
      });
    })
    .then(() => btnAB.removeEventListener("click", getDataAB))
    .catch((error) => console.log(error.message));
}

let btnA = document.querySelector(".add-a");
btnA.addEventListener("click", getDataA);

let btnAB = document.querySelector(".add-ab");
btnAB.addEventListener("click", getDataAB);

let btnAll = document.querySelector(".add-all");
btnAll.addEventListener("click", getDataAll);

//   getData("https://jsonplaceholder.typicode.com/todos");
