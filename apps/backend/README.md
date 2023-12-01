# A restaurant API with NestJS

An application that allow a restaurant presentation 

## User Flow

### User Registration/Login
- Users sign up or log in using their Spotify credentials.


### CRUD operation for the ower
- Users are presented with potential matches based on their gender preference.

### Interaction
- Users see their matches.
- For mutual matches, they can view the email of the match.

## API Requirements

We seek a skilled Node.js developer to create this API using the AdonisJS framework. The chosen database engine can be PostgreSQL or MySQL based on your expertise and recommendation.

## Required Endpoints

1. **User Registration/Login**
   - Implement authentication to allow users to register or log in.

2. **Logout Endpoint**
   - Provide a secure endpoint for users to log out of their accounts.

3. **Profile Management**
   - Create endpoints for users to complete their profiles, including basic information 

 
  

 
 

## Technical Details

- **Framework:** NestJS
- **Database:** PostgreSql


## Getting Started

1. **Install Dependencies**
    ```bash
    npm install
    ```

2. **Configure Database Connection**
    - Set up the database connection details in your `.env` file.

3. **Configure Spotify API**
    - Add your Spotify client_id and client_secret in your `.env` file.

4. **Run Migrations and Seed Data**
    ```bash
    node ace migration:run
    node ace db:seed
    ```

5. **Start the Application**
    ```bash
    npm run dev
    ```

6. **Access the API at**
   - [http://localhost:3000/api](http://localhost:3000/api)

## API Documentation

- For the Login API (http://localhost:3000/api/signin), open it in a browser as the request will be redirected to Spotify for authentication. This API won't work in Postman.
- All other APIs are provided in the Postman collection.