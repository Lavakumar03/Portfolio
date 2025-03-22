import { useEffect, useRef } from "react";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    date: "May 2024",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ArigelaLavakumar-6110/EF9BFA5492C6AB76?sharingId",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    provider: "IBM on Coursera",
    date: "Aug 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/7JWU7DTM2PH8",
  },
  {
    title: "Artificial Intelligence",
    provider: "AICTE",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/1ZCX0TvvssgktHvkS9VKRgtZOx6zK8ktd/view?usp=sharing",
  },
  {
    title: "Data Science and Machine Learning",
    provider: "YBI Foundations",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/11k1DNRNU-_cB1uQD-n_CrpI5Ed8uEXmH/view?usp=sharing",
  },
];

const Certification = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;

    const scrollMarquee = () => {
      if (marquee) {
        scrollAmount -= 0.5;
        marquee.style.transform = `translateX(${scrollAmount}px)`;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0; // Reset for smooth looping
        }
      }
      requestAnimationFrame(scrollMarquee);
    };

    requestAnimationFrame(scrollMarquee);
  }, []);

  return (
    <section id="certification" className="certification-section py-6">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6">Certifications</h2>
        <div className="relative overflow-hidden whitespace-nowrap">
          <div
            ref={marqueeRef}
            className="flex gap-4 items-center"
            style={{ width: "max-content" }}
          >
            {[...certifications, ...certifications].map(({ title, provider, date, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-card p-4 border rounded-lg shadow-md w-64 bg-white text-center transition-transform hover:scale-105 block"
              >
                <h3 className="text-sm font-bold text-gray-400 truncate">{title}</h3>
                <p className="text-xs text-gray-600 truncate">{provider} | {date}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
