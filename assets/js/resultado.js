document.addEventListener('DOMContentLoaded', () => {
    const resultOutput = document.getElementById('result-output');

    
    const encryptedMessage = localStorage.getItem('encryptedMessage');
    const decryptedMessage = localStorage.getItem('decryptedMessage');
    
    
    if (encryptedMessage) {
        resultOutput.value = encryptedMessage;
    } else if (decryptedMessage) {
        resultOutput.value = decryptedMessage;
    }

    
    function copyToClipboard() {
        resultOutput.select();
        document.execCommand('copy');
    }

    
    const copyButton = document.querySelector('button[onclick="copyToClipboard()"]');
    copyButton.addEventListener('click', copyToClipboard);
});
