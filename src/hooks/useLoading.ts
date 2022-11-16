import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface ReturnType {
  isLoading: boolean;
  isLoadingText: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTrue: (text: string) => void;
  setFalse: (text: string) => void;
  toggle: (text: string) => void;
}

{
  /* How to Use */
}
{
  /*
  const { isLoading, isLoadingText, setLoading, setTrue, setFalse, toggle } = useLoading(false)
*/
}

const useLoading = (defaultValue?: boolean): ReturnType => {
  const [isLoading, setLoading] = useState(!!defaultValue);
  const [isLoadingText, setLoadingText] = useState('');

  const setTrue = useCallback((text: string) => {
    setLoading(true);
    setLoadingText(text);
  }, []);
  const setFalse = useCallback((text: string) => {
    setLoading(false);
    setLoadingText(text);
  }, []);
  const toggle = useCallback((text: string) => {
    setLoading((x) => !x);
    setLoadingText(text);
  }, []);

  return { isLoading, isLoadingText, setLoading, setTrue, setFalse, toggle };
};

export default useLoading;
