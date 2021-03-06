import React from 'react';
import Article from '~/src/components/Article';

import Block from '~/src/components/Block';

import video from './delivery.mp4';

export const frontmatter = {
  id: 'delivery',
  isWork: true,
  subtitle: 'Delivery',
  title: 'Share your design work,<br/>clutter-free.',
  date: '2017-04-01',
  cover: './delivery.png',
  path: '/work/delivery',
  excerpt: `Around Easter 2017 I decided to work on a simple webapp called Delivery to help designers share their work in progress. I wanted to create a hassle–free solution, which is reduced to the bare minimum of features and requires neither sign-up nor a credit card.`,
  details: [
    {
      title: 'Responsibility',
      description: 'Design & Development',
    },
    {
      title: 'Date',
      description: 'Q2 2017',
    },
    {
      title: 'Technology',
      description: 'React, Next.js, Node.js',
    },
  ],
};

export default props => (
  <Article {...props}>
    <Block mobilePull>
      <p>
        Around Easter 2017 I decided to work on a simple webapp called{' '}
        <a href="//delivery.now.sh">Delivery</a> to help designers share their
        work in progress.
      </p>
    </Block>
    <Block align="right">
      <p>
        I wanted to create a hassle–free solution, which is reduced to the bare
        minimum of features and requires neither sign-up nor a credit card.
      </p>
    </Block>
    <hr />
    <Block align="center" pull>
      <h2>Features</h2>
      <p>
        Type in your company/client, upload and describe your screens, then
        share with colleagues.&nbsp;Simple.
      </p>
    </Block>
    <Block align="center">
      <video src={video} playsInline autoPlay loop muted />
    </Block>

    <Block>
      <h3>Goals</h3>
      <p>
        I created Delivery mainly to sharpen my React & MobX skills. Building a
        simple, yet full webapp from the first line of code to deployment in a
        matter of roughly 3 days was a great experience.
      </p>
      <p>
        I drew inspiration from makers like{' '}
        <a href="//twitter.com/levelsio">Pieter Levels</a> and their no-nonsense
        approach to launching new products & experiments early and often.
      </p>
    </Block>

    <Block align="right">
      <h3>Technology</h3>
      <p>
        The project is built on top of my{' '}
        <a href="//github.com/fabe/www">personal boilerplate</a>, featuring
        React, MobX, Next.js and MongoDB. I am hosting the images on{' '}
        <span className="caps">AWS</span>, and run the backend on a{' '}
        <a href="//linode.com">Linode</a> server.
      </p>
      <p>
        The full source code is{' '}
        <a href="//github.com/fabe/delivery">available on GitHub</a>.
      </p>
    </Block>
  </Article>
);
