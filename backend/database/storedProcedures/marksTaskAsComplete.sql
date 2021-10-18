CREATE PROCEDURE [dbo].[markTaskAsComplete]
    @_id INT
AS
BEGIN
    UPDATE dbo.tasks
    SET isComplete = 1  WHERE _id = @_id
END;