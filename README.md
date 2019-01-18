### Crowd-source questions for a meetup. ​ Questioner​​ helps the meetup organizer prioritize
questions to be answered. Other users can vote on asked questions and they bubble to the top
or bottom of the log.

### This API endpoints are for
   * Creating a record for meetup, questions, users, Rsvp
   * Retrieve record(s) for meetup(s)
   * Rsvp for a meetup
   * Upvote or downvote a question

### API Endpoints

| END POINTS                            | METHODS                        |:- FOR                             |
| /api/v1/meetups                       | GET                            | retrive all records for meetups |
| /api/v1/meetups/:topic                | GET                            | retrieving a specified meetup   |
| /api/v1/meetups                       | POST                           | posting a meetup                |
| /api/v1/question                      | GET                            | retrieving all questions record |
| /api/v1/question/:id/upvote           | PATCH                          | up-voting a specified question  |
| /api/v1/question/:id/downvote         | PATCH                          | up-voting a specified question  |
| /api/v1/rsvp                          | GET                            | retrieving all rsvp records     |
| /api/v1/rsvp/:userId                  | GET                            | retrieving all rsvp records     |
| /api/v1/RSVP                          | POST                           | posting rsvp for a meetup       |
| /api/v1/users                         | GET                            | retrieving records for users    |
| /api/v1/users/:id                     | GET                            | retrieve a specified meetup     |
| /api/v1/users                         | POST                           | post a user                     |


### This can be tested using postman

[![Coverage Status](https://coveralls.io/repos/github/Emile-Nsengimana/Andela/badge.svg?branch=ch2)](https://coveralls.io/github/Emile-Nsengimana/Andela?branch=ch2)
