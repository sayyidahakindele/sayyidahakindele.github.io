import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Introcontent from './contents/introduction/Introcontent';
import Codingcontent from './contents/introduction/Codingcontent';
import Writingcontent from './contents/introduction/Writingcontent';
import Craftingcontent from './contents/introduction/Craftingcontent';

import './App.css';

function App() {
  const [content, setContent] = useState('');

  // onclick functions for tabs, allocating specific information
	useEffect(() => {
		const myself = document.getElementById('myself');
		const coder = document.getElementById('coder');
		const writer = document.getElementById('writer');
		const crafter = document.getElementById('crafter');

		myself.addEventListener('click', () => updateContent('myself'));
		coder.addEventListener('click', () => updateContent('coder'));
		writer.addEventListener('click', () => updateContent('writer'));
		crafter.addEventListener('click', () => updateContent('crafter'))

		// default content
		updateContent('myself');
	}, []);

	const updateContent = (buttonId) => {
		switch (buttonId) {
			case 'myself':
				setContent(<Introcontent />);
				break;
			case 'coder':
				setContent(<Codingcontent />)
				break;
			case 'writer':
				setContent(<Writingcontent />);
				break;
			case 'crafter':
				setContent(<Craftingcontent />);
				break;
			default:
		}
	};


  return (
		<div className="content">
      <h1>helloooooooo</h1>
			{content}
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
