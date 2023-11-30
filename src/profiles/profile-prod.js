import PROFILE_LIST from "./profile-list";
import PROFILE_APIS from "./profile-apis";

const localhost = "http://www.ricardow.com:";
const config = {};
config.profile = PROFILE_LIST.PROD;
config.api_url = {
  RICARDOW_BLOG_API: localhost + PROFILE_APIS.RICARDOW_BLOG_API.port + PROFILE_APIS.RICARDOW_BLOG_API.path
}