import axios from 'axios';
import config from "../profiles/profile-dev";

class RicardowBlogService {
  getAllPosts() {
    return axios.get(config.api_url.path + "post/getAll");
  }
}

export default new RicardowBlogService();