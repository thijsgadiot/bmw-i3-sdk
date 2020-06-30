const request = require("request-promise-native")

/**
 *
 * @param {*} requestOptions
 */
async function getVehicleData(accessToken) {
  const response = await request(getRequestOptions(accessToken))
  return response.attributesMap
}

/**
 *
 * @param {*} accessToken
 */
function getRequestOptions(accessToken) {
  return {
    method: "GET",
    uri: `${process.env.CONNECTED_DRIVEBASE_URI}vehicle/dynamic/v1/${process.env.VEHICLE_IDENTIFICATION_NUMBER}?offset=-60`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    json: true
  }
}

module.exports = getChargeLevel
