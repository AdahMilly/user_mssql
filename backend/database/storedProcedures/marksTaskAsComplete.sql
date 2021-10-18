CREATE OR ALTER PROCEDURE [dbo].[markTaskAsComplete]
    @_id INT
AS
set NOCOUNT ON
BEGIN
    UPDATE dbo.tasks
    SET isComplete = 1  WHERE _id = @_id
END;