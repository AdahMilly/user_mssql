CREATE TABLE tasks
(
    _id INT IDENTITY(1, 1) PRIMARY KEY,
    task_name varchar(250) NOT NULL,
    duration INT NOT NULL,
    project_id INT,
    user_id varchar(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    CONSTRAINT FK_projects_tasks FOREIGN KEY (project_id) REFERENCES projects (_id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT FK_user_tasks FOREIGN KEY (user_id) REFERENCES users (_id) ON DELETE NO ACTION ON UPDATE NO ACTION
)


ALTER TABLE tasks
ADD isComplete INT DEFAULT 0



