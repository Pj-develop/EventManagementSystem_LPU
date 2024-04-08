//import React from "react";

const Recruit = () => {
  const recruits = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      isAvail: true,
      Remarks:
        "Available to Work Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora dolor doloremque laboriosam error aspernatur, maxime quibusdam neque. Temporibus accusamus quod aliquid qui ipsam fugit blanditiis in facere velit quisquam?",
    },
    {
      id: 2,
      name: "John Doe",
      position: "Software Engineer",
      isAvail: true,
      Remarks: "Available to Work",
    },
    {
      id: 3,
      name: "John Doe",
      position: "Software Engineer",
      isAvail: true,
      Remarks: "Available to Work",
    },
    {
      id: 4,
      name: "John Doe",
      position: "Software Engineer",
      isAvail: true,
      Remarks: "Available to Work",
    },
    {
      id: 5,
      name: "John Doe",
      position: "Software Engineer",
      isAvail: true,
      Remarks: "Available to Work",
    },

    // Add more recruits as needed
  ];

  return (
    <div className="recruit position-relative m-4">
      <div className="text-black font-bold text-2xl m-2 ">Recruitment</div>
      <div
        style={{
          display: "block",
          height: "400px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <div className=" flex flex-col md:flex-col  items-center ">
          {recruits.map((recruit) => (
            <div className=" p-3 w-full " key={recruit.id}>
              <div className="flex flex-col lg:flex-row bg-white rounded overflow-auto h-auto lg:h-33 border shadow shadow-lg">
                <img
                  className="block h-auto w-full lg:w-48 flex-none bg-cover h-24"
                  src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
                  alt="Card 1"
                />
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="text-black font-bold text-xl mb-2 leading-tight">
                    Name : {recruit.name}
                  </div>
                  <p className="text-grey text-base">
                    Position : {recruit.position}
                  </p>
                  <p className="text-grey text-base">
                    Availability :{" "}
                    {recruit.isAvail ? "Available" : "Not Available"}
                  </p>
                  <p className="text-grey text-base">
                    Remarks : {recruit.Remarks}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 font-bold overflow-hidden text-black font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                      <span className="relative font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Hire me !
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recruit;
