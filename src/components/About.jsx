import aboutMe from '../assets/about-me.jpg';

const About = () => {
    return (
        <div>
            <div className="text-center mb-10 lg:mb-15">
                <h1 className="text-lg lg:text-2xl uppercase"><span className='text-4xl font-bold'>|</span> <span className='px-3 font-bold'>01 : About Me</span> <span className='text-4xl font-bold'>|</span></h1>
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-5'>
                <div className='w-full lg:w-[60%] flex items-center'>
                    <p className=''>
                        <span className='text-base lg:text-xl font-bold uppercase'>
                            Junior React Developer
                        </span>
                        <br />

                        <span className='pt-5 text-xs lg:text-lg inline-block'>
                            Greetings, fellow coder! I'm <strong>Md. Saifur Rahman</strong> from Bangladesh, embarking on an exciting journey of transitioning from my previous profession to the world of web development. Currently immersed in the enchanting <strong>MERN stack</strong>, I'm on a quest to craft clean, efficient solutions and contribute to innovative projects. Let's turn ideas into reality!
                        </span>
                        <span className='pt-5 text-xs inline-block'>
                            Currently, I'm pursuing my bachelor's degree, as a remote student, in <strong>Computer Science</strong> at the <strong>University of the People, USA</strong>.
                        </span>

                        <span className='pt-5 text-xs inline-block'>
                            This portfolio site is representing some of my projects that I have done so far.
                        </span>
                    </p>
                </div>
                <div className='w-full lg:w-[40%]'>
                    <img className='h-96 object-cover w-[100%]' src={aboutMe} alt="profile picture" />
                </div>
            </div>
            <div className='w-full lg:w-2/3 mx-auto bg-[#193a5e] drop-shadow-lg p-4 hover:bg-[#234a73]  duration-300 rounded-lg mt-4 lg:mt-0'>
                <h3 className='text-base mt-5 lg:text-xl font-bold uppercase mb-1'>My Information in brief</h3>
                <div>
                    <h2 className='mb-1 text-base font-bold'>Technologies I Know</h2>
                    <ul className='mb-5 text-xs lg:text-base'>
                        <li>
                            <strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS
                        </li>
                        <li>
                            <strong>Backend:</strong> Node.js, Express.js
                        </li>
                        <li>
                            <strong>Database:</strong> MongoDB
                        </li>
                    </ul>
                    <div className='mb-5'>
                        <img
                            src="https://skillicons.dev/icons?i=html,css,tailwind,javascript,react,nodejs,mongodb,firebase,postman,linux,cpp&theme=light"
                            alt="My Skills"
                        />
                    </div>
                    <div className='mb-5'>
                        <h2 className='mb-1 text-base lg:text-xl font-bold'>My Experience</h2>
                        <p className='text-xs lg:text-base' ><strong>Film editor & Producer:</strong> 2008-2019</p>
                    </div>
                    <div className='mb-5'>
                        <h2 className='mb-1 text-base lg:text-xl font-bold'>Education</h2>
                        <p className='text-xs lg:text-base' ><strong>B.Sc in Computer Science: </strong></p>
                        <p className='text-xs lg:text-base' >[Distant Learning System], 2nd Year at the University of the People, USA.</p>
                        <p></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
