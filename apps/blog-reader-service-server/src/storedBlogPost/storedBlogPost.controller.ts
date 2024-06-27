import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoredBlogPostService } from "./storedBlogPost.service";
import { StoredBlogPostControllerBase } from "./base/storedBlogPost.controller.base";

@swagger.ApiTags("storedBlogPosts")
@common.Controller("storedBlogPosts")
export class StoredBlogPostController extends StoredBlogPostControllerBase {
  constructor(protected readonly service: StoredBlogPostService) {
    super(service);
  }
}
