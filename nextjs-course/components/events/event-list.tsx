import styles from "../../styles/event-list.module.css";
import { Event } from "../../types/event";
import EventItem from "./event-item";

function EventList(props) {
  const { events }: { events: Event[] } = props;
  return (
    <div className={styles.list}>
      <ul>
        {events.map((event: Event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </ul>
    </div>
  );
}

export default EventList;
