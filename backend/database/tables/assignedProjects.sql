  CREATE TABLE assignedProjects 
  (
	_id varchar(100) NOT NULL PRIMARY KEY,
	project_id varchar(100) NOT NULL,
	user_id varchar(100) NOT NULL,
	FOREIGN KEY (project_id) REFERENCES projects (_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (user_id) REFERENCES users (_id) ON DELETE NO ACTION ON UPDATE NO ACTION
)

select CONSTRAINT_NAME
from INFORMATION_SCHEMA.TABLE_CONSTRAINTS
where TABLE_NAME = 'assignedProjects'

ALTER TABLE dbo.assignedProjects   
DROP CONSTRAINT FK__assignedP__user___52593CB8; 


