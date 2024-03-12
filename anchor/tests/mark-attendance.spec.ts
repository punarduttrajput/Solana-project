import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MarkAttendance } from "../target/types/mark_attendance";

describe("mark-attendance", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MarkAttendance as Program<MarkAttendance>;

  it("should run the program", async () => {
    // Add your test here.
    const tx = await program.methods.greet().rpc();
    console.log("Your transaction signature", tx);
  });
});
