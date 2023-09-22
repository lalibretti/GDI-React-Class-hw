import React from 'react';
import './style.css';

// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of App
	// import Header and Homepage
	// include them inside of App
	// export the App component!

import React from 'react';	
import './style.css'; 
import Header from './components/Header.jsx'; 
import Homepage from './pages/HomePage.jsx';

function App() {
	return (
		<div>
			<Header />
			<Homepage />
		</div>
	)
}
export default App; 