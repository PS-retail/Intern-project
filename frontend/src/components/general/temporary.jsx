import React, { useState, useEffect } from "react";

const Temporary = ({ children, waitAfterShow = 9000, completion }) => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    if (completion) {
      setTimeout(() => {
        setIsShown(false);
      }, waitAfterShow);
    }
  }, [waitAfterShow, completion]);

  return isShown ? children : null;
};

export default Temporary;
