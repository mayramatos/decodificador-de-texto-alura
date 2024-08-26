document.getElementById('entrada').addEventListener('input', function() {
    var textoOriginal = this.value;

    var textoDecodificado = textoOriginal
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "");

    this.value = textoDecodificado;
    document.getElementById('saida').textContent = textoDecodificado;
});

function criptografar(){
    let criptografar = document.getElementById("entrada").value;
    criptografar = criptografar.toLowerCase()
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, "")
                                .replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");

    document.getElementById("saida").value = criptografar;

    var divInicial = document.getElementById('conteudo-lateral-inicial');
    var divFinal = document.getElementById('conteudo-lateral-final');

        if (divInicial.style.display === 'block') {
            divInicial.style.display = 'none';
            divFinal.style.display = 'block';
        } else {
            divInicial.style.display = 'block';
            divFinal.style.display = 'none';
        }
}

console.log(criptografar());

function descriptografar(){
    let descriptografar = document.getElementById("entrada").value;
    descriptografar = descriptografar.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");
    document.getElementById("saida").value = descriptografar;

    var divInicial = document.getElementById('conteudo-lateral-inicial');
    var divFinal = document.getElementById('conteudo-lateral-final');

        if (divInicial.style.display === 'block') {
            divInicial.style.display = 'none';
            divFinal.style.display = 'block';
        } else {
            divInicial.style.display = 'block';
            divFinal.style.display = 'none';
        }
}

console.log(descriptografar());

function copiarTexto() {
    let textarea = document.getElementById("saida");

    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            console.log("Texto copiado: " + textarea.value);
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
    }

    console.log(copiarTexto());

    window.addEventListener('load', function() {
        document.getElementById('conteudo-lateral-inicial').style.display = 'block';
        document.getElementById('conteudo-lateral-final').style.display = 'none';
    });
    

    