# WEBSITE FOR SAE INDIA BIT SINDRI

## To configure the site, create .env file and enter these values

-   LOCAL_DATABASE_URL= provide a postgresql url
-   NODE_ENV= set to development

### To start only the frontend

    > cd client
    > npm i
    > npm start

### To start only the backend

    > npm start

### End points -

    - /api/blog     - GET    - returns all blog posts
    - /api/blog/:id - Delete - Delete a blog post
    - /api/blog/:id - PUT    - updates a blog post
    - /api/blog     - POST   - creates a new blog post

    - /api/contact     - GET    - returns all messages on the contact page
    - /api/contact     - POST   - creates a new message on the contact page
    - /api/contact/:id - DELETE - deletes a message on the contact page
    - /api/contact/:id - PUT    - toggle if the message should be marked read or unread

    - /api/alumni     - GET    - returns all alumni
    - /api/alumni     - POST   - creates a new alumni
    - /api/alumni/:id - DELETE - deletes an alumni
    - /api/alumni/:id - PUT    - updates an alumni

    - /api/post_bearer     - GET    - returns all post bearer
    - /api/post_bearer     - POST   - creates a new post bearer
    - /api/post_bearer/:id - DELETE - deletes an post bearer
    - /api/post_bearer/:id - PUT    - updates an post bearer
