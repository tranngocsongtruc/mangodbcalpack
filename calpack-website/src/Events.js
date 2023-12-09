import React from 'react';
import './EventsStyle.css';
import './App.css'; // Make sure to style your components accordingly

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Berkeley Events</h1>
      <input type="search" placeholder="Search" />
    </header>
  );
}

function Sidebar() {
  // Dummy dates for the calendar
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = [27, 28, 29, 30, 31, 1, 2];

  return (
    <aside className="sidebar">
      <button>Event Types</button>
      <div className="calendar">
        <div className="weekdays">
          {days.map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="dates">
          {dates.map(date => (
            <div key={date} className={`date ${date === 1 ? 'selected' : ''}`}>{date}</div>
          ))}
        </div>
      </div>
      <p>No sessions on this date.</p>
    </aside>
  );
}

function Main() {
  // Dummy data for events
  const events = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' }
  ];

  return (
    <main className="main-content">
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event">
            {event.title}
          </div>
        ))}
      </div>
      <UpcomingDates />
    </main>
  );
}

function UpcomingDates() {
  // Dummy dates data
  const dates = [
    { date: 'Monday, September 4, 2023', event: 'Academic & Administrative Holiday (Labor Day)' },
    // More dates...
  ];

  return (
    <div className="upcoming-dates">
      <h2>Upcoming Important Dates</h2>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>
            <span className="date">{date.date}</span>
            <span className="event">{date.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
