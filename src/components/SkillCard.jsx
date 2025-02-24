import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes = "" }) => {
    return (
        <div
            className={
                "flex items-center gap-3 ring-2 ring-inset rounded-2xl p-3 group transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl " +
                "ring-zinc-200 dark:ring-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 " +
                classes
            }
        >
            {/* Image Wrapper */}
            <figure className="bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden w-12 h-12 p-2 transition-all duration-300 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                <img src={imgSrc} width={32} height={32} alt={`${label} Icon`} className="w-full h-full object-contain" />
            </figure>

            {/* Text Content */}
            <div>
                <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg">{label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default SkillCard;
