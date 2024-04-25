import React from 'react';

type DashboardCardProps = {
  title: string;
  color: string;
  content: JSX.Element;
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, color, content }) => {
  return (
    <div className="rounded-xl p-6 shadow-[2px_5px_10px_rgba(0,0,0,0.25)] flex flex-col flex-1">
      <div className="relative mb-6">
        <h2 className="font-bold text-2xl max-md:text-xl relative">{title}</h2>
        <div
          className="absolute -bottom-[6px] w-full h-[2px] rounded-xl"
          style={{ backgroundColor: `${color}1a` }}
        />
      </div>
      {content}
    </div>
  );
};

export default DashboardCard;
