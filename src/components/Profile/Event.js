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
        <div className="bg-white dark:bg-[#1B2136] dark:text-[#FFFFFF] rounded-lg p-5 shadow-md w-auto h-[370px] mb-5">
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-xl font-semibold">Events</h2>
                <a href="#" className="text-blue-400 text-sm hover:underline">See all</a>
            </div>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div key={index} className="flex items-center p-1 rounded-lg">
                        {/* Bloc de couleur avec le mois en haut et le jour plus grand au centre */}
                        <div className={`w-[120px] h-[71px] flex flex-col items-center justify-center rounded-lg text-white font-bold ${event.color}`}>
                            {/* Mois en haut avec taille de police augmentée */}
                            <span className="text-lg uppercase">{event.date}</span>
                            {/* Jour centré et plus grand, sans marge */}
                            <span className="font-semibold text-3xl ls-3 lh-1 text-white">{event.day}</span>
                        </div>

                        <div className="ml-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-base mt-2">{event.title}</h3>
                            <p className="text-sm text-gray-400">{event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventSection;
