import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events}></EventList>
    </div>
  );
}

export default EventsPage;
