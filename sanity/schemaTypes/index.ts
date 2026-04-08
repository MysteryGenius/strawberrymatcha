import { type SchemaTypeDefinition } from 'sanity'
import { youTubeType } from './cells/youtube/youtubeType'
import article from './documents/article'
import author from './documents/author'
import tag from './documents/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    author,
    tag,
    youTubeType,
  ],
}
