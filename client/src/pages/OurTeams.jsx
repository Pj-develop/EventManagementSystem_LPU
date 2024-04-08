//import React from "react";
import { Link, Navigate } from "react-router-dom";
const OurTeam = () => {
  return (
    <section className="secondary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Meet with the Our Team
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {/* Individual team member components */}
          <TeamMember
            imgSrc="https://avatars.githubusercontent.com/u/110783469?s=400"
            name="Priyanshu Jha"
            role="Web Developer"
            description="Born developer & technical strategy of the  platform and brand."
          />

          <TeamMember
            imgSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
            name="Sunil Mehta"
            role="Marketing & Sale"
            description="Ideation & Marketing."
          />
          <Link to={"/"} className="">
            <button className="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Team member component
const TeamMember = ({ imgSrc, name, role, description }) => {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
      <a href="#">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={imgSrc}
          alt={name + " Avatar"}
        />
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">{role}</span>
        <p className="mt-3 mb-4 font-light text-gray-500 ">{description}</p>
        <ul className="flex space-x-4 sm:mt-0">
          {/* Social media links */}
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
