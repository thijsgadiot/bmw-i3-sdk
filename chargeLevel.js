const request = require("request-promise-native")

/**
 *
 * @param {*} requestOptions
 */
async function getChargeLevel(accessToken) {
  const response = await request(getRequestOptions(accessToken))
  const attributesMap = response.attributesMap
  return attributesMap.chargingLevelHv
}

/**
 *
 * @param {*} accessToken
 */
function getRequestOptions(accessToken) {
  return {
    method: "GET",
    uri: `${process.env.CONNECTED_DRIVE_BASE_URL}vehicle/dynamic/v1/${process.env.VEHICLE_IDENTIFICATION_NUMBER}?offset=-60`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    json: true
  }
}

module.exports = getChargeLevel
