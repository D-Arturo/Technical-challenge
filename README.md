Technical-challenge.

Node Js - Express based project.
.env config used as good practices

npm i   to get all the dependencies used.

Instructions:

Sprint 1
Our product owner is worried about how to manage all of our ads. He wants to do a lot of things but as a MVP
it's fine if we can add, remove and list ads from our ads catalog.
An ad it's made up of a title, a description and a publication date. The title should not be longer than 50
characters. Title and description can't be the same.

Sprint 2
Having delivered the MVP of the last sprint, product owner detected that our catalog is growing faster than
expected and wants to implement a mechanism to purge old ads. He has come up with an expiration strategy
that given a date removes all the ads published before this date (the day itself not included).
He also requested for this sprint that the catalog has a maximum of 100 ads. If someone tries to add an ad when
maximum size has been reached, then the oldest ad that currently exists has to be removed.

Sprint 3 
Product owner is now on fire and has a lot of ideas for our fantastic ads catalog.
One of them is get a concrete ad from the catalog to retrieve its information.
Other is allowing users to mark ads as favorite. Ads can be favored by multiple users and users can favorite
multiple ads. Users must be notified when one of their favorite ads expires or is removed from the catalog. The
ad has to be automatically removed from their favorite ads list.


Sprints 1 and 2 are resolved and Sprint 3 is answered by the fact that PO has no power to decide on his own how to approach to a solution.
