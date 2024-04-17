import React, { useMemo } from "react";
import { ISpinner } from "./interface";

export const Spinner: React.FC<ISpinner> = ({
  backgroundColor,
  speedMultiplier = 1.5,
  radius = 3,
  scale = 1,
  className,
}) => {
  const height = 6;
  const width = 2;
  const size = 1;
  const radiusValue = size + 7.6;
  const quarter = radiusValue / 2 + radiusValue / 5.5;
  const wrapperLength = radiusValue * 3;
  const dashWidth = width;
  const dashMiddle = width / 2;
  const dashHeight = height;

  const createAnimation = (
    loaderName: string,
    frames: string,
    suffix: string
  ): string => {
    const animationName = `react-spinners-${loaderName}-${suffix}`;

    if (typeof window == "undefined" || !window.document) {
      return animationName;
    }

    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;

    const keyFrames = `
      @keyframes ${animationName} {
        ${frames}
      }
    `;

    if (styleSheet) {
      styleSheet.insertRule(keyFrames, 0);
    }

    return animationName;
  };

  const getAnimation = useMemo(() => {
    const animations: { [key: number]: string } = {
      1: createAnimation(
        "FadeLoader1",
        "0% {opacity: 0.5; transform: scale(0.4);} 50% {opacity: 1; transform: scale(1);} 100% {opacity: 0.5; transform: scale(0.5);}",
        "fade1"
      ),
      2: createAnimation(
        "FadeLoader2",
        "0% {opacity: 0.5; transform: scale(0.4) rotate(45deg);} 50% {opacity: 1; transform: scale(1) rotate(45deg);} 100% {opacity: 0.5; transform: scale(0.5) rotate(45deg);}",
        "fade2"
      ),
      3: createAnimation(
        "FadeLoader3",
        "0% {opacity: 0.5; transform: scale(0.4) rotate(90deg);} 50% {opacity: 1; transform: scale(1) rotate(90deg);} 100% {opacity: 0.5; transform: scale(0.5) rotate(90deg);}",
        "fade3-7"
      ),
      4: createAnimation(
        "FadeLoader4",
        "0% {opacity: 0.5; transform: scale(0.4) rotate(-45deg);} 50% {opacity: 1; transform: scale(1) rotate(-45deg);} 100% {opacity: 0.5; transform: scale(0.5) rotate(-45deg);}",
        "fade4"
      ),
      5: createAnimation(
        "FadeLoader",
        "0% {opacity: 0.5; transform: scale(0.4);} 50% {opacity: 1; transform: scale(1);} 100% {opacity: 0.5; transform: scale(0.5);}",
        "fade"
      ),
      6: createAnimation(
        "FadeLoader6",
        "0% {opacity: 0.5; transform: scale(0.4) rotate(45deg);} 50% {opacity: 1; transform: scale(1) rotate(45deg);} 100% {opacity: 0.5; transform: scale(0.5) rotate(45deg);}",
        "fade6"
      ),
      7: createAnimation(
        "FadeLoader7",
        "0% {opacity: 0.5; transform: scale(0.4) rotate(90deg);} 50% {opacity: 1; transform: scale(1) rotate(90deg);} 100% {opacity: 0.5; transform: scale(0.5) rotate(90deg);}",
        "fade7"
      ),
      8: createAnimation(
        "FadeLoader8",
        "0% {opacity: 0.5; transform: scale(0.4) rotate(-45deg);} 50% {opacity: 1; transform: scale(1) rotate(-45deg);} 100% {opacity: 0.5; transform: scale(0.5) rotate(-45deg);}",
        "fade8"
      ),
    };
    return (i: number) => animations[i];
  }, []);

  const wrapper: React.CSSProperties = {
    display: "inherit",
    position: "relative",
    fontSize: "0",
    top: "0",
    left: "0",
    width: `${wrapperLength}px`,
    height: `${wrapperLength}px`,
    transform: `scale(${scale})`,
  };

  const style = (i: number): React.CSSProperties => {
    return {
      position: "absolute",
      width: width,
      height: height,
      backgroundColor: backgroundColor ?? "#",
      borderRadius: radius,
      transition: "2s",
      animationFillMode: "both",
      animation: `${getAnimation(i)} ${speedMultiplier}s ${
        i * 0.12
      }s infinite ease-in-out`,
    };
  };

  const styles: React.CSSProperties[] = [
    {
      ...style(1),
      top: `0px`,
      left: `${wrapperLength / 2 - dashMiddle}px`,
    },
    {
      transform: "rotate(45deg)",
      ...style(2),
      top: `${quarter - 3 * dashMiddle}px`,
      left: `${wrapperLength - quarter}px`,
    },
    {
      transform: "rotate(90deg)",
      ...style(3),
      top: `${wrapperLength / 2 - dashWidth}px`,
      left: `${wrapperLength - 3 * dashMiddle - 0.2}px`,
    },
    {
      transform: "rotate(-45deg)",
      ...style(4),
      top: `${wrapperLength - 2 * dashMiddle - quarter}px`,
      left: `${wrapperLength - quarter}px`,
    },
    {
      ...style(5),
      top: `${wrapperLength - dashHeight + dashMiddle}px`,
      left: `${wrapperLength / 2 - dashMiddle}px`,
    },
    {
      transform: "rotate(45deg)",
      ...style(6),
      top: `${wrapperLength - 2 * dashMiddle - quarter}px`,
      left: `${quarter - dashMiddle}px`,
    },
    {
      transform: "rotate(90deg)",
      ...style(7),
      top: `${wrapperLength / 2 - dashWidth}px`,
      left: `${dashMiddle + 0.2}px`,
    },
    {
      transform: "rotate(-45deg)",
      ...style(8),
      top: `${quarter - 3 * dashMiddle}px`,
      left: `${quarter - dashWidth}px`,
    },
  ];

  return (
    <span style={wrapper}>
      {styles.map((style, i) => (
        <span key={i} className={className} style={style} />
      ))}
    </span>
  );
};
