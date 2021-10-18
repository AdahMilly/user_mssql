CREATE OR ALTER PROCEDURE [dbo].[deleteProject]
    @_id VARCHAR(100)
AS
BEGIN
    UPDATE dbo.projects
    SET isDeleted = 1  WHERE _id = @_id
END;

