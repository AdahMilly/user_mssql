CREATE PROCEDURE [dbo].[deleteTasks]
    (@_id VARCHAR)

AS
BEGIN
    DELETE FROM tasks WHERE _id=@_id
END;