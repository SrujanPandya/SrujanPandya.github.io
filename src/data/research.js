// Enhancement: research entries are data-driven so index and detail pages stay synchronized.
export const researchItems = [
  {
    slug: 'charge-transport-porous-dielectric-deposits',
    year: '2026',
    status: 'ongoing',
    group: 'current',
    title: 'Charge transport in porous dielectric deposits',
    context: 'PhD research · University at Buffalo',
    tags: ['soft matter', 'electrospray deposition', 'multiscale modeling'],
    summary: 'Modeling soft-matter systems for applications in advanced manufacturing of thin films, with a focus on relaxation in charged, porous dielectric deposits formed from nanoparticle aggregates.',
    detail: {
      lead: 'This doctoral research examines charged, porous dielectric deposits formed from nanoparticle aggregates within the broader context of soft-matter physics and electrospray deposition.',
      sections: [
        {
          heading: 'Research direction',
          paragraphs: [
            'The public summary centers on modeling soft-matter systems for thin-film manufacturing and exploring the nature of relaxation in charged, porous dielectric deposits.',
            'Detailed methods, equations, figures, and results are not yet included in the public portfolio.',
          ],
        },
      ],
      note: 'Technical notes, figures, publications, and results can be added here as they are ready for public release.',
    },
  },
  {
    slug: 'cnn-autoencoder-lwd-compression',
    year: '2024',
    status: 'completed',
    group: 'previous',
    title: 'CNN-autoencoder models for lossless LWD sensor data compression',
    context: 'Industry capstone · Schlumberger (SLB)',
    tags: ['machine learning', 'LWD', 'data compression'],
    externalUrl: 'https://drive.google.com/file/d/17Jk5EkDvK5k5azNoBadxWGcp781tPLn9/view?usp=sharing',
    summary: 'Capstone work on feature-based compression for Logging While Drilling sensor data, using autoencoders and signal-processing techniques for bandwidth-limited mud pulse telemetry.',
    detail: {
      lead: 'This industry capstone focused on compressing Logging While Drilling sensor data for transmission through bandwidth-limited mud pulse telemetry.',
      sections: [
        {
          heading: 'Approach',
          paragraphs: [
            'The project developed and tested feature-based data-compression algorithms using autoencoders and signal-processing techniques, with the objective of preserving information while improving transmission efficiency.',
            'Lightweight CNN-autoencoder models were engineered with quantization and multi-stage training to improve reconstruction accuracy and feature preservation.',
          ],
        },
      ],
      note: 'A project report is linked from this page for readers who want the original capstone material.',
    },
  },
];

export function getResearchBySlug(slug) {
  return researchItems.find((item) => item.slug === slug);
}
