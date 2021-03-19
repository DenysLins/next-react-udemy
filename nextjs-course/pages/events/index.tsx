import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventSearch />
      <EventList events={events}></EventList>
    </div>
  );
}

export default EventsPage;
