CREATE PROCEDURE [dbo].[updateProject]
    @_id VARCHAR(100),
    @name varchar(250),
    @head_user_id varchar(100),
    @technology varchar(250),
    @start_date date,
    @end_date date

AS
BEGIN
    UPDATE [dbo].[projects]
    SET _id =@_id,
        name = @name,
        head_user_id = @head_user_id,
        technology = @technology,
        start_date= @start_date,
        end_date =@end_date

        WHERE _id=@_id
END;