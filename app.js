//var CryptoJS = require('crypto-js');
//import CryptoJS from 'crypto-js';

let inputField = document.getElementById('inputField');
let encryptedText = document.getElementById('encryptedText');
let encryptButton = document.getElementById('encryptButton');
let decryptButton = document.getElementById('decryptButton');
let image = document.getElementById('imgSearch');



// Define las funciones para encriptar y desencriptar el texto
window.encrypt = function() {
    var text = inputField.value;
    var encrypted = CryptoJS.AES.encrypt(text, '123').toString();
    encryptedText.textContent = encrypted;
    console.log(encrypted);
}

window.decrypt = function() {
    var ciphertext = encryptedText.textContent;
    var bytes = CryptoJS.AES.decrypt(ciphertext, '123');
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);
    encryptedText.textContent = decrypted;
    console.log(decrypted);
}
