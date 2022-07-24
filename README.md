
# Pollur.io 

[Pollur.io](https://Pollur.io) is a prototype for a poll based social media site.

## Features

User Accounts
- Users can create personal account with username/password
- Passwords are encoded using spring security BCryptPasswordEncoder
Poll creator
- Logged in users can create polls with up to 6 opitons
- Individual polls can be shared via url
Vote casting
- Logged in users can cast votes and view the results of a poll
- Casted votes can be removed and recast
Discover page
- contains list of all public polls that can be sorted/filtered
- infinite scroll
User Profile page
- poll list containing polls the user created
- poll list containing polls the user has participated in
Authentication/Authorization
- JWT generation endpoint is secured using Basic auth
- All other endpoints are secured using JSON Web Tokens (JWT)


## Technologies

- Spring/Spring Boot Backend
- Angular Front end
- Material Design Bootstrap
- Gradle
- Embedded h2 db
- Deployed on AWS elastic beanstalk
## Backlog
- Add comment section to individual polls
- Use PostgreSQL for production DB instead of embedded h2
- Bootstrap production database with polls containing various created date times.
