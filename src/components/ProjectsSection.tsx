import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projectData, type Project } from "@/data/projects";
import { AnimatePresence, motion } from "motion/react";
import MotionReveal from "./MotionReveal";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = useMemo(() => ["all", ...new Set(projectData.map((project) => project.categoryKey))], []);
  const visibleProjects = activeFilter === "all"
    ? projectData
    : projectData.filter((project) => project.categoryKey === activeFilter);

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="page-container">
          <MotionReveal>
            <header className="section-heading projects-heading">
              <div>
                <p className="eyebrow">{t("projects.eyebrow")}</p>
                <h2>{t("projects.headingStart")} <em>{t("projects.headingEmphasis")}</em></h2>
              </div>
              <p>{t("projects.intro")}</p>
            </header>
          </MotionReveal>

          <MotionReveal delay={0.06} distance={14}>
            <div className="project-filters" aria-label={t("projects.filterLabel")}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeFilter === category ? "is-active" : ""}
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={activeFilter === category}
                >
                  {category === "all" ? t("projects.all") : t(`projects.categories.${category}`)}
                </button>
              ))}
            </div>
          </MotionReveal>

          <motion.div className="projects-grid" layout>
            <AnimatePresence initial={false}>
              {visibleProjects.map((project, index) => {
                const title = t(`projects.items.${project.id}.title`);
                return (
                  <ProjectCard
                    key={project.id}
                    title={title}
                    description={t(`projects.items.${project.id}.description`)}
                    category={t(`projects.categories.${project.categoryKey}`)}
                    skills={project.skillKeys.map((skill) => t(`projects.skills.${skill}`))}
                    image={project.cover}
                    index={index}
                    onClick={() => setSelectedProject(project)}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>

          <MotionReveal distance={12}>
            <div className="projects-endnote">
              <span>{t("projects.count", { count: visibleProjects.length })}</span>
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                {t("projects.cta")}
              </button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectsSection;
