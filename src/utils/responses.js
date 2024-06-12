const sendSuccess = (res, sucData, sucMessage) => {
  const body = {
    status: "Success",
    response: sucData,
    message: sucMessage,
  };
  res.send(body);
};

const sendError = (res, error, errMessage) => {
  const body = {
    status: "Failure",
    response: error,
    message: errMessage,
  };
  res.send(body);
};

module.exports = {
  sendSuccess,
  sendError,
};
