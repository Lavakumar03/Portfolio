
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'public/images/project-1.png',
      title: 'Tree Enumeration Analytics',
      tags: ['Machine Learning', 'YOLO', 'Development'],
      projectLink: 'https://github.com/Lavakumar03/TREE_ENUMERATION'
    },
    {
      imgSrc: 'public/images/project-2.png',
      title: 'Movie-Recommendation',
      tags: ['Python', 'Numpy', 'Pandas', 'Scikit-learn'],
      projectLink: 'https://github.com/Lavakumar03/Movie-recommendation'
    },
    {
      imgSrc: 'public/images/project-3.jpg',
      title: 'Hirely',
      tags: ['Development', 'API','React','MongoDB','Express','NodeJS'],
      projectLink: 'https://github.com/Lavakumar03/hirely/tree/main'
    },
   
  ];
const Work = () => {
  return (
    <section
    id="work" 
    className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                Projects
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title= {title}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
