CREATE PROCEDURE [dbo].[createProject]
    @project_name varchar(250),
    @user_name varchar(100),
    @isDeleted INT = 0,
    @start_date DATE,
    @end_date DATE

AS
BEGIN
    INSERT INTO [dbo].[projects]
        (
        project_name,
        user_name,
        isDeleted,
        start_date,
        end_date)
    VALUES
        ( @project_name,
            @user_name,
            @isDeleted,
            CAST(GETDATE() AS DATE),
            @end_date);
END;
