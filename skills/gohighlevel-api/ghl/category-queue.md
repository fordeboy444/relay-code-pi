# Category Queue

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/category-queue
- **Summary:** Category Queue

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/category-queue#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Social Media Posting API

[📄️Get all categories with their queue status\
---------------------------------------------\
\
Returns categories with status: 'available' (no queue), 'in_queue' (active/paused queue), or 'draft' (queue in draft).](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-available-categories)

[📄️Create a new category queue\
------------------------------\
\
Creates a queue in draft status for a category. Published posts are auto-added. Use update endpoint to activate.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue)

[📄️Fetch category queues for a location\
---------------------------------------\
\
Retrieves a paginated list of all category queues for a given location, excluding any that have been marked as deleted.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-queues)

[📄️Fetch a category queue by ID\
-------------------------------\
\
Retrieves the details of a single category queue by its unique ID. The response includes a count of posts within the queue that have errors.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-queue-by-id)

[📄️Update queue settings or status\
----------------------------------\
\
Updates queue status (active/paused/deleted), time slots, or skip dates.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/update-queue)

[📄️Fetch items from a queue\
---------------------------\
\
Returns paginated queue items. Pass sessionId to get draft items from an edit session instead of live items.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-queue-items)

[📄️Start or resume an edit session\
----------------------------------\
\
Creates a draft copy of queue items for editing. Changes are staged until saved or discarded.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-edit-session)

[📄️Save edit session changes\
----------------------------\
\
Applies all staged changes to the live queue and closes the edit session.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/save-edit-session)

[📄️Discard edit session changes\
-------------------------------\
\
Cancels the edit session and deletes all staged changes without affecting the live queue.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/discard-edit-session)

[📄️Fetch calendar view for an edit session\
------------------------------------------\
\
Retrieves a calendar preview of scheduled posts based on draft items within an edit session. This shows how posts would be scheduled if changes were saved.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-edit-session-calendar)

[📄️Fetch slot information for queue items\
-----------------------------------------\
\
Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots)

[📄️Delete an item from a queue\
------------------------------\
\
Deletes an item from a specific category queue.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-queue-item)

[📄️Update an item in a queue\
----------------------------\
\
Updates the content or variations of a specific item within a category queue.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/update-queue-item)

[📄️Get scheduled posts calendar view\
------------------------------------\
\
Returns scheduled posts from active queues within a date range. Supports filtering by categories and accounts.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-calendar-list)

[📄️Delete an active post and schedule the next one\
--------------------------------------------------\
\
Deletes a post that is currently scheduled and automatically triggers the scheduling of the next available post in the queue.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-current-active-post-and-schedule-next)

[📄️Reset an item in a queue\
---------------------------\
\
Resets a specific queue item to its original state, discarding any modifications made.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/reset-queue-item)

[📄️Clone a queue item\
---------------------\
\
Duplicates an existing queue item at a specified order position. Requires an active edit session.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/clone-queue-item)

[📄️Create a new item in the queue\
---------------------------------\
\
Adds a new post item to a queue. Use sessionId for edit session or directToQueue for immediate addition.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue-item)
