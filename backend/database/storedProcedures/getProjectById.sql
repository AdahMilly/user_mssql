CREATE PROCEDURE [dbo].[getProjectById]
    @_id VARCHAR(100)

as

set NOCOUNT on;

BEGIN
    select p._id,
        p.name,
        p.head_user_id,
        p.technology,
        p.start_date,
        p.end_date

    FROM [projects] p
    WHERE _id=@_id;
end;