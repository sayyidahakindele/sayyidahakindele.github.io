import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav class="navbar navbar-expand-lg">
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-text spansection">i am...</span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<button class="nav-link btn btn-link section" id="myself">i am doyinsola</button>
				</li>
				<li class="nav-item">
					<button class="nav-link btn btn-link section" id="coder">i am a software developer</button>
				</li>
				<li class="nav-item">
					<button class="nav-link btn btn-link section" id="writer">i am a writer</button>
				</li>
				<li class="nav-item">
					<button class="nav-link btn btn-link section" id="crafter">i am a crafter</button>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;