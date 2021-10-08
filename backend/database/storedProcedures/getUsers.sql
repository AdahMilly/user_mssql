CREATE PROCEDURE [dbo].[usersGet]

AS

set nocount on;

begin
    SELECT *
    FROM dbo.users
end;