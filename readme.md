Tier 1 Week 5
===

This week, we'll be exploring classes by creating an application to help maintain a record collection.

Required Features
===

Adding records to the collection

- start by creating a ```Record``` that has the following properties:
 - title
 - artist
 - year
- next create a variable "collection" that is am empty array
- add a function to your script named ```addToCollection( title, artist, year)``` that, when called, creates a new album and pushes it into the "collection" array
- this function should return the new record

Stretch Goals
===

Finding a record by name

- create the function ```findRecord( title )```
- this function should receive an argument of a record title
- if this record is found in the "collection" array, return the record's index within the array
- if the record is not found, return ```false```

Get all albums by an artist

- create a function called ```allBy( artist )```
- when run, this function should return an array of all albums in "collection" that are by the given artist 

**Reminder**: Make sure to answer this week's Slack discussion question!
