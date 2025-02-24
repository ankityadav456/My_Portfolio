import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: '/images/react.svg',
    label: 'ReactJS',
    desc: 'JavaScript library for building UI',
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'Node.js',
    desc: 'JavaScript runtime for backend development',
  },
  {
    imgSrc: '/images/express.svg',
    label: 'Express.js',
    desc: 'Minimalist web framework for Node.js',
  },
  {
    imgSrc: '/images/mongodb.png',
    label: 'MongoDB',
    desc: 'NoSQL database for scalable applications',
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Core programming language for web development',
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Markup language for structuring web pages',
  },
  {
    imgSrc: '/images/css.svg',
    label: 'CSS',
    desc: 'Stylesheet language for designing web pages',
  },
  {
    imgSrc: '/images/git.svg',
    label: 'Git',
    desc: 'Version control system for tracking changes',
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Cloud-based Git repository hosting service',
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'UI/UX design and prototyping tool',
  },
  {
    imgSrc: '/images/tailwind.svg',
    label: 'Tailwind CSS',
    desc: 'Utility-first CSS framework',
  },
  {
    imgSrc: '/images/vscode.svg',
    label: 'VS Code',
    desc: 'Code editor for development',
  },
  ];
const Skill = () => {
    return (
        <section className="section" id="skills">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                  Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                  Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                          <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                        ))
                        
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill