/**
 * Created by fourq on 11/22/15.
 */


class Payload {

  static response(data = {}, message = '', err = false) {
    return {
      data: data,
      message: message,
      error: err
    };
  }
}


export default Payload;
