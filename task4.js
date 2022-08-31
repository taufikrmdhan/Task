// Dari data dibawah ini
// let data = {
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address:
// {
// street: "Kulas Light",
// suite: "Apt. 556",
// city: "Gwenborough",
// zipcode: "92998-3874",
// },
// phone: "1-770-736-8031 x56442",
// website: "hildegard.org",
// }
// a. Ubahlah data tersebut menggunakan spread operator
// menjadi:
// name: nama anda
// email: email anda
// hobby: hobi anda
// b. Ambilah data “street dan city” tersebut menggunakan
// destructuring
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
const updateData = {...data, name: "Taufik", 
email: "taufik.30@students.amikom.ac.id", 
hobby: ["playing games","jogging","singing"]};

const {address: {street,city}} = updateData;
console.log(updateData)
console.log(`Street = ${street}, City = ${city}`);