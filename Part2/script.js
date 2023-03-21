async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const dataArray = [];
      for (let dataElement of data) {
        let element = dataElement.title;
        let valueKey = element.split("");
        if (valueKey[0] === "a") {
          dataArray.push(dataElement);
        }
      }
      console.log(dataArray);
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

getData("https://jsonplaceholder.typicode.com/todos");

