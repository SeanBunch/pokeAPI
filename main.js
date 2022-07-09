const axios = require("../utils/axios");
const BASE_URL = "https://pokeapi.co/api/v2";
// ====================================================================
//                  Promise.all() shown below
// ====================================================================
// Promise.all([
//   axios.get(`${BASE_URL}/constellations/UEUrlfX`),
//   axios.get(`${BASE_URL}/constellations/zb8QvVt`),
//   axios.get(`${BASE_URL}/constellations/32TN5F8`)
// ]).then(console.log);

// ====================================================================
//                        if it Exist function
// ====================================================================
function showIfExists(pokemonName) {
  const url = `${BASE_URL}/pokemon/${pokemonName}`;
  let dmg = 0;
  // console.log(url);
  let list = [];
  return (
    axios
      .get(url)
      // .then((response) => {
      //   dmg += 1
      //   console.log(response)
      //   // console.log(response.data.stats[0].stat.name, response.data.stats[0].base_stat,`dmg-->${dmg}`);

      //   // return response.data.stats[0].stat.name, response.data.stats[0].base_stat,`dmg-->${dmg}`;
      // })
      .then(({ data }) => {
        dmg += 1;
        console.log(data)
        // console.log(data.stats[0].stat.name, data.stats[0].base_stat,`dmg--> ${dmg}`);
        // console.log(data.results[0].url)
        const urlList = data.results.map((results) => {
          list.push(results.url);
          // list.push(results.url)
          // return resHold;
        });
        console.log(list);
        // console.log(urlList)
        // return data.stats[0].stat.name, data.stats[0].base_stat,`dmg--> ${dmg}`;
        return list;
      })
      .then((list) => {
        const arrPromise= []; 

       for (let i = 0; i < list.length; i++) {
        const promise = axios
        .get(list[i])
        .then(({data}) => {
          console.log(`${data.name}: Base ${data.stats[0].stat.name} is ${data.stats[0].base_stat}`)
          return `${data.name}: Base ${data.stats[0].stat.name} is ${data.stats[0].base_stat}`
        })
       
        arrPromise.push(promise)
        // console.log(list[i])
       }

       console.log(arrPromise)
       Promise.all(arrPromise).then(console.log)
    })
    // .then((list) => {
    //   // let result = [];
    //   for (let i = 0; i < list.length; i++) {
    //     axios
    //     .get(list[i])
    //     .then(({data}) => {
    //       if (data.stats[0].base_stat > 70 ) {
    //         console.log(`${data.name}: Base ${data.stats[0].stat.name} is ${data.stats[0].base_stat}`)
    //       }
    //     })
    //   }
    // })
   
    .catch((error) => {
      return error.message;
    })
      // .then((urlList) => {
      //   urlList.forEach((url) => {
      //     // console.log(data.stats)
      //   })
      // })
)}

// ====================================================================
//    calling the if it exist function with inputs to the function
// ====================================================================
const pokemonName = "";

const result = showIfExists(pokemonName);
console.log(result);
// ====================================================================
// function loop(result) {
//   console.log(result)
//   result.map((data) => console.log(data))
//   console.log("hey")
//   // result.map(({data}) => console.log(data))
//   // result.map(({data}) => console.log(data))
// }
// loop(result)

module.exports = {
  showIfExists,
};
