import { useEffect, useState } from 'react';

export function useIsMounted() {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return isMounted;
}
