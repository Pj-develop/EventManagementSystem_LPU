//import React from "react";

const Membership = () => {
  const membership = [
    {
      StudentOrgId: "S001",
      StudentOrgName: "GDSC LPU",
      PositionAvailable:
        "Video Editor, Grahic designer, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://avatars.githubusercontent.com/u/110783469?s=400&u=2c1d8b9efc99c46085e92360c4dfc296572f8ef2&v=4",
      FormsURL: "https://www.google.com/",
      Remarks: "Join us tobe part of the exciting Team ",
    },

    // Add more recruits as needed
  ];

  return (
    <div className="recruit position-relative m-4">
      <div className="text-black font-bold text-2xl m-4 ">
        Student Outreach Programs
      </div>
      <div
        style={{
          display: "block",
          height: "400px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <div className=" flex flex-col md:flex-col  items-center ">
          {membership.map((membership) => (
            <div className=" p-3 w-full " key={membership.StudentOrgId}>
              <div className="flex flex-col lg:flex-row bg-white rounded overflow-auto h-auto lg:h-33 border shadow shadow-lg">
                <img
                  className="block h-auto w-full lg:w-48 flex-none bg-cover h-24"
                  src={membership.LogoURL}
                  alt="Card 1"
                />
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="text-black font-bold text-xl mb-2 leading-tight">
                    Name : {membership.StudentOrgName}
                  </div>
                  <p className="text-grey text-base">
                    Positions Available: {membership.PositionAvailable}
                  </p>
                  <p className="text-grey text-base">
                    Availability :{" "}
                    {membership.isHiring
                      ? "Hiring Currently"
                      : "Currently Not Hiring "}
                  </p>
                  <p className="text-grey text-base">
                    Remarks : {membership.Remarks}
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href={membership.FormsURL}
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 font-bold overflow-hidden text-black font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                      <span className="relative font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white white:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Join Us
                      </span>
                    </a>
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

export default Membership;
