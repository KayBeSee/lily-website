import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = ({ url: BASE_URL }) => {
  const [width, setWidth] = useState(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isDesktop = width >= 768;
  let url = BASE_URL;
  if (isDesktop) {
    var dateObject = new Date(Date.now());
    var month = dateObject.getMonth() + 1;
    var day = dateObject.getDate();
    var year = dateObject.getFullYear();

    var date = [
      year,
      month < 10 ? `0${month}` : month,
      day < 10 ? `0${day}` : day,
    ].join("-");

    url = BASE_URL.concat(`?date=${date}`);
  }

  return (
    <InlineWidget
      url={url}
      styles={{
        height: "655px",
        margin: 0,
      }}
      pageSettings={{
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        primaryColor: "059669",
      }}
    />
  );
};

export default CalendlyWidget;
