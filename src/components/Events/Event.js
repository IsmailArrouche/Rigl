import React from 'react';

const Event = () => {
    const events = [
        {
            date: 'FEB 22',
            title: 'Right here Right Now - Comedy',
            location: 'Goa, Mumbai',
            image: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            date: 'FEB 22',
            title: 'Comedy and Poetry',
            location: 'Goa, Mumbai',
            image: 'https://sociala.uitheme.shop/assets/images/e-1.jpg'
        },
        {
            date: 'FEB 22',
            title: 'Mohd Suhels Guide to the Galaxy',
            location: 'Goa, Mumbai',
            image: 'https://sociala.uitheme.shop/assets/images/e-5.jpg'
        },
    ];

    return (
        <div className="min-h-screen text-white py-8">
            {/* Map Section */}
            <div className="w-4/5 mx-auto h-96 mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.080692312989!2d144.9649611154438!3d-37.81520674231461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb0f7f1b8d89a54b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1679833166545!5m2!1sen!2sau"
                    title="Map"
                    className="w-full h-full rounded-lg shadow-lg"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Event Cards Section */}
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => {
                    const [month, day] = event.date.split(' '); // Séparation du mois et du jour
                    return (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-3xl w-80 h-96 shadow-lg p-6 flex flex-col"
                        >
                            {/* Image */}
                            <div className="w-full">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>

                            {/* Contenu */}
                            <div className="w-full mt-4 flex items-center">
                                {/* Date */}
                                <div className="bg-gray-800 border-[3px] border-white text-white font-bold w-16 h-20 flex flex-col items-center justify-center rounded-2xl">
                                    <span className="text-xs uppercase">{month}</span>
                                    <span className="text-2xl">{day}</span>
                                </div>

                                {/* Titre et Lieu */}
                                <div className="flex-1 ml-4">
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">{event.location}</p>
                                </div>
                            </div>

                            {/* Participants et bouton */}
                            <div className="flex items-center justify-between mt-4">
                                {/* Participants */}
                                <div className="flex -space-x-2">
                                    <img
                                        src="https://sociala.uitheme.shop/assets/images/user-6.png"
                                        alt="participant 1"
                                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                                    />
                                    <img
                                        src="https://sociala.uitheme.shop/assets/images/user-7.png"
                                        alt="participant 2"
                                        className="w-8 h-8 rounded-full border-2 border-gray-800"
                                    />
                                    <div className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs border-2 border-gray-800">
                                        +2
                                    </div>
                                </div>

                                {/* Bouton */}
                                <button className="bg-green-500 text-white px-4 py-1 rounded text-sm hover:bg-green-600 font-bold">
                                    APPLY
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Event;
