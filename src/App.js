import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [carat, setCarat] = useState(1.00);
  const [rate, setRate] = useState(32.5);
  const [data, setData] = useState([]);
  const [color, setColor] = useState("");
  const [clarity, setClarity] = useState("");

  useEffect(() => {
    fetch("/diamond_data.json")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        const first = d[0];
        setColor(first.color);
        setClarity(first.clarity);
      });
  }, []);

  const getCaratMinMax = (range) => {
    const match = range.match(/(\d+(\.\d+)?)-(\d+(\.\d+)?)/);
    if (match) {
      return [parseFloat(match[1]), parseFloat(match[3])];
    } else if (range.includes("ct+")) {
      return [parseFloat(range), Infinity];
    }
    return [0, 0];
  };

  const candidates = data.filter((d) => d.color === color && d.clarity === clarity);
  const match = candidates.find((d) => {
    const [min, max] = getCaratMinMax(d.caratRange.replace('ct', ''));
    return carat >= min && carat <= max;
  });

  const usdPerCt = match ? parseFloat(match.usdPerCt) : null;
  const price = match ? Math.round(usdPerCt * rate * carat) : null;

  const uniqueColors = [...new Set(data.map((d) => d.color))];
  const uniqueClarities = [...new Set(data.filter(d => d.color === color).map((d) => d.clarity))];

  return (
    <div className="container">
      <header>
        <img src="/logo.png" alt="logo" className="logo" />
        <h1>鑽石價格計算機</h1>
      </header>
      <main>
        <div className="input-group">
          <label>克拉數：</label>
          <input type="number" value={carat} step="0.01" onChange={(e) => setCarat(parseFloat(e.target.value))} />
        </div>
        <div className="input-group">
          <label>匯率：</label>
          <input type="number" value={rate} step="0.1" onChange={(e) => setRate(parseFloat(e.target.value))} />
        </div>
        <div className="input-group">
          <label>顏色：</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {uniqueColors.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>淨度：</label>
          <select value={clarity} onChange={(e) => setClarity(e.target.value)}>
            {uniqueClarities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="output-group">
          {match ? (
            <>
              <p>每克拉價格 (USD): <strong>{usdPerCt}</strong></p>
              <p>計算區間: <strong>{match.caratRange}</strong></p>
              <p className="price">售價 (TWD): <strong>{price.toLocaleString()} 元</strong></p>
            </>
          ) : (
            <p className="warning">❗查無對應價格，請確認鑽石規格是否正確</p>
          )}
        </div>
      </main>
      <footer>© 2024 JOY COLORi</footer>
    </div>
  );
}
