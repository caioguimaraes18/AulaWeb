const result = () => {
    const visor = document.querySelector("#res");
    const somar = visor.value.indexOf("+");
    const subtrair = visor.value.indexOf("-");
    const multipilcar = visor.value.indexOf("x");
    const dividir = visor.value.indexOf("/");

    if (somar != -1) {
        const numers1 = visor.value.substring(0, somar);
        const numers2 = visor.value.substring(parseInt(somar) + 1, visor.value.length);
        if (numers2.length) {
            const result = parseInt(numers1) + parseInt(numers2)
            visor.value = result;
        }
    }

    if (subtrair != -1) {
        const numers1 = visor.value.substring(0, subtrair);
        const numers2 = visor.value.substring(parseInt(subtrair) + 1, visor.value.length);
        if (numers2.length) {
            const result = parseInt(numers1) - parseInt(numers2)
            visor.value = result;
        }
    }

    if (multipilcar != -1){
        const numers1 = visor.value.substring(0, multipilcar);
        const numers2 = visor.value.substring(parseInt(multipilcar)+1, visor.value.length);
        if(numers2.length){
            const result = parseInt(numers1) * parseInt(numers2)
            visor.value = result;
        }
    }

    if (dividir != -1){
        const numers1 = visor.value.substring(0, dividir);
        const numers2 = visor.value.substring(parseInt(dividir)+1, visor.value.length);
        if(numers2.length){
            const result = parseInt(numers1) / parseInt(numers2)
            visor.value = result;
        }
    }
        




}