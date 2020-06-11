import Controller from "@ember/controller";
import {action} from "@ember/object";

export default class BlogPostController extends Controller {
  @action
  openedLink() {
    window.console.log("link opened");
  }

  @action
  success(token) {
    window.console.log("success with token:", token);
  }

  @action
  exited() {
    window.console.log("exit");
  }
}
