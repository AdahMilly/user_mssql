CREATE OR ALTER PROCEDURE [dbo].[userGet]
    @_id VARCHAR(100)

as

set NOCOUNT on;

BEGIN
    select u._id,
        u.first_name,
        u.last_name,
        u.email,
        u.password,
        u.isDeleted
    FROM [users] u
    WHERE _id=@_id;
end;