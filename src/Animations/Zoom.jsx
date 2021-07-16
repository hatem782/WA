import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ZoomIn = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-duration={duration} data-aos-delay={delay}>
      {props.children}
    </div>
  );
};

const ZoomInUp = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomInDown = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomInLeft = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomInRight = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomOut = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-out"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomOutUp = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomOutDown = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-out-down"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomOutLeft = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-out-left"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const ZoomOutRight = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="zoom-out-right"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

export {
  ZoomIn,
  ZoomInDown,
  ZoomInLeft,
  ZoomInRight,
  ZoomInUp,
  ZoomOut,
  ZoomOutDown,
  ZoomOutLeft,
  ZoomOutRight,
  ZoomOutUp,
};
