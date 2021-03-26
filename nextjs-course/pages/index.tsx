import { Fragment } from 'react'
import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../data/dummy-data'

export default function Home (props) {
  const featuredEvents = props.events

  return (
    <Fragment>
      <EventList events={featuredEvents} />
      <div className="center">This page was generated at build time, in the build machine</div>
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
