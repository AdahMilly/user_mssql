CREATE PROCEDURE [dbo].[userLogin]
    @email VARCHAR(250)

as

set NOCOUNT on;

BEGIN
    select u._id,
        u.first_name,
        u.last_name,
        u.email,
        u.password

    FROM [users] u
    WHERE email=@email;
end;
