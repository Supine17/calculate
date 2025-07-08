import { useState } from "react";

export default function App() {
  const [input, setInput] = useState({
    d1: 100,
    d2: 60,
    v: 120,
    ap: 2.5,
    f: 0.26,
    L: 50,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: parseFloat(value) });
  };

  const dMean = (input.d1 + input.d2) / 2;
  const n = (1000 * input.v) / (Math.PI * dMean);
  const passes = Math.ceil((input.d1 - input.d2) / (2 * input.ap));
  const t = (passes * input.L) / (input.f * n);

  return (
    <div className="grid gap-4 p-6 max-w-xl mx-auto">
      <div className="rounded-2xl shadow-lg bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Точение / Растачивание</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Диаметр заготовки</label>
            <input
              className="mt-1 border rounded w-full p-2"
              name="d1"
              value={input.d1}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Диаметр чистовой</label>
            <input
              className="mt-1 border rounded w-full p-2"
              name="d2"
              value={input.d2}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Скорость резания (м/мин)</label>
            <input
              className="mt-1 border rounded w-full p-2"
              name="v"
              value={input.v}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Глубина резания (мм)</label>
            <input
              className="mt-1 border rounded w-full p-2"
              name="ap"
              value={input.ap}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Подача (мм/об)</label>
            <input
              className="mt-1 border rounded w-full p-2"
              name="f"
              value={input.f}
              onChange={handleChange}
              type="number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Длина обработки (мм)</label>
            <input
              className="mt-1 border rounded w-full p-2"
              name="L"
              value={input.L}
              onChange={handleChange}
              type="number"
            />
          </div>
        </div>

        <div className="pt-6 border-t mt-6 text-sm space-y-1">
          <p><strong>Средний диаметр:</strong> {dMean.toFixed(2)} мм</p>
          <p><strong>Частота вращения (об/мин):</strong> {n.toFixed(2)}</p>
          <p><strong>Количество проходов:</strong> {passes}</p>
          <p><strong>Время цикла (мин):</strong> {t.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
}
