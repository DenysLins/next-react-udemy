import Link from "next/link";
import styles from "../../styles/event-item.module.css";

function EventItem(props) {
  const {
    id,
    image,
    title,
    date,
    location,
  }: {
    id: string;
    image: string;
    title: string;
    date: string;
    location: string;
  } = props.event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
