//import React from "react";

const Membership = () => {
  const membership = [
    {
      StudentOrgId: "S001",
      StudentOrgName: "Pro-vertos",
      PositionAvailable:
        "Video Editor, Grahic designer, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png",
      FormsURL: "https://forms.gle/Jo5E8UK9AWUZaJrw9",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S002",
      StudentOrgName: "Undiscovered Path",
      PositionAvailable:
        "Anchor, Grahic designer, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png ",
      FormsURL: "https://docs.google.com/forms/d/e/1FAIpQLSdNBtQEWrmPaEf7fygjfg1xIAI6LP6V9ogEffmfNuFWX1oBWg/viewform?pli=1",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S003",
      StudentOrgName: "Coding Blocks",
      PositionAvailable:
        "Content writer, Grahic designer, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://codingblockslpu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.47c3c05d.png&w=256&q=75",
      FormsURL: "https://codingblockslpu.vercel.app/register",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S004",
      StudentOrgName: "Coding Ninjas",
      PositionAvailable:
        "Content writer, Grahic designer, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://coding-ninjas-lpu.netlify.app/img/cn-lpu-logo.png",
      FormsURL: "https://coding-ninjas-lpu.netlify.app/",
      Remarks: "Join us tobe part of the exciting Team ",
    },
{
      StudentOrgId: "S005",
      StudentOrgName: "Ignite",
      PositionAvailable:
        "Anchor, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png",
      FormsURL: "https://ignitelpu.netlify.app/",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S006",
      StudentOrgName: "KHOJ",
      PositionAvailable:
        "Anchor, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png",
      FormsURL: "https://docs.google.com/forms/d/e/1FAIpQLSeBTBi3OR9VGyvYKTQPYJYLr2NtOZVb0dz65P8eX3eow1DV9g/viewform",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S007",
      StudentOrgName: "Clubtwenty",
      PositionAvailable:
        "Anchor, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://www.clubtwenty.in/static/media/logo.e998488f94aea241fc6b.png",
      FormsURL: "https://www.clubtwenty.in/",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S008",
      StudentOrgName: "GeeksForGeeks",
      PositionAvailable:
        "Anchor, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png",
      FormsURL: "https://linktr.ee/gfgchapterlpu",
      Remarks: "Join us tobe part of the exciting Team ",
    },

{
      StudentOrgId: "S009",
      StudentOrgName: "Wissen",
      PositionAvailable:
        "Anchor, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png",
      FormsURL: "https://linktr.ee/wissen.org",
      Remarks: "Join us tobe part of the exciting Team ",
    },
{
      StudentOrgId: "S0010",
      StudentOrgName: "Spade",
      PositionAvailable:
        "Anchor, Marketing Head,Tech Head",
      isHiring: true,
      LogoURL:
        "https://spade-corporate.s3.eu-north-1.amazonaws.com/common/1.png",
      FormsURL: "https://www.instagram.com/spade.events/",
      Remarks: "Join us tobe part of the exciting Team ",
    },
    // Add more recruits as needed
  ];

  return (
    <div className="recruit position-relative m-4">
      <div className="text-black font-bold text-2xl m-4 ">
        {/* Student Outreach Programs */}
        Recrutment Drive for Students
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
