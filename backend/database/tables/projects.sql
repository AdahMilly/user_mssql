CREATE TABLE projects
(
    _id varchar(100) NOT NULL PRIMARY KEY,
    project_name varchar(250) NOT NULL,
    user_name varchar(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
)