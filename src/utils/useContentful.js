import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACEID,
    accessToken: process.env.REACT_APP_CONTENT_API,
  });
  const getProjects = async () => {
    try {
      const projects = await client.getEntries();
      const sanatizedProjects = projects.items.map((project) => {
        const img = project.fields.thumbnail.fields.file.url;
        return {
          ...project.fields,
          image: img,
        };
      });
      return sanatizedProjects;
    } catch (error) {
      console.log(error);
    }
  };
  return { getProjects };
};

export default useContentful;
