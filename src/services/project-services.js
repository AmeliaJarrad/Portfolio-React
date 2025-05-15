const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const getAllProjects = async () => {
  const response = await fetch(BACKEND_URL + '/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();
  return data;
};

export const getProjectById = async (id) => {
  const response = await fetch(`${BACKEND_URL}/projects/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Project not found');
    }
    throw new Error('Something went wrong');
  }
  return await response.json();
};


// export const createProject = async (formData) => {
//   const completeData = {
//     ...formData,
//     imageUrl: 'https://placekeanu.com/200/200',
//     createdAt: new Date().toLocaleDateString(),
//   };

//   const response = await fetch(BACKEND_URL + '/projects', {
//     method: 'POST',
//     body: JSON.stringify(completeData),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to Upload');
//   }
// //   return await response.json();
// };