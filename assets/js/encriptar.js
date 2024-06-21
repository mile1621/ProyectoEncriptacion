document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt-button');
    const encryptInput = document.getElementById('encrypt-input');
   

   function encryptMessage() {
    const message = encryptInput.value;
    let encryptedMessage = '';

    
    const key = {
        'a': 'm', 'b': 'n', 'c': 'b', 'd': 'v', 'e': 'c', 'f': 'x', 'g': 'z', 'h': 'a', 'i': 's', 'j': 'd',
        'k': 'f', 'l': 'g', 'm': 'h', 'n': 'j', 'o': 'k', 'p': 'l', 'q': 'q', 'r': 'w', 's': 'e', 't': 'r',
        'u': 't', 'v': 'y', 'w': 'u', 'x': 'i', 'y': 'o', 'z': 'p',
        'A': 'M', 'B': 'N', 'C': 'B', 'D': 'V', 'E': 'C', 'F': 'X', 'G': 'Z', 'H': 'A', 'I': 'S', 'J': 'D',
        'K': 'F', 'L': 'G', 'M': 'H', 'N': 'J', 'O': 'K', 'P': 'L', 'Q': 'Q', 'R': 'W', 'S': 'E', 'T': 'R',
        'U': 'T', 'V': 'Y', 'W': 'U', 'X': 'I', 'Y': 'O', 'Z': 'P'
    };

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (key[char]) {
            encryptedMessage += key[char];
        } else {
            
            encryptedMessage += char;
        }
    }

    
    localStorage.setItem('encryptedMessage', encryptedMessage);

    
    window.location.href = 'resultado.html';
}


    encryptButton.addEventListener('click', encryptMessage);
});
