CREATE TABLE users
(
    _id varchar(100) NOT NULL PRIMARY KEY,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    email varchar(250) NOT NULL,
    password varchar(250) NOT NULL,
    isDeleted INT DEFAULT 0,
)

ALTER TABLE users
ADD role VARCHAR(50);





