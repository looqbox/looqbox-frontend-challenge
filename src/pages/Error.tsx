import React from 'react';
import { Button } from 'antd';
import { AiOutlineReload } from 'react-icons/ai';

const Error: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col gap-6 text-white p-2 grad bg-gradient-default">
      <img src="/error.png" className="w-[200px] h-[200px]" />
      <h1 className="text-4xl font-bold text-center">Oops! Something went wrong</h1>
      <a href="/">
        <Button size="large" type="primary" className="rounded-xl flex items-center gap-2">
          <AiOutlineReload size={20} /> Reload the page
        </Button>
      </a>
    </div>
  );
};

export default Error;
