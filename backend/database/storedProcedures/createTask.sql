CREATE PROCEDURE [dbo].[createTask]
(
    @_id INT ,
    @name varchar(250) ,
    @duration INT ,
    @project_id varchar(100) ,
    @user_id varchar(100) ,
    @start_date DATE ,
    @end_date DATE )

AS
BEGIN
    INSERT INTO [dbo].[tasks]
        (_id,
        name,
        duration,
        project_id,
        user_id,
        start_date,
        end_date)
    VALUES
        (@_id,
        @name,
        @duration,
        @project_id,
        @user_id,
        CAST(GETDATE() AS DATE),
        @end_date)
END;