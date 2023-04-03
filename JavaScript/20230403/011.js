// json generator
// https://json-generator.com/
// json

let 회원정보 =
[
  {
    "_id": "642a62201948c0e8f2284e89",
    "index": 0,
    "age": 34,
    "eyeColor": "green",
    "name": "Barker Gonzales",
    "gender": "male",
    "company": "ZENTIX"
  },
  {
    "_id": "642a622098179b437ad672ec",
    "index": 1,
    "age": 32,
    "eyeColor": "green",
    "name": "Dominique Alvarado",
    "gender": "female",
    "company": "GEEKY"
  },
  {
    "_id": "642a622081b857a5930a3fc3",
    "index": 2,
    "age": 38,
    "eyeColor": "brown",
    "name": "Susanna Young",
    "gender": "female",
    "company": "ROCKYARD"
  },
  {
    "_id": "642a6220c644822cda86c83e",
    "index": 3,
    "age": 26,
    "eyeColor": "brown",
    "name": "Carlene Shaw",
    "gender": "female",
    "company": "EXTRAWEAR"
  },
  {
    "_id": "642a62209dcadd916d3853e0",
    "index": 4,
    "age": 37,
    "eyeColor": "blue",
    "name": "Claudette Sosa",
    "gender": "female",
    "company": "ZOLAR"
  }
]

회원정보[0]
회원정보[0]['name']
회원정보[1]['company']


//몰라도 됨
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age']) / 5
console.log(나이평균)




// let 회원정보 = [
//   {
//       "_id": "642a621f2445e5a2787864e4",
//       "index": 0,
//       "age": 36,
//       "eyeColor": "green",
//       "name": "Compton Landry",
//       "gender": "male",
//       "company": "AQUASURE"
//   },
//   {
//       "_id": "642a621fc17e143f4b1d444f",
//       "index": 1,
//       "age": 33,
//       "eyeColor": "brown",
//       "name": "Maldonado Crosby",
//       "gender": "male",
//       "company": "INSURON"
//   },
//   {
//       "_id": "642a621fe4fde914944aaa7e",
//       "index": 2,
//       "age": 27,
//       "eyeColor": "blue",
//       "name": "Lynnette House",
//       "gender": "female",
//       "company": "BUZZMAKER"
//   },
//   {
//       "_id": "642a621f68c4e87bb043e14f",
//       "index": 3,
//       "age": 40,
//       "eyeColor": "blue",
//       "name": "Mitchell Hancock",
//       "gender": "male",
//       "company": "FIBEROX"
//   },
//   {
//       "_id": "642a621f820fb16a23d61f07",
//       "index": 4,
//       "age": 35,
//       "eyeColor": "blue",
//       "name": "Audra Vance",
//       "gender": "female",
//       "company": "BRAINQUIL"
//   },
//   {
//       "_id": "642a621fd7e886a78a2d2a6f",
//       "index": 5,
//       "age": 40,
//       "eyeColor": "blue",
//       "name": "Griffith Tanner",
//       "gender": "male",
//       "company": "ENERSAVE"
//   }
// ]

// 회원정보[0]
// 회원정보[0]['name']
// 회원정보[1]['company']

// // 모르셔도 됩니다.
// let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
// console.log(나이평균)