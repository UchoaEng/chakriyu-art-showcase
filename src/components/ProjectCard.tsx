import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  skills: string[];
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, category, skills, index, onClick }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.68, delay: Math.min(index * 0.07, 0.21), ease: [0.22, 1, 0.36, 1] }}
      className={`project-card project-card-${index + 1}`}
    >
      <button className="project-image-button" onClick={onClick} aria-label={t("projects.open", { title })}>
        <img src={image} alt="" loading={index < 2 ? "eager" : "lazy"} />
        <span className="project-view">
          {t("projects.view")} <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </button>

      <div className="project-content">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{category}</span>
        </div>
        <h3>
          <button onClick={onClick}>{title}</button>
        </h3>
        <p>{description}</p>
        <div className="project-skills" aria-label={t("projects.skillsLabel")}>
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
