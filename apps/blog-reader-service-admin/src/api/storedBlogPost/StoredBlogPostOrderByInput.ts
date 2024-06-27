import { SortOrder } from "../../util/SortOrder";

export type StoredBlogPostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
