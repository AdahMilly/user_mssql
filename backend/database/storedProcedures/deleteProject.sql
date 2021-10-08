CREATE OR ALTER PROCEDURE [dbo].[deleteProject]
    (@_id VARCHAR)

AS
BEGIN
    DELETE FROM projects WHERE _id=@_id
END;

