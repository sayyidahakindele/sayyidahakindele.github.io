import React from 'react';
import './Footerbar.css';

function Footerbar() {
	const copy = (text) => {
		navigator.clipboard.writeText(text)
	  };

	return (
		<nav class="navbar navbar-expand-lg">
			<div class="collapse navbar-collapse footerbar">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<button onClick={() => copy("akindelesayyidah@gmail.com")} class="nav-link btn btn-link footerpart left">akindelesayyidah@gmail.com</button>
					</li>
				</ul>
				<ul class="navbar-nav mr-auto">
					<a class="nav-item" target="_blank" href="https://www.linkedin.com/in/doyinsolaakindele">
						<i className="nav-link btn btn-link bi bi-linkedin footerpart"></i>
					</a>
					<a class="nav-item" target="_blank" href="https://github.com/sayyidahakindele">
						<i class="nav-link btn btn-link bi bi-github footerpart" href=""></i>
					</a>
					<a class="nav-item">
						<i class="nav-link btn btn-link bi bi-wordpress footerpart"></i>
					</a>
					<a class="nav-item">
						<i class="nav-link btn btn-link bi bi-basket footerpart"></i>
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default Footerbar;