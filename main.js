const axios = require("../utils/axios");
const BASE_URL = "https://pokeapi.co/api/v2";

// function getCountry() {
//   const url = `https://run.mocky.io/v3/4a21cd58-72bb-4360-913e-e9c9fd778c06`;
//   const result = [];
//   axios
//   .get(url)
//   .then(({data}) => {
//       const USDcurrencies = data.map((countries) => {
//           const Name = countries.name.official;
//           const region = countries.region;
//         })
//       const countryCurrencies = USDcurrencies.filter((country) => {
//           if (country.currencies["USD"] !== undefined) {
//             console.log(country.currencies["USD"])
//             // result.push(country.currencies["USD"])
//               // return country.currencies["USD"];
//           }
//       })
//               return {Name, region, result}
//       // console.log(USDcurrencies, countryCurrencies);
//       return USDcurrencies
//   })
// }

// console.log(getCountry())

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
  // console.log(url);
  let list = [];
  return (
    axios
      .get(url)
      .then(({ data }) => {
        // console.log(data);
        const urlList = data.results.map((results) => {
          list.push(results.url);
        });
        // console.log(list);
        return list;
      })
      .then((list) => {
        const arrPromise = [];
        for (let i = 0; i < list.length; i++) {
          const promise = axios.get(list[i]).then(({ data }) => {
            // console.log(
            //   `${data.name}: Base ${data.stats[0].stat.name} is ${data.stats[0].base_stat}`
            // );
            return `${data.name}: Base ${data.stats[0].stat.name} is ${data.stats[0].base_stat}`;
          });
          arrPromise.push(promise);
        }
        console.log(arrPromise);
        return Promise.all(arrPromise).then(console.log);
      })
  );
}
// ====================================================================
// ====================================================================

// .then((list) => {
//   // let result = [];
//   for (let i = 0; i < list.length; i++) {
//     axios
//     .get(list[i])
//     .then(({data}) => {
//       if (data.stats[0].base_stat > 70 ) {
//         console.log(`${data.name}: Base ${data.stats[0].stat.name} is ${data.stats[0].base_stat}`)
//     })
// }
// })

//     .catch((error) => {
//       return error.message;
//     })
//       // .then((urlList) => {
//       //   urlList.forEach((url) => {
//       //     // console.log(data.stats)
//       //   })
//       // })
// )}
// // ====================================================================
// //    calling the if it exist function with inputs to the function
// // ====================================================================
const pokemonName = "";


const result = showIfExists(pokemonName);
console.log(result);
// ======================================================================================================
// trying a different querry
// ======================================================================================================

// function getUSdata() {
//   const url = `https://datausa.io/api/data?drilldowns=Nation&measures=Population`;
//   result = [];
//   axios
//   .get(url)
//   .then(({data}) => {
//       // console.log(data.data)
//       const allData = data.data;
//       for (let i = 0; i < allData.length; i++) {
//           const years = allData[i].Year
//           result.push(allData[i]["ID Nation"])
//           // console.log(years)
//         }
//         console.log(result)
//   })
// }
// console.log(getUSdata())

// ======================================================================================================
// ======================================================================================================

// function getAllNames() {
//   const url = `https://swapi.dev/api/films/1/`;
//   const charObj = {};
//   return axios
//     .get(url)
//     .then(({ data }) => {
//       const characters = data.characters;
//       return characters;
//     })
//     .then((characters) => {
//       for (let i = 0; i < characters.length; i++) {
//         axios
//         .get(characters[i])
//         .then((result) => {
//           const obj = {};
//           obj[result.data.name] = { height: result.data.height, homeworld: result.data.homeworld};
//           // console.log(obj);
//           Object.assign(charObj, obj);
//           // return charObj;
//           // console.log(charObj);
//         });
//       }
//       console.log(charObj);
//     });
// }
// getAllNames();

module.exports = {
  showIfExists,
  // getUSdata,
  // getAllNames,
};
