import React, { useEffect } from 'react';
import zeuty from '../photos/zeutylogo.jpg';
import neo from '../photos/neologo.jpg';
import ross from '../photos/rosslogo.jpg';
import carleton from '../photos/carletonlogo.jpg';
import "./Codingcontent.css"

const Codingcontent = () => {
    useEffect(() => {
        const toggleCollapsible = (event) => {
            const button = event.currentTarget;
            const content = button.nextElementSibling;

            button.classList.toggle('active');
            content.classList.toggle('active');
        };

        const buttons = document.querySelectorAll('.collapsible');
        buttons.forEach((button) => {
            console.log('Adding event listener to:', button); // Debugging statement
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
            <h2>experience.</h2>
			<div id="c2" className='job odd'>
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
						{/* <p className="date">June 2024 - Present</p> */}
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
			<div id="n" className='job even'>
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
			<div id="z" className='job odd'>
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
			<div id="rv3" className='job even'>
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
			<div id="rv2" className='job odd'>
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
			<div id="c1" className='job even'>
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
			<div id="rv1" className='job odd'>
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
    );
};

export default Codingcontent;