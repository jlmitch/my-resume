import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return {
    siteTitle: data.site.siteMetadata.title,
    siteUrl: data.site.siteMetadata.siteUrl
  }
};
