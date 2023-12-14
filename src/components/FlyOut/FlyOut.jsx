import React, { useState } from 'react';
import { createContext, useContext } from 'react';

// Context Create
const FlyOutContext = createContext();

// Provider
export function FlyOut({ children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  const providerValue = { open, toggle };
  return (
    <FlyOutContext.Provider value={providerValue}>
      {children}
    </FlyOutContext.Provider>
  );
}

// Children Component
function Toggle() {
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <div
      className="absolute p-[10px] h-[50px] border bg-black"
      onClick={() => toggle(!open)}
    >
      토글
    </div>
  );
}

function List({ children }) {
  const { open } = useContext(FlyOutContext);

  return (
    open && (
      <ul className="absolute top-[50px] bg-[skyblue] px-[10px]">{children}</ul>
    )
  );
}

function Item({ children }) {
  return <li>{children}</li>;
}

// Toggle 컴포넌트가 FlyOutContext 프로바이더에 접근할 수 있도록 해당 컴포넌트는 FlyOut의 자식 컴포넌트로 렌더링 해야한다.
FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
