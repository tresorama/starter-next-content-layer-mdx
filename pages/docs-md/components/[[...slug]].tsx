import type { GetStaticPaths, GetStaticProps } from 'next';
import { allDocMds, DocMd } from 'contentlayer/generated';
import { MetadataViewer } from '@/views/shared/components/MetadataViewer/MetadataViewer';
import { DocumentLayout } from '@/views/shared/components/DocumentLayout/DocumentLayout';


type PageProps = {
  doc: DocMd
};
export default function Page({ doc }: PageProps) {
  return (
    <>
      <MetadataViewer data={doc} />
      <DocumentLayout title={doc.title} category="components">
        <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
      </DocumentLayout>
    </>
  )
}

const matchesThisRoute = (doc: DocMd) => doc._raw.sourceFileDir.startsWith('docs-md/components');
const compareAsJSON = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);
const buildSlug = (doc: DocMd) => doc._raw.flattenedPath.replace('docs-md/components/', '').split('/');
const compareSlug = (doc: DocMd, slug: ReturnType<typeof buildSlug>) => compareAsJSON(buildSlug(doc), slug);

type PathParams = {
  slug: string[]
}
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const paths = allDocMds
    .filter(doc => matchesThisRoute(doc))
    .map(doc => ({ params: { slug: buildSlug(doc) } }));
  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as PathParams;
  return {
    props: {
      doc: allDocMds.find(doc => compareSlug(doc, slug))
    }
  }
}
