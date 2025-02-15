const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 1.5
    }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl
              md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 ">
                        Welcome! Hi, I&apos;m Ankit, a passionate Frontend MERN Stack Developer with 1.5+ years of experience in JavaScript, HTML, and CSS. I’ve had the opportunity to develop a self-project using ReactJS, Node.js, Express, and MongoDB, which has enhanced my skills in both frontend and backend development.
                    </p>

                    <div className="flex flex-wrap items-center gap-4
                md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold
                                    md:text-4xl">{number}</span>
                                        <span className="text-purple-400
                                    font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About