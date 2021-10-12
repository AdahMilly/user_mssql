CREATE TABLE projects
(
    _id varchar(100) NOT NULL PRIMARY KEY,
    project_name varchar(250) NOT NULL,
    user_name varchar(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
)


ALTER TABLE projects
ADD isDeleted INT DEFAULT 0

SELECT * FROM projects

ALTER TABLE projects
ADD user_id VARCHAR(100)

ALTER TABLE projects
ADD CONSTRAINT FK_user_project FOREIGN KEY (user_id) REFERENCES users (_id) ON DELETE CASCADE ON UPDATE CASCADE
