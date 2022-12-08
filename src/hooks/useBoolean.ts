import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface ReturnType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

{
  /* How to Use */
}
{
  /*
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false)
*/
}

const useBoolean = (defaultValue?: boolean): ReturnType => {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
};

export default useBoolean;
