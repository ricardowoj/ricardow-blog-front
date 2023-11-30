import PROFILE_LIST from "./profile-list";
import PROFILE_APIS from "./profile-apis";

const localhost = "http://localhost:";
const config = {};
config.profile = PROFILE_LIST.DEV;
config.api_url = {
  path: localhost + PROFILE_APIS.RICARDOW_BLOG_API.port + PROFILE_APIS.RICARDOW_BLOG_API.path
}

export default config;