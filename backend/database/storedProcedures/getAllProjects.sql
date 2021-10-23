CREATE OR ALTER PROCEDURE [dbo].[GetAllProjects]
(
    @isDeleted INT=1,
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
    END
    ELSE
    BEGIN
        SELECT * FROM dbo.projects p
        WHERE isDeleted = 0
        ORDER BY p.project_name
        OFFSET (@PageNumber * @NumberOfRecordsPerPage) ROWS
        FETCH NEXT @NumberOfRecordsPerPage ROWS ONLY

    END
END