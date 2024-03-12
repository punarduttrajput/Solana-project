#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("8avEppjw3jkPstm17ybFM4BgY1muXfs8mbEhvq56f8oT");

#[program]
pub mod coin_clock {
    use super::*;

  pub fn close(_ctx: Context<CloseCoinClock>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.coin_clock.count = ctx.accounts.coin_clock.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.coin_clock.count = ctx.accounts.coin_clock.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeCoinClock>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.coin_clock.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeCoinClock<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + CoinClock::INIT_SPACE,
  payer = payer
  )]
  pub coin_clock: Account<'info, CoinClock>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseCoinClock<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub coin_clock: Account<'info, CoinClock>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub coin_clock: Account<'info, CoinClock>,
}

#[account]
#[derive(InitSpace)]
pub struct CoinClock {
  count: u8,
}
