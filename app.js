require('dotenv').config()
const getAccessToken = require("./token")
const getChargeLevel = require("./chargeLevel")
const { logGraph } = require("./graph")

const requestCharge = async () => {
  const accessToken = await getAccessToken();
  const chargeLevel = await getChargeLevel(accessToken);
  logGraph(50, chargeLevel);
}

requestCharge();
setInterval(requestCharge, process.env.LOG_INTERVAL);