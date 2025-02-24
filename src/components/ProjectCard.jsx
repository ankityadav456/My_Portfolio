import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes = "" }) => {
    return (
        <div 
            className={
                "relative p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg dark:hover:shadow-blue-500/30 " +
                "bg-white dark:bg-zinc-900 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 " +
                classes
            }
        >
            {/* Image Wrapper */}
            <figure className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
                />
            </figure>

            {/* Content */}
            <div className="flex items-center justify-between gap-4 mt-4">
                <div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-2">{title}</h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                        {tags.map((label, index) => (
                            <span 
                                key={index} 
                                className="h-8 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-lg"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Arrow Button */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500 text-white shadow-md transition-all duration-300 hover:bg-blue-600">
                    <span className="material-symbols-rounded" aria-hidden="true">
                        arrow_outward
                    </span>
                </div>
            </div>

            {/* Clickable Link */}
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
        </div>
    );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
};

export default ProjectCard;
