import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
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
    return <p className="center">Invalid filter. Please adjust your values!</p>
  }

  const events = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!events || events.length === 0) {
    return <p className="center">No events found!</p>
  }

  return <EventList events={events}></EventList>
}

export default FilteredEventsPage
