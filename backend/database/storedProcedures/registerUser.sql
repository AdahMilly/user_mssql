CREATE PROCEDURE [dbo].[registerUser]
    @id varchar(100),
    @first_name varchar(100),
    @last_name varchar(100),
    @email varchar(250),
    @password varchar(250)
as

set nocount on;

begin
    INSERT INTO dbo.users
        (_id, first_name, last_name, email, password)
    VALUES
        (@id, @first_name, @last_name, @email, @password);
end;