import Controller from "@ember/controller";
import {action} from "@ember/object";

export default class BlogPostController extends Controller {
  @action
  openedLink() {
    window.console.log("link opened");
  }

  @action
  success(token, meta) {
    window.console.log("success with token:", token, meta);
  }

  @action
  exited() {
    window.console.log("exit");
  }
}
