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
        <div className=" ml-2 w-[23rem] bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg p-5 shadow-md lg:w-[300px] h-[320px] mb-5">
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-xl font-semibold">Events</h2>
                <a href="#" className="text-blue-400 text-sm hover:underline">See all</a>
            </div>
            <div className="space-y-4">
  {events.map((event, index) => (
    <div
      key={index}
      className="flex items-center p-2 rounded-lg "
      style={{ width: "370px", height: "71px" }}
    >
      {/* Bloc de couleur pour la date */}
      <div
        className={`w-[64px] h-[71px] flex flex-col items-center justify-center rounded-xl text-white font-bold ${event.color}`}
        style={{
          borderRadius: "16px",
        }}
      >
        {/* Mois */}
        <span
          className="text-xs uppercase"
          style={{
            fontSize: "12px",
            lineHeight: "14px",
            letterSpacing: "1px",
            marginBottom: "2px",
          }}
        >
          {event.date}
        </span>
        {/* Jour */}
        <span
          className="font-bold text-2xl"
          style={{
            fontSize: "24px",
            lineHeight: "24px",
          }}
        >
          {event.day}
        </span>
      </div>

      {/* Texte de l'événement */}
      <div className="ml-4"style={{ width: "163px"}}>
        <h3
          className="font-semibold"
          style={{
            fontSize: "14px",
            lineHeight: "18px",
            marginBottom: "4px",
          }}
        >
          {event.title}
        </h3>
        <p
          className="text-xs text-gray-400"
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            color: "#9ca3af",
          }}
        >
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
