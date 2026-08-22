# Initialize with a Private Integration Token[​](https://marketplace.gohighlevel.com/docs/sdk/php#initialize-with-a-private-integration-token "Direct link to Initialize with a Private Integration Token")

- **URL:** https://marketplace.gohighlevel.com/docs/sdk/php
- **Summary:** The `gohighlevel/api-client` composer package is the officially supported SDK for PHP 7.4+ projects.

[Skip to main content](https://marketplace.gohighlevel.com/docs/sdk/php#__docusaurus_skipToContent_fallback)

Version: v3

On this page

The `gohighlevel/api-client` composer package is the officially supported SDK for PHP 7.4+ projects. It wraps the full HighLevel API with PSR-18 friendly services, automatic OAuth token rotation, webhook helpers, and pluggable session storage.

Installation[​](https://marketplace.gohighlevel.com/docs/sdk/php#installation "Direct link to Installation")

    composer require gohighlevel/api-client

Quick Start[​](https://marketplace.gohighlevel.com/docs/sdk/php#quick-start "Direct link to Quick Start")

### Initialize with a Private Integration Token[​](https://marketplace.gohighlevel.com/docs/sdk/php#initialize-with-a-private-integration-token "Direct link to Initialize with a Private Integration Token")

    <?phprequire_once __DIR__ . '/vendor/autoload.php';use HighLevel\HighLevel;use HighLevel\HighLevelConfig;$config = new HighLevelConfig([    'privateIntegrationToken' => $_ENV['GHL_PIT'],]);$ghl = new HighLevel($config);

### Initialize with OAuth credentials[​](https://marketplace.gohighlevel.com/docs/sdk/php#initialize-with-oauth-credentials "Direct link to Initialize with OAuth credentials")

    use HighLevel\HighLevel;use HighLevel\HighLevelConfig;$config = new HighLevelConfig([    'clientId' => $_ENV['GHL_CLIENT_ID'],    'clientSecret' => $_ENV['GHL_CLIENT_SECRET'],]);$ghl = new HighLevel($config);

### Make your first API call[​](https://marketplace.gohighlevel.com/docs/sdk/php#make-your-first-api-call "Direct link to Make your first API call")

    use HighLevel\Services\Contacts\Models\SearchBodyV2DTO;$body = new SearchBodyV2DTO([    'locationId' => 'zBG0T99IsBgOoXUrcROH',    'pageLimit' => 1,]);$contactsResponse = $ghl->contacts->searchContactsAdvanced($body);error_log(json_encode($contactsResponse, JSON_PRETTY_PRINT));

Session storage[​](https://marketplace.gohighlevel.com/docs/sdk/php#session-storage "Direct link to Session storage")

Use `HighLevel\Storage\MongoDBSessionStorage` provided by SDK to use mongo as storage or extend it to store tokens in MySQL, PostgreSQL, Redis, etc:

    <?phpuse HighLevel\HighLevel;use HighLevel\Storage\MongoDBSessionStorage;$sessionStorage = new MongoDBSessionStorage(    $config['mongo_url'],    $config['mongo_db_name'],    $config['collection_name']);$ghl = new HighLevel([    'clientId' => $config['client_id'],    'clientSecret' => $config['client_secret'],    'sessionStorage' => $sessionStorage,    'logLevel' => 'warn']);

Webhook support[​](https://marketplace.gohighlevel.com/docs/sdk/php#webhook-support "Direct link to Webhook support")

SDK provides webhook support which can be used as shown below. It will handle INSTALL and UNINSTALL events sent by HighLevel. It will generate token and store it in the db.

    $payload = $request->getBody()->getContents();$signature = $request->getHeaderLine('x-wh-signature');$ghl->getWebhookManager()->processWebhook(    $payload, // pass raw request body as string here    $signature,    $_ENV['WEBHOOK_PUBLIC_KEY'],    $_ENV['GHL_CLIENT_ID']);

Call `verifySignature` directly when you just need validation:

    $ghl->getWebhookManager()->verifySignature(    $payload,    $signature,    $_ENV['WEBHOOK_PUBLIC_KEY']);

Additional resources[​](https://marketplace.gohighlevel.com/docs/sdk/php#additional-resources "Direct link to Additional resources")

You can find some SDK & additional examples here:

[SDK](https://github.com/GoHighLevel/highlevel-api-php)

[packagist](https://packagist.org/packages/gohighlevel/api-client)

[Examples](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/php)

*   [Installation](https://marketplace.gohighlevel.com/docs/sdk/php#installation)
    
*   [Quick Start](https://marketplace.gohighlevel.com/docs/sdk/php#quick-start)
    *   [Initialize with a Private Integration Token](https://marketplace.gohighlevel.com/docs/sdk/php#initialize-with-a-private-integration-token)
        
    *   [Initialize with OAuth credentials](https://marketplace.gohighlevel.com/docs/sdk/php#initialize-with-oauth-credentials)
        
    *   [Make your first API call](https://marketplace.gohighlevel.com/docs/sdk/php#make-your-first-api-call)
        
*   [Session storage](https://marketplace.gohighlevel.com/docs/sdk/php#session-storage)
    
*   [Webhook support](https://marketplace.gohighlevel.com/docs/sdk/php#webhook-support)
    
*   [Additional resources](https://marketplace.gohighlevel.com/docs/sdk/php#additional-resources)
