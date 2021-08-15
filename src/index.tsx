import React, { ReactNode } from "react";
import { getPosition } from "./utils";

const styles: any = {
  SmartBackground: {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  }
};
interface SmartBackgroundProps {
  symbols?: [string | ReactNode][];
  opacity?: number;
  color?: string;
}

const SmartBackground = (props: SmartBackgroundProps) => {
  const { opacity, color, symbols = ["+", <>你好</>, "🕹"] } = props;
  return (
    <>
      <div style={styles.SmartBackground}>
        {symbols.map((item) => {
          return (
            <div
              style={{position: "absolute", ...getPosition(), opacity, color }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SmartBackground;
