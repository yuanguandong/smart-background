
import React, { useState } from "react";
import Keyevent from "react-keyevent";

const RightSide = (props: any) => {
  const { collapsed } = props;
  const [count, setCount] = useState(0);
  const onMetaR = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="RightSide"
      events={{
        onMetaR,
      }}
      needFocusing
      style={{ width: collapsed ? "calc(100% - 40px)" : "calc(100% - 200px)" }}
    >
      <div className="group">
        <span className="key">Meta(Win/Commond)</span>
        <span className="key">R</span>
        <span className="count">{count}</span>
      </div>
    </Keyevent>
  );
};

export default RightSide
