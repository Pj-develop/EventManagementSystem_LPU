/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import ImageCarousel from "./Carousel";

export default function IndexPage() {
  const [events, setEvents] = useState([]);

  //! Fetch events from the server ---------------------------------------------------------------
  useEffect(() => {
    axios
      .get("/createEvent")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  //! Like Functionality --------------------------------------------------------------
  const handleLike = (eventId) => {
    axios
      .post(`/event/${eventId}`)
      .then((response) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === eventId ? { ...event, likes: event.likes + 1 } : event
          )
        );
        console.log("done", response);
      })
      .catch((error) => {
        console.error("Error liking ", error);
      });
  };

  return (
    <>
      <div className="mt-1 flex flex-col">
        {/* Banner-Corousel */}
        {/* <div className="hidden sm:block"> */}
        <ImageCarousel />
        {/* </div> */}

        <div className="mx-10 my-5 grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-5 ">
          {/*-------------------------- Checking whether there is a event or not-------------------  */}
          {events.length > 0 &&
            events.map((event) => {
              const eventDate = new Date(event.eventDate);
              const currentDate = new Date();

              //! Check the event date is passed or not ---------------------------------------------------------------------------------------
              if (
                eventDate > currentDate ||
                eventDate.toDateString() === currentDate.toDateString()
              ) {
                return (
                  <div className="bg-white rounded-xl relative" key={event._id}>
                    <div className="rounded-tl-[0.75rem] rounded-tr-[0.75rem] rounded-br-[0] rounded-bl-[0] object-fill aspect-16:9">
                      {event.image && (
                        <img
                          src={`http://localhost:4000/api/${event.image}`}
                          alt={event.title}
                          width="300"
                          height="200"
                          className="w-full h-full"
                        />
                      )}
                      <div className="absolute flex gap-4 bottom-[240px] right-8 md:bottom-[20px] md:right-3 lg:bottom-[250px] lg:right-4 sm:bottom-[260px] sm:right-3">
                        <button onClick={() => handleLike(event._id)}>
                          <BiLike className="w-auto h-12 lg:h-10 sm:h-12 md:h-10 bg-white p-2 rounded-full shadow-md transition-all hover:text-primary" />
                        </button>
                      </div>
                    </div>

                    <img
                      src="../src/assets/paduru.png"
                      alt=""
                      className="rounded-tl-[0.75rem] rounded-tr-[0.75rem] rounded-br-[0] rounded-bl-[0] object-fill aspect-16:9"
                    />
                    {/* FIXME: This is a demo image after completing the create event function delete this */}

                    <div className="m-2 grid gap-2">
                      <div className="flex justify-between items-center">
                        <h1 className="font-bold text-lg mt-2">
                          {event.title.toUpperCase()}
                        </h1>
                        <div className="flex gap-2 items-center mr-4 text-red-600">
                          {" "}
                          <BiLike /> {event.likes}
                        </div>
                      </div>

                      <div className="flex text-sm flex-nowrap justify-between text-red-700 font-bold mr-4">
                        <div>
                          {event.eventDate.split("T")[0]}, {event.eventTime}
                        </div>
                        <div>
                          {event.ticketPrice === 0
                            ? "Free"
                            : "Rs. " + event.ticketPrice}
                        </div>
                      </div>

                      <div className="text-xs flex flex-col flex-wrap truncate-text">
                        {event.description}
                      </div>
                      <div className="flex justify-between items-center my-2 mr-4">
                        <div className="text-sm text-red-700 ">
                          Organized By: <br />
                          <span className="font-bold">{event.organizedBy}</span>
                        </div>
                        <div className="text-sm text-red-700 ">
                          Created By: <br />{" "}
                          <span className="font-semibold">
                            {event.owner.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={"/event/" + event._id}
                        className="flex justify-center"
                      >
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 font-bold overflow-hidden text-black font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 p-2">
                          Book Ticket
                          <BsArrowRightShort className="w-6 h-6" />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </>
  );
}
