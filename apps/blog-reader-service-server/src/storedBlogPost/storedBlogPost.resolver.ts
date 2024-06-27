import * as graphql from "@nestjs/graphql";
import { StoredBlogPostResolverBase } from "./base/storedBlogPost.resolver.base";
import { StoredBlogPost } from "./base/StoredBlogPost";
import { StoredBlogPostService } from "./storedBlogPost.service";

@graphql.Resolver(() => StoredBlogPost)
export class StoredBlogPostResolver extends StoredBlogPostResolverBase {
  constructor(protected readonly service: StoredBlogPostService) {
    super(service);
  }
}
