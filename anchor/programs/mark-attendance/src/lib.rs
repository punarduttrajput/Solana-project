// use anchor_lang::prelude::*;

// declare_id!("6TfP6s4vbSHGuT3R5yZYJ4keDUWhbY8LtUF69Hotbwn4");

// #[program]
// pub mod mark_attendance {
//     use super::*;

//     pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
//         msg!("GM!");
//         Ok(())
//     }
// }

// #[derive(Accounts)]
// pub struct Initialize {}

use anchor_lang::prelude::*;

declare_id!("6TfP6s4vbSHGuT3R5yZYJ4keDUWhbY8LtUF69Hotbwn4");

#[program]
pub mod mark_attendance {
    use super::*;

    #[derive(Accounts)]
    pub struct MarkAttendance<'info> {
        #[account(signer)]
        pub employee: AccountInfo<'info>,
    }

    pub fn mark_attendance(ctx: Context<MarkAttendance>) -> Result<()> {
        msg!("Attendance marked by employee: {}", ctx.accounts.employee.key());
        Ok(())
    }
}

