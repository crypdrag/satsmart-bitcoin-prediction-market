import type { TierType } from '../types';

interface TierToggleProps {
  currentTier: TierType;
  onTierChange: (tier: TierType) => void;
}

export function TierToggle({ currentTier, onTierChange }: TierToggleProps) {
  const tiers = [
    { id: 'satoshi' as TierType, icon: '🌱', name: 'Satoshi', description: 'Beginner Mode' },
    { id: 'stacker' as TierType, icon: '📈', name: 'Stacker', description: 'Multi-Asset' },
    { id: 'maxi' as TierType, icon: '🚀', name: 'Maxi', description: 'Advanced Macro' }
  ];

  const handleTierChange = (tier: TierType) => {
    onTierChange(tier);
    // Smooth scroll to top for better UX when switching tiers
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-2">
            <div className="flex space-x-2">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => handleTierChange(tier.id)}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center space-x-3 transition-all duration-300 ${
                    currentTier === tier.id
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl">{tier.icon}</span>
                  <div className="text-left">
                    <div className="font-bold">{tier.name}</div>
                    <div className="text-sm opacity-80">{tier.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}