import React, { FC } from 'react';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

interface SeoProps {
  title: string;
}

const Seo: FC<SeoProps> = ({ title }) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <title>{title} | {siteTitle}</title>
  )
}

export default Seo;
