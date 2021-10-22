CREATE OR ALTER PROCEDURE [dbo].[GetAllTasks]
@project_id VARCHAR(100)

AS

set nocount on;

begin
    SELECT *
    FROM dbo.tasks
    WHERE project_id = @project_id
end;