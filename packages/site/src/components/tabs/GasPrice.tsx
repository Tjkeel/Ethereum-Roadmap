import { useEffect, useState } from "react"
import { mock as fetchGasPrice } from "~/lib/metrics/gas-price";

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
