import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Button
      className={`${visible ? 'opacity-1 z-50' : 'opacity-0 -z-50'} fixed transition-all duration-300 w-14 h-14 bottom-6 right-6 border-none shadow-[2px_5px_10px_rgba(0,0,0,0.5)] rounded-full flex items-center justify-center`}
      type="primary"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp size={32} />
    </Button>
  );
};

export default ScrollToTopButton;
