import React, { useState, useMemo } from "react";

export default function IgiPrice() {
  const [carat, setCarat] = useState("");
  const [color, setColor] = useState("");
  const [clarity, setClarity] = useState("");
  const [result, setResult] = useState("");
  const rate = 32.5;

  const priceTable = useMemo(() => ({
  "0.30-0.39": {
    "D": { "IF": 355, "VVS1": 235, "VVS2": 205, "VS1": 205, "VS2":195 },
    "E": { "VVS1": 230, "VVS2": 200, "VS1": 200, "VS2":190 },
    "F": { "VVS1": 230, "VVS2": 200, "VS1": 200, "VS2":190 }
  },
  "0.40-0.49": {
    "D": { "IF": 1045, "VVS1": 905, "VVS2": 685, "VS1": 685, "VS2":670 }
  },
  "0.50-0.69": {
    "D": { "IF": 1045, "VVS1": 905, "VVS2": 700, "VS1": 685, "VS2":570 },
    "E": { "VVS1": 885, "VVS2": 685, "VS1": 670, "VS2":650 },
    "F": { "VVS1": 885, "VVS2": 685, "VS1": 670, "VS2":650 },
    "F Vivid Pink": { "VVS2": 1850, "VS1": 1850, "VS2": 1850 },
    "F Intense Pink": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 }
  },
  "0.70-0.99": {
    "D": { "IF": 1155, "VVS1": 1005, "VVS2": 770, "VS1": 755, "VS2":740 },
    "E": { "VVS1": 985, "VVS2": 755, "VS1": 740, "VS2":725 },
    "F": { "VVS1": 985, "VVS2": 755, "VS1": 740, "VS2":725 },
    "F Vivid Pink": { "VVS2": 1850, "VS1": 1850, "VS2": 1850 },
    "F Intense Pink": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 }
  },
  "1.00-1.99": {
    "D": { "IF": 1155, "VVS1": 1005, "VVS2": 770, "VS1": 755, "VS2":740 },
    "E": { "VVS1": 985, "VVS2": 755, "VS1": 740, "VS2":725 },
    "F": { "VVS1": 985, "VVS2": 755, "VS1": 740, "VS2":725 },
    "F Vivid Pink": { "VVS2": 2775, "VS1": 2775, "VS2": 2775 },
    "F Intense Pink": { "VVS2": 2635, "VS1": 2635, "VS2": 2635 },
    "F Vivid Blue": { "VVS2": 1665, "VS1": 1665, "VS2": 1665 },
    "F Intense Blue": { "VVS2": 1585, "VS1": 1585, "VS2": 1585 },
    "F Vivid Yellow": { "VVS2": 1760, "VS1": 1760, "VS2": 1760 },
    "F Intense Yellow": { "VVS2": 1670, "VS1": 1670, "VS2": 1670 }
  },
  "2.00-2.99": {
    "D": { "IF": 1480, "VVS1": 1285, "VVS2": 990, "VS1": 975, "VS2": 955 },
    "E": { "VVS1": 1265, "VVS2": 975, "VS1": 955, "VS2": 925 },
    "F": { "VVS1": 1265, "VVS2": 975, "VS1": 955, "VS2": 925 },
    "F Vivid Pink": { "VVS2": 2775, "VS1": 2775, "VS2": 2775 },
    "F Intense Pink": { "VVS2": 2635, "VS1": 2635, "VS2": 2635 },
    "F Vivid Blue": { "VVS2": 1850, "VS1": 1850, "VS2": 1850 },
    "F Intense Blue": { "VVS2": 1760, "VS1": 1760, "VS2": 1760 },
    "F Vivid Yellow": { "VVS2": 2310, "VS1": 2310, "VS2": 2310 },
    "F Intense Yellow": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 }
  },
  "3.00-3.99": {
    "D": { "IF": 1480, "VVS1": 1285, "VVS2": 990, "VS1": 975, "VS2":955 },
    "E": { "VVS1": 1265, "VVS2": 975, "VS1": 955, "VS2": 940 },
    "F": { "VVS1": 1265, "VVS2": 975, "VS1": 955, "VS2":925 },
    "F Vivid Pink": { "VVS2": 2775, "VS1": 2775, "VS2": 2775 },
    "F Intense Pink": { "VVS2": 2635, "VS1": 2635, "VS2": 2635 },
    "F Vivid Blue": { "VVS2": 2310, "VS1": 2310, "VS2": 2310 },
    "F Intense Blue": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 },
    "F Vivid Yellow": { "VVS2": 3235, "VS1": 3235, "VS2": 3235 },
    "F Intense Yellow": { "VVS2": 3075, "VS1": 3075, "VS2": 3075 }
  },
  "4.00-4.99": {
    "D": { "IF": 2310, "VVS1": 2005, "VVS2": 1540, "VS1": 1525, "VS2":1510 },
    "E": { "VVS1": 1985, "VVS2": 1525, "VS1": 1510, "VS2": 1495 },
    "F": { "VVS1": 1985, "VVS2": 1525, "VS1": 1510, "VS2": 1495 },
    "F Vivid Pink": { "VVS2": 2775, "VS1": 2775, "VS2": 2775 },
    "F Intense Pink": { "VVS2": 2635, "VS1": 2635, "VS2": 2635 },
    "F Vivid Blue": { "VVS2": 2310, "VS1": 2310, "VS2": 2310 },
    "F Intense Blue": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 },
    "F Vivid Yellow": { "VVS2": 3235, "VS1": 3235, "VS2": 3235 },
    "F Intense Yellow": { "VVS2": 3075, "VS1": 3075, "VS2": 3075 }
  },
  "5.00-5.99": {
    "D": { "IF": 2310, "VVS1": 2005, "VVS2": 1540, "VS1": 1525, "VS2":1510 },
    "E": { "VVS1": 1985, "VVS2": 1525, "VS1": 1510, "VS2": 1495 },
    "F": { "VVS1": 1985, "VVS2": 1525, "VS1": 1510, "VS2": 1495 },
    "F Vivid Pink": { "VVS2": 2775, "VS1": 2775, "VS2": 2775 },
    "F Intense Pink": { "VVS2": 2635, "VS1": 2635, "VS2": 2635 },
    "F Vivid Blue": { "VVS2": 2310, "VS1": 2310, "VS2": 2310 },
    "F Intense Blue": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 },
    "F Vivid Yellow": { "VVS2": 3235, "VS1": 3235, "VS2": 3235 },
    "F Intense Yellow": { "VVS2": 3075, "VS1": 3075, "VS2": 3075 }
  },
  "6.00+": {
    "D": { "IF": 3235, "VVS1": 2805, "VVS2": 2160, "VS1": 2145, "VS2":2130 },
    "E": { "VVS1": 2785, "VVS2": 2145, "VS1": 2130, "VS2": 2110 },
    "F": { "VVS1": 2785, "VVS2": 2145, "VS1": 2130, "VS2": 2110 },
    "F Vivid Pink": { "VVS2": 2775, "VS1": 2775, "VS2": 2775 },
    "F Intense Pink": { "VVS2": 2635, "VS1": 2635, "VS2": 2635 },
    "F Vivid Blue": { "VVS2": 2310, "VS1": 2310, "VS2": 2310 },
    "F Intense Blue": { "VVS2": 2195, "VS1": 2195, "VS2": 2195 },
    "F Vivid Yellow": { "VVS2": 3235, "VS1": 3235, "VS2": 3235 },
    "F Intense Yellow": { "VVS2": 3075, "VS1": 3075, "VS2": 3075 }
  }
}), []);

  const getRange = (c) => {
    for (let r in priceTable) {
      if (r.includes("+")) { if (c >= parseFloat(r)) return r; }
      else { const [min, max] = r.split("-").map(parseFloat); if (c >= min && c <= max) return r; }
    }
    return null;
  };

  const allColors = useMemo(() => [...new Set(Object.values(priceTable).flatMap(Object.keys))], [priceTable]);
  const allClarities = useMemo(() => [...new Set(Object.values(priceTable).flatMap(o=>Object.values(o)).flatMap(o=>Object.keys(o)))], [priceTable]);

  const calculate = () => {
    const c = parseFloat(carat);
    if (!c || !color || !clarity) return setResult("請輸入完整資料");
    const range = getRange(c);
    if (!range) return setResult("找不到對應區間");
    const usd = priceTable[range][color]?.[clarity];
    if (!usd) return setResult("此條件尚無定價");
    const twd = Math.round(usd * rate * c).toLocaleString();
    setResult(`每克拉 USD: ${usd}\n區間: ${range}ct\n售價: ${twd} 元`);
  };

  return (
    <div className="p-6 max-w-md mx-auto rounded-2xl shadow-md bg-white text-center">
      <img src="/logo.png" alt="logo" className="mx-auto mb-4 h-20 rounded-full" />
      <h1 className="text-xl font-semibold text-amber-600 mb-4">IGI 培育鑽石價格查詢</h1>
      <label className="block text-left mb-1">克拉數：</label>
      <input type="number" value={carat} onChange={(e)=>setCarat(e.target.value)} placeholder="例如 0.90"
             className="w-full border p-2 rounded mb-3"/>
      <label className="block text-left mb-1">顏色：</label>
      <select value={color} onChange={(e)=>setColor(e.target.value)} className="w-full border p-2 rounded mb-3">
        <option value="">選擇顏色</option>
        {allColors.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <label className="block text-left mb-1">淨度：</label>
      <select value={clarity} onChange={(e)=>setClarity(e.target.value)} className="w-full border p-2 rounded mb-3">
        <option value="">選擇淨度</option>
        {allClarities.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button onClick={calculate} className="w-full bg-amber-500 text-white p-2 rounded">計算</button>
      <p className="mt-4 text-amber-600 font-medium whitespace-pre-line">{result}</p>
    </div>
  );
}
