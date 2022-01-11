export default async function fetchBitcoin(url, target) {
  try {
    const responseBitcoin = await fetch(url);
    const bitcoinJson = await responseBitcoin.json();
    const btcPreco = document.querySelector(target);

    btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
  } catch (erro) {
    throw new Error(erro);
  }
}
