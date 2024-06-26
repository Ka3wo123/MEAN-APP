import App from "app";
import PostController from "controllers/data.controller";
import IndexController from "controllers/index.controller";
import UserController from "controllers/user.controller";

const app: App = new App([
    new UserController(),
    new IndexController(),
    new PostController()
]);

app.listen();