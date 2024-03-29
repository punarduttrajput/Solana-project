
import { useWallet } from '@solana/wallet-adapter-react';
import { ExplorerLink } from '../cluster/cluster-ui';
import { WalletButton } from '../solana/solana-provider';
import { AppHero, ellipsify } from '../ui/ui-layout';
import { useMarkAttendanceProgram } from './mark-attendance-data-access';
import { MarkAttendanceCreate, MarkAttendanceProgram } from './mark-attendance-ui';

export default function MarkAttendanceFeature() {
  const { publicKey } = useWallet();
  const { programId } = useMarkAttendanceProgram();

  return publicKey ? (
    <div>
     
      <AppHero title="Mark Attendance" subtitle={'Mark the attendance by clicking the "Mark" button.'}>
        {/* <p className="mb-6">
          <ExplorerLink path={`account/${programId}`} label={ellipsify(programId.toString())} />
        </p> */}
        <MarkAttendanceCreate />
      </AppHero>
      <MarkAttendanceProgram />
      {/* <MarkAttendanceConfirmation /> */}
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton className="btn btn-primary mark-btn" />
        </div>
      </div>
    </div>
  );
}
