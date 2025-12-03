'use client'
import eventsData from "../data/eventdata";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

type TabType = 'completed' | 'upcoming';

export default function EventsPage() {
  const [tab, setTab] = useState<TabType>('completed');
  const filteredEvents = eventsData.filter(e => tab === 'completed' ? e.completed : !e.completed).slice().reverse();

  return (
    <div className="min-h-screen bg-black py-20 px-4 md:px-40">
      <h1 className="text-6xl font-extrabold text-ieeeyellow mb-2 text-center">Events</h1>
      <p className="text-2xl text-center text-ieeeyellow mb-8">Discover our upcoming events</p>
      <div className="flex justify-center gap-8 mb-12">
        <button
          className={`text-lg font-semibold border-b-2 pb-1 transition-colors ${tab === 'completed' ? 'text-ieeeyellow border-ieeeyellow' : 'text-white border-transparent hover:text-ieeeyellow'}`}
          onClick={() => setTab('completed')}
        >
          COMPLETED
        </button>
        <button
          className={`text-lg font-semibold border-b-2 pb-1 transition-colors ${tab === 'upcoming' ? 'text-ieeeyellow border-ieeeyellow' : 'text-white border-transparent hover:text-ieeeyellow'}`}
          onClick={() => setTab('upcoming')}
        >
          UPCOMING
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className="flex flex-col items-center border-2 border-ieeeyellow/40 bg-gradient-to-b from-black/60 to-[#181818] rounded-3xl shadow-xl p-6 transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl"
          >
            <div className="w-full mx-auto mb-6 bg-black flex items-center justify-center rounded-xl overflow-hidden">
              <Image 
                src={event.imageUrl} 
                alt={event.title} 
                width={600}
                height={800}
                className="object-contain w-auto h-auto rounded-xl shadow-lg"
                unoptimized
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-left w-full">{event.title}</h2>
            <p className="text-white mb-4 text-left w-full">{event.description}</p>
            <Link href={`/events/${event.id}`} className="mt-auto w-full">
              <button className="w-full bg-ieeeyellow text-black font-bold py-2 rounded-full text-lg transition hover:bg-yellow-400">Know More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 