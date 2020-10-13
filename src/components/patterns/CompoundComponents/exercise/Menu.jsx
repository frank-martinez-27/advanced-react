import React from "react";
import SideMenu from "react-burger-menu";

import withWidth, {
  LARGE
} from "../../HigherOrderComponents/exercise_2/withWidth";
import useWidth from '../../CustomHooks/exercise/useWidth';
import FloatingMenuBtn from "../../../FloatingMenuBtn";

const Menu = ({ isOpen, children, pageWrapId, toggleMenu }) => {
  const width = useWidth();
  return (
  <div>
    {width === LARGE ? "" : <FloatingMenuBtn toggleMenu={toggleMenu} />}
    <SideMenu.slide
      disableCloseOnEsc
      isOpen={isOpen}
      pageWrapId={pageWrapId || "page-wrap"}
    >
      {children}
    </SideMenu.slide>
  </div>
)};

export default Menu;
