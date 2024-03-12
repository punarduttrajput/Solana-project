use anchor_lang::prelude::*;

declare_id!("6TfP6s4vbSHGuT3R5yZYJ4keDUWhbY8LtUF69Hotbwn4");

#[program]
pub mod mark_attendance {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("Your attendance is successfully marked");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
