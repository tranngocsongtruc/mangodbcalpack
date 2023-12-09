import React from 'react';
import './LandingPageStyle.css';
import './App.css'; // Assuming your CSS is in this file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">CALPACK</div>
          <ul className="nav-links">
            <li><a href="/academics">Academics</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/transportations">Transportations</a></li>
            <li><a href="/food">Food</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="App-main">
        <h1>WELCOME TO CALPACK!</h1>
        <p>Welcome to University of California, Berkeley. This website helps you navigate campus programs and resources. Learn about us and start exploring:</p>
        <div className="buttons">
          <button>OUR TEAM</button>
          <button>ACADEMICS</button>
          <button>EVENTS</button>
        </div>
      </main>

      <footer className="App-footer">
        <div className="footer-links">
          <a href="/support">SUPPORT</a>
          <a href="/policies">POLICIES</a>
          <a href="/contact">Contact us</a>
        </div>
        <div className="social-media">
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;


// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function TopBar() {
// //   const topBarStyles = {
// //     backgroundColor: '#003262',
// //     color: '#FDB515',
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '10px 20px',
// //   };

// //   const linkStyles = {
// //     color: '#FDB515',
// //     textDecoration: 'none',
// //     marginRight: '15px',
// //   };

// //   return (
// //     <div style={topBarStyles}>
// //       <div>
// //         <a href="#" style={linkStyles}>Link to Landing page</a>
// //       </div>
// //       {/* ... (other content) */}
// //     </div>
// //   );
// // }

// // function CenterContent() {
// //   const centerContentStyles = {
// //     textAlign: 'center',
// //     padding: '50px 0',
// //   };

// //   const websiteNameStyles = {
// //     fontFamily: 'Saira Stencil One, cursive',
// //     fontSize: '36px',
// //     color: '#003262',
// //   };

// //   const missionStatementStyles = {
// //     fontSize: '18px',
// //     marginTop: '20px',
// //   };

// //   const buttonStyles = {
// //     backgroundColor: '#3B7EA1',
// //     color: '#ffffff',
// //     padding: '10px 20px',
// //     border: 'none',
// //     borderRadius: '5px',
// //     margin: '0 10px',
// //     cursor: 'pointer',
// //     fontFamily: 'Inter, sans-serif',
// //     fontSize: '16px',
// //     textTransform: 'uppercase',
// //   };

// //   return (
// //     <div style={centerContentStyles}>
// //       {/* ... (other content) */}
// //       <h1 style={websiteNameStyles}>Your Website Name</h1>
// //       <p style={missionStatementStyles}>Introduce your mission statement here.</p>
// //       <div>
// //         <button style={buttonStyles}>About Us</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <div className="App">
// //       {/* Add TopBar and CenterContent components here */}
// //     </div>
// //   );
// // }


// import React from 'react';
// import { Link } from 'react-router-dom';

// function TopBar() {
//   const topBarStyles = {
//     backgroundColor: '#003262',
//     color: '#FDB515',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//   };

//   const linkStyles = {
//     color: '#FDB515',
//     textDecoration: 'none',
//     marginRight: '15px',
//   };

//   return (
//     <div style={topBarStyles}>
//       <div>
//         <a href="#" style={linkStyles}>Link to Landing page</a>
//       </div>
//       <div>
//         <a href="#">Academics</a>
//         <a href="#">Events</a>
//         <a href="#">Food</a>
//         <a href="#">Transportation</a>
//         <a href="#">About Us</a>
//       </div>
//       <div>
//         <form action="https://www.google.com/search" method="get">
//           <input type="text" name="q" placeholder="Search..." />
//           <input type="submit" value="Search" />
//         </form>
//       </div>
//     </div>
//   );
// }

// function CenterContent() {
//   const centerContentStyles = {
//     textAlign: 'center',
//     padding: '50px 0',
//   };

//   const websiteNameStyles = {
//     fontFamily: 'Saira Stencil One, cursive',
//     fontSize: '36px',
//     color: '#003262',
//   };

//   const missionStatementStyles = {
//     fontSize: '18px',
//     marginTop: '20px',
//   };

//   const buttonStyles = {
//     backgroundColor: '#3B7EA1',
//     color: '#ffffff',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     margin: '0 10px',
//     cursor: 'pointer',
//     fontFamily: 'Inter, sans-serif',
//     fontSize: '16px',
//     textTransform: 'uppercase',
//   };

//   return (
//     <div style={centerContentStyles}>
//       <h1 style={websiteNameStyles}>Your Website Name</h1>
//       <p style={missionStatementStyles}>Introduce your mission statement here.</p>
//       <div>
//         <button style={buttonStyles}>About Us</button>
//       </div>
//     </div>
//   );
// }

// function LandingPage() {
//   return (
//     <div>
//       <TopBar />
//       <CenterContent />
//     </div>
//   );
// }

// export default LandingPage;
