import * as React from "react";
// import styled from "styled-components";

// const Trigger = styled.div``;

// const Options = styled.div``;

export interface MenuProps {
  trigger: React.FC;
}

const Menu: React.FC<MenuProps> = ({ trigger, children }) => {
  const Trigger = trigger;
  return (
    <div>
      <Trigger />
      <div>{children}</div>
    </div>
  );
};

export default Menu;
