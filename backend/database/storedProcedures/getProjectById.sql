CREATE OR ALTER PROCEDURE [dbo].[getProjectById]
    @_id varchar(100)

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
    WHERE _id=@_id and isDeleted=0;
end;
