import eventsData from "../../data/eventdata";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlayCircle } from "react-icons/fa";

export async function generateStaticParams() {
  return eventsData.map(event => ({ slug: event.id.toString() }));
}

const EventPage = ({ params }: { params: { slug: string } }) => {
  const slug = parseInt(decodeURIComponent(params.slug).toLowerCase());
  const event = eventsData.find((x) => x.id === slug);
  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#181818] to-[#222] py-20 flex flex-col items-center px-2 md:px-0">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center mb-12 overflow-hidden">
        {/* Banner image with overlay */}
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover w-full h-full rounded-t-3xl"
            style={{objectPosition: 'center'}} 
          />
          {}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent rounded-t-3xl" />
          {/* Title and meta info overlay */}
          <div className="absolute left-0 right-0 bottom-0 px-6 pb-6 flex flex-col gap-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-ieeeyellow drop-shadow-lg mb-1">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-white text-base">
              <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-lg">
                <FaCalendarAlt className="text-ieeeyellow" />
                <span>{event.dateAndTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-lg">
                <FaMapMarkerAlt className="text-ieeeyellow" />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Description below image */}
        <div className="w-full bg-white/5 rounded-b-3xl p-8 text-lg text-white shadow-inner border-t border-white/10">
          <span className="font-semibold text-ieeeyellow">Description:</span> {event.description}
        </div>
      </div>
      {event.isGallery && event.gallery && event.gallery.length > 0 && (
        <div className="w-full max-w-7xl mt-2">
          <h2 className="text-3xl font-bold text-ieeeyellow mb-8 text-center drop-shadow">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {event.gallery.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-black rounded-2xl shadow-2xl overflow-hidden group border border-white/10 w-full max-w-[700px] flex items-center justify-center mx-auto"
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.url}
                    alt="Event gallery"
                    width={700}
                    height={600}
                    className="object-contain w-full h-auto max-h-[600px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl bg-black rounded-2xl"
                    unoptimized
                  />
                ) : (
                  <>
                    <video
                      controls
                      width={700}
                      height={600}
                      className="object-contain w-full h-auto max-h-[600px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl bg-black rounded-2xl mx-auto"
                      poster={event.imageUrl}
                    >
                      <source src={item.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <FaPlayCircle className="absolute text-ieeeyellow text-5xl opacity-80 pointer-events-none drop-shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage; 