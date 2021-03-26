import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { getAllEvents } from '../../data/dummy-data'

function EventsPage () {
  const events = getAllEvents()
  const router = useRouter()

  function findEventsHandler (year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events}></EventList>
    </div>
  )
}

export default EventsPage
