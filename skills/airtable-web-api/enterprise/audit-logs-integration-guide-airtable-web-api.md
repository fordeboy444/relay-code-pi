# Audit Logs Integration Guide - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/audit-logs-integration-guide
- **Summary:** Quickly start monitoring your organization's audit log events using the Audit Log API.

Integration Guide

Audit Log
=========

Quickly start monitoring your organization's audit log events using the Audit Log API.

#### Acquiring a token

The audit log events API is [accessible](https://airtable.com/developers/web/api/authentication)
 via PAT and OAuth. Your token will require the `enterprise.auditLogs:read` scope which is only available to enterprise admins.

#### Enterprise account ID

All requests require an enterprise account ID, e.g. `ent00000000000000`.  
This value is available as the “Account ID” in your admin panel in the left-side navigation bar for any enterprise account of which you are an enterprise administrator.

#### Retention

Audit log events are stored and queryable for 180 days.

#### Query ranges

To limit a query to a particular time range, you can supply `startTime` and/or `endTime`. These should be supplied in ISO 8601 format, e.g. 2023-01-20T15:58:30Z.  
  
By default, `startTime` is set to the maximum event retention duration, 180 days ago.  
  
By default, `endTime` is set to now.

#### Filter parameters

You may supply a user ID (or multiple) to the `originatingUserId` param to filter for events that were initiated by any of the supplied user IDs.  
  
To filter for events occurring on a particular model ID (e.g. a base or workspace ID) supply it (or multiple) to the `modelId` param. Events that occur within the context of the model will be included when querying by the model ID of a workspace, base or interface, e.g. viewing a base will be included when querying for the model ID of its parent workspace.  
  
You may supply an event type value (or multiple), e.g. createBase or duplicateBase), to the `eventType` param to filter for only events of the given types.

#### Limits

By default, responses include pages of up to 10 events at a time. This can be configured using the `pageSize` parameter and is limited to a maximum setting of 1,000. If a query returns more than `pageSize` events at once, its response must be paginated.

#### Sorting

By default, events are queried in a descending order from newest-oldest and are returned in pages where the first event in the `events` array of the response is the most recently-recorded event within the scope of the query.  
  
This can be configured setting the `sortOrder` param to `ascending` or `descending`. If `ascending` is specified, events are returned in pages where the first event in the `events` array of the response is the _oldest_ recorded event within the scope of the query.

#### Pagination

API responses that exceed the specified `pageSize` parameter (maximum 1,000) must be paginated to retrieve the full results. `previous` and `next` are returned in responses acting as “pagination cursors”.  
  
When a response wants to indicate that more older events may be available, it will return a `pagination.previous` value. As long as a `previous` value comes back in the response, the API may respond with further, older events. If no previous value is returned, there are no more older events available for the given query.

Real-time ingestion of events (aka streaming requests)

Useful for continually ingesting new events. If an `endTime` is _not_ specified, a request is assumed to be "streaming", and will return incoming events as long as the query is repeated.  
There are a few key things to keep in mind:

*   There are an infinite amount of newer pages. A `pagination.next` parameter will _always_ be available.
*   Filter parameters (`originatingUserId`, `eventType`, `modelId`) will likely not be useful here due to the fact that typically all events need to be returned to effectively archive all available events.

#### Example (starting streaming)

This request will return up to 1,000 of your enterprise’s most recent events from newest-to-oldest due to the default `startTime` and `endTime`. The response will return a `pagination.next` value that can be supplied in the subsequent request as the `next` parameter to continue consuming events from the stream.

This request will continue streaming events from where the prior request left off, returning any/all events newer than the newest event returned in the previous query. Using your pagination token is important as it ensures you will not miss any events. The response will return a `pagination.next` value that can be used again in subsequent requests as the `next` parameter. This process goes on and on and on…

#### Example (backfilling)

If the initial stream query's response contained a `pagination.previous` value, there are older events you may want to source as well. You can start querying backwards in time through all of the enterprise’s events that are still retained.

This request will return the next-older page of your enterprise’s events. Continue querying using the returned `pagination.previous` as the `previous` parameter until a response no longer contains a `pagination.previous` value.

#### Example (starting streaming from earliest event retained)

Another method of consuming events from the stream is starting from the oldest retained event and moving forwards in time. This avoids requiring a backfill and will source every event retained and allow consuming any new events. The key difference here is using the `sortOrder` param and noticing that events will be returned from oldest-to-newest, starting at the oldest-available event.

This request will return events in pages from oldest-to-newest, starting from the default `startTime`. Subsequent queries using the returned `pagination.next` value as the `next` parameter will continue consuming events moving forwards in time.

This request will return the next-newer page of events with an always-present `pagination.next` value in responses that can be provided in subsequent requests as the `next` parameter. This process goes on and on and on…  
Note that it may take a non-trivial amount of time to backfill all your enterprise’s existing events since you’ll be starting at the oldest-available events and working your way forwards in time to the newest-available events.

Querying events ad-hoc (aka bounded requests)

Useful for examining events and investigations between a specific time range. If an `endTime` _is_ specified, a request is assumed to be bounded.  
Keep a few key things in mind:

*   `startTime` and `endTime` can both be used to limit queries to a specific time range, within the bounds of maximum event retention - now.
*   Filter parameters (`originatingUserId`, `eventType`, `modelId`) will prove useful here to more easily specify which specific events you'd like to see.
*   Pagination parameters will be available if the query has more events to return. Note: it is possible to have a response with zero events, yet still have pagination tokens. This means that the query has not _yet_ found any events but on further requests, _may_ find events. Continue paginating as long as non-`null` pagination tokens are returned in order to consume all the queried events.

#### Example (filtering for a time range)

This query will return events between 2023-03-01T12:00:00.000Z and 2023-04-01T12:00:00.000Z.

#### Example (filtering for a specific event type)

This query will return events of type `createBase`.

#### Example (filtering for multiple event types)

The API treats multiple values for a single parameter as a logical OR, meaning this query will return events with type `createBase` alongside those of type `deleteBase` in the same response.

#### Example (filtering for events initiated by a specific user)

This query will return events where the actor is `usr00000000000000`.

#### Example (filtering using example parameters)

The API treats multiple different parameters as a logical AND, meaning this query will return events with type `createBase` that originating from user ID `usr00000000000000`.

!!
