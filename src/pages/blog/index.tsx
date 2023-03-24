import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';

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
          slug: string;
        };
      }
    ]
  }
}

const Blog = ({ data: { allMdx } }: PageProps<DataProps>) => (
  <Layout pageTitle="My Blog Posts">
    {
      allMdx.nodes.map(({ id, excerpt, frontmatter: { date, title, slug } }) => (
        <article key={id}>
          <h2>
            <Link to={`/blog/${slug}`}>
              {title}
            </Link>
          </h2>
          <p>Posted: {date}</p>
          <p>{excerpt}</p>
        </article>
      ))
    }
  </Layout>
);

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default Blog;