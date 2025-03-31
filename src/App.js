import { useEffect, useState } from "react";

export default function App() {
  const [carat, setCarat] = useState(0.35);
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

  const getCaratRange = (c) => {
    if (c >= 0.3 && c < 0.4) return "0.30-0.39ct";
    if (c >= 0.4 && c < 0.5) return "0.40-0.49ct";
    if (c >= 0.5 && c < 0.7) return "0.50-0.69ct";
    if (c >= 0.7 && c < 1.0) return "0.70-0.99ct";
    if (c >= 1.0 && c < 1.5) return "1.00-1.49ct";
    if (c >= 1.5 && c < 2.0) return "1.50-1.99ct";
    if (c >= 2.0 && c < 3.0) return "2.00-2.99ct";
    if (c >= 3.0 && c < 5.0) return "3.00-3.99ct";
    if (c >= 5.0) return "5.00ct+";
    return null;
  };

  const range = getCaratRange(carat);
  const match = data.find((d) => d.caratRange === range && d.color === color && d.clarity === clarity);
  const usdPerCt = match ? match.usdPerCt : 0;
  const price = Math.round(usdPerCt * rate * carat);

  const uniqueColors = [...new Set(data.filter(d => d.caratRange === range).map((d) => d.color))];
  const uniqueClarities = [...new Set(data.filter(d => d.caratRange === range && d.color === color).map((d) => d.clarity))];

  return (
    <div style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>💎 鑽石價格計算機</h2>
      <div style={{ marginTop: 20 }}>
        <label>克拉數：</label>
        <input type="number" value={carat} step="0.01" onChange={(e) => setCarat(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>匯率：</label>
        <input type="number" value={rate} step="0.1" onChange={(e) => setRate(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>顏色：</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {uniqueColors.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label>淨度：</label>
        <select value={clarity} onChange={(e) => setClarity(e.target.value)}>
          {uniqueClarities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>每克拉價格 (USD): <strong>{usdPerCt}</strong></p>
        <p>計算區間: <strong>{range}</strong></p>
        <p>售價 (TWD): <strong style={{ fontSize: '1.25rem' }}>{price.toLocaleString()} 元</strong></p>
      </div>
    </div>
  );
}
