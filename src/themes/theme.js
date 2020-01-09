import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/dist/styles/prism/okaidia';
import prismCss from 'react-syntax-highlighter/languages/prism/css';
import prismGit from 'react-syntax-highlighter/languages/prism/git';
import prismTypeScript from 'react-syntax-highlighter/languages/prism/typescript';
import Provider from './provider';

require('style-loader!css-loader!./style.css');

export default {
  ...theme,
  font: 'Roboto, sans-serif',
  colors: {
    ...theme.colors,
    text: '#565656',
    background: '#ECE2C7',
    link: '#808E96',
    heading: '#993388'
  },
  css: {
    ...theme.css,
    '@media screen and (min-width:64em)': {
      fontSize: '4rem'
    }
  },
  ul: {
    listStyleType: 'none',
    paddingLeft: 0
  },
  li: {
    marginBottom: '2%'
  },
  prism: {
    style: okaidia,
    languages: {
      css: prismCss,
      git: prismGit,
      ts: prismTypeScript
    }
  },
  Provider
};
