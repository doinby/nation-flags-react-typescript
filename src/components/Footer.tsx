import FooterLink from './FooterLink';

interface Props {
  theme: string;
}

const Footer = ({theme}: Props) => {
  return (
    <footer className='bg-white dark:bg-dark-blue dark:text-white flex-col flex-wrap md:flex-row justify-center gap-x-8 gap-y-2'>
      <FooterLink
        theme={theme}
        url='https://linkedin.com/in/doinby/'
        socialPlatform='linkedin'
        title='doinby'
      />
      <FooterLink
        theme={theme}
        url='https://github.com/doinby'
        socialPlatform='github'
        title='@doinby'
      />
      <FooterLink
        theme={theme}
        url='https://twitter.com/doinby/'
        socialPlatform='twitter'
        title='@doinby'
      />
      <FooterLink
        theme={theme}
        url='mailto:contact@doinby.co'
        socialPlatform='mail'
        title='contact@doinby.co'
      />
    </footer>
  );
};

export default Footer;
