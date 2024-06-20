
let text_result = document.querySelector("#text__result");

function encryptMessage() {
  //capturar el texto introducido
  let input = document.getElementById("encrypt-input").value;

  //encriptamos el texto, se crea la var y enviamos el txt del texarea que se guardó en la var input
  let output = encriptar(input);
  text_result.textContent = output;


  //document.getElementById("encrypt-input").value = "";
  const copyButton = document.getElementById("btn__copy");
  copyButton.innerText = "Copiar";
}

function decryptMessage() {
  let input = document.getElementById("decrypt-input").value;
  let output = desencriptar(input);
  text_result.textContent = output;

  //document.getElementById("decrypt-input").value = "";
  const copyButton = document.getElementById("btn__copy");
  copyButton.innerText = "Copiar";
}

function encriptar(text) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],

    ["A", "TAUF"],
    ["E", "ELKS"],
    ["I", "OP%/"],
    ["O", "KA-LI."],
    ["U", "JSUWTG"],

    ["Á", "IJDD"],
    ["É", "OSHX"],
    ["Í", "OIWDH"],
    ["Ó", "ODUG"],
    ["Ú", "DEWS"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][0])) {
      text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return text;
}

function desencriptar(text) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],

    ["A", "TAUF"],
    ["E", "ELKS"],
    ["I", "OP%/"],
    ["O", "KA-LI."],
    ["U", "JSUWTG"],

    ["Á", "IJDD"],
    ["É", "OSHX"],
    ["Í", "OIWDH"],
    ["Ó", "ODUG"],
    ["Ú", "DEWS"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][1])) {
      text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return text;
}

/* 
      Este bloque de código se encarga de seleccionar el botón con el id "btn__copy" y agregar un event listener para el evento 'click'. 
      Cuando se hace clic en el botón, se ejecuta una función anónima que realiza las siguientes acciones: selecciona el contenido de un 
      elemento con la clase "text__result" a través del método textContent, lo copia al portapapeles utilizando navigator.clipboard.writeText(), 
      y muestra una alerta con el contenido copiado.
  */

const btnCopy = document.getElementById("btn__copy");
btnCopy.addEventListener(
  "click",
  (copiar = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        // Seleccionar el texto o contenido que deseas copiar
        var content = document.querySelector(".text__result").textContent;

        // Crear un elemento temporal (input) para almacenar el contenido
        const tempInput = document.createElement("input");
        tempInput.value = content;

        // Agregar el elemento temporal al documento
        document.body.appendChild(tempInput);

        // Seleccionar y copiar el contenido del elemento temporal
        tempInput.select();
        document.execCommand("copy");

        // Remover el elemento temporal del documento
        document.body.removeChild(tempInput);

        // Opcional: Cambiar el texto del botón después de copiar
        const copyButton = document.getElementById("btn__copy");
        copyButton.innerText = "¡Copiado!";
      }
    });

  })
);
