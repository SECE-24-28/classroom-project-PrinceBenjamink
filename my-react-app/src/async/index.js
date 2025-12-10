//Syncronous
/* blocks the other process (make the other process to wait till it finishes) */
// console.log("Start");
// for (let i = 0; i < 10; i++) {
//   console.log("Hello  world");
// }
// console.log("End");



//asyncronous
// console.log("Before");

// setTimeout(() => {
//   console.log("Prince Benjamin K");
// }, 5000);
// console.log("After");


// api : https://jsonplaceholder.typicode.com/users


//  async function fetchApi(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");
//     const ans=await response.json();
//     console.log("The user:",ans);

// }
// fetchApi();

// async function fetchApi() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const ans = await response.json();
//     console.log("The user:", ans);
// }
// fetchApi();

// import axios from "axios";
// async function fetchApi() {
//   const response = await axios("https://jsonplaceholder.typicode.com/users");
//   console.log("The user:", response);
// }
// fetchApi();

// import axios from "axios";
// async function fetchApi() {
//     try{
//         const response = await axios("https://jsonplaceholder.typicode.com/users");
//         console.log("The user:", response);
//     }catch(e){
//         console.log("Error: ",e);
//     }
// }
// fetchApi();



// import axios from "axios";
// async function getWeather() {
//   const url =
//     "https://api.open-meteo.com/v1/forecast?latitude=10.6077&longitude=78.4258&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

//   const response = await axios.get(url);
//   console.log("Weather in Manapparai:", response.data.current);
// }

// getWeather();

// async function fetchApi() {
//   try {
//     const response = await axios("https://jsonplaceholder.typicode.com/users");
//     console.log("The user:", response);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// fetchApi();

// https://dummyjson.com/products

// https://dummyjson.com/todos

// https://dummyjson.com/users

// async function fetchMultipleApis() {
//   let urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/users",
//   ];
//   let promises = urls.map((item) => fetch(item).then((res) => res.json()));
//   let data = await Promise.all(promises);
//   console.log("The data is printed:", data);

//   //   console.log("Promises:", promises);
// }

// fetchMultipleApis();

async function fetchMultipleApis() {
  let urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/users",
    "https://dummyjson.com/products",
    "https://dummyjson.com/todos",
    "https://dummyjson.com/users",
  ];
  let promises = urls.map((item) => fetch(item).then((res) => res.json()));
  let data = await Promise.all(promises);
  console.log("The data is printed:", data);

    // console.log("Promises:", promises);
}

fetchMultipleApis();