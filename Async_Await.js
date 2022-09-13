const { Axios } = require("axios");

const getProjectsByUsername = async (username) => {
  try {
    const userResponse = await Axios.get("/api./user?username=${username}");
    const user = userResponse.data;
    const projectsResponse = await Axios.get(
      "/api_/user /${user. id}/projects"
    );
    return projectsResponse.data;
  } catch (error) {
    console.log(error);
  }
};

getProjectsByUsername("john")