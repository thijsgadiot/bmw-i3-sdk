const request = require("request-promise-native")
const { URL } = require("url")

const options = {
  method: "POST",
  url: `${process.env.AUTH_BASE_URL}?client_id=${process.env.AUTH_CLIENT_ID}&redirect_uri=${process.env.AUTH_REDIRECT_URI}&username=${
    process.env.USERNAME
    }&response_type=token&state=RANDOMGUID&scope=authenticate_user+fupo&password=${process.env.PASSWORD}`,
  simple: false
}

module.exports = function () {
  return new Promise(resolve => {
    request(options, (err, response) => {
      if (err) throw new Error(err)
      if (response.headers && response.headers.location) {
        resolve(new URL(response.headers.location.replace("#", "?")).searchParams.get("access_token"))
      } else {
        throw new ReferenceError("location not found in response header")
      }
    })
  })
}
