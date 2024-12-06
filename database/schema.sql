-- Create the database
CREATE DATABASE IF NOT EXISTS MyPassDB;

-- Use the database
USE MyPassDB;

-- Create the 'users' table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    master_password_hash VARCHAR(255) NOT NULL,
    security_question_1 TEXT NOT NULL,
    security_question_2 TEXT NOT NULL,
    security_question_3 TEXT NOT NULL,
    security_answer_1_hash VARCHAR(255) NOT NULL,
    security_answer_2_hash VARCHAR(255) NOT NULL,
    security_answer_3_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'vault' table
CREATE TABLE vault (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    item_type ENUM('Login', 'Credit Card', 'Identity', 'Secure Note') NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
