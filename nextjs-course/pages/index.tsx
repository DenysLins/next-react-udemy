import Head from "next/head";
import React from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EventList events={featuredEvents} />
      </main>
    </div>
  );
}
