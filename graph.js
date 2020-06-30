const notifier = require('node-notifier');
let prevNotificationChargeLevel = 0;

// notifier.on('click', function (notifierObject, options) {
//     // Triggers if `wait: true` and user clicks notification
//     console.log('shit got clicked!');
// });


const logGraph = (blockLength, chargeLevel) => {
    lineLog(chargeLevel, `%`, buildBlockGraph(blockLength, parseInt(chargeLevel)));

    const intChargeLevel = parseInt(chargeLevel);

    // @todo only notify on charge complete?
    if (intChargeLevel % 5 === 0 && prevNotificationChargeLevel !== intChargeLevel) {
        prevNotificationChargeLevel = intChargeLevel;
        notifier.notify({
            'title': 'BMW i3 charge status',
            'message': `Current charge level: ${chargeLevel}%`,
            'icon': 'dwb-logo.png',
            'contentImage': 'blog.png',
            'wait': true
        });
    }


}

const buildBlockGraph = (amountOfBlocks, fillPercentage) => {
    const scale = 100 / amountOfBlocks
    const blocks = [...Array(amountOfBlocks)]
        .map((cur, idx) => (idx * scale >= fillPercentage ? "-" : "#"))
    return `[` + blocks.join("") + `]`
}

const lineLog = (...args) => {
    args.unshift("\r\n")
    args.push("\r\n")
    console.log.apply(null, args);
}


module.exports = { logGraph, buildBlockGraph, lineLog };