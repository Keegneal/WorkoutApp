CREATE DATABASE my_workout_app;
USE my_workout_app

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(255) UNIQUE,
password VARCHAR(255)
);

CREATE TABLE exercises(
id INT AUTO_INCREMENT PRIMARY KEY,
api_exercise_id VARCHAR(100) NOT NULL,
name VARCHAR(255),
git_url TEXT
);

CREATE TABLE saved_exercies(
user_id INT NOT NULL,
exercise_id INT NOT NULL,
PRIMARY KEY (user_id, exercise_id),
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);