import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Leancloud</>,
    imageUrl: 'img/undraw_leancloud.svg',
    description: (
      <>
        基于 LeanCloud 实现 Cron 定时自动化签到打卡，并提供云函数与 WebHook 调用。
      </>
    ),
  },
  {
    title: <>Extension</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        提供一键式浏览器拓展，DIY签到方法，针对不同网站自动上传 Header 与表单数据，无需编码即可使用。
      </>
    ),
  },
  {
    title: <>Template</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        提供海量签到模板，直接从云端一键拉取，并上传至 LeanCloud 自动签到。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction/readme')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
