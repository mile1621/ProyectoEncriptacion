document.addEventListener('DOMContentLoaded', () => {
    const decryptButton = document.getElementById('decrypt-button');


   function decryptMessage() {

    const encryptedMessage = localStorage.getItem('encryptedMessage');
    let decryptedMessage = '';


    const key = {
        'a': 'm', 'b': 'n', 'c': 'b', 'd': 'v', 'e': 'c', 'f': 'x', 'g': 'z', 'h': 'a', 'i': 's', 'j': 'd',
        'k': 'f', 'l': 'g', 'm': 'h', 'n': 'j', 'o': 'k', 'p': 'l', 'q': 'q', 'r': 'w', 's': 'e', 't': 'r',
        'u': 't', 'v': 'y', 'w': 'u', 'x': 'i', 'y': 'o', 'z': 'p',
        'A': 'M', 'B': 'N', 'C': 'B', 'D': 'V', 'E': 'C', 'F': 'X', 'G': 'Z', 'H': 'A', 'I': 'S', 'J': 'D',
        'K': 'F', 'L': 'G', 'M': 'H', 'N': 'J', 'O': 'K', 'P': 'L', 'Q': 'Q', 'R': 'W', 'S': 'E', 'T': 'R',
        'U': 'T', 'V': 'Y', 'W': 'U', 'X': 'I', 'Y': 'O', 'Z': 'P'
    };

    const invertedKey = {};
    for (let char in key) {
        invertedKey[key[char]] = char;
    }

    for (let i = 0; i < encryptedMessage.length; i++) {
        let char = encryptedMessage[i];
        if (invertedKey[char]) {
            decryptedMessage += invertedKey[char];
        } 
    }


           localStorage.setItem('encryptedMessage', decryptedMessage);


           window.location.href = 'resultado.html';
    }

    decryptButton.addEventListener('click', decryptMessage);
});
