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

ALTER TABLE projects
ADD FOREIGN KEY (user_name) REFERENCES users (_id) ON DELETE CASCADE ON UPDATE CASCADE