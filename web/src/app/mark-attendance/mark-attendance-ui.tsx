
import { Keypair } from '@solana/web3.js';
import { useMarkAttendanceProgram } from './mark-attendance-data-access';
import React, { useState, useEffect } from 'react';

export function MarkAttendanceCreate() {
  const { greet } = useMarkAttendanceProgram();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // Check if the user has already marked attendance for today in local storage
    const markedToday = localStorage.getItem('attendanceMarkedToday');
    if (markedToday) {
      // Attendance already marked for today, disable the button
      setFlag(true);
    }
  }, []);

  const handleMarkAttendance = async () => {
    try {
      await greet.mutateAsync(Keypair.generate());

      // Mark attendance for today in local storage
      localStorage.setItem('attendanceMarkedToday', 'true');
      setFlag(true); // Disable the button after marking attendance
    } catch (error) {
      console.error('Error marking attendance:', error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    // Check for next day and reset flag in local storage
    const intervalId = setInterval(() => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (today >= tomorrow) {
        localStorage.removeItem('attendanceMarkedToday');
        setFlag(false);
      }
    }, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <button
        className="btn btn-xs lg:btn-md btn-primary"
        onClick={handleMarkAttendance}
        disabled={flag || greet.isPending}
      >
        Mark{greet.isPending ? '...' : ''}
      </button>

      {greet.isSuccess && (
        <h2 className="text-2xl font-semibold">Attendance Marked Successfully!</h2>
      )}
    </>
  );
}


export function MarkAttendanceProgram() {
  const { getProgramAccount } = useMarkAttendanceProgram();
  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info flex justify-center">
        <span>
          Program account not found. Make sure you have deployed the program and
          are on the correct cluster.
        </span>
      </div>
    );
  }
  return (
    <div className={'space-y-6'}>
    </div>
  );
}

// var confirmed;

// export function MarkAttendanceConfirmation() {
//   const { greet } = useMarkAttendanceProgram();

//   const handleMarkAttendance = async () => {
//     try {
//       confirmed =  await greet.mutateAsync(Keypair.generate());
//       // You can add any additional logic here after successfully marking attendance
//       console.log('Attendance marked successfully!');
//     } catch (error) {
//       console.error('Error marking attendance:', error);
//       // Handle error as needed
//     }
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       {confirmed && (<h2 className="text-2xl font-semibold">Attendance Marked Successfully!</h2>
//       )}
//       <button
//         className="btn btn-lg btn-primary"
//         onClick={handleMarkAttendance}
//         disabled={greet.isPending}
//       >
//         {greet.isPending ? 'Marking...' : 'Mark Attendance Again'}
//       </button>
//     </div>
//   );
// }