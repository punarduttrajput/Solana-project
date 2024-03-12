// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { MarkAttendance } from '../target/types/mark_attendance';
import { IDL as MarkAttendanceIDL } from '../target/types/mark_attendance';

// Re-export the generated IDL and type
export { MarkAttendance, MarkAttendanceIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey('6TfP6s4vbSHGuT3R5yZYJ4keDUWhbY8LtUF69Hotbwn4')
