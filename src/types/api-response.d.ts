import { User } from './user';

declare namespace ApiResponse {
  /**
   * API Response
   */
  interface ResponseResult {
    message: string;
    result: string;
  }

  interface ResponseAuthTokenData {
    data: User;
  }
}

export default ApiResponse;
