import React from 'react';

const EventSection = () => {
    const events = [
        {
          date: 'APR',
          day: '13',
          title: 'Meeting with clients',
          location: '41 madison ave, floor 24 new work, NY 10010',
          color: 'bg-orange-500'
        },
        {
          date: 'APR',
          day: '22',
          title: 'Developer Programme',
          location: '41 madison ave, floor 24 new work, NY 10010',
          color: 'bg-green-500'
        },
        {
          date: 'APR',
          day: '30',
          title: 'Anniversary Event',
          location: '41 madison ave, floor 24 new work, NY 10010',
          color: 'bg-green-500'
        }
    ];

    return (
        <div className="w-full bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg p-4 sm:p-5 shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Events</h2>
                <a href="#" className="text-blue-400 text-sm hover:underline">See all</a>
            </div>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                    >
                        {/* Date Block */}
                        <div
                            className={`flex-shrink-0 w-16 h-16 ${event.color} rounded-xl flex flex-col items-center justify-center text-white`}
                        >
                            <span className="text-xs uppercase tracking-wider">
                                {event.date}
                            </span>
                            <span className="text-xl font-bold">{event.day}</span>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold truncate">
                                {event.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                {event.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventSection;
