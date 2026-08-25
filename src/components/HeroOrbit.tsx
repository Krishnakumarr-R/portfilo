import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={shouldOrbit ? "animate-spin" : ""}
        style={shouldOrbit ? { animationDuration: orbitDuration } : {}}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={`inline-flex ${shouldSpin ? "animate-spin" : ""}`}
            style={{
              transform: `rotate(${rotation * -1}deg)`,
              ...(shouldSpin ? { animationDuration: spinDuration } : {}),
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;

