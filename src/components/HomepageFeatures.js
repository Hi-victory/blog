import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '生活',
    url: '/docs/life-end/make-trouble',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: '世界上只有一种英雄主义，那就是看清生活的真相，却依然热爱生活',
  },
  {
    title: '博客',
    url: '/docs/work-end/blog/first-blog',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: '有事没事瞎逼叨写',
  },
  {
    title: '学习',
    url: '/docs/books/book',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: '学，天之大也',
  },
];

function Feature({Svg, url, title, description}) {

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <div className={clsx('col col--4')} onClick={handleClick}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
