// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus/2012-R2-Datacenter/versions?$orderby=name%20asc&api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20150825\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20150825\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20150916\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20150916\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151022\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151022\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '903',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5c558ec0-eaa2-4f01-be41-047c1189ab22',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6dae4bb4-6439-4258-a782-5533aa06b333',
  'x-ms-routing-request-id': 'WESTUS:20151214T013632Z:6dae4bb4-6439-4258-a782-5533aa06b333',
  date: 'Mon, 14 Dec 2015 01:36:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers/WindowsServer/skus/2012-R2-Datacenter/versions?$orderby=name%20asc&api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20150825\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20150825\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20150916\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20150916\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"4.0.20151022\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer/Skus/2012-R2-Datacenter/Versions/4.0.20151022\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '903',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5c558ec0-eaa2-4f01-be41-047c1189ab22',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '6dae4bb4-6439-4258-a782-5533aa06b333',
  'x-ms-routing-request-id': 'WESTUS:20151214T013632Z:6dae4bb4-6439-4258-a782-5533aa06b333',
  date: 'Mon, 14 Dec 2015 01:36:32 GMT',
  connection: 'close' });
 return result; }]];