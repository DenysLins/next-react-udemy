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
        the build machine, and is revalidated every 5 minutes. These two
        Featured Events were initially collected from the database in the build
        event.
      </div>
    </Fragment>
  )
}

export async function getStaticProps () {
  return {
    props: {
      events: getFeaturedEvents()
    },
    revalidate: 300
  }
}
