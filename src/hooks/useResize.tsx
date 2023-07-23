import { useEffect, useLayoutEffect, useState } from "react";

function useResize() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isDeviceTypeMobile, setIsDeviceTypeMobile] = useState<boolean>(false)

  useLayoutEffect(() => {
    const SCREEN_SIZE_MOBILE = 768;
    
    const handleResize = () => {
      if (screenWidth <= SCREEN_SIZE_MOBILE) {
        setScreenWidth(window.innerWidth);
        setIsDeviceTypeMobile(true)
      } 
      if (screenWidth > SCREEN_SIZE_MOBILE) {
        setScreenWidth(window.innerWidth);
        setIsDeviceTypeMobile(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    console.log(isDeviceTypeMobile);
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [isDeviceTypeMobile, screenWidth])
  return {
    isDeviceTypeMobile,
    screenWidth
  };
}

export default useResize;