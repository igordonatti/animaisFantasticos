export async function initFetchBitcoin() {
    try {
        const responseBitcoin = await fetch('https://blockchain.info/ticker');
        const bitcoinJson = await responseBitcoin.json();
        const btcPreco = document.querySelector('.btc-preco');

        btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    }
    catch (erro) {
        console.log(Error(erro));
    }
}
    



