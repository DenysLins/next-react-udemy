import { Fragment } from 'react'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getAllEvents, getEventById } from '../../data/dummy-data'
import { Event } from '../../types/event'

export default function EventsDetailPage (props) {
  const { event } = props

  if (!event) {
    return <div className="center">Loading...</div>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <div className="center">
        This dynamic page was generated at build time (Dynamic Static Site
        Generation - SSG), in the build machine.
      </div>
    </Fragment>
  )
}

export async function getStaticProps (context) {
  const { params } = context
  const eventId = params.eventId
  const event: Event = getEventById(eventId)
  return {
    props: {
      event: event
    }
  }
}

export async function getStaticPaths () {
  const events = getAllEvents()
  const ids = events.map((event) => event.id)
  const idParams = ids.map((id) => ({
    params: { eventId: id }
  }))

  return {
    paths: idParams,
    fallback: false
  }
}
