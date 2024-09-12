import React from 'react';
import self from '../photos/photo.png';
import './Introcontent.css';

const Introcontent = () => (
    <div id="container" className="container mt-5">
		<div className="row">
			<div className="col-12 col-md-9 order-md-1 order-2 text-center text-md-start">
				<h3>Hi! My name is</h3>
				<h2>DOYINSOLA SAYYIDAH AKINDELE</h2>
				<p>I'm a software developer studying Computer Science and Psychology at Carleton University.</p>
				<p>Although I was born in Nigeria, I have spent half of my life living abroad — first in Oman during my childhood and 
					now in Canada as I pursue my Bachelor's degree.
				</p>
				<p>My journey into programming began when my younger brother introduced me to Scratch at the age of nine, 
					sparking a lifelong passion for technology. What started as a friendly competition to create the best games has 
					evolved into developing software and applications on a much larger scale. Today, I develop software and applications 
					on a much larger scale, driven by an eagerness to explore the ever-evolving world of technology. I had the opportunity
					to work as an Embedded Software Developer at Ross Video for a year, where I gained invaluable insights into live 
					production and broadcasting. Collaborating with multiple teams on complex projects ignited my passion for full-stack 
					development, although I continue to have keen interest in web development and database management.
				</p>
				<p>My skill set extends to building responsive, user-centric web and mobile applications, demonstrated through 
					multiple internships and personal projects. I am proficient in technologies like React, MongoDB, and SQL, allowing me 
					to create scalable, dynamic applications that prioritize the user experience. 
					Whether I’m working on high-level interfaces or optimizing low-level system performance, I am committed to delivering 
					well-structured, functional, and scalable solutions. I am eager to collaborate on innovative projects that challenge 
					the boundaries of software development and enhance users' interactions with technology.
				</p>
				<p>I've loved embroidering, cooking and baking since I was a kid and I recently taught myself to crochet. Knitting and sewing are next on my list! I also enjoy reading and writing which I try to do outside when the weather is warm.</p>
			</div>
		    <div className="col-12 col-md-3 order-md-2 order-1 text-center">
			    <img src={self} alt="a smiling sayyidah akindele"></img>
		    </div>
	    </div>
	</div>
);

export default Introcontent;