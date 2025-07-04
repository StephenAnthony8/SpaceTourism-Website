/**
 * UtilityComponents.tsx
 *
 * Provides utility React components and context providers for the Space Tourism website.
 * Includes device context and responsive utilities for child components.
 */

import { useContext, useEffect, useState, type JSX } from "react";
import { useMediaQuery } from "react-responsive";
import { CurrentDeviceSize, mobile, NavMobileState, tablet } from "./Store";

/**
 * CurrentDevice component for the Space Tourism website.
 * Provides the current device type (Mobile, Tablet, Desktop) to child components using the CurrentDeviceSize ContextProvider and media queries.
 *
 * @param {object} props - The component props.
 * @param {JSX.Element|JSX.Element[]} props.children - Elements to be rendered within the context provider.
 * @returns {JSX.Element} The rendered CurrentDevice context provider.
 */
export const CurrentDevice = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}): JSX.Element => {
  const [deviceType, setDeviceType] = useState<string>("Desktop");
  const deviceTablet: boolean = useMediaQuery(tablet);
  const deviceMobile: boolean = useMediaQuery(mobile);

  useEffect(() => {
    if (deviceMobile) {
      setDeviceType("Mobile");
    } else if (deviceTablet) {
      setDeviceType("Tablet");
    } else {
      setDeviceType("Desktop");
    }
  }, [deviceType, deviceMobile, deviceTablet]);

  return (
    <CurrentDeviceSize.Provider value={deviceType}>
      {children}
    </CurrentDeviceSize.Provider>
  );
};


export const NavMobileSetter = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const deviceType = useContext(CurrentDeviceSize);
  const [active, setActive] = useState<boolean>(false);
  const activeObj = {active, setActive};


  useEffect(() => {

    if (deviceType !== "Mobile") {
      setActive(false);
    }
    
  }, [deviceType]);
  

  return (
    <NavMobileState.Provider value={activeObj}>
      {children}
    </NavMobileState.Provider>
  );
};
