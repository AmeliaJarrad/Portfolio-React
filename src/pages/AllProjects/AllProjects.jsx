import { useEffect, useState } from 'react';
import { getAllProjects } from '../../services/project-services';
import ProjectList from '../../components/ProjectList/ProjectList';

 function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('PENDING');
  const [error, setError] = useState(null);
  useEffect(() => {
    setFetchStatus('LOADING');
    getAllProjects()
      .then((data) => {
        setFetchStatus('SUCCESS');
        setProjects(data);
      })
      .catch((e) => {
        setError(e);
        setFetchStatus('FAILURE');
      });
  }, []);
    if (fetchStatus === 'LOADING') {
      return <p>Loading...</p>;
    }
  return (
    <>
      <h1>Projects</h1>
      {fetchStatus === 'LOADING' && <p>Loading...</p>}
      {fetchStatus === 'FAILURE' && (
        <p style={{ color: 'red' }}>{error.message}</p>
      )}
      {fetchStatus === 'SUCCESS' && <ProjectList projects={projects} />}
      <h2>what's wrong</h2>
    </>
  );
}
export default AllProjects;