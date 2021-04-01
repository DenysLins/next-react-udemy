import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'
import { getAllEvents } from '../../data/dummy-data'

export default function EventsPage (props) {
  const events = props.events
  const router = useRouter()

  function findEventsHandler (year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events}></EventList>
      <div className="center">
        This page was generated at build time (Static Site Generation - SSG), in
        the build machine, and is revalidated every 5 minutes. These three
        Events were initially collected from the database in the build event.
      </div>
    </div>
  )
}

export async function getStaticProps () {
  return {
    props: {
      events: getAllEvents()
    },
    revalidate: 300
  }
}
