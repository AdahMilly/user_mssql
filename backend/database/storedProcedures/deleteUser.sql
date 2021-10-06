CREATE PROCEDURE [dbo].[deleteUsers]
    (@_id VARCHAR)

AS
BEGIN
   UPDATE users SET isDeleted = 1 WHERE _id=@_id
END;

