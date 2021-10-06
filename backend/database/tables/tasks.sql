CREATE TABLE tasks
(
    _id varchar(100) NOT NULL PRIMARY KEY,
    task_name varchar(250) NOT NULL,
    duration INT NOT NULL,
    project_id varchar(100) NOT NULL,
    user_name varchar(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
)