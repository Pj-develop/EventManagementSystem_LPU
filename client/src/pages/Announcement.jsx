import { useState } from "react";

const Announcement = () => {
  const [activeTab, setActiveTab] = useState("pevents");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const announcements = [
    {
      id: 1,
      title: "Upcoming Event 1",
      content: "This is the content of the first upcoming event.",
      date: "2024-04-10",
      location: "Virtual",
    },
    {
      id: 2,
      title: "Upcoming Event 2",
      content: "This is the content of the second upcoming event.",
      date: "2024-04-15",
      location: "Physical Venue",
    },
    {
      id: 3,
      title: "Upcoming Event 3",
      content: "This is the content of the third upcoming event.",
      date: "2024-04-20",
      location: "Online",
    },
  ];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow m-4">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select tab
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
          value={activeTab}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          <option value="pevents">Past Events</option>
          <option value="cevents">Current Events</option>
          <option value="fevent">Future Events</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex">
        <li
          className={`w-full ${
            activeTab === "pevents" ? "bg-red-500 text-white" : "bg-white"
          }`}
        >
          <button
            onClick={() => handleTabClick("pevents")}
            className="inline-block w-full p-4 rounded-t-lg focus:outline-none"
          >
            Past Events
          </button>
        </li>
        <li
          className={`w-full ${
            activeTab === "cevents" ? "bg-red-500 text-white" : "bg-white"
          }`}
        >
          <button
            onClick={() => handleTabClick("cevents")}
            className="inline-block w-full p-4 focus:outline-none"
          >
            Current Events
          </button>
        </li>
        <li
          className={`w-full ${
            activeTab === "fevents" ? "bg-red-500 text-white" : "bg-white"
          }`}
        >
          <button
            onClick={() => handleTabClick("fevents")}
            className="inline-block w-full p-4 rounded-b-lg focus:outline-none"
          >
            Future Events
          </button>
        </li>
      </ul>
      <div className="border-t border-gray-200">
        <div
          className={`p-4 bg-white rounded-lg ${
            activeTab === "pevents" ? "" : "hidden"
          }`}
        >
          {announcements.map((announcement) => (
            <div key={announcement.id}>
              <h3>{`> ${announcement.title}`}</h3>
              <p>{`${announcement.content} ${announcements
                .map((a) => a.content)
                .join("")}`}</p>
            </div>
          ))}
        </div>

        <div
          className={`p-4 bg-white rounded-lg ${
            activeTab === "cevents" ? "" : "hidden"
          }`}
        >
          {announcements.map((announcement) => (
            <div key={announcement.id}>
              <h3>{`> ${announcement.title}`}</h3>
              <p>{`${announcement.content} ${announcements
                .map((a) => a.content)
                .join("")}`}</p>
            </div>
          ))}
        </div>

        <div
          className={`p-4 bg-white rounded-lg ${
            activeTab === "fevents" ? "" : "hidden"
          }`}
        >
          {announcements.map((announcement) => (
            <div key={announcement.id}>
              <h3>{`> ${announcement.title}`}</h3>
              <p>{`${announcement.content} ${announcements
                .map((a) => a.content)
                .join("")}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
