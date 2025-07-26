import React from 'react';

interface TooltipProps {
  id: string;
  onClose: () => void;
}

export function Tooltip({ id, onClose }: TooltipProps) {
  const tooltipContent: Record<string, string> = {
    'block?': "A 'block' in Bitcoin is a collection of transactions that gets added to the blockchain approximately every 10 minutes. When we say 'next block', we're referring to the upcoming Bitcoin block that's currently being mined.",
    'xau-tooltip': "XAU is the international currency code for gold. It comes from the Latin word 'aurum' meaning gold, and 'X' indicates it's a precious metal rather than a country's currency. When we compare BTC vs XAU, we're comparing Bitcoin's price performance against gold's price.",
    'data-tooltip': "This percentage is calculated from all active bets placed by users on the platform. It shows the collective sentiment of our community - 62% of betting volume is on BTC winning vs 38% on XAU (gold) winning for the next Bitcoin block.",
    'sp500-tooltip': "The S&P 500 (Standard & Poor's 500) is a stock market index that tracks the performance of 500 of the largest publicly traded companies in the United States. It's widely considered the best gauge of large-cap U.S. equities and is often used as a benchmark for the overall stock market performance.",
    'dxy-tooltip': "DXY (Dollar Index) is a weighted measure of the U.S. dollar's value against a basket of six major foreign currencies: Euro, Japanese Yen, British Pound, Canadian Dollar, Swedish Krona, and Swiss Franc. It's the primary benchmark for measuring dollar strength in global markets and is widely used by traders and institutions to assess USD performance.",
    'cds-analysis-tooltip': "Credit risk analysis looks at how likely a borrower is to fail to pay back their debt, and a credit default swap (CDS) is like insurance against that happening. The cost of this insurance is shown as an annualized credit spread.",
    'risk-metrics-tooltip': "These numbers help you understand Bitcoin's risk and reward potential. **Volatility** shows how much Bitcoin's price jumps around daily - higher means more dramatic price swings. **Sharpe Ratio** tells you if Bitcoin's gains are worth the risk (higher is better). **Max Drawdown** shows the biggest price drop Bitcoin had from its peak - this helps you prepare mentally for potential losses. **Correlation with Gold** measures if Bitcoin moves with or against gold prices (0 means they move independently). **VaR** estimates the worst loss you might face on 95% of days. **Beta** compares Bitcoin's volatility to the stock market - above 1 means Bitcoin is more volatile than stocks. **Sortino Ratio** is like Sharpe Ratio but only counts downside moves as risk, giving you a clearer picture of Bitcoin's risk-adjusted performance.",
    'streak-payout-tooltip': "Higher payouts = lower chances of winning. The 3x payout for YES reflects the difficulty of Bitcoin winning 3 blocks in a row - it's risky but rewarding! The 1.5x payout for NO is safer because stopping a streak is more likely. Think of it like sports betting: upset wins pay more than favorites.",
    'cds-spread-tooltip': "CDS stands for Credit Default Swap - think of it as insurance for loans. When big companies borrow money, lenders buy this insurance in case the company can't pay back. The '5-year' part means insurance for 5 years, and 'USD IG' means high-quality US companies (the safe ones). When this number goes up, it means lenders are getting worried about the economy. Currently at 0.75%, which is pretty low - meaning banks feel confident about getting paid back."
  };

  const content = tooltipContent[id] || 'Tooltip content not found.';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-gray-800 border-2 border-yellow-500 rounded-lg p-6 shadow-xl max-w-sm w-full mx-4">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-white text-sm leading-relaxed">{content}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-xl font-bold leading-none flex-shrink-0"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}