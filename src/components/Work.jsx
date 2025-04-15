// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Components
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/Yumigo.png',
    title: 'Yumigo Food Ordering App',
    tags: ['MERN','Web App', 'API','Full Stack'],
    projectLink: 'https://github.com/ankityadav456/mern-food-ordering'
  },
  {
    imgSrc: '/images/Spotify-App.png',
    title: 'Spotify-Clone Music Player',
    tags: ['Web App', 'API'],
    projectLink: 'https://github.com/ankityadav456/spotify__clone.git'
  },
  {
    imgSrc: '/images/to-do.png',
    title: 'Modern To-Do',
    tags: ['Web App', 'Crud', 'Backend'],
    projectLink: 'https://github.com/ankityadav456/user-managment_.git'
  },
  {
    imgSrc: '/images/portfolio.png',
    title: 'My Portfolio',
    tags: ['Web App', 'React'],
    projectLink: 'https://github.com/ankityadav456/My-app.git'
  },
  {
    imgSrc: '/images/food-sharp.webp',
    title: 'Food-Sharp',
    tags: ['Android','E-Commerce'],
    projectLink: ''
  },
  {
    imgSrc: '/images/music.jpg',
    title: 'Music Player',
    tags: ['Development'],
    projectLink: 'https://github.com/allknowledge34/BuzzyBird.git'
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