CREATE PROCEDURE [dbo].[userByEmailGet]
    @email VARCHAR(250)

as

set NOCOUNT on;

BEGIN
    select u._id,
        u.FIRST,
        u.LAST,
        u.email,
        u.age,
        u.gender,
        u.PASSWORD

    FROM [users] u
    WHERE email=@email;
end;