# Career Canvas

## 🔐 Default Credentials

### Normal User:

- **Email:** `mdarfinji45@gmail.com`
- **Password:** `123456`

### Admin User:

- **Email:** `smart@gmail.com`
- **Password:** `1234567`

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🤖 Introduction

**Career Canvas** is engineered to provide an intuitive and efficient user experience for job seekers and recruiters alike. Our platform leverages modern technologies to deliver robust functionality, ensuring that users can easily navigate job listings, apply for positions, and manage their profiles while administrators can effortlessly manage job postings, company registrations, and application statuses.

## ⚙️ Tech Stack

- React.js
- Tailwind CSS
- SchadCn
- Framer Motion
- Cloudinary
- JWT
- Multer
- MongoDB
- Express.js
- Node.js

## API Endpoints

### Application Routes (`applicationRoutes.js`)

- **GET** `/get`: Retrieves the list of jobs that the authenticated user has applied for.
- **GET** `/applyjob/:id`: Allows an authenticated user to apply for a job with the given `id`.
- **GET** `/status/:id/update`: Updates the status of an application (e.g., pending, accepted, rejected) based on the provided `id`.
- **GET** `/applicants/:id`: Retrieves the list of applicants for a specific job (only accessible by authenticated users, likely recruiters).

### Company Routes (`companyRoutes.js`)

- **GET** `/getCompany`: Retrieves a list of all companies associated with the authenticated user.
- **POST** `/register`: Registers a new company under the authenticated user.
- **GET** `/getSingleCompany/:id`: Retrieves detailed information about a specific company by its `id`.
- **PUT** `/updateCompany/:id`: Updates information about a specific company by its `id`.

### User Routes (`userRoutes.js`)

- **POST** `/register`: Allows a new user to register, with a file upload option (e.g., profile picture).
- **POST** `/login`: Authenticates a user and starts a session.
- **GET** `/logout`: Logs out the user, ending the session.
- **POST** `/profile/update`: Allows an authenticated user to update their profile details, including uploading a new profile picture.

### Job Routes (`jobRoutes.js`)

- **POST** `/postjob`: Allows an authenticated recruiter to post a new job.
- **GET** `/getjob`: Retrieves a list of all jobs available in the system.
- **GET** `/getadminjobs`: Retrieves a list of jobs posted by the authenticated recruiter (admin jobs).
- **GET** `/getjobById/:id`: Retrieves details of a specific job by its `id`.

## Summary of Entity Relationships

- **User**: Can be a student or recruiter. Students apply to jobs, and recruiters post jobs under companies.
- **Company**: Created by recruiters, contains information about the business and is associated with multiple jobs.
- **Job**: Posted under a company by a recruiter, applied for by students.
- **Application**: Created when a student applies for a job. Contains the status of the application and links to both the job and the applicant.

## Data Relationships

### Users

- Users can have one of two roles: student or recruiter.
- A student user can apply for jobs, view job postings, and update their profiles with information like skills, resume, and profile photo.
- A recruiter user can create and manage jobs, as well as represent a company.

### Companies

- Companies are created and managed by recruiter users.
- Each Company is associated with a single recruiter user (`userId`), who has the ability to create and manage job postings for the company.
- The Company model stores details like the company’s name, description, website, location, and logo.

### Jobs

- Jobs are associated with a Company and are created by recruiter users.
- Each Job posting contains details such as the title, description, requirements, salary, experience level, location, job type, and the position being offered.
- Jobs are linked to the Company model via a reference (`company`), indicating which company is offering the job.
- The Job model also includes references to the Application model, storing all applications made by users for that particular job.

### Applications

- Applications represent a user's interest in a specific job.
- Each Application is linked to both a Job and a student user (referred to as the applicant).
- The Application model includes the status of the application, which can be either pending, accepted, or rejected.
- Through these relationships, a recruiter can track all applications for the jobs they have posted, and students can view the status of their applications.

## 🔋 Features

### For Normal Users:

- **View Jobs:** Browse through a variety of job opportunities available on the platform.
- **Apply for Jobs:** Submit applications for jobs that match your skills and interests.
- **Search Jobs:** Utilize the advanced search functionality to find specific job listings.
- **Update Profile:** Manage and update your personal profile information.

### For Administrators:

- **Create Jobs:** Add new job postings to the platform with detailed descriptions.
- **Create Companies:** Register and manage companies on the portal.
- **View Applications:** Access and review job applications submitted by users.
- **Update Application Status:** Change the status of job applications as needed.

### Additional Features:

- **Authentication:** Secure user authentication, ensuring safe sign-in/out and session management.
- **Data Management:** Ensure data is kept updated throughout the user session.
- **Responsive Design:** Optimized for a seamless experience across all devices.
