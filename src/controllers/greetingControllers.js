const responses = require("../utils/responses");

const greetingGetRequest = async (req, res) => {
  try {
    responses.sendSuccess(res, {}, "Hi, This is Sample Get Request");
  } catch (e) {
    responses.sendError(res, e, "Error:Oops,Some error Occurred!");
  }
};

const greetingPostRequest = async (req, res) => {
  try {
    responses.sendSuccess(res, {}, "Hi, This is Sample Post Request");
  } catch (e) {
    responses.sendError(res, e, "Error:Oops,Some error Occurred!");
  }
};

module.exports = {
  greetingGetRequest,
  greetingPostRequest,
};
