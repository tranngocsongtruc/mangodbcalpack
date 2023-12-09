// import React from 'react';
// import CampusMaps from './CampusMaps';
// import ClassScheduler from './ClassScheduler';
// import GradeDistribution from './GradeDistribution';

// function Academics() {
//   return (
//     <div>
//       <h1>Academics</h1>
//       <CampusMaps />
//       <ClassScheduler />
//       <GradeDistribution />
//     </div>
//   );
// }

// export default Academics;
import React from 'react';
import './AcademicsStyle.css';
import './App.css'; // Your styles here

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul className="nav-list">
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/scheduler">Scheduler</a></li>
            <li><a href="/grades">Grades</a></li>
            <li><a href="/enrollment">Enrollment</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <section className="grade-distribution">
          {/* Grade distribution chart would be rendered here */}
          <h2>COMPSCI 61B</h2>
          {/* Implement chart based on your data visualization library */}
        </section>
        <section className="campus-map">
          {/* Campus map would be rendered here */}
          <img src="path-to-campus-map-image.png" alt="Campus Map" />
        </section>
      </main>

      {/* You can add footer if needed */}
    </div>
  );
}

export default App;
