# Express backend REST API deployed fully to AWS

A simple backend REST API developed with NodeJS and Express deployed fully to AWS. Express application deployed as a **Lambda** function, **MySQL** database hosted on **RDS** and accessed through API deployed on **API Gateway**. **VPC** configuration for database and lambda, access management with **IAM**.

## AWS Services used
- **AWS Management Console**
- **Lambda**
- **API Gateway**
- **Relational Database Service (RDS)**
- **Identity and Access Management (IAM)**
- **Virtual Private Cloud (VPC)**
- **CloudWatch**

## Usage

Add environment variables to .env file and start locally with **npm run start** to start on port 3000.

## Environment variables
- RDS_HOSTNAME=your-database-hostname
- RDS_USERNAME=your-database-username
- RDS_PASSWORD=your-database-password
- RDS_PORT=your-database-port
- RDS_DATABASE=your-database-name
