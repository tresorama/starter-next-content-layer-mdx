import type { GetStaticPaths, GetStaticProps } from 'next';
import { allDocMdxes, DocMdx } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MetadataViewer } from '@/views/shared/components/MetadataViewer/MetadataViewer';
import { DocumentLayout } from '@/views/shared/components/DocumentLayout/DocumentLayout';

type PageProps = {
  doc: DocMdx
};
export default function Page({ doc }: PageProps) {
  const MDXContent = useMDXComponent(doc.body.code);
  return (
    <>
      <MetadataViewer data={doc} />
      <DocumentLayout title={doc.title} category="components">
        <MDXContent />
      </DocumentLayout>
    </>
  )
}


const matchesThisRoute = (doc: DocMdx) => doc._raw.sourceFileDir.startsWith('docs-mdx/components');
const compareAsJSON = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
const buildSlug = (doc: DocMdx) => doc._raw.flattenedPath.replace('docs-mdx/components/', '').split('/');
const compareSlug = (doc: DocMdx, slug: ReturnType<typeof buildSlug>) => compareAsJSON(buildSlug(doc), slug);

type PathParams = {
  slug: string[]
}
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const paths = allDocMdxes
    .filter(doc => matchesThisRoute(doc))
    .map(doc => ({ params: { slug: buildSlug(doc) } }));
  return {
    fallback: false,
    paths
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as PathParams;
  return {
    props: {
      doc: allDocMdxes.find(doc => compareSlug(doc, slug))
    }
  };
}
