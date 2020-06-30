## What this project is

This project serves the need of being able to interface with your BMW i3 without using the BMW ConnectedDrive App (which can be flaky), or the Remote Cockpit web app. I found that the charge level is not updated as often or accurately as it can be. 

I wanted to know if my car was charging, and I wanted to know when it was done so I could move my car and have other EV drivers use the same charging station.

This project has reverse engineered parts of the BMW ConnectedDrive API by using endpoints that are being used in the Remote Cockpit web app.

Current functionality will log (stdout) the charge level of your i3 every `LOG_INTERVAL` milliseconds and send a notification to your OS (Mac) each time it has incremented by 5%.

Consider this to be a proof of concept of what can be done. It is possible to wink your headlights, sound your horn and unlock/lock your car through the same interface.


## This project depends on the following ENV vars to be set:
USERNAME=  
PASSWORD=  
CONNECTED_DRIVE_BASE_URL=https://www.bmw-connecteddrive.nl/api/  
VEHICLE_IDENTIFICATION_NUMBER=  
AUTH_BASE_URL=https://customer.bmwgroup.com/gcdm/oauth/authenticate  
AUTH_CLIENT_ID=  
AUTH_REDIRECT_URI=https://www.bmw-connecteddrive.com/app/default/static/external-dispatch.html
LOG_INTERVAL=60000

Your `USERNAME` and `PASSWORD` are the ones you use to login to the BMW ConnectedDrive app or Remote Cockpit. Your `VEHICLE_IDENTIFICATION_NUMBER` can be retrieved by inspecting the API calls the Remote Cockpit makes or by checking it in the Connected Drive app. The `AUTH_CLIENT_ID` can be obtained by sniffing some more on the XHR calls the Remote Cockpit does.

## What this project is not

This is not a fully featured BMW i3 SDK. It does provide you with a working boilerplate to hack away.


## To do

* Only renew access token when it has expired (401), it now requests a new access token for each API call which is highly inefficient. But it works.
* Add functionality to call a webhook / send out a notification to a mobile device once your car has fully charged. 
