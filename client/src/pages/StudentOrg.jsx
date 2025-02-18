//import React from "react";

function StudentOrg() {
  // Sample JSON data
  const sampleData = [
 
{
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
    {
      title: "Clubtwenty",
      description:
        "ClubTwenty: Where Limitless Possibilities Await",
      imageUrl:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      link: "https://www.clubtwenty.in/",
    },
  
   
// Add more sample data as needed
  ];

  return (
    <div className="recruit position-relative m-4">
      <div className="text-black font-bold text-2xl m-2 ">
        Active Student Organizations
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflowX: "auto", // Enable horizontal scrolling
          width: "100%", // Set width to 100% to ensure it takes the full width of the container
        }}
      >
        {/* Map over sampleData and generate a card for each object */}
        {sampleData.map((data, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 mx-2" // Add mx-2 for horizontal spacing between cards
          >
            <a href={data.link}>
              <img className="rounded-t-lg" src={data.imageUrl} alt="" />
            </a>
            <div className="p-5">
              <a href={data.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {data.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
              <a
                href={data.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-red-300 "
              >
                Know More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentOrg;
