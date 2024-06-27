import { StoredBlogPost as TStoredBlogPost } from "../api/storedBlogPost/StoredBlogPost";

export const STOREDBLOGPOST_TITLE_FIELD = "id";

export const StoredBlogPostTitle = (record: TStoredBlogPost): string => {
  return record.id?.toString() || String(record.id);
};
