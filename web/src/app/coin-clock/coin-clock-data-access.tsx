import { CoinClockIDL, getCoinClockProgramId } from '@coin-clock/anchor';
import { Program } from '@coral-xyz/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';

export function useCoinClockProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getCoinClockProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = new Program(CoinClockIDL, programId, provider);

  const accounts = useQuery({
    queryKey: ['coin-clock', 'all', { cluster }],
    queryFn: () => program.account.coinClock.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['coin-clock', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .initialize()
        .accounts({ coinClock: keypair.publicKey })
        .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () => toast.error('Failed to initialize account'),
  });

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  };
}

export function useCoinClockProgramAccount({
  account,
}: {
  account: PublicKey;
}) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useCoinClockProgram();

  const accountQuery = useQuery({
    queryKey: ['coin-clock', 'fetch', { cluster, account }],
    queryFn: () => program.account.coinClock.fetch(account),
  });

  const closeMutation = useMutation({
    mutationKey: ['coin-clock', 'close', { cluster, account }],
    mutationFn: () =>
      program.methods.close().accounts({ coinClock: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  const decrementMutation = useMutation({
    mutationKey: ['coin-clock', 'decrement', { cluster, account }],
    mutationFn: () =>
      program.methods.decrement().accounts({ coinClock: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const incrementMutation = useMutation({
    mutationKey: ['coin-clock', 'increment', { cluster, account }],
    mutationFn: () =>
      program.methods.increment().accounts({ coinClock: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const setMutation = useMutation({
    mutationKey: ['coin-clock', 'set', { cluster, account }],
    mutationFn: (value: number) =>
      program.methods.set(value).accounts({ coinClock: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  };
}
