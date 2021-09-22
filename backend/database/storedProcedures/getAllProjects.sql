CREATE PROCEDURE [dbo].[GetAllProjects]

AS

set nocount on;

begin
    SELECT *
    FROM dbo.projects
end;