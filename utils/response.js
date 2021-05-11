exports.success = (res, statusCode = 200, payload) => {
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: payload || 'Everything OK',
  })
}

exports.error = (res, statusCode = 500, message) => {
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    body: message || codeToMessage(statusCode),
  })
}

function codeToMessage(errorCode){
  switch(errorCode) {
    case 400:
      return 'Bad request';
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not found';
    case 405:
      return 'Method not allowed';
    case 501:
      return 'Not implemented';
    case 502:
      return 'Bad gateway';
    case 503:
      return 'Service unavailable';
    default:
      return 'Internal server error';
  }
}