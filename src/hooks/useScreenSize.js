import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice("mobile");
      } else if (width < 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return device;
};

export default useScreenSize;
