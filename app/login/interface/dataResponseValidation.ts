import User from "./user";

export default  interface DataResponse {
    message: string;
    user: User;
    token: string;
  }