CREATE PROCEDURE [dbo].[GetAllUsers]

AS

set nocount on;

begin
    SELECT *
    FROM dbo.users WHERE isDeleted=0
end;