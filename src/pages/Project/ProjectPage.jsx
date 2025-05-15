import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getProjectById } from '../../services/project-services';

export default function ProjectPage() {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('PENDING');

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setFetchStatus('LOADING');
    getProjectById(id)
      .then((data) => {
        setFetchStatus('SUCCESS');
        setProject(data);
      })
      .catch((e) => {
        setFetchStatus('FAILURE');
        setError(e);
      });
  }, [id]);

  if (fetchStatus === 'LOADING') {
    return <p>Loading...</p>;
  }

  if (fetchStatus === 'FAILURE') {
    return <p style={{ color: 'red' }}>{error.message}</p>;
  }

  if (fetchStatus === 'SUCCESS') {
    return (
      <>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.name} />
        <h4>Built With</h4>
        <ul>
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {/* BUTTONS SHOULD NOT BE USED FOR NAVIGATION IT'S BAD FOR SCREEN READERS */}
        <button onClick={() => navigate('/projects')}>Back</button>
      </>
    );
  }
}