import React, { useState } from 'react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      title: 'TechFest 2024',
      date: 'October 15, 2024',
      location: 'Main Auditorium',
      description: 'Join us for an exciting tech fest showcasing the latest innovations in AI, blockchain, and more!',
      image: 'https://plus.unsplash.com/premium_photo-1682125090365-58de6dbf8143?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGV2ZW50fGVufDB8fDB8fHww',
    },
    {
      title: 'Hackathon 2024',
      date: 'November 10, 2024',
      location: 'Innovation Lab',
      description: 'Compete in our 24-hour coding competition and win exciting prizes!',
      image: '',
    },
  ];

  const pastEvents = [
    {
      title: 'Robotics Workshop 2023',
      date: 'March 20, 2023',
      location: 'Tech Park',
      description: 'A hands-on workshop where students built their own robots.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTCE0auxzIXdrf5HKT_bf4N_n8ECxur4Fjg&s',
    },
    {
      title: 'Campus Compass',
      date: 'August 21, 2024',
      location: 'Main Hall',
      description: 'An insightful day discussing advancements in AI technology.',
      image: 'public/WhatsApp Image 2024-08-19 at 22.37.51_b3c807fc.jpg',
    },
  ];

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-page p-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Events</h1>
        <p className="text-gray-600 mt-2">
          Discover the exciting events we have conducted and the ones coming up!
        </p>
      </div>

      {/* Upcoming Events Section */}
      <section className="upcoming-events mb-16">
        <h2 className="text-3xl font-semibold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick(event)}
            >
              <img src={event.image} alt={event.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-500 mb-2">{event.date} - {event.location}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events">
        <h2 className="text-3xl font-semibold mb-8">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCardClick(event)}
            >
              <img src={event.image} alt={event.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-500 mb-2">{event.date} - {event.location}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative"
            style={{ minHeight: '70vh' }} // Increased height
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              X
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="h-60 w-full object-cover rounded-md mb-4" // Larger image height
            />
            <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="text-gray-500 mb-4">
              {selectedEvent.date} - {selectedEvent.location}
            </p>
            <p className="text-gray-700">{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
