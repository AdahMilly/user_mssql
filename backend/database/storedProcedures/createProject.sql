CREATE PROCEDURE [dbo].[createProject]
    @_id VARCHAR(100),
    @name varchar(250),
    @head_user_id varchar(100),
    @technology varchar(250),
    @end_date date

AS
BEGIN
    INSERT INTO [dbo].[projects]
        (_id,
        name,
        head_user_id,
        technology,
        start_date,
        end_date)
    VALUES
        (@_id,
            @name,
            @head_user_id,
            @technology,
            CAST(GETDATE() AS DATE),
            @end_date);
END;
