import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar/Navbar';
import Footerbar from './components/footerbar/Footerbar'
import Introcontent from './contents/introduction/Introcontent';
import Codingcontent from './contents/coding/Codingcontent';
import Writingcontent from './contents/writing/Writingcontent';
import Craftingcontent from './contents/crafting/Craftingcontent';

import './App.css';

function App() {
	const [content, setContent] = useState('');

	// Update content based on button click
	useEffect(() => {
		const myself = document.getElementById('myself');
		const coder = document.getElementById('coder');
		const writer = document.getElementById('writer');
		const crafter = document.getElementById('crafter');
		const buttons = [myself, coder, writer, crafter];

		const updateContent = (buttonId) => {
			buttons.forEach(button => {
				if (button.id === buttonId) {
					button.classList.add('selected');
				} else {
					button.classList.remove('selected');
				}
			});

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

		myself.addEventListener('click', () => updateContent('myself'));
		coder.addEventListener('click', () => updateContent('coder'));
		writer.addEventListener('click', () => updateContent('writer'));
		crafter.addEventListener('click', () => updateContent('crafter'))

		// default content
		updateContent('myself');
	}, []);

	return (
		<div className="content">
			<Navbar />
			<div>
				{content}
			</div>
			<Footerbar />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
