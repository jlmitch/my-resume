import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

type DataProps = {
  allMdx: {
    nodes: [
      {
        name: string;
        id: string;
        excerpt: string;
        parent: {
          modifiedTime: string;
        };
        frontmatter: {
          date: string;
          title: string;
        };
      }
    ]
  }
}

const Blog = ({ data: { allMdx } }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default Blog;