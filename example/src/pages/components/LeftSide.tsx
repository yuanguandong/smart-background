
import React, { useState } from "react";
import Keyevent from "react-keyevent";

const LeftSide = (props: any) => {
  const { collapsed } = props;
  const [count, setCount] = useState(0);
  const onCtrlL = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="LeftSide"
      events={{
        onCtrlL,
      }}
      needFocusing
      style={{ width: collapsed ? 40 : 200 }}
    >
      {!collapsed && (
        <div className="group">
          <span className="key">Ctrl</span>
          <span className="key">L</span>
          <span className="count">{count}</span>
        </div>
      )}
    </Keyevent>
  );
};

export default LeftSide