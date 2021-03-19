import classes from "../../styles/event/event-summary.module.css";

function EventSummary(props) {
  const { title }: { title: string } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
