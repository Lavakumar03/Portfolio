const aboutItems = [
  {
    label: "Projects Done",
    number: 3,
  },
  {
    label: "Experience",
    value: "Fresher", // Use 'value' instead of 'number'
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            Welcome! i'm Lavakumar, passionate about data analysis, web development, and AI/ML. I specialize in building scalable and high-performance websites, combining creativity with technical expertise.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number, value }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-1xl font-semibold md:text-2xl">
                    {number !== undefined ? number : value} {/* Show number if available, else show value */}
                  </span>
                  {number !== undefined && (
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  )}
                </div>
                <p className="">{label}</p>
              </div>
            ))}

            <img
              src="public/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
