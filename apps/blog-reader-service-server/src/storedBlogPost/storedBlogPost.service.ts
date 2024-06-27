import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoredBlogPostServiceBase } from "./base/storedBlogPost.service.base";

@Injectable()
export class StoredBlogPostService extends StoredBlogPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
