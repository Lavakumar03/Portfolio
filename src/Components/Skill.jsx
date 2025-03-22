import SkillCard from "./SkillCard";

const skillItem = [
  { imgSrc: "public/images/python.svg", label: "Python", desc: "Data Science & AI" },
  { imgSrc: "public/images/sql.png", label: "SQL", desc: "Database Management" },
  { imgSrc: "public/images/java.png", label: "Java", desc: "Backend Development" },
  { imgSrc: "public/images/powerbi.png", label: "Power BI", desc: "Data Visualization" },
  { imgSrc: "public/images/javascript.svg", label: "JavaScript", desc: "Frontend & Backend" },
  { imgSrc: "public/images/react.svg", label: "React", desc: "Frontend Framework" },
  { imgSrc: "public/images/nodejs.svg", label: "NodeJS", desc: "Backend Framework" },
  { imgSrc: "public/images/mongodb.svg", label: "MongoDB", desc: "NoSQL Database" }
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
