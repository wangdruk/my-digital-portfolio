import React from "react";

export default function Page() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Cryptro Trading</h1>
      <p className="text-sm text-gray-500 mb-6">Portfolio tracker · Market snapshot · Tutorials · Security best practices</p>

      <section className="grid gap-6 md:grid-cols-2 mb-6">
        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold">Portfolio Overview</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><strong>Total value:</strong> $34,950</li>
            <li><strong>Holdings:</strong> BTC (0.5), ETH (5), ADA (100)</li>
            <li><strong>Diversification:</strong> 72% crypto / 28% other</li>
          </ul>
        </div>

        <div className="p-4 border rounded-md">
          <h2 className="text-xl font-semibold">Market Snapshot</h2>
          <table className="w-full mt-3 text-sm">
            <thead className="text-left text-gray-600">
              <tr>
                <th className="pb-2">Coin</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">24h</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">BTC</td>
                <td className="py-1">$43,210</td>
                <td className="py-1 text-green-600">+2.3%</td>
              </tr>
              <tr>
                <td className="py-1">ETH</td>
                <td className="py-1">$2,980</td>
                <td className="py-1 text-red-600">-1.2%</td>
              </tr>
              <tr>
                <td className="py-1">ADA</td>
                <td className="py-1">$0.032</td>
                <td className="py-1 text-green-600">+4.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Quick Tutorials</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="p-3 border rounded-md">
            <h3 className="font-medium">Blockchain Basics</h3>
            <p className="text-sm text-gray-600">15 min · Beginner</p>
          </article>
          <article className="p-3 border rounded-md">
            <h3 className="font-medium">Crypto Security</h3>
            <p className="text-sm text-gray-600">20 min · Beginner</p>
          </article>
          <article className="p-3 border rounded-md">
            <h3 className="font-medium">Technical Analysis 101</h3>
            <p className="text-sm text-gray-600">25 min · Intermediate</p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Security Best Practices</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
          <li><strong>Use a hardware wallet</strong> for long-term holdings (cold storage).</li>
          <li><strong>Enable 2FA</strong> on exchanges and services; prefer U2F/security keys.</li>
          <li><strong>Beware phishing</strong> — verify domains and never share seed phrases.</li>
          <li><strong>Use least privilege</strong> API keys and separate accounts for trading vs withdrawals.</li>
          <li><strong>Keep records</strong> for tax compliance and audits.</li>
        </ol>
      </section>
    </main>
  );
}
