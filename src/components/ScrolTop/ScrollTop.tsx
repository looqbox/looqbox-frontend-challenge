import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './ScrollTop.scss';

const ScrollTop: React.FC = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      const showButton = document.body.scrollTop > 230 || document.documentElement.scrollTop > 230;
      setShowScrollTopButton(showButton);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTheTop = (): void => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-top-button ${showScrollTopButton ? 'show' : ''}`} onClick={scrollToTheTop}>
      <FaChevronUp className="scroll-top-icon" />
    </div>
  );
};

export default ScrollTop;
