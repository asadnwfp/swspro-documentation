let array = [
  "audicon.jpg  ",
  "import.html  ",
  "importview.jpg  ",
  "schuellermann.jpg  ",
  "template.html",
];
let trimArr = [];
array.forEach((e) => {
  trimArr.push(e.trim());
});
trimArr.sort();
let linkArr = [];
const capitalize = (str) => {
  return str
    .split("-")
    .map((sub) => sub.charAt(0).toUpperCase() + sub.slice(1))
    .join("-");
};
trimArr.forEach((e) => {
  const regex = /(?:.json)|\/|.js|.jpg|.css/i;
  let name = e.replace(regex, "");
  let capname = capitalize(name);
  console.log(capname);
  let link = `* [${e}](https://github.com/asadnwfp/swspro-documentation/wiki/${capname})`;
  linkArr.push(link);
});
console.log(linkArr);
console.log(linkArr.length * 2);
