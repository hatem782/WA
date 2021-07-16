import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FadeUp = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration={duration} data-aos-delay={delay}>
      {props.children}
    </div>
  );
};

const FadeDown = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FadeLeft = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FadeRight = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FadeUpRight = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up-right"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FadeUpLeft = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up-left"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FadeDownRight = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-down-right"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FadeDownLeft = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-down-left"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

export {
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  FadeUpLeft,
  FadeUpRight,
  FadeDownLeft,
  FadeDownRight,
};
