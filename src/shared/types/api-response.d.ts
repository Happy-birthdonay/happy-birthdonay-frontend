import { Message } from './message';
import { User } from './user';

declare namespace ApiResponse {
  /**
   * API Response
   */
  interface ResponseResult {
    message: string;
    result: string;
    msg?: string;
    statusCode?: number;
  }

  interface ResponseAuthTokenData extends ResponseResult {
    data?: User;
  }

  interface ResponsePostNewBox extends ResponseResult {
    data: { boxId: number };
  }

  interface ResponseMessageList extends ResponseResult {
    data: Message[];
  }

  interface ResponseBoxList extends ResponseResult {
    data: Pick<DonationBox, 'boxId' | 'color'>[];
  }

  interface ResponseUser extends ResponseResult {
    data?: {
      userId: number;
      name: string;
      birthday: string;
    };
  }
}

export default ApiResponse;
