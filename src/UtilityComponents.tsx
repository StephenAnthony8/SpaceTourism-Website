import { useEffect, useState, type JSX } from "react";
import { useMediaQuery } from "react-responsive";
import { CurrentDeviceSize, mobile, tablet } from "./Store";

/**
 * CurrentDevice: Uses ContextProvider 'CurrentDeviceSize' to provide mediaQuery size to components
 *
 * children: JSX.ELement to be rendered within the context provision
 */
export const CurrentDevice = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
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