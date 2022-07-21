import { useState } from "react";
import "./App.css";
import { FaTwitter, FaGithub } from "react-icons/fa";

function App() {
  const [current, setCurrent] = useState();
  const [initial, setInitial] = useState();
  const [quantity, setQuantity] = useState();
  const [result, setResult] = useState();
  function calculateProfitLoss(i, c, q) {
    i = Number(initial);
    c = Number(current);
    q = Number(quantity);

    // for loss
    if (i > c) {
      let loss = (i - c) * quantity;
      let lossPercentatge = ((loss / i) * 100).toFixed(2);

      setResult(
        ` Your loss on this stock is ${loss} and total loss percentage is ${lossPercentatge} % `
      );
    } else if (c > i) {
      let profit = (c - i) * quantity;
      let profitPercentage = ((profit / i) * 100).toFixed(2);

      setResult(
        ` Your profit on this stock is ${profit} and total profit percentage is ${profitPercentage} % `
      );
    } else if ((i = c)) {
      setResult("DEAD stock");
    } else {
      setResult("investments are subject to market risks , invest accordingly");
    }
  }
  function resetFunction() {
    setCurrent("");
    setInitial("");
    setQuantity("");

    setResult("");
  }

  return (
    <div className="App container">
      <section className="header-container">
        <h1>STOCK APP</h1>
      </section>
      <section className="input-container">
        <h4>initial price of stock</h4>
        <input
          value={initial}
          onChange={(e) => setInitial(e.target.value)}
          type="text"
        />
        <h4>current price of stock</h4>
        <input
          value={current}
          type="text"
          onChange={(e) => setCurrent(e.target.value)}
        />
        <h4>quanity of stock bought</h4>
        <input
          value={quantity}
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </section>
      <section className="botton-container">
        <button onClick={calculateProfitLoss}> check</button>{" "}
        <button onClick={resetFunction}>reset</button>
      </section>
      <p>{result}</p>
      <footer>
        <section className="footer-links">
          {/* footer link */}
          <a href="https://twitter.com/coderGent">
            {" "}
            <FaTwitter />
          </a>

          <a href="https://github.com/professssor/">
            {" "}
            <FaGithub />
          </a>
        </section>
        <h6> © || 2022 || san</h6>
      </footer>
    </div>
  );
}

export default App;
