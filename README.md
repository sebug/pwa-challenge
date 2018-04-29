### Progressive WebApp Challenge
The goal is to get to a 100% Lighthouse Score with this app that looks up postboxes.

For the fun of it we'll also do it serverless.

	az group create --name pwaChallenge --location westeurope
	az storage account create --name pwachallenge --location westeurope --resource-group pwaChallenge --sku Standard_LRS
	az functionapp create --name PwaChallenge --storage-account pwachallenge --resource-group pwaChallenge --consumption-plan-location westeurope

Set up continuous integration with GitHub, quoi.

Also, set the connection string defaults for the storage account in your profile (az storage account show-connection-string --resource-group pwaChallenge --name pwachallenge).

	az storage container create --name pwachallengestatic
	az storage blob upload --container-name pwachallengestatic --file clientside/index.html --name index.html --content-type "text/html"
	az storage container set-permission --name pwachallengestatic --public-access blob
	az storage blob upload --container-name pwachallengestatic --file clientside/dist.js --name dist.js --content-type "application/javascript"
	az storage blob upload --container-name pwachallengestatic --file clientside/polyfill.min.js --name polyfill.min.js --content-type "application/javascript"

You'll also need Knockout (which you can get via curl -O http://knockoutjs.com/downloads/knockout-3.4.2.js ). In the spirit of not going too heavy I'm not doing much more on the side of client-side package management.

	az storage blob upload --container-name pwachallengestatic --file clientside/knockout-3.4.2.js --name knockout-3.4.2.js --content-type "application/javascript"

Since we'll be building a manifest, may as well get jQuery locally as well ( curl -O https://code.jquery.com/jquery-3.2.1.min.js )

	az storage blob upload --container-name pwachallengestatic --file clientside/jquery-3.2.1.min.js --name jquery-3.2.1.min.js --content-type "application/javascript"

Require.js as well for completeness ( curl -O https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js )

	az storage blob upload --container-name pwachallengestatic --file clientside/require.min.js --name require.min.js --content-type "application/javascript"

The service worker file needs a special route so that we can intercept in a minimal required scope:

	az storage blob upload --container-name pwachallengestatic --file sw.js --name sw.js --content-type "application/javascript"

## The Manifest
Next part of the process is of course to have a manifest (see https://developers.google.com/web/fundamentals/web-app-manifest/ ). But this requires some icons as well.

The whole thing can then be accessed here: https://pwachallenge.azurewebsites.net
