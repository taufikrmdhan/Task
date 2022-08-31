// 1. Buat variabel dengan nama biodata dan tipe data object dengan
// value dan tipe data sebagai berikut:
// ● name (string)
// ● age(number)
// ● hobbies (array)
// ● IsMaried (boolean)
// ● schoolList (Array of Object) with key name, yearIn, yearOut,
// and major (if any, if no set “null” )
// ● skills (Array of Object) with key skillName and level (beginner,
// advanced, expert)
// ● interestInCoding (Boolean)
// Contoh:
// const biodata = {
// name: “arkademy”,
// age: ...
// .... : ...
// }
const biodata = {
    name: "Taufik",
    age: 22,
    hobbies: ["Coding", "Reading", "Watching Movies"],
    isMarried: false,
    schoolList: [
        {
          nameSchool: "SMPN 8 Sungai Penuh",
          yearin: "2013",
          yearout: "2016",
          major: null,
        },
        {
            nameSchool: "SMA Negeri 1 Sungai Penuh",
            yearin: "2016",
            yearout: "2019",
            major: "IPA",
        },
        {
            nameSchool: "Universitas AMIKOM Yogyakarta",
            yearin: "2019",
            yearout: "Until now",
            major: "Informatika"
        }
      ],
    skills: [
        {
            skillName: "HTML",
            level: "Beginner"
        },
        {
            skillName: "CSS",
            level: "Beginner"
        },
        {
            skillName: "Javascript",
            level: "Beginner"
        },
    ],
    interestInCoding : true,
};