import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RichText } from "prismic-reactjs";

const Timeline = ({ doc }) => {
  console.log(doc);
  return (
    <section className="section section-timeline">
      <VerticalTimeline>
        {doc.items.map((item, key) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={RichText.asText(item.timeline_item_date)}
            iconStyle={{ background: "rgb(85,122,149)", color: "#fff" }}
            key={key}
          >
            <div className="vertical-timeline-element-title">
              <RichText render={item.timeline_item_title} />
            </div>
            <div className="vertical-timeline-element-subtitle">
              <RichText render={item.timeline_item_tagline} />
            </div>
            <div>
              <RichText render={item.timeline_item_content} />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
