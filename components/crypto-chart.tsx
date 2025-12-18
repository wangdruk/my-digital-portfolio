"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type PricePoint = {
  date: string;
  price: number;
};

export function CryptoChart({ data, symbol }: { data: PricePoint[]; symbol: string }): JSX.Element {
  return (
    <div style={{ width: '100%', height: 240 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" hide />
          <YAxis domain={["dataMin", "dataMax"]} hide />
          <Tooltip formatter={(value: number | string) => [`$${value}`, symbol]} />
          <Line type="monotone" dataKey="price" stroke="#7c3aed" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CryptoChart;
