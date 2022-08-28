import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  splashTitle: string;
  splashSubtitle: string;
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            splashSubtitle
            author
            description
            splashTitle
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
