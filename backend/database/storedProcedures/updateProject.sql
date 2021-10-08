CREATE OR ALTER PROCEDURE [dbo].[updateProject]
    @_id INT,
    @project_name varchar(250),
    @user_name varchar(100),
    @isDeleted varchar(250),
    @start_date date,
    @end_date date

AS
BEGIN
    UPDATE [dbo].[projects]
    SET 
        project_name = @project_name,
        user_name = @user_name,
        isDeleted = @isDeleted,
        start_date= @start_date,
        end_date =@end_date

        WHERE _id=@_id
END;