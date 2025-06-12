const dataInicio = new Date(2022, 9, 8, 14, 0, 0);

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    const contador = `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;

    document.getElementById('contadorAmor').textContent = contador;
}

setInterval(atualizarContador, 1000);
atualizarContador();
