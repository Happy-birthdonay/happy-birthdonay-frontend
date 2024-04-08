import { Message } from './message';
import { User } from './user';

declare namespace ApiResponse {
  /**
   * API Response
   */
  interface ResponseResult {
    message: string;
    result: string;
  }

  interface ResponseAuthTokenData extends ResponseResult {
    data: User;
  }

  interface ResponsePostNewBox extends ResponseResult {
    data: { boxId: number };
  }

  interface ResponseMessageList extends ResponseResult {
    data: Message[];
  }
}

export default ApiResponse;
