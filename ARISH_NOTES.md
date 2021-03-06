## 09 APR, 2021
* Initialized the repo
* Created two endpoints for user register and login with JWT - \
"/api/user/register" and 
"/api/user/login"

## 10 APR, 2021
* Created an endpoint for submitting article - \
"/api/article"
* Added starter React code for frontend

## 11 APR, 2021
* Added bootstrap link in the index.html
* Added initial Header and Footer from template in frontend
* Setup the routes for navigation in frontend
* Added EditorJs react component that creates the article

## 12 APR, 2021
* Added api endpoint that saves article images in the backend
* Added title field on article create page
* Added header tool to EditorJs

## 14 APR, 2021
* Added Article Context to ArticleCreate Component, context will help in sharing state between components

## 16 APR, 2021
* Added functions to save and submit the articles
* Added toast messages using react-toastify module

## 17 APR, 2021
* Changed type of article text in Article schema, it will now store the JS object
* Added /article/:id endpoint to get article by id
* Added Article component in frontend to view the article using editorjs-react-renderer module
* Added tags input in the article create page using react-tagsinput module

## 18 APR, 2021
* Added tags to context, for sending it to backend
* Added tags to Article schema and changed the ArticleController accordingly
* Added Like button on Article page

## 19 APR, 2021
* Changed style of Login and Signup page
* Connected signup page to backend

## 20 APR, 2021
* Connected login component to backend
* Save token in localstorage on login and remove it on logout
* Protect ArticleCreate component, only logged in user can access
* Protect login and signup components, only a logged off user can access

## 21 APR, 2021
* Fixed models of Article and User
* Made backend to save article only when the auth-token is received
* Added get recent articles endpoint in backend
* Added recent articles section on home page
* Changed article like controller to like as well as unlike article in the backend
* Protected article like controller, only logged in user can like or unlike
* Connect like button of article page to backend

## 22 APR, 2021
* Protected the article comment controller , only logged in user can comment
* Made the comment controller to send the current comment in response
* Created a CommentBox component and added it to the Article page, styling of the component is remaining

## 23 APR, 2021
* Added endpoint /admin/login for admin login in backend

## 24 APR, 2021
* Added Admin Login component to frontend
* Connected Admin Login with backend

## 25 APR, 2021
* Added template for admin dashboard
* Added route /admin/dashboard to get dashboard data from backend
* Connected AdminDashbaord component to backend
* Added controller to get published articles by admin
* connected AdminPublishArticles component to backend
* Added controller to get articles for verification by admin
* connected AdminToBeVerifiedArticles component to backend
* Added changeArticleStatus controller to admin routes in backend
* Added deleteArticle controller to admin routes in backend
* Connected changeArticleStatus and deleteArticle controllers to frontend
* Added default profile pic of user in User schema
* Added profile pic of author in Article component and CommentBox component 

## 26 APR, 2021
* Added controller to get saved articles of a user
* Added SavedArticles component to show saved articles of a user

## 27, APR, 2021
* Added route /article/edit to save the edited articles
* Added ArticleEdit Component to edit the articles

## 28 APR, 2021
* Added route /article/of-user to get articles submitted or posted by user
* Added UserArticles component to show articles of a user

## 06 MAY, 2021
* Added route /article/:id in backend to delete the article
* Added Buttons to delete articles in SavedArticles and UserArticles components

## 10 MAY, 2021
* Added isBookmarked field to article object returned in getOne article controller
* Added route /article/bookmark in backend which adds the article id to user bookmarks field
* Added bookmark button in Article component
* Added route /article/bookmarked in backend to get bookmarked article of a user
* Added BookmarkedArticles component in frontend
* Added a carousel with fake data in Home component using react-slick module
* Added viewCounter field in Article model to keep track of view count (used to find trending articles)
* Added code to increment the viewCounter when article is accessed from getOne Article Controller
* Added route /article/trending which sends to 6 trending artiles
* Connected Home carousel with backend to show trending articles

## 13 MAY, 2021
* Added ContactMessage Schema in backend to store contact messages
* Added contactMessage controller which stores contact messages
* Connected Contact component to backend api

## 14 MAY, 2021
* Added UserImageUploadController in backend which updates user profile pic
* Added updateProfile controller in backend
* Connect Settings Component to backend
* Added profile controller which responds profile of a user
* Added UI in profile component and connected it with backend
* Added publishedArticles controller to get published article of a user
* Added Published articles list in profile componenet

## 15 MAY, 2021
* Added ArticleHeaderImageUploadController in backend
* Added HeaderImage in Article, ArticleCreate and ArticleEdit components
* Added a controller to get all contact messages 

## 16 MAY, 2021
* Refactored code of report function in ArticleController
* Made reportArticle function in Article Component to show toast instead of alert

## 22 MAY, 2021
* Added reports in AdminController in backend to send report to admin
* Added AdminReports component in frontend to show reports to admin 