import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import type { ComputedFields } from 'contentlayer/source-files';
import { getTableOfContents } from './utils/contentlayer/get-table-of-contents';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';


/** Common Computed Fields Shared by more than one resource */
const sharedComputedFields: ComputedFields = {
  timeToRead: {
    type: 'json',
    resolve: (doc) => ({ ...readingTime(doc.body.raw) })
  },
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  url: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
}

/** Resource - DocMd */
export const DocMd = defineDocumentType(() => ({
  name: 'DocMd',
  filePathPattern: `docs-md/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    package: { type: 'string' },
    description: { type: 'string' },
    id: { type: 'string' },
    scope: {
      type: 'enum',
      options: ['usage', 'theming', 'props'],
      default: 'usage',
    },
    version: { type: 'string' },
    author: { type: 'string' },
    video: { type: 'string' },
    category: { type: 'string' },
    aria: { type: 'string' },
  },
  computedFields: {
    ...sharedComputedFields,
    frontMatter: {
      type: 'json',
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        //editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}))
/** Resource - DocMdx */
export const DocMdx = defineDocumentType(() => ({
  name: 'DocMdx',
  filePathPattern: `docs-mdx/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    package: { type: 'string' },
    description: { type: 'string' },
    id: { type: 'string' },
    scope: {
      type: 'enum',
      options: ['usage', 'theming', 'props'],
      default: 'usage',
    },
    version: { type: 'string' },
    author: { type: 'string' },
    video: { type: 'string' },
    category: { type: 'string' },
    aria: { type: 'string' },
  },
  computedFields: {
    ...sharedComputedFields,
    frontMatter: {
      type: 'json',
      resolve: (doc) => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        //editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}))


/** Export Content Layer Config */
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [DocMd, DocMdx],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
