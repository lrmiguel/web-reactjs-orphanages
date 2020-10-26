import React from 'react';
import { createContext, useState } from "react";

interface MenuContextData {
  activeMenu: string;
  activateMenu: Function;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export function MenuProvider(props: any) {
  const { children } = props;
  const [activeMenu, setActiveMenu] = useState<string>('approved-orphanages');

  function activateMenu(activeMenuParam: string) {
    setActiveMenu(activeMenuParam);
  }

  return (
    <MenuContext.Provider value={{ activeMenu: activeMenu, activateMenu: activateMenu }} >
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContext;