import { StoredBlogPostWhereInput } from "./StoredBlogPostWhereInput";
import { StoredBlogPostOrderByInput } from "./StoredBlogPostOrderByInput";

export type StoredBlogPostFindManyArgs = {
  where?: StoredBlogPostWhereInput;
  orderBy?: Array<StoredBlogPostOrderByInput>;
  skip?: number;
  take?: number;
};
