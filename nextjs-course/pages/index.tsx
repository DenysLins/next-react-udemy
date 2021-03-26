import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../data/dummy-data'

export default function Home (props) {
  const featuredEvents = props.events

  return <EventList events={featuredEvents} />
}

export async function getStaticProps () {
  return {
    props: {
      events: getFeaturedEvents()
    }
  }
}
