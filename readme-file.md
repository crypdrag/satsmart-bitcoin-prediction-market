# 🚀 SatSmart - Bitcoin Prediction Market

<div align="center">

![SatSmart Logo](https://via.placeholder.com/200x80/ea580c/ffffff?text=SATSMART)

**A progressively tiered Bitcoin-centric prediction market platform**

[![ICP](https://img.shields.io/badge/Built_on-Internet_Computer-29abe0?style=for-the-badge&logo=internetcomputer)](https://internetcomputer.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Motoko](https://img.shields.io/badge/Motoko-0066CC?style=for-the-badge&logo=motoko&logoColor=white)](https://motoko.org/)

[🌐 Live Demo](https://satsmart.com) • [📚 Documentation](./docs) • [🚀 Deploy Guide](./DEPLOYMENT.md)

</div>

---

## 📖 About SatSmart

Satsmart is a progressively tiered Bitcoin-centric prediction market platform that transforms real-time blockchain data into educational betting experiences. The system progresses users from simple binary bets to sophisticated macro financial predictions while maintaining block-by-block Bitcoin timing as the core mechanic.

**Satsmart's mission is** convert Bitcoin volatility into educational entertainment with sustainable tokenomics and progressive complexity that scales from Bitcoin beginners to institutional-level macro analysis.

### 🎯 Core Value Proposition

* **Educational-First**: Learn Bitcoin economics through prediction games
* **Real-Time Data**: All bets resolve via actual Bitcoin block timestamps  
* **Progressive Complexity**: Grow from simple BTC vs Gold to macro analysis
* **Tooltips** help users navigate financial terminology without leaving the app

---

## ✨ Features

### 🌱 **Satoshi Tier (Beginner)**
- Simple BTC vs Gold predictions
- Interactive tooltips explaining Bitcoin basics
- Animated rocket ship showing block mining progress
- Binary YES/NO betting interface

### 📈 **Stacker Tier (Intermediate)**  
- Multi-asset battle royale (BTC, Gold, S&P 500, ETH)
- Streak betting with multiplied payouts
- Weekly leaderboards and social features
- Bitcoin news and historical data

### 🚀 **Maxi Tier (Advanced)**
- Complex spreads: BTC vs DXY (Dollar Index)
- Credit risk analysis with CDS spreads
- Advanced risk metrics (Sharpe ratio, VaR, Beta)
- Macro economic event calendar

### 🏛️ **DAO Governance**
- Internet Identity authentication
- Community dispute resolution
- SATS token staking for voting rights
- Transparent governance proposals

---

## 🏗️ Architecture

### **Frontend Stack**
- **React 18** + **TypeScript** for type-safe UI development
- **Tailwind CSS** for responsive, utility-first styling
- **Vite** for fast development and optimized builds
- **Lucide React** for consistent iconography

### **Backend Infrastructure (ICP Canisters)**
- **Frontend Canister**: Serves static assets and UI
- **Backend Canister**: Core business logic and data management
- **Bitcoin Oracle**: Real-time Bitcoin price feeds and block data
- **Betting Engine**: Bet placement, odds calculation, and payouts
- **DAO Governance**: Proposal creation, voting, and dispute resolution
- **SATS Token**: ICRC-1 compliant token for platform governance

### **Key Technologies**
- **Internet Computer Protocol (ICP)** for decentralized hosting
- **Motoko** for smart contract development
- **Bitcoin Integration** for real-time blockchain data
- **Internet Identity** for secure, anonymous authentication

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and **npm**
- **DFX** (Internet Computer SDK)
- **Git** for version control

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/satsmart/bitcoin-prediction-market.git
cd bitcoin-prediction-market

# 2. Install dependencies
npm install

# 3. Start local ICP replica
dfx start --background

# 4. Deploy canisters locally
dfx deploy --network local

# 5. Start development server
npm run dev
```

Your app will be running at `http://localhost:5173` 🎉

---

## 📱 Usage Guide

### **Getting Started**
1. **Connect Wallet**: Use Unisat, Xverse, Leather, or OKX Bitcoin wallets
2. **Choose Your Tier**: Start with Satoshi for basics, progress to Maxi for advanced features
3. **Place Bets**: Select your prediction and bet amount (USD, BTC, or sats)
4. **Learn**: Click `?` tooltips to understand financial concepts
5. **Track Results**: Watch live Bitcoin block mining and bet resolution

### **Betting Flow**
```
Choose Tier → Connect Wallet → Select Prediction → Place Bet → Watch Block → Get Results
```

### **Tier Progression**
- **Satoshi**: Master BTC vs Gold basics
- **Stacker**: Explore multi-asset predictions and streaks  
- **Maxi**: Dive into macro economics and risk analysis

---

## 🛠️ Development

### **Project Structure**
```
satsmart-bitcoin-prediction-market/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks  
│   ├── types.ts            # TypeScript definitions
│   ├── utils.ts            # Utility functions
│   └── satsmart_backend/   # Motoko backend canister
├── dfx.json               # ICP configuration
├── package.json           # Dependencies
└── vite.config.ts         # Build configuration
```

### **Available Scripts**
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run type-check       # Run TypeScript checks
npm run lint             # Run ESLint
npm run format           # Format code with Prettier

dfx start               # Start local ICP replica
dfx deploy              # Deploy canisters
dfx generate            # Generate canister declarations
```

### **Key Components**
- **MarketPage**: Main prediction interface with tier switching
- **ActiveBlockCard**: Live Bitcoin block mining animation
- **BettingModal**: Multi-currency bet placement interface
- **TierToggle**: Progressive complexity tier selection
- **Tooltip**: Educational explanations for financial terms

---

## 🚢 Deployment

### **Local Development**
```bash
dfx start --background
dfx deploy --network local
npm run dev
```

### **ICP Mainnet**
```bash
# Build for production
npm run build

# Deploy to Internet Computer
dfx deploy --network ic
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Test canisters
dfx canister call satsmart_backend greet "(\"Test User\")"
```

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Areas for Contribution**
- 🎨 UI/UX improvements
- 🔧 Smart contract optimization  
- 📊 Additional prediction markets
- 🧪 Test coverage expansion
- 📚 Documentation improvements

---

## 📚 Documentation

- [🏗️ Architecture Guide](./docs/ARCHITECTURE.md)
- [🔌 API Reference](./docs/API.md)
- [🚀 Deployment Guide](./docs/DEPLOYMENT.md)
- [🧪 Testing Guide](./docs/TESTING.md)
- [🎨 UI Components](./docs/COMPONENTS.md)

---

## 🛡️ Security

### **Smart Contract Security**
- Multi-signature canister controllers
- Upgrade governance through DAO voting
- Rate limiting and access controls
- Regular security audits

### **User Security**
- Non-custodial wallet integration
- Internet Identity for privacy
- No personal data collection
- Open source transparency

**🚨 Bug Bounty**: Report security issues to [security@satsmart.com](mailto:security@satsmart.com)

---

## 🗺️ Roadmap

### **Phase 1: MVP Launch** ✅
- [x] Three-tier prediction system
- [x] Bitcoin wallet integration
- [x] Basic DAO governance
- [x] ICP deployment

### **Phase 2: Enhanced Features** 🔄
- [ ] Real-time Bitcoin oracle integration
- [ ] Advanced risk metrics
- [ ] Mobile responsive design
- [ ] Social features and leaderboards

### **Phase 3: Ecosystem Expansion** 📋
- [ ] Additional cryptocurrency markets
- [ ] Options and futures predictions
- [ ] Institutional trader tools
- [ ] Cross-chain integrations

### **Phase 4: Mainstream Adoption** 🎯
- [ ] Educational partnerships
- [ ] Gamification enhancements
- [ ] Multi-language support
- [ ] Traditional finance integrations

---

## 📊 Tokenomics

### **SATS Token Utility**
- **Governance**: Vote on platform upgrades and parameters
- **Staking**: Earn rewards for participating in dispute resolution
- **Fee Discounts**: Reduced betting fees for token holders
- **Liquidity Rewards**: Incentives for providing market liquidity

### **Distribution**
- 40% Community rewards and airdrops
- 25% Development team (4-year vesting)
- 20% Ecosystem development fund
- 10% Early investors (2-year vesting)
- 5% Liquidity provision

---

## 📞 Support & Community

### **Get Help**
- 💬 [Discord Community](https://discord.gg/satsmart)
- 🐦 [Twitter Updates](https://twitter.com/satsmart)
- 📧 [Email Support](mailto:support@satsmart.com)
- 📖 [Documentation](./docs)

### **Community Guidelines**
- Be respectful and educational-focused
- Share knowledge about Bitcoin and economics
- Report bugs and suggest improvements
- Help newcomers learn the platform

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

### **Open Source Philosophy**
SatSmart believes in:
- 🔓 **Transparent Development**: All code is open source
- 🤝 **Community Ownership**: DAO governance for major decisions  
- 🎓 **Educational Mission**: Knowledge sharing and financial literacy
- 🌍 **Global Accessibility**: Permissionless and decentralized

---

## 🙏 Acknowledgments

- **Internet Computer Protocol** for decentralized hosting
- **Bitcoin Core** developers for the blockchain foundation
- **React & TypeScript** communities for excellent tooling
- **Tailwind CSS** for beautiful, responsive design
- **Our contributors** who make SatSmart possible

---

<div align="center">

**Built with ❤️ by the SatSmart community**

*Transforming Bitcoin volatility into educational entertainment*

[🌐 Website](https://satsmart.com) • [📱 App](https://app.satsmart.com) • [📚 Docs](./docs) • [💬 Discord](https://discord.gg/satsmart)

</div>