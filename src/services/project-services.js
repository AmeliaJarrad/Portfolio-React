const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
console.log("Resolved BACKEND_URL:", BACKEND_URL);

//modifications done to have a static back end for now until I have a backend server

export const getAllProjects = async () => {
  // const response = await fetch(BACKEND_URL + '/projects');
  const response = await fetch(BACKEND_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();
  return data.projects;
};

export const getProjectById = async (id) => {
  // const response = await fetch(`${BACKEND_URL}/projects/${id}`);
   const response = await fetch(BACKEND_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch project with that id' + id)
  }
  const data = await response.json();
  const project = data.projects.find(p => p.id === id || p.id === Number(id));
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
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