import React, { useEffect } from 'react';
import zeuty from '../photos/zeutylogo.jpg';
import neo from '../photos/neologo.jpg';
import ross from '../photos/rosslogo.jpg';
import carleton from '../photos/carletonlogo.jpg';
import "./Codingcontent.css"

const Codingcontent = () => {
    useEffect(() => {
		const toggleCollapsible = (event) => {
			const container = event.currentTarget.closest('.job');
			const allContainers = document.querySelectorAll('.job');
	
			// Remove 'active' class from all containers
			allContainers.forEach(cont => cont.classList.remove('active'));
	
			// Add 'active' class to the clicked container
			container.classList.add('active');
		};
	
		const buttons = document.querySelectorAll('.collapsible');
		buttons.forEach((button) => {
			button.addEventListener('click', toggleCollapsible);
		});
	
		return () => {
			buttons.forEach((button) => {
				button.removeEventListener('click', toggleCollapsible);
			});
		};
	}, []);

    return (
        <div className="container mt-5 coding">
			<div id="experience">
				<h2>experience.</h2>
				<div id="c2" className='job'>
					<button type="button" className="collapsible w-100">
						<div className="jobinfo">
							<div className='picture'>
								<img className="companylogo" src={carleton} alt="carleton university logo" />
							</div>
							<div className='jobheading'>
								<h3 className='jobtitle'>Teaching Assistant</h3>
								<p className='jobname'>Carleton University · Contract</p>
								<p className='date'>September 2024 - present</p>
							</div>
						</div>
					</button>
					<div className="collapsible-content">
						<div className='details'>
							<p>✨ Assisted students in COMP 2404, Introduction to Software Engineering, by debugging code and guiding them through tasks</p>
							<p>✨ Graded assignments and provided constructive feedback to students</p>
						</div>
						<div className="skills">
							<p>C++</p>
							<p>Linux</p>
						</div>
					</div>
				</div>
				<div id="n" className='job'>
					<button type="button" className="collapsible w-100">
						<div className="jobinfo">
							<div className='picture'>
								<img className="companylogo" src={neo} alt="neoboard logo" />
							</div>
							<div className='jobheading'>
								<h3 className='jobtitle'>Frontend Developer</h3>
								<p className='jobname'>Neoboard · Internship</p>
								<p className='date'>June 2024 - present</p>
							</div>
						</div>
					</button>
						<div className="collapsible-content">
							{/* <p className="date">June 2024 - Present</p> */}
							<div className='details'>
								<p> ✨ Created and integrated Jest scripts to validate the functionality and reliability of web pages</p>
								<p> ✨ Leveraged React and Bootstrap to build a responsive website based on Figma designs</p>
							</div>
							<div className="skills">
								<p>React</p>
								<p>Bootstrap</p>
								<p>Figma</p>
								<p>Jest</p>
							</div>
						</div>
				</div>
				<div id="z" className='job'>
					<button type="button" className="collapsible w-100">
						<div className="jobinfo">
							<div className='picture'>
								<img className="companylogo" src={zeuty} alt="zeuty logo" />
							</div>
							<div className='jobheading'>
								<h3 className='jobtitle'>Frontend Developer</h3>
								<p className='jobname'>Zeuty · Internship</p>
								<p className='date'>June 2024 - present</p>
							</div>
						</div>
					</button>
						<div className="collapsible-content">
							{/* <p className="date">June 2024 - Present</p> */}
							<div className='details'>
								<p>✨ Played a key role in the development of a mobile application using React Native, Tailwind CSS, and Expo Go, creating a seamless and intuitive user experience across platforms</p>
								<p>✨ Conducted thorough research and contributed to the creation of the startup's documentation, providing valuable insights on emerging software and technologies to drive innovation and best practices</p>
							</div>
							<div className="skills">
								<p>React Native</p>
								<p>Tailwind</p>
								<p>Figma</p>
								<p>Expo Go</p>
							</div>
						</div>
				</div>
				<div id="rv3" className='job'>
					<button type="button" className="collapsible w-100">
						<div className="jobinfo">
							<div className='picture'>
								<img className="companylogo" src={ross} alt="ross video logo" />
							</div>
							<div className='jobheading'>
								<h3 className='jobtitle'>Embedded Software Developer</h3>
								<p className='jobname'>Ross Video · Co-op</p>
								<p className='date'>January 2024 - April 2024</p>
							</div>
						</div>
					</button>
						<div className="collapsible-content">
							<div className='details'>
								<p>✨ Enhanced system reliability by implementing image verification within the Dockerfile and corresponding script, leading to a 30% reduction in system update errors and detection of potential file corruption</p>
								<p>✨ Conducted comprehensive testing on a frame capture application, meticulously documenting various scenarios leading to video distortion, and played a pivotal role in resolving identified bugs</p>
								<p>✨ Played an integral role in the development of a media broadcasting application showcased at the 2024 NAB show, contributing to both UI design and backend functionalities</p>
								<p>✨ Optimized network recovery processes by manipulating lab equipment, resulting in a remarkable 60% reduction in system restart time</p>
							</div>
							<div className="skills">
								<p>XML</p>
								<p>Git</p>
								<p>Linux</p>
								<p>Docker</p>
								<p>Bash scripting</p>
								<p>Jira</p>
							</div>
						</div>
				</div>
				<div id="rv2" className='job'>
					<button type="button" className="collapsible w-100">
						<div className="jobinfo">
							<div className='picture'>
								<img className="companylogo" src={ross} alt="ross video logo" />
							</div>
							<div className='jobheading'>
								<h3 className='jobtitle'>Embedded Software Developer</h3>
								<p className='jobname'>Ross Video · Co-op</p>
								<p className='date'>May 2023 - September 2023</p>
							</div>
						</div>
					</button>
						<div className="collapsible-content">
							<div className='details'>
								<p>✨ Collaborated with team members to brainstorm and evaluate potential features for the future development of a new application, contributing valuable insights and suggestions during discussions</p>
								<p>✨ Conducted extensive research on Gstreamer and querying for statistics to develop a application that utilizes various sources to generate video</p>
								<p>✨ Developed user-friendly interface to manipulate application for specific needs in real time</p>
								<p>✨ Integrated applications with existing infrastructure to upgrade a final product</p>
							</div>
							<div className="skills">
								<p>Bash scripting</p>
								<p>Git</p>
								<p>Linux</p>
								<p>C</p>
								<p>GStreamer</p>
							</div>
						</div>
				</div>
				<div id="c1" className='job'>
					<button type="button" className="collapsible w-100">
						<div className="jobinfo">
							<div className='picture'>
								<img className="companylogo" src={carleton} alt="carleton university logo" />
							</div>
							<div className='jobheading'>
								<h3 className='jobtitle'>Teaching Assistant</h3>
								<p className='jobname'>Carleton University · Contract</p>
								<p className='date'>January 2023 - April 2023</p>
							</div>
						</div>
					</button>
						<div className="collapsible-content">
							<div className='details'>
								<p>✨ Assisted students in COMP 2404, Introduction to Software Engineering, by debugging code and guiding them through tasks</p>
								<p>✨ Graded assignments and provided constructive feedback to students</p>
							</div>
							<div className="skills">
								<p>C++</p>
								<p>Linux</p>
							</div>
						</div>
				</div>
				<div id="rv1" className='job'>
				<button type="button" className="collapsible w-100">
                    <div className="jobinfo">
                        <div className='picture'>
                            <img className="companylogo" src={ross} alt="ross video logo" />
                        </div>
                        <div className='jobheading'>
                            <h3 className='jobtitle'>Embedded Software Developer</h3>
                            <p className='jobname'>Ross Video · Co-op</p>
							<p className='date'>September 2022 - December 2022</p>
                        </div>
                    </div>
                </button>
                    <div className="collapsible-content">
                        <div className='details'>
							<p>✨ Facilitated and updated on-boarding instructions for new hires</p>
                            <p>✨ Updated UI to include dynamic functionality for multiple channels</p>
                            <p>✨ Engaged in the corresponding back-end development and enhancement of software functionalities built to better suit user needs</p>
                        </div>
                        <div className="skills">
							<p>XML</p>
                            <p>Git</p>
                            <p>Linux</p>
							<p>C</p>
						</div>
                    </div>
				</div>
			</div>
			<br />
			{/* <div id="education">
				<h2>education.</h2>
			</div> */}
			<br />
			<div id="projects">
				<h2>projects.</h2>
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div id="webportfolio" className="carousel-item active">
							<div className="container project-container">
                                <div className="row">
                                    <div className="col-12 col-md-4 text-center text-md-start project-title">
                                        <h1>web portfolio</h1>
                                    </div>
                                    <div className="col-12 col-md-8 text-center text-md-end project-main">
                                        <p className='description'>
											Built with React, Bootstrap, and Node.js, this GitHub-hosted web application showcases my 
											professional achievements and project portfolio. It demonstrates my expertise in web 
											development and design, highlighting key skills through dynamic and responsive components 
										</p>
                                        <p className='projectskills'>Bootstrap</p>
                                        <p className='projectskills'>HTML</p>
                                        <p className='projectskills'>React</p>
                                        <p className='projectskills'>Node.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="fitnessmanagement" className="carousel-item">
							<div className="container project-container">
                                <div className="row">
                                    <div className="col-12 col-md-4 text-center text-md-start project-title">
                                        <h1>fitness club system</h1>
                                    </div>
                                    <div className="col-12 col-md-8 text-center text-md-end project-main">
                                        <p className='description'>
											A web platform designed to connect fitness clubs, trainers, and 
											employers, enabling them to manage essential tasks such as scheduling and canceling lessons, 
											as well as creating user accounts. The website is powered by a PgAdmin database, with SQL 
											queries used to efficiently handle data and streamline operations.
										</p>
                                        <p className='projectskills'>JavaScript</p>
                                        <p className='projectskills'>Pug</p>
                                        <p className='projectskills'>Express.js</p>
                                        <p className='projectskills'>Node.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="efficiencycalculator" className="carousel-item">
                            <div className="container project-container">
                                <div className="row">
									<div className="col-12 col-md-4 text-center text-md-start project-title">
                                        <h1>scenario efficiency calculator</h1>
                                    </div>
                                    <div className="col-12 col-md-8 text-center text-md-end project-main">
                                        <p className='description'>
											An application designed to calculate the efficiency of various scenarios under different 
											conditions. It leverages multithreading to run multiple simulations concurrently, using 
											semaphores and mutexes to manage data sharing and ensure safe, synchronized access to 
											shared resources
										</p>
                                        <p className='projectskills'>C</p>
                                        <p className='projectskills'>Linux</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="librarymanagement" className="carousel-item">
							<div className="container project-container">
	                                <div className="row">
										<div className="col-12 col-md-4 text-center text-md-start project-title">
											<h1>library management system</h1>
										</div>
										<div className="col-12 col-md-8 text-center text-md-end project-main">
											<p className='description'>
												A text-based multi-process program designed to manage and control access to books in an online 
												library. It features a server process that handles client requests and regulates access 
												to library data, utilizing TCP/IP sockets for communication between the server and clients
												to ensure efficient and secure data exchange
											</p>
											<p className='projectskills'>C</p>
											<p className='projectskills'>Linux</p>
										</div>
                                </div>
                            </div>
                        </div>
                        <div id="heartwave" className="carousel-item">
							<div className="container project-container">
                                <div className="row">
									<div className="col-12 col-md-4 text-center text-md-start project-title">
											<h1>scenario efficiency calculator</h1>
									</div>
									<div className="col-12 col-md-8 text-center text-md-end project-main">
										<p className='description'>
											A full-stack application simulating heart rate monitor functionality across various exercise 
											scenarios. This collaborative project demonstrates the integration of frontend and backend 
											using Qt and C++, supported by comprehensive technical documentation and showcases real-time 
											data processing and UI interactions
										</p>
										<p className='projectskills'>C++</p>
										<p className='projectskills'>Linux</p>
										<p className='projectskills'>QT</p>
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
			</div>
			<br/>
        </div>
    );
};

export default Codingcontent;