import type { ActiveSection } from '../types';

interface HeaderProps {
  currentPage: ActiveSection;
  onPageChange: (page: ActiveSection) => void;
  isConnected: boolean;
  walletAddress: string | null;
  onWalletClick: () => void;
  isLoggedIn: boolean;
  isBtcConnected: boolean;
  btcAddress: string;
  onBtcWalletClick: () => void;
}

const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export function Header({
  currentPage,
  onPageChange,
  isConnected,
  walletAddress,
  onWalletClick,
  isLoggedIn,
  isBtcConnected,
  btcAddress,
  onBtcWalletClick
}: HeaderProps) {
  const renderWalletButton = () => {
    if (currentPage === 'DAO' && isLoggedIn) {
      if (!isBtcConnected) {
        return (
          <button
            onClick={onBtcWalletClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 animate-pulse hover:animate-none"
          >
            Connect BTC Wallet
          </button>
        );
      } else {
        return (
          <button
            onClick={onBtcWalletClick}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <span>{truncateAddress(btcAddress)}</span>
          </button>
        );
      }
    } else {
      if (!isConnected) {
        return (
          <button
            onClick={onWalletClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 animate-pulse hover:animate-none"
          >
            Connect BTC Wallet
          </button>
        );
      } else {
        return (
          <button
            onClick={onWalletClick}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <span>{walletAddress ? truncateAddress(walletAddress) : 'Connected'}</span>
          </button>
        );
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="ml-6">
          <h1 className="text-orange-500 font-bold text-2xl" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
            SATSMART
          </h1>
        </div>

        <nav className="flex items-center space-x-2">
          <button
            onClick={() => onPageChange('Market')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === 'Market'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Market
          </button>
          <button
            onClick={() => onPageChange('DAO')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentPage === 'DAO'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            DAO
          </button>
        </nav>

        <div>
          {renderWalletButton()}
        </div>
      </div>
    </header>
  );
}