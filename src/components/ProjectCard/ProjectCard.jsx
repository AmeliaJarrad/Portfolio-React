import classes from './ProjectCard.module.scss';
import { Link } from 'react-router';

export default function ProjectCard({ projectData }) {
  return (
    <article className={classes.card}>
      <h3>{projectData.name}</h3>
      <img src={projectData.imageUrl} alt={projectData.name} />
      <Link to={projectData.id}>See More</Link>
    </article>
  );
}