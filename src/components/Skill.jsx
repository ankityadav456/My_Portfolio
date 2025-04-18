import SkillCard from "./SkillCard";
import react from '../assets/images/react.svg';
import nodejs from '../assets/images/nodejs.svg';
import express from '../assets/images/express.svg';
import mongodb from '../assets/images/mongodb.png';
import javascript from '../assets/images/javascript.svg';
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import git from '../assets/images/git.svg';
import github from '../assets/images/github.svg';
import figma from '../assets/images/figma.svg';
import tailwind from '../assets/images/tailwind.svg';
import vscode from '../assets/images/vscode.svg';

const skillItem = [
  {
    imgSrc: react,
    label: 'ReactJS',
    desc: 'JavaScript library for building UI',
  },
  {
    imgSrc: nodejs,
    label: 'Node.js',
    desc: 'JavaScript runtime for backend development',
  },
  {
    imgSrc: express,
    label: 'Express.js',
    desc: 'Minimalist web framework for Node.js',
  },
  {
    imgSrc: mongodb,
    label: 'MongoDB',
    desc: 'NoSQL database for scalable applications',
  },
  {
    imgSrc: javascript,
    label: 'JavaScript',
    desc: 'Core programming language for web development',
  },
  {
    imgSrc: html,
    label: 'HTML',
    desc: 'Markup language for structuring web pages',
  },
  {
    imgSrc: css,
    label: 'CSS',
    desc: 'Stylesheet language for designing web pages',
  },
  {
    imgSrc: git,
    label: 'Git',
    desc: 'Version control system for tracking changes',
  },
  {
    imgSrc: github,
    label: 'GitHub',
    desc: 'Cloud-based Git repository hosting service',
  },
  {
    imgSrc: figma,
    label: 'Figma',
    desc: 'UI/UX design and prototyping tool',
  },
  {
    imgSrc: tailwind,
    label: 'Tailwind CSS',
    desc: 'Utility-first CSS framework',
  },
  {
    imgSrc: vscode,
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