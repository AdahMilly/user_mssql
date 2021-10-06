CREATE PROCEDURE [dbo].[getSpecificUser]
    @_id VARCHAR(100)

as

set NOCOUNT on;

BEGIN
    select u._id,
        u.first_name,
        u.last_name,
        u.email,
        u.password

    FROM users u
    WHERE _id=@_id AND isDeleted=0;
end;