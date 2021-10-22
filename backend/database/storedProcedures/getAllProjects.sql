CREATE OR ALTER PROCEDURE [dbo].[GetAllProjects]
(
    @project_id int = null,
    @PageNumber INT = 0,
    @NumberOfRecordsPerPage INT = 100
)

AS
BEGIN
    SET NOCOUNT ON

    IF @project_id is not NULL
    BEGIN
        SELECT * FROM dbo.projects
        WHERE _id = @project_id
        FOR JSON PATH, INCLUDE_NULL_VALUES
    END
    ELSE
    BEGIN
        SELECT * FROM dbo.projects p
        ORDER BY p.project_name
        OFFSET (@PageNumber * @NumberOfRecordsPerPage) ROWS
        FETCH NEXT @NumberOfRecordsPerPage ROWS ONLY
    END
END