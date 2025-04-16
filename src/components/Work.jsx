import ProjectCard from "./ProjectCard";
import yumigo from '../assets/images/Yumigo.png';
import spotify from '../assets/images/Spotify-App.png';
import todo from '../assets/images/to-do.png';
import portfolio from '../assets/images/portfolio.png';
import foodSharp from '../assets/images/food-sharp.webp';
import music from '../assets/images/music.jpg';

const works = [
  {
    imgSrc: yumigo,
    title: 'Yumigo Food Ordering App',
    tags: ['MERN','Web App', 'API','Full Stack'],
    projectLink: 'https://github.com/ankityadav456/mern-food-ordering'
  },
  {
    imgSrc: spotify,
    title: 'Spotify-Clone Music Player',
    tags: ['Web App', 'React', 'API'],
    projectLink: 'https://github.com/ankityadav456/spotify__clone.git'
  },
  {
    imgSrc: todo,
    title: 'Modern To-Do',
    tags: ['Web App', 'React','Crud', 'Backend'],
    projectLink: 'https://github.com/ankityadav456/user-managment_.git'
  },
  {
    imgSrc: portfolio,
    title: 'My Portfolio',
    tags: ['Web App', 'React'],
    projectLink: 'https://github.com/ankityadav456/My-app.git'
  },
  {
    imgSrc: foodSharp,
    title: 'Food-Sharp',
    tags: ['Android','E-Commerce'],
    projectLink: 'https://github.com/ankityadav456/Food-sharp'
  },
  {
    imgSrc: music,
    title: 'Music Player',
    tags: ['Android','Development'],
    projectLink: 'https://github.com/ankityadav456/-Music-Player'
  },
];



const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work