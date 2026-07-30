import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/data/projects";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => setActiveImage(0), [project]);

  if (!project) return null;

  const title = t(`projects.items.${project.id}.title`);
  const description = t(`projects.items.${project.id}.description`);
  const category = t(`projects.categories.${project.categoryKey}`);
  const gallery = project.images.length ? project.images : [project.cover];
  const changeImage = (direction: number) => {
    setActiveImage((current) => (current + direction + gallery.length) % gallery.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="project-dialog" showCloseButton={false}>
        <div className="project-dialog-toolbar">
          <span>{title}</span>
          <DialogClose className="project-dialog-close" aria-label={t("projects.closePreview")}>
            <X size={22} aria-hidden="true" />
          </DialogClose>
        </div>

        <div className="project-dialog-scroll">
          <DialogHeader className="project-dialog-header">
            <div>
              <span className="modal-category">{category}</span>
              <DialogTitle>{title}</DialogTitle>
            </div>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <div className="modal-gallery">
            <div className="modal-image-stage">
              <AnimatePresence initial={false}>
                <motion.img
                  key={gallery[activeImage]}
                  src={gallery[activeImage]}
                  alt={t("projects.imageAlt", { title, current: activeImage + 1, total: gallery.length })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                />
              </AnimatePresence>
              {gallery.length > 1 && (
                <div className="modal-controls">
                  <button onClick={() => changeImage(-1)} aria-label={t("projects.previousImage")}><ChevronLeft size={20} /></button>
                  <span>{String(activeImage + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
                  <button onClick={() => changeImage(1)} aria-label={t("projects.nextImage")}><ChevronRight size={20} /></button>
                </div>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="modal-thumbnails" aria-label={t("projects.galleryLabel")}>
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    className={activeImage === index ? "is-active" : ""}
                    onClick={() => setActiveImage(index)}
                    aria-label={t("projects.viewImage", { number: index + 1 })}
                    aria-current={activeImage === index}
                  >
                    <img src={image} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal-skills">
            <span>{t("projects.scope")}</span>
            <div>{project.skillKeys.map((skill) => <span key={skill}>{t(`projects.skills.${skill}`)}</span>)}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
