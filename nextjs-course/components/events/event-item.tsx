import Link from "next/link";

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
    <li>
      <img src={image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
