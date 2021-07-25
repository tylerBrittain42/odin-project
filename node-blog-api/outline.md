# Blog API
This is a rough outline for the API project found in The Odin Project. This project will focus both on utilizing a RESTful design as well as using JWT as a way to authenticate requests. 
# Models
## Entry
- Title
- Body
- Timestamp
# Entries (API)
*Note:* Due to their only being a total of three requests, everything will be handled on a single route with a single controller.
## **/**
- **GET:** All Posts
- **POST:** New Post (title, body)
- **DELETE:** All posts

## **/:MessageID**
- **GET:** Post by id
- **DELETE:** Post by id
# Plan of Attack

1. Add JWT and passport
1. Implement Front facing site
1. Clean up code
1. Add the virutal url(see library example)?