# user_mssql
user_mssql is an application that helps with project and task management and tracking.

## Application features
 
  -   Users can create an account and log in.
  -  Admin can create a project.
  -  Admin can assign tasks to Users
  -   Users can mark a task as complete.
  -   Admin can delete,update a project.
  -  Admin can view all the registered users.
  -   Users can only visit specific pages.


The following endpoints should be available for use once the API is complete.

| EndPoint                          | Functionality                     |
| --------------------------------- | --------------------------------- |
| GET    /users                     | Fetch all users                   |
| GET     /projects                 | Fetch all projects                |

and many more


**NB:**

  -  The user can only view a project or task that he/she has been assigned to.
  -  Only the admin can view all the pages of the application.
  -  Users can only access some pages after loging in,there will be protected routes.


## Technologies Used

[Expressjs](https://expressjs.com/) Framework

[Mssql](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) database management

[Javascript](https://en.wikipedia.org/wiki/JavaScript) language

[HTML](https://en.wikipedia.org/wiki/HTML) Markup language

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

[Reactjs](https://reactjs.org/) UI library

[MaterialUI](https://mui.com/) CSS Framework


### Contributing to the application

 1. clone the repo

   ```sh
    git clone https://github.com/AdahMilly/user_mssql
   ```

 2. Set up the app locally (Refer *Getting started with the application* above)
 3. Create a branch from develop

   ```sh
   git checkout -b feature/<name-of-the-feature> (e.g feature/implement-user-login)
   ```

 4. Work on the task and push your changes to github repo.

   ```sh
   git add .

   git commit



   git push origin feature/<name-of-the-feature> (e.g feature/implement-user-login)
   ```

 5. Open a Pull Request to develop and a provide a very detail description of your PR.

 For more info refer [Getting started with Git and Github](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6).

 ### Other Ways to contribute

  1. Review open PRs
  2. Open an [issue](https://help.github.com/en/articles/about-issues)
