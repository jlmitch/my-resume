import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    },
  },
  children: React.ReactNode,
};

const BlogPost = ({ data: { mdx: { frontmatter: { title, date } } }, children }: PageProps<DataProps>) => (
  <Layout pageTitle={title}>
    <p>{date}</p>
    {children}
  </Layout>
);

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;