import styles from '../../styles/event/event-item.module.css'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'
import Button from '../ui/button'

function EventItem (props) {
  const {
    id,
    image,
    title,
    date,
    location
  }: {
    id: string;
    image: string;
    title: string;
    date: string;
    location: string;
  } = props.event

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAddress = location.replace(', ', '\n')

  const exploreLink = `/events/${id}`

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}
export default EventItem
