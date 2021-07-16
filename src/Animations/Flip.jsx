import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FlipUp = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="flip-up" data-aos-duration={duration} data-aos-delay={delay}>
      {props.children}
    </div>
  );
};

const FlipDown = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="flip-down"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FlipLeft = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="flip-left"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};

const FlipRight = (props) => {
  const { delay = 0, duration = 1000 } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="flip-right"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {props.children}
    </div>
  );
};



export { 
    FlipUp, FlipDown, FlipLeft, FlipRight,
};
