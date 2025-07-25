// SatSmart Backend Canister
// Main backend logic for the Bitcoin prediction market

import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Result "mo:base/Result";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor SatSmartBackend {

    // Types
    public type BetType = {
        #btc_vs_gold;
        #btc_vs_dxy;
        #btc_vs_cds;
        #btc_streak;
        #asset_wins;
    };

    public type BetSide = {
        #yes;
        #no;
    };

    public type Bet = {
        id: Nat;
        user: Principal;
        betType: BetType;
        betSide: BetSide;
        amount: Nat;
        timestamp: Int;
        isResolved: Bool;
    };

    public type BlockData = {
        blockNumber: Nat;
        btcPrice: Float;
        goldPrice: Float;
        timestamp: Int;
    };

    // State
    private stable var nextBetId: Nat = 0;
    private stable var betsEntries: [(Nat, Bet)] = [];
    private var bets = HashMap.fromIter<Nat, Bet>(betsEntries.vals(), 10, Nat.equal, func(n: Nat) : Nat32 { Nat32.fromNat(n) });

    private stable var blocksEntries: [(Nat, BlockData)] = [];
    private var blocks = HashMap.fromIter<Nat, BlockData>(blocksEntries.vals(), 10, Nat.equal, func(n: Nat) : Nat32 { Nat32.fromNat(n) });

    // Public functions
    public func placeBet(betType: BetType, betSide: BetSide, amount: Nat) : async Result.Result<Nat, Text> {
        let caller = Principal.fromActor(SatSmartBackend);
        
        let bet: Bet = {
            id = nextBetId;
            user = caller;
            betType = betType;
            betSide = betSide;
            amount = amount;
            timestamp = Time.now();
            isResolved = false;
        };

        bets.put(nextBetId, bet);
        nextBetId += 1;

        #ok(bet.id)
    };

    public query func getBet(id: Nat) : async ?Bet {
        bets.get(id)
    };

    public query func getUserBets(user: Principal) : async [Bet] {
        let userBets = Array.filter<Bet>(
            Array.map<(Nat, Bet), Bet>(bets.entries(), func((_, bet)) = bet),
            func(bet) = bet.user == user
        );
        userBets
    };

    public func updateBlockData(blockNumber: Nat, btcPrice: Float, goldPrice: Float) : async () {
        let blockData: BlockData = {
            blockNumber = blockNumber;
            btcPrice = btcPrice;
            goldPrice = goldPrice;
            timestamp = Time.now();
        };

        blocks.put(blockNumber, blockData);
        Debug.print("Block data updated for block: " # Nat.toText(blockNumber));
    };

    public query func getLatestBlock() : async ?BlockData {
        // In a real implementation, this would return the most recent block
        // For now, return a mock block
        ?{
            blockNumber = 873245;
            btcPrice = 96420.0;
            goldPrice = 2650.0;
            timestamp = Time.now();
        }
    };

    public query func getBlockProgress() : async Float {
        // Mock block progress - in real implementation this would connect to Bitcoin network
        67.3
    };

    // System functions for upgrade persistence
    system func preupgrade() {
        betsEntries := bets.entries();
        blocksEntries := blocks.entries();
    };

    system func postupgrade() {
        betsEntries := [];
        blocksEntries := [];
    };

    // Greeting function for testing
    public query func greet(name : Text) : async Text {
        return "Hello, " # name # "! Welcome to SatSmart Bitcoin Prediction Market!";
    };
}