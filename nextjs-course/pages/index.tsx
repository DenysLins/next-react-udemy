import { Fragment } from 'react'
import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../data/dummy-data'

export default function Home (props) {
  const featuredEvents = props.events

  return (
    <Fragment>
      <EventList events={featuredEvents} />
      <div className="center">
        This page was generated at build time (Static Site Generation - SSG), in
        the build machine. These two Featured Events were collected from the
        database in the build event.
      </div>
    </Fragment>
  )
}

export async function getStaticProps () {
  return {
    props: {
      events: getFeaturedEvents()
    }
  }
}
