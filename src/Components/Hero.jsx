

const Hero = () => {
  // Scroll down function
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          {/* Avatar and Status */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img 
                src="public/images/avatar-1.jpg"
                width={40}
                height={40} 
                alt="Lavakumar Arigela portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Heading */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Transforming Data into Insights, Code into Solutions
          </h2>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {/* Download CV Button */}
            <a 
              href="/images/Lavakumar_Resume.pdf"  // Update this path with the actual location of your resume
              download="Lavakumar_Resume.pdf"
              className="btn btn-primary flex items-center gap-2"
            >
              <span className="material-symbols-rounded">download</span>
              Download CV
            </a>

            {/* Scroll Down Button */}
            <button 
              onClick={handleScrollDown} 
              className="btn btn-outline flex items-center gap-2"
            >
              <span className="material-symbols-rounded">arrow_downward</span>
              Scroll down
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to 65% rounded-[60px] overflow-hidden">
            <img 
              src="public/images/hero-banner.png"
              width={656}
              height={800}
              alt="Lavakumar Arigela"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
