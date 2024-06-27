import { Module } from "@nestjs/common";
import { StoredBlogPostModuleBase } from "./base/storedBlogPost.module.base";
import { StoredBlogPostService } from "./storedBlogPost.service";
import { StoredBlogPostController } from "./storedBlogPost.controller";
import { StoredBlogPostResolver } from "./storedBlogPost.resolver";

@Module({
  imports: [StoredBlogPostModuleBase],
  controllers: [StoredBlogPostController],
  providers: [StoredBlogPostService, StoredBlogPostResolver],
  exports: [StoredBlogPostService],
})
export class StoredBlogPostModule {}
