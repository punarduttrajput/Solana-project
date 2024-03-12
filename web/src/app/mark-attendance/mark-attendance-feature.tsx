
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
      <AppHero title="MarkAttendance" subtitle={'Run the program by clicking the "Run program" button.'}>
        <p className="mb-6">
          <ExplorerLink path={`account/${programId}`} label={ellipsify(programId.toString())} />
        </p>
        <MarkAttendanceCreate />
      </AppHero>
      <MarkAttendanceProgram />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
