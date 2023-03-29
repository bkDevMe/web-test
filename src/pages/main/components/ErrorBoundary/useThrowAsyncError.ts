import { useState } from 'react';

const useThrowAsyncError = () => {
  const [, setState] = useState();

  return (error: any) => {
    setState(() => {
      throw error;
    });
  };
};

export default useThrowAsyncError;
