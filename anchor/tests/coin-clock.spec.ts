import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { CoinClock } from '../target/types/coin_clock';

describe('coin-clock', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.CoinClock as Program<CoinClock>;

  const coinClockKeypair = Keypair.generate();

  it('Initialize CoinClock', async () => {
    await program.methods
      .initialize()
      .accounts({
        coinClock: coinClockKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([coinClockKeypair])
      .rpc();

    const currentCount = await program.account.coinClock.fetch(
      coinClockKeypair.publicKey
    );

    expect(currentCount.count).toEqual(0);
  });

  it('Increment CoinClock', async () => {
    await program.methods
      .increment()
      .accounts({ coinClock: coinClockKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.coinClock.fetch(
      coinClockKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Increment CoinClock Again', async () => {
    await program.methods
      .increment()
      .accounts({ coinClock: coinClockKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.coinClock.fetch(
      coinClockKeypair.publicKey
    );

    expect(currentCount.count).toEqual(2);
  });

  it('Decrement CoinClock', async () => {
    await program.methods
      .decrement()
      .accounts({ coinClock: coinClockKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.coinClock.fetch(
      coinClockKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Set coinClock value', async () => {
    await program.methods
      .set(42)
      .accounts({ coinClock: coinClockKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.coinClock.fetch(
      coinClockKeypair.publicKey
    );

    expect(currentCount.count).toEqual(42);
  });

  it('Set close the coinClock account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        coinClock: coinClockKeypair.publicKey,
      })
      .rpc();

    // The account should no longer exist, returning null.
    const userAccount = await program.account.coinClock.fetchNullable(
      coinClockKeypair.publicKey
    );
    expect(userAccount).toBeNull();
  });
});
