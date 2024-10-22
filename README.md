## RAS-API

`ras-api` is a RESTful API built with Node.js and Express, designed to interact with AWS services including RDS for database management and S3 for file storage. This API can be deployed on an EC2 instance, and it may utilize API Gateway for enhanced management and scalability.

## Features

- **Node.js & Express**: A lightweight framework for building web applications and APIs.
- **AWS RDS**: Managed relational database service to store application data.
- **AWS S3**: Object storage service for storing and retrieving files.
- **Deployment on EC2**: Scalable cloud server for hosting the API.
- **API Gateway Integration**: Optional feature for managing API requests and responses.

### Prerequisites

- Node.js (v14 or higher)
- AWS Account
- Basic knowledge of REST APIs

## API Endpoints

The following table outlines the available API endpoints for the `ras-api` project:

| Method | Endpoint           | Description                      |
|--------|--------------------|----------------------------------|
| GET    | `/api/users`       | Retrieve all users               |
| POST   | `/api/users`       | Create a new user                |
| GET    | `/api/users/:id`   | Retrieve a user by ID            |
| PUT    | `/api/users/:id`   | Update a user by ID              |
| DELETE | `/api/users/:id`   | Delete a user by ID              |

