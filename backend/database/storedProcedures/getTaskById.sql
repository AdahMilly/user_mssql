CREATE PROCEDURE [dbo].[getTaskById]
    @_id VARCHAR(100)

as

set NOCOUNT on;

BEGIN
    select t._id,
        t.task_name,
        t.duration,
        t.project_id,
        t.user_id,
        t.start_date,
        t.end_date

    FROM [tasks] t
    WHERE _id=@_id;
end;