import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../utils";

interface MenuItemProps {
  url: string;
  text: string;
  icon?: React.ReactNode;
}

function MenuItem({ url, text, icon }: MenuItemProps) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (url === location.pathname) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, url]);

  return (
    <Link to={url}>
      <li
        className={cn(
          `flex gap-2 py-12 px-8 cursor-pointer items-center
            text-lg font-semibold
          `,
          isActive ? "border-b-red-500 border-b-4" : ""
        )}>
        {icon}
        {text}
      </li>
    </Link>
  );
}

export default MenuItem;
