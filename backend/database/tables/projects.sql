CREATE TABLE projects
(
    _id varchar(100) NOT NULL PRIMARY KEY,
    project_name varchar(250) NOT NULL,
    user_name varchar(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
)

SELECT * FROM projects;
ALTER TABLE projects
DROP COLUMN IF EXISTS _id

ALTER TABLE projects
ADD _id int IDENTITY(1,1) PRIMARY KEY

select CONSTRAINT_NAME
from INFORMATION_SCHEMA.TABLE_CONSTRAINTS
where TABLE_NAME = 'projects'

ALTER TABLE dbo.projects   
DROP CONSTRAINT PK__projects__DED88B1C3D52F5FF;

ALTER TABLE projects
ADD isDeleted INT DEFAULT 0

ALTER TABLE projects
ADD FOREIGN KEY (user_name) REFERENCES users (_id) ON DELETE CASCADE ON UPDATE CASCADE