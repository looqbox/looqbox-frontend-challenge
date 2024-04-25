import React from 'react';
import { Button } from 'antd';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col gap-6 text-white p-2 bg-gradient-default">
      <img src="/error.png" className="w-[200px] h-[200px]" />
      <h1 className="text-4xl font-bold text-center">Oops! Page not found</h1>
      <Link to="/">
        <Button size="large" type="primary" className="rounded-xl flex items-center gap-2">
          <FaExternalLinkAlt size={20} />
          Go to the home page
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
