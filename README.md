### Progressive WebApp Challenge
The goal is to get to a 100% Lighthouse Score with this app that looks up postboxes.

For the fun of it we'll also do it serverless.

	az group create --name pwaChallenge --location westeurope
	az storage account create --name pwachallenge --location westeurope --resource-group pwaChallenge --sku Standard_LRS
	az functionapp create --name PwaChallenge --storage-account pwachallenge --resource-group pwaChallenge --consumption-plan-location westeurope

Set up continuous integration with GitHub, quoi.

	az storage container create --name pwachallengestatic
	az storage blob upload --container-name pwachallengestatic --file clientside/index.html --name index.html --content-type "text/html"
