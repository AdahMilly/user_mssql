CREATE TABLE projects
(
    _id varchar(100) NOT NULL PRIMARY KEY,
    name varchar(250) NOT NULL,
    head_user_id varchar(100) NOT NULL,
    technology varchar(250) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
)