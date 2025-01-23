import { useEffect, useState } from "react"
import { fetchGasPrice } from "~/lib/gas-price";

export const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(Infinity);
  const update = async () => await fetchGasPrice().then(setGasPrice);
  useEffect(() => {
    const id = setInterval(update, 60000);
    update();
    return () => clearInterval(id);
  });

  return <span id="gasPriceValue">{gasPrice} Gwei</span>
}
