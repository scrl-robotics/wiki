import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import {Rocket, Bot, Cog, Wrench, Plug, ShieldAlert, BookOpen} from 'lucide-react';
import styles from './index.module.css';

const sections = [
  {
    title: 'Getting Started',
    description: 'What a beetleweight is, safety rules, and the SPARC ruleset.',
    to: '/getting-started/what-is-a-beetleweight',
    icon: <Rocket size={40} />,
  },
  {
    title: 'Robot Design',
    description: 'Archetypes, ground game, materials, and construction methods.',
    to: '/robot-design/archetypes',
    icon: <Bot size={40} />,
  },
  {
    title: 'Drive Systems',
    description: 'Drivetrains, wheels, spinning weapon design, and weapon stacks.',
    to: '/drive-systems/drive-systems',
    icon: <Cog size={40} />,
  },
  {
    title: 'Manufacturing',
    description: 'Making the parts: laser cutting, CNC routing, and 3D printing.',
    to: '/manufacturing/manufacturing',
    icon: <Wrench size={40} />,
  },
  {
    title: 'Electronics',
    description: 'Batteries, ESCs, control systems, and wiring.',
    to: '/electronics/electronics-and-wiring',
    icon: <Plug size={40} />,
  },
  {
    title: 'Testing & Safety',
    description: 'Test boxes, weapon locks, LiPo safety, and competition prep.',
    to: '/testing-and-safety/testing-and-safety',
    icon: <ShieldAlert size={40} />,
  },
  {
    title: 'Appendices',
    description: 'Advanced topics: casting wheels, bending titanium, and more.',
    to: '/appendices/casting-wheels',
    icon: <BookOpen size={40} />,
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/welcome">
            Start Reading
          </Link>
          <Link
            className="button button--lg button--ghost"
            to="https://github.com/scrl-robotics/wiki">
            Contribute
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionCard({title, description, to, icon}) {
  return (
    <Link to={to} className={clsx('card', styles.card)}>
      <div className="card__body">
        <div className={styles.cardIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Community-editable knowledge base for beetleweight combat robotics">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {sections.map((section) => (
              <SectionCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
