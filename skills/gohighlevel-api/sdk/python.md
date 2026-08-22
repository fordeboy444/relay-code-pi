# Initialize the client[​](https://marketplace.gohighlevel.com/docs/sdk/python#initialize-the-client "Direct link to Initialize the client")

- **URL:** https://marketplace.gohighlevel.com/docs/sdk/python
- **Summary:** The official `gohighlevel-api-client` package publishes a async client that speaks to every HighLevel endpoint with the same token automation, webhook helpers, and storage adapters you get on other platforms.

[Skip to main content](https://marketplace.gohighlevel.com/docs/sdk/python#__docusaurus_skipToContent_fallback)

Version: v3

On this page

The official `gohighlevel-api-client` package publishes a async client that speaks to every HighLevel endpoint with the same token automation, webhook helpers, and storage adapters you get on other platforms. Requires Python 3.8+.

Installation[​](https://marketplace.gohighlevel.com/docs/sdk/python#installation "Direct link to Installation")

*   pip
*   Pipenv
*   Poetry

    pip install gohighlevel-api-client

    pipenv install gohighlevel-api-client

    poetry add gohighlevel-api-client

Quick Start[​](https://marketplace.gohighlevel.com/docs/sdk/python#quick-start "Direct link to Quick Start")

### Initialize the client[​](https://marketplace.gohighlevel.com/docs/sdk/python#initialize-the-client "Direct link to Initialize the client")

    from highlevel import HighLevelclient = HighLevel(    client_id="your_client_id",    client_secret="your_client_secret",)

### Make an API call[​](https://marketplace.gohighlevel.com/docs/sdk/python#make-an-api-call "Direct link to Make an API call")

The SDK is async-first; wrap your logic in `asyncio.run()` when you are not already inside an async framework.

    import asynciofrom highlevel import HighLevelasync def main():  client = HighLevel(    client_id="your_client_id",    client_secret="your_client_secret",  )  response = await client.contacts.search_contacts_advanced({    "locationId": "zBG0T99IsBgOoXUrcROH",    "pageLimit": 5,  })  print(response)asyncio.run(main())

Session storage[​](https://marketplace.gohighlevel.com/docs/sdk/python#session-storage "Direct link to Session storage")

Use in-memory storage for local testing or swap in MongoDB/Redis/etc. for production resiliency.

    from highlevel.storage import MongoDBSessionStoragestorage = MongoDBSessionStorage(  connection_string="mongodb://localhost:27017",  database_name="ghl_sessions",  collection_name="jwt_tokens",)client = HighLevel(  client_id="your_client_id",  client_secret="your_client_secret",  session_storage=storage,)

Webhook integration[​](https://marketplace.gohighlevel.com/docs/sdk/python#webhook-integration "Direct link to Webhook integration")

Hook up the middleware returned by `client.webhooks.subscribe()` to validate signatures, respond to INSTALL/UNINSTALL automatically, and keep session storage synchronized.

    client = HighLevel(  client_id="your_client_id",  client_secret="your_client_secret")webhook_middleware = client.webhooks.subscribe()@app.post("/api/webhooks/ghl")async def handle_ghl_webhook(request):  await webhook_middleware(request)  # you custom logic for webhook goes here  return {"status": "success"}

Additional resources[​](https://marketplace.gohighlevel.com/docs/sdk/python#additional-resources "Direct link to Additional resources")

You can find some SDK & additional examples here:

[SDK](https://github.com/GoHighLevel/highlevel-api-python)

[pypi](https://pypi.org/project/gohighlevel-api-client/)

[Examples](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/python)

*   [Installation](https://marketplace.gohighlevel.com/docs/sdk/python#installation)
    
*   [Quick Start](https://marketplace.gohighlevel.com/docs/sdk/python#quick-start)
    *   [Initialize the client](https://marketplace.gohighlevel.com/docs/sdk/python#initialize-the-client)
        
    *   [Make an API call](https://marketplace.gohighlevel.com/docs/sdk/python#make-an-api-call)
        
*   [Session storage](https://marketplace.gohighlevel.com/docs/sdk/python#session-storage)
    
*   [Webhook integration](https://marketplace.gohighlevel.com/docs/sdk/python#webhook-integration)
    
*   [Additional resources](https://marketplace.gohighlevel.com/docs/sdk/python#additional-resources)
