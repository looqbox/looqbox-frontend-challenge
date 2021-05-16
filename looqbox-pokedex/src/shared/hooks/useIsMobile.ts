import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
