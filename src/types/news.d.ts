import { IContentDocument } from "@nuxt/content/types/content"

export interface INewsPost extends IContentDocument {
  date: Date
  thumbnail: string
}
