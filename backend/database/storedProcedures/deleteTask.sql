CREATE OR ALTER PROCEDURE [dbo].[deleteTask]
    (@_id VARCHAR)

AS
BEGIN
    DELETE FROM tasks WHERE _id=@_id
END;