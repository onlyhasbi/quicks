import React, {
  PropsWithChildren,
  createContext,
  useState,
} from 'react';

export type MenuContextType = {
  isMenuItemEnter: boolean;
  setIsMenuItemEnter: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [isMenuItemEnter, setIsMenuItemEnter] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuItemEnter, setIsMenuItemEnter }}>
      {children}
    </MenuContext.Provider>
  );
};


