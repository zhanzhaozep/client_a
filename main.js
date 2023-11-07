const dotenv = require('dotenv');
const fs = require('fs');
const message = require('./message');


dotenv.config();


const name = process.env.NAME; 
const number = process.env.NUMBER; 


const result = message.create(name, number);


console.log(result);


fs.writeFile('result.txt', result, (err) => {
  if (err) {
    console.error('ファイル書き込みエラー:', err);
  } else {
    console.log('結果を "result.txt" に書き込みました。');
  }
});