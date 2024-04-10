import App from "app";
import PostController from "controllers/data.controller";
import IndexController from "controllers/index.controller";

const app: App = new App([
    new IndexController(),
    new PostController()
]);

app.listen();