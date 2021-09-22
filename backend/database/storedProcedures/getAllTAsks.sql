CREATE PROCEDURE [dbo].[GetAllTasks]

AS

set nocount on;

begin
    SELECT *
    FROM dbo.tasks
end;