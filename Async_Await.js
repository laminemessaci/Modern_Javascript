const  axios = require("axios");

const getProjectsByUsername = async (username) => {
  try {
    const userResponse = await axios.get("/api./user?username=${username}");
    const user = userResponse.data;
    const projectsResponse = await axios.get(
      "/api_/user /${user. id}/projects"
    );
    return projectsResponse.data;
  } catch (error) {
    console.log(error);
  }
};

getProjectsByUsername("john")