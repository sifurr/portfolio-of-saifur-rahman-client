import 'animate.css/animate.min.css';
import profilePic from '../assets/image.jpg';
import resumeFile from '../assets/resume.pdf';

const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'JohnsResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="banner-section bg-gradient-to-r from-blue-900 to-[#0e2a47]">
    <div className="container mx-auto flex flex-col gap-5 lg:flex-row items-center justify-between py-10">
      <div className="intro-text pr-10 text-white pl-10">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInLeft animate__delay-1s">Greetings, I'm Saifur</h1>
        <p className="text-lg mb-6 animate__animated animate__fadeInLeft animate__delay-2s">
          Welcome to my web development portfolio! I specialize in creating engaging and innovative digital experiences. Let's explore the possibilities together.
        </p>
        <button
          onClick={handleDownload}
          className="bg-white text-blue-900 py-2 px-4 rounded-full inline-block text-lg hover:bg-blue-100 animate__animated animate__fadeInLeft animate__delay-3s"
        >
          Download My Resume
        </button>
      </div>

      <div className="profile-pic-container animate__animated animate__fadeInRight animate__delay-1s">       
        <div className="profile-pic-frame bg-gradient-to-r from-blue-400 to-[#0e2a47] rounded-full p-2">          
          <img src={profilePic} alt="John's Profile" className="rounded-full shadow-md" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;