import ProjectCard from '../ProjectCard/ProjectCard';
import classes from './ProjectList.module.scss';

export default function ProjectList({ projects }) {
  return (
    <section className={classes.container}>
      {projects.map((project) => (
        <ProjectCard key={project.id} projectData={project} />
      ))}
    </section>
  );
}