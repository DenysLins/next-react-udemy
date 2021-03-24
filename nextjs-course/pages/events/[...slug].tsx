import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/results-title/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'
import { getFilteredEvents } from '../../dummy-data'

function FilteredEventsPage () {
  const router = useRouter()
  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2050 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const events = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <div className="center">
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events}></EventList>
    </Fragment>
  )
}

export default FilteredEventsPage
