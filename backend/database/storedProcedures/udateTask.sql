CREATE PROCEDURE [dbo].[updateTask]
    @_id INT,
    @task_name varchar(250),
    @duration varchar(100),
    @project_id varchar(250),
    @user_id VARCHAR(100),
    @start_date date,
    @end_date date

AS
BEGIN
    UPDATE [dbo].[tasks]
    SET
        task_name = @task_name,
        duration = @duration,
        project_id = @project_id,
        user_id = @user_id,
        start_date= @start_date,
        end_date =@end_date

        WHERE _id=@_id
END;