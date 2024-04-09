/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


const inquirer = require('inquirer');
const qr = require('qr-image');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Enter URL: ',
    }
  ])
  .then((answers) => {
    const qr_img = qr.imageSync(answers.url, { type: 'png' });
    console.log("writing file")
    fs.writeFile('qr_img.png', qr_img, (err) => {
        if (err) throw err;
        console.log('The qr img file has been saved!');
    });
    fs.writeFile('URL.txt', answers.url, (err) => {
        if (err) throw err;
        console.log('The URL file has been saved!');
    });
  });
