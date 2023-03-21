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
      .catch((error) => console.log(error.message));
  }
  
  getData("https://jsonplaceholder.typicode.com/todos");
  


    // function getData(url) {
    //   let result = fetch(url);
    //   result
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       }
    //       throw new Error(`Error: ${response.status}`);
    //     })
    //     .then((data) => {
    //       let userA = document.querySelector(".user-a");
    //       let userAB = document.querySelector(".user-ab");
    
    //       for (let dataElement of data) {
    //         let element = dataElement.title;
    //         let valueKey = element.split("");
    
    //         if (valueKey[0] === "a") {
    //           let div = document.createElement("div");
    //           let objStr = JSON.stringify(dataElement);
    //           div.textContent = objStr;
    //           userA.appendChild(div);
    //         }
    
    //         if (valueKey[0] === "a" && valueKey[1] === "b") {
    //             let div = document.createElement("div");
    //             let objStr = JSON.stringify(dataElement);
    //             div.textContent = objStr;
    //             userAB.appendChild(div);
    //           }
    //       }
    //       console.log(dataArray);
    //     })
    //     .catch((error) => console.log(error.message));
    // }
    
    // getData("https://jsonplaceholder.typicode.com/todos");