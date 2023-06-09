import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JM`,
    siteUrl: `https://joshmitchell.dev`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`,
    //   }
    // },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Schibsted Grotesk`,
            file: `https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400&display=swap`,
          },
        ],
      },
    },
  ]
};

export default config;
