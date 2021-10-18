CREATE OR ALTER PROCEDURE [dbo].[assignTask]
	@_id INT,
	@project_id varchar(100),
	@user_id varchar(100)
as

set nocount on;

begin
	INSERT INTO dbo.assignTask
	(_id,user_id,project_id)
	VALUES
	(@_id, @user_id, @project_id);
end;