"use client";

import React, { useEffect, useState } from "react";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  market_cap: number | null;
  sparkline_in_7d?: { price: number[] };
};

function Sparkline({ prices }: { prices: number[] }) {
  if (!prices || prices.length === 0) return null;
  const width = 120;
  const height = 36;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const scaleX = (i: number) => (i / (prices.length - 1)) * width;
  const scaleY = (v: number) => height - ((v - min) / (max - min || 1)) * height;
  const d = prices
    .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(i).toFixed(2)} ${scaleY(p).toFixed(2)}`)
    .join(" ");
  const last = prices[prices.length - 1];
  const color = last >= prices[0] ? "#16a34a" : "#dc2626";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CryptroPage(): JSX.Element {
  const [coins, setCoins] = useState<Coin[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function fetchMarkets() {
      setLoading(true);
      setError(null);
      try {
        const ids = ["bitcoin", "ethereum", "cardano", "solana", "ripple", "polkadot"].join(",");
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Coingecko error: ${res.status}`);
        const data: Coin[] = await res.json();
        if (mounted) setCoins(data);
      } catch (err: any) {
        if (mounted) setError(err.message ?? String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchMarkets();
    const iv = setInterval(fetchMarkets, 60_000);
    return () => {
      mounted = false;
      clearInterval(iv);
    };
  }, []);

  return (
    <main className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Cryptro Trading</h1>
        <p className="text-sm text-gray-500">Live market data, portfolio snapshot, tutorials, and security guidance</p>
      </header>

      <section className="mb-6">
        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold">Portfolio Snapshot</h2>
          <div className="mt-3 flex items-center gap-6">
            <div>
              <div className="text-2xl font-medium">$34,950</div>
              <div className="text-sm text-gray-500">Total balance</div>
            </div>
            <div className="text-sm text-gray-600">Holdings: BTC 0.5 · ETH 5 · ADA 100</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Top Markets</h2>
        <div className="overflow-auto border rounded-md">
          <table className="w-full table-fixed">
            <thead className="bg-gray-50 text-left text-sm text-gray-600">
              <tr>
                <th className="p-3 w-48">Coin</th>
                <th className="p-3">Price</th>
                <th className="p-3">24h</th>
                <th className="p-3">Market Cap</th>
                <th className="p-3">7d</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-sm text-gray-500">Loading market data…</td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-sm text-red-600">{error}</td>
                </tr>
              )}
              {coins && coins.map((c) => (
                <tr key={c.id} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <img src={c.image} alt={c.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.symbol.toUpperCase()}</div>
                    </div>
                  </td>
                  <td className="p-3">${c.current_price.toLocaleString()}</td>
                  <td className={`p-3 ${ (c.price_change_percentage_24h ?? 0) >= 0 ? 'text-green-600' : 'text-red-600' }`}>
                    {c.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td className="p-3 text-sm text-gray-600">${(c.market_cap ?? 0).toLocaleString()}</td>
                  <td className="p-3">
                    {c.sparkline_in_7d?.price ? <Sparkline prices={c.sparkline_in_7d.price} /> : <span className="text-xs text-gray-500">n/a</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold">Quick Tutorials</h3>
          <ul className="mt-3 text-sm space-y-2 text-gray-700">
            <li>Blockchain Basics — 15m</li>
            <li>Setting Up a Hardware Wallet — 20m</li>
            <li>Technical Analysis Introduction — 25m</li>
          </ul>
        </div>

        <div className="p-4 border rounded-md">
          <h3 className="font-semibold">Security Tips</h3>
          <ol className="mt-3 list-decimal pl-5 text-sm text-gray-700 space-y-2">
            <li>Use hardware wallets for long-term storage.</li>
            <li>Enable 2FA and prefer security keys.</li>
            <li>Never share seed phrases or private keys.</li>
          </ol>
        </div>

        <div className="p-4 border rounded-md">
          <h3 className="font-semibold">Market Insights</h3>
          <p className="mt-3 text-sm text-gray-700">Data refreshed every 60 seconds from CoinGecko public API. Use this for demo/educational purposes only.</p>
        </div>
      </section>
    </main>
  );
}
