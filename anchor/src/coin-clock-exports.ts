// Here we export some useful types and functions for interacting with the Anchor program.
import { Cluster, PublicKey } from '@solana/web3.js';
import type { CoinClock } from '../target/types/coin_clock';
import { IDL as CoinClockIDL } from '../target/types/coin_clock';

// Re-export the generated IDL and type
export { CoinClock, CoinClockIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const COIN_CLOCK_PROGRAM_ID = new PublicKey(
  '8avEppjw3jkPstm17ybFM4BgY1muXfs8mbEhvq56f8oT'
);

// This is a helper function to get the program ID for the CoinClock program depending on the cluster.
export function getCoinClockProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return COIN_CLOCK_PROGRAM_ID;
  }
}
