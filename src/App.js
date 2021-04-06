import React, { Fragment } from 'react';
import './App.css';
//components
import Footer from './components/footer';
import Header from './components/headers';

function App() {
	const fecha = new Date().getFullYear();
	return (
		<Fragment>
			<Header titulo="Tienda Virtual El Carmelo"/>
			<Footer fecha={fecha}/>
		</Fragment>
	);
}

export default App;
