import React, { useState } from 'react';

const OrganizationProfile = () => {
  // State for organization details
  const [orgDetails, setOrgDetails] = useState({
    orgName: '',
    email: '',
    phone: '',
    website: '',
    address: ''
  });

  // State for event creation
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    description: ''
  });

  // State for storing events
  const [events, setEvents] = useState([]);

  // Handle input changes for organization details
  const handleOrgChange = (e) => {
    const { name, value } = e.target;
    setOrgDetails({
      ...orgDetails,
      [name]: value
    });
  };

  // Handle input changes for event details
  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  // Handle form submission for organization profile
  const handleOrgSubmit = (e) => {
    e.preventDefault();
    console.log('Organization Details Submitted:', orgDetails);
    // Here, you can send organization data to the backend
  };

  // Handle form submission for events
  const handleEventSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventDetails]); // Add event to the events array
    setEventDetails({ eventName: '', eventDate: '', description: '' }); // Reset event form
  };

  return (
    <div className="container">
      <h2>Student Organization Profile</h2>
      <form onSubmit={handleOrgSubmit}>
        {/* Organization Name */}
        <div className="form-group">
          <label htmlFor="orgName">Organization Name</label>
          <input
            type="text"
            name="orgName"
            id="orgName"
            value={orgDetails.orgName}
            onChange={handleOrgChange}
            placeholder="Enter organization name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={orgDetails.email}
            onChange={handleOrgChange}
            placeholder="Enter organization email"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={orgDetails.phone}
            onChange={handleOrgChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Website */}
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="url"
            name="website"
            id="website"
            value={orgDetails.website}
            onChange={handleOrgChange}
            placeholder="Enter organization website"
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            value={orgDetails.address}
            onChange={handleOrgChange}
            placeholder="Enter organization address"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Save Organization Details</button>
      </form>

      <h2>Create Event</h2>
      <form onSubmit={handleEventSubmit}>
        {/* Event Name */}
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            value={eventDetails.eventName}
            onChange={handleEventChange}
            placeholder="Enter event name"
            required
          />
        </div>

        {/* Event Date */}
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            value={eventDetails.eventDate}
            onChange={handleEventChange}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Event Description</label>
          <textarea
            name="description"
            id="description"
            value={eventDetails.description}
            onChange={handleEventChange}
            placeholder="Enter event description"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Create Event</button>
      </form>

      {/* Display Created Events */}
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong> - {event.eventDate}<br/>
            {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationProfile;
