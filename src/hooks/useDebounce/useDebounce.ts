import { useState, useEffect } from 'react';

const useDebounce = (value = '', delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    // 딜레이 시간 후에 debouncedValue를 업데이트하는 타이머 설정
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup: value가 변경되거나 컴포넌트가 unmount될 때 타이머를 초기화
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // value나 delay가 변경될 때마다 useEffect 재실행

  return debouncedValue;
};

export default useDebounce;
