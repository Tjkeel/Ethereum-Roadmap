import { useEffect, useState } from "react"
import { fetchEthPrice } from "~/lib/metrics/eth-price";

export const EthPrice = () => {
  const [ethPrice, setEthPrice] = useState(Infinity);
  const update = async () => await fetchEthPrice().then(setEthPrice);
  useEffect(() => {
    const id = setInterval(update, 60000);
    update();
    return () => clearInterval(id);
  });

  return <span id="eth-price">${ethPrice}</span>
}
