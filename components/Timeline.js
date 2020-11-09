import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = ({ doc }) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Sed Malesuada</h3>
        <h4 className="vertical-timeline-element-subtitle">Risus Quam</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          risus at quam varius congue. Sed mollis semper leo et tristique. Fusce
          eget tellus ac lacus ornare pellentesque ut eu dui.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Sit Amet</h3>
        <h4 className="vertical-timeline-element-subtitle">Ipsum Lorem</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          risus at quam varius congue. Sed mollis semper leo et tristique.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Lacus Enim Nec Justo
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Nisl Dolor</h4>
        <p>
          Phasellus molestie, augue id mattis interdum, nisl dolor auctor augue,
          sit amet efficitur lacus enim nec justo. Aliquam malesuada ornare
          faucibus. Ut quis mi rutrum, pulvinar sem sit amet, laoreet nisl.{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Torqnt per conibua</h3>
        <h4 className="vertical-timeline-element-subtitle">Class Aptent</h4>
        <p>
          Morbi suscipit blandit accumsan. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Fusce in
          ante lectus.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Nec Purus Vulputate</h3>
        <h4 className="vertical-timeline-element-subtitle">Mauris Facilisis</h4>
        <p>
          Praesent auctor tempor lacus quis aliquet. Praesent nec purus
          vulputate, mattis leo non, mollis odio. Mauris facilisis nunc quis
          efficitur congue. Nunc tincidunt odio vel odio dapibus, a pulvinar
          lacus ullamcorper. Nam vehicula dictum convallis. Sed sapien nisi,
          mattis non massa eu, ullamcorper elementum erat.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Aliquam Malesuada</h3>
        <h4 className="vertical-timeline-element-subtitle">Lacus Enim</h4>
        <p>
          Phasellus molestie, augue id mattis interdum, nisl dolor auctor augue,
          sit amet efficitur lacus enim nec justo. Aliquam malesuada ornare
          faucibus. Ut quis mi rutrum, pulvinar sem sit amet, laoreet nisl.{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Phaseullus Ultrices</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Egestats et Lorem
        </h4>
        <p>
          Nunc est sapien, porttitor ac accumsan eu, egestas et lorem. Vivamus
          eget sapien ut quam dapibus suscipit a sit amet neque. Phasellus
          ultrices orci odio, ut egestas felis convallis non. Cras et vestibulum
          turpis.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
