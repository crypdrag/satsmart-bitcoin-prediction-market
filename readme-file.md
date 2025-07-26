# 🚀 SatSmart - Bitcoin Prediction Market

**A DAO-Controlled Bitcoin Oracle Prediction Market with Progressive Tiers and Educational Tooltips**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ICP](https://img.shields.io/badge/Built_for-Internet_Computer-29abe0?style=for-the-badge&logo=internetcomputer)

---

## 🎯 Hackathon Demo Overview

**Bottom Line**: Convert Bitcoin volatility into educational entertainment with sustainable tokenomics and progressive complexity that scales from beginners to institutional-level macro analysis.

### 🌟 What This Demo Shows:
- **Progressive 3-Tier System**: Satoshi (beginner) → Stacker (intermediate) → Maxi (advanced)
- **Educational Tooltips**: Click `?` icons throughout for in-app financial education
- **Bitcoin Wallet Integration**: Mock connections to Unisat, Xverse wallets
- **Interactive Betting Interface**: Multi-currency betting (USD/BTC/sats) with live conversion
- **Responsive Design**: Built with React + TypeScript + Tailwind CSS
- **Live Block Animation**: Visual Bitcoin block mining progress simulation

---

## 🏗️ Full Vision & Technical Architecture

### **Core Concept**
Every new Bitcoin block, users predict whether BTC's price will rise or fall relative to traditional assets by block finalization time. UI-driven anticipation with visual feedback tied to actual Bitcoin block timing.

### **Progressive Tier System**
- **🌱 Satoshi Tier**: Simple BTC vs Gold predictions with educational tooltips
- **📈 Stacker Tier**: Multi-asset battle royale (BTC, Gold, S&P 500, ETH) with streak betting
- **🚀 Maxi Tier**: Complex spreads, credit risk analysis, macro economic indicators

### **Core Logic Flow**
The system tracks **3 most recent Bitcoin blocks**:
1. **Current Bitcoin Block** (Block 03) - Active betting period
2. **Latest Finalized Block** (Block 02) - Results determined  
3. **Previous Finalized Block** (Block 01) - Historical comparison

**Data Flow**: Block 03 → Block 02 → Block 01 → New Block 04 (continuous cycle)

---

## 🔧 Technical Implementation Plan

### **Bitcoin Oracle Integration**
- Fetch Bitcoin block headers and timestamps using ICP Bitcoin Integration
- Use `get_block_headers` endpoint for persistent block data
- Maintain 3-block rolling window for continuous operation

### **Price Data Integration**
Historical pricing via CoinGecko API using Bitcoin block timestamps for BTC, ETH, Gold (XAU), DXY, and S&P 500 data.

### **DAO Governance** (Planned)
- SNS webhooks for decentralized control
- Token bonding for dispute resolution
- Community-driven oracle validation

---

## 🛠️ Tech Stack

### **Frontend** (Demo Complete)
- **React 18** + **TypeScript** for type-safe development
- **Tailwind CSS** for responsive design
- **Vite** for fast development and building
- **Lucide React** for consistent iconography

### **Backend** (Architecture Planned)
- **Internet Computer Protocol (ICP)** for decentralized hosting
- **Motoko** smart contracts for betting logic
- **Bitcoin Integration** for real-time block data
- **CoinGecko API** for historical price feeds

---

## 🚀 Quick Start

### **Run the Demo Locally**
```bash
# Clone the repository
git clone https://github.com/crypdrag/satsmart-bitcoin-prediction-market.git
cd satsmart-bitcoin-prediction-market

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Demo Features**
- 🎮 **Try all 3 tiers** - Experience progressive complexity
- 🔍 **Click tooltip icons** - Learn financial concepts in-app
- 💰 **Mock betting flow** - Test wallet connection and bet placement
- 📱 **Responsive design** - Works on mobile and desktop

---

## 🎓 Educational Mission

### **Key Learning Concepts**
- **Bitcoin Fundamentals**: Block timing, mining, volatility
- **Traditional Finance**: Gold (XAU), S&P 500, Dollar Index (DXY)
- **Risk Metrics**: Sharpe ratio, VaR, correlation analysis
- **Macro Economics**: Credit spreads, monetary policy impact

### **Progressive Learning Path**
1. **Satoshi**: Learn basic BTC vs Gold concepts
2. **Stacker**: Understand multi-asset correlations  
3. **Maxi**: Master institutional-level analysis

---

## 🗺️ Development Roadmap

### **Phase 1: Core Infrastructure** 
- [ ] ICP canister deployment
- [ ] Bitcoin oracle integration
- [ ] Real-time price feeds
- [ ] Basic betting mechanics

### **Phase 2: Advanced Features**
- [ ] DAO governance implementation
- [ ] Token economics and staking
- [ ] Advanced risk metrics
- [ ] Mobile app development

### **Phase 3: Ecosystem Expansion**
- [ ] Additional cryptocurrency markets
- [ ] Institutional trader tools
- [ ] Educational partnerships
- [ ] Cross-chain integrations

---

## 🏆 Hackathon Context

This project demonstrates:
- **Technical Innovation**: Novel use of Bitcoin block timing for prediction markets
- **Educational Value**: Progressive learning system with integrated tooltips
- **User Experience**: Intuitive tier-based progression from beginner to expert
- **Market Potential**: Scalable architecture for institutional and retail adoption

**Built for**: Internet Computer ecosystem hackathon showcasing Bitcoin integration and educational DeFi concepts.

---

## 🤝 Contributing

This is an open-source educational project. Contributions welcome for:
- 🎨 UI/UX improvements
- 🔧 Smart contract development
- 📊 Additional prediction markets
- 📚 Educational content expansion

---

## 📞 Contact

- **GitHub**: crypdrag
- **Project**: Bitcoin prediction market with educational focus
- **Built with**: React, TypeScript, ICP, Bitcoin educational entertainment in mind

---

## 📄 License

MIT License - Built for the crypto education and DeFi community.

---

<div align="center">

**🎓 Transforming Bitcoin volatility into educational entertainment 📈**

*Built for hackathon - Full ICP deployment coming soon*

</div>
