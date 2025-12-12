"use client";

import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Zap, Shield, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CryptoPage() {
  const [portfolio, setPortfolio] = useState([
    { symbol: "BTC", name: "Bitcoin", amount: 0.5, value: 21500, change: 5.2 },
    { symbol: "ETH", name: "Ethereum", amount: 5, value: 10250, change: -2.1 },
    { symbol: "ADA", name: "Cardano", amount: 100, value: 3200, change: 8.5 },
  ]);

  const [marketData] = useState([
    { symbol: "BTC", name: "Bitcoin", price: 43000, change: 5.2, marketCap: "$840B", volume: "$35B" },
    { symbol: "ETH", name: "Ethereum", price: 2050, change: -2.1, marketCap: "$246B", volume: "$18B" },
    { symbol: "SOL", name: "Solana", price: 185, change: 12.3, marketCap: "$75B", volume: "$4.2B" },
    { symbol: "XRP", name: "Ripple", price: 2.45, change: 3.8, marketCap: "$135B", volume: "$5.1B" },
    { symbol: "DOT", name: "Polkadot", price: 8.60, change: -1.5, marketCap: "$12.5B", volume: "$650M" },
    { symbol: "ADA", name: "Cardano", price: 32, change: 8.5, marketCap: "$1.15T", volume: "$850M" },
  ]);

  const tutorials = [
    {
      title: "Understanding Blockchain",
      description: "Learn the fundamentals of blockchain technology and how it powers cryptocurrencies.",
      level: "Beginner",
      duration: "15 min",
    },
    {
      title: "Crypto Security Best Practices",
      description: "Secure your crypto assets with hardware wallets, 2FA, and private key management.",
      level: "Intermediate",
      duration: "20 min",
    },
    {
      title: "Technical Analysis for Trading",
      description: "Master candlestick patterns, support/resistance, and moving averages.",
      level: "Intermediate",
      duration: "25 min",
    },
    {
      title: "DeFi & Smart Contracts",
      description: "Explore decentralized finance, yield farming, and contract interactions.",
      level: "Advanced",
      duration: "30 min",
    },
    {
      title: "Risk Management",
      description: "Develop strategies for portfolio diversification and risk mitigation.",
      level: "Intermediate",
      duration: "18 min",
    },
    {
      title: "Tax & Compliance",
      description: "Understand crypto tax implications and regulatory landscape.",
      level: "Beginner",
      duration: "22 min",
    },
  ];

  const totalPortfolioValue = portfolio.reduce((sum, coin) => sum + coin.value, 0);
  const portfolioChange = portfolio.reduce((avg, coin) => avg + coin.change, 0) / portfolio.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Crypto Trading & Investment Hub
            </h1>
            <p className="text-lg text-white/90">
              Master cryptocurrency trading with real-time market data, secure portfolio tracking, and expert tutorials.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 px-4 md:px-6 max-w-6xl">
        {/* Portfolio Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Total Value</div>
              <div className="text-3xl font-bold">${totalPortfolioValue.toLocaleString()}</div>
              <div className={`text-sm mt-2 flex items-center gap-1 ${portfolioChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {portfolioChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {portfolioChange >= 0 ? '+' : ''}{portfolioChange.toFixed(1)}% (24h)
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Assets</div>
              <div className="text-3xl font-bold">{portfolio.length}</div>
              <div className="text-sm text-muted-foreground mt-2">Cryptocurrencies held</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Diversification</div>
              <div className="text-3xl font-bold">72%</div>
              <div className="text-sm text-muted-foreground mt-2">Well balanced portfolio</div>
            </Card>
          </div>

          {/* Portfolio Holdings */}
          <div className="bg-muted/50 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted">
                <tr>
                  <th className="text-left p-4">Asset</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-right p-4">Value</th>
                  <th className="text-right p-4">Change (24h)</th>
                  <th className="text-right p-4">% of Portfolio</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((coin) => (
                  <tr key={coin.symbol} className="border-b hover:bg-muted/75 transition">
                    <td className="p-4 font-semibold">{coin.symbol}</td>
                    <td className="p-4">{coin.amount} {coin.symbol}</td>
                    <td className="text-right p-4">${coin.value.toLocaleString()}</td>
                    <td className={`text-right p-4 ${coin.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change}%
                    </td>
                    <td className="text-right p-4">{((coin.value / totalPortfolioValue) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Data & Tutorials */}
        <Tabs defaultValue="market" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="market">Market Data</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Market Data Tab */}
          <TabsContent value="market" className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Live Market Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketData.map((coin) => (
                <Card key={coin.symbol} className="p-6 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-semibold">{coin.name}</div>
                      <div className="text-sm text-muted-foreground">{coin.symbol}</div>
                    </div>
                    {coin.change >= 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="text-2xl font-bold">${coin.price.toLocaleString()}</div>
                    <div className={`text-sm ${coin.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change}% (24h)
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div><span className="font-medium">Market Cap:</span> {coin.marketCap}</div>
                    <div><span className="font-medium">Volume:</span> {coin.volume}</div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials" className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Learning Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.map((tutorial, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{tutorial.title}</h3>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tutorial.level}
                        </span>
                        <span className="text-xs text-muted-foreground">{tutorial.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{tutorial.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Learning
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Crypto Security Best Practices</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-l-green-600">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Hardware Wallet Storage</h3>
                    <p className="text-sm text-muted-foreground">
                      Store long-term holdings in hardware wallets (Ledger, Trezor) for maximum security. Never share seed phrases or private keys.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-blue-600">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Two-Factor Authentication (2FA)</h3>
                    <p className="text-sm text-muted-foreground">
                      Enable 2FA on all exchange accounts using authenticator apps (Google Authenticator, Authy). Avoid SMS-based 2FA when possible.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-purple-600">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Risk Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Never invest more than you can afford to lose. Use stop-loss orders. Diversify across multiple assets. Avoid leverage trading.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-orange-600">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phishing & Scam Prevention</h3>
                    <p className="text-sm text-muted-foreground">
                      Always verify URLs before logging in. Beware of fake exchanges and impersonation scams. Never click suspicious links or download unverified software.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-red-600">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Tax & Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep detailed records of all trades. Consult with a tax professional. Understand local regulations for crypto in your jurisdiction.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Global Market Cap</div>
              <div className="text-2xl font-bold">$2.1T</div>
              <div className="text-xs text-green-600 mt-2">+3.2% (24h)</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">24h Volume</div>
              <div className="text-2xl font-bold">$125B</div>
              <div className="text-xs text-muted-foreground mt-2">Steady trading</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Top Gainer</div>
              <div className="text-2xl font-bold">DOGE</div>
              <div className="text-xs text-green-600 mt-2">+15.3% (24h)</div>
            </Card>
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Fear & Greed Index</div>
              <div className="text-2xl font-bold">62</div>
              <div className="text-xs text-orange-600 mt-2">Greed</div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 border-t">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            With proper education, risk management, and security practices, you can navigate the crypto market with confidence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
