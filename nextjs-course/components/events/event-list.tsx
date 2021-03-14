import { Event } from "../../types/event";
import EventItem from "./event-item";

function EventList(props) {
  const { events }: { events: Event[] } = props;
  return (
    <ul>
      {events.map((event: Event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
}

export default EventList;
