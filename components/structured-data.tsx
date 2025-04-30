export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://builds.software/#person',
        name: 'Antonio Rodriguez Martinez',
        givenName: 'Antonio',
        familyName: 'Rodriguez Martinez',
        jobTitle: 'Technical Program Manager & Full-Stack Developer',
        description:
          'Builder at heart with a natural curiosity for how things work. I create digital products that balance technical excellence with human values—integrity, empathy, and inclusivity.',
        url: 'https://builds.software',
        sameAs: [
          'https://www.linkedin.com/in/antoniwan/',
          'https://github.com/antoniwan',
          'https://wizards777.medium.com',
          'https://www.instagram.com/antoniwan777/',
          'https://www.threads.net/@antoniwan777',
          'https://codepen.io/antoniwan',
        ],
        knowsAbout: [
          'Web Development',
          'Technical Program Management',
          'React',
          'Full-Stack Development',
          'Product Leadership',
          'Systems Thinking',
          'Digital Product Development',
          'Conscious Technology',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Global Hardware Company',
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://builds.software/images/profile_cropped_square.avif',
          width: '320',
          height: '320',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://builds.software/#website',
        url: 'https://builds.software',
        name: 'Antonio Rodriguez Martinez | Builder of Digital Products & Technical Program Manager',
        description:
          'Personal website and portfolio of Antonio Rodriguez Martinez, a builder at heart who transforms abstract ideas into tangible reality—digital, technical, or creative.',
        publisher: {
          '@id': 'https://builds.software/#person',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://builds.software/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://builds.software/#webpage',
        url: 'https://builds.software',
        name: 'Antonio Rodriguez Martinez | Builder of Digital Products & Technical Program Manager',
        description:
          "I'm Antonio—a builder at heart who balances technical excellence with human values. Technical Program Manager, Full-Stack Developer, and advocate for conscious technology that creates meaningful impact.",
        isPartOf: {
          '@id': 'https://builds.software/#website',
        },
        about: {
          '@id': 'https://builds.software/#person',
        },
        breadcrumb: {
          '@id': 'https://builds.software/#breadcrumb',
        },
        inLanguage: 'en-US',
        datePublished: '2024-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        mainEntity: {
          '@id': 'https://builds.software/#person',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://builds.software/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://builds.software',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: 'https://builds.software/#projects',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'About',
            item: 'https://builds.software/#about',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Contact',
            item: 'https://builds.software/#contact',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      key="structured-data"
    />
  );
}
