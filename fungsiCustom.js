// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  let hasilData = [];
  fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
    if (err) {
      return fnCallBack(err, null);
    } else {
      let parseResult = JSON.parse(data);

      let resultSplit = parseResult.message.split(" ");
      hasilData.push(resultSplit[1]);
    }
  });
  fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
    if (err) {
      return fnCallBack(err, null);
    } else {
      let parseResult2 = JSON.parse(data);

      let resultSplit2 = parseResult2[0].message.split("halo ").join("");
      hasilData.push(resultSplit2);
    }
  });
  fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
    if (err) {
      return fnCallBack(err, null);
    } else {
      let parseResult3 = JSON.parse(data);
      let resultSplit3 = parseResult3[0]["data"].message
        .split("halo ")
        .join("");
      hasilData.push(resultSplit3);
      fnCallBack(null, hasilData);
    }
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
