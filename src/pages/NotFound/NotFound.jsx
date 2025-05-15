import { useParams } from 'react-router';

export default function NotFound() {
  const { '*': splat } = useParams();
  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        Could not find page "/{splat}". Did you make a typo? Otherwise it may
        have been deleted
      </p>
    </>
  );
}