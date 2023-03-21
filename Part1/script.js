function getData(url) {
  let result = fetch(url);
  result
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then((data) => {
      let dataArray = [];
      for (let dataElement of data) {
        let element = dataElement.title;
        let valueKey = element.split("");
        if (valueKey[0] === "a") {
          dataArray.push(dataElement);
        }
      }
      console.log(dataArray);
    })
    .catch((error) => console.log(error.message));
}

getData("https://jsonplaceholder.typicode.com/todos");
