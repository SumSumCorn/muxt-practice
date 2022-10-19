import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const sections = [
  { title: 'New Whitelist', url: '#' },
  { title: 'New Web3 Infomation', url: '#' },
  { title: 'new NFT Infomation', url: '#' },
  { title: 'Business', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome first whitelist job platform in korea',
  description: 'first whitelist job platform in Korea.',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Landing Page',
};

const featuredPosts = [
  {
    title: 'Whitelist 1',
    date: 'Nov 12',
    description: 'This is sample whiteList 1.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Detail Page',
  },
  {
    title: 'Whitelist 2',
    date: 'Nov 15',
    description: 'This is sample whiteList 2.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Detail Page',
  },
  {
    title: 'Whitelist 3',
    date: 'Nov 15',
    description: 'This is sample whiteList 3.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Detail Page',
  },
  {
    title: 'Whitelist 4',
    date: 'Nov 15',
    description: 'This is sample whiteList 4.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Detail Page',
  },
];

const posts = ['post1', 'post2', 'post3'];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='Web3 Job Platform' sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </ThemeProvider>
  );
}
