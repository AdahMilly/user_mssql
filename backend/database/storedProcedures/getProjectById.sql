CREATE OR ALTER PROCEDURE [dbo].[getProjectById]
    @_id INT

as

set NOCOUNT on;

BEGIN
    select p._id,
        p.project_name,
        p.user_name,
        p.isDeleted,
        p.start_date,
        p.end_date

    FROM [projects] p
    WHERE _id=@_id;
end;
