let inputField = document.getElementById('inputField');
let encryptedText = document.getElementById('encryptedText');
let encryptButton = document.getElementById('encryptButton');
let decryptButton = document.getElementById('decryptButton');



// Definimos las funciones para encriptar y desencriptar el texto.
window.encrypt = function() {
    var text = inputField.value;
    var encrypted = CryptoJS.AES.encrypt(text, '123').toString();
    encryptedText.textContent = encrypted;
}

window.decrypt = function() {
    var ciphertext = encryptedText.textContent;
    var bytes = CryptoJS.AES.decrypt(ciphertext, '12345');
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);
    inputField.value = decrypted;
}