import {GitHub, Linkedin, Twitter, Mail} from 'react-feather';

interface Props {
  theme: string;
  url: string;
  socialPlatform: string;
  title: string;
}

const FooterLink = ({theme, url, title, socialPlatform}: Props) => {
  const getSocialIcon = () => {
    switch (socialPlatform) {
      case 'linkedin':
        return (
          <Linkedin size='16' color={theme === 'dark' ? 'white' : 'gray'} />
        );

      case 'twitter':
        return (
          <Twitter size='16' color={theme === 'dark' ? 'white' : 'gray'} />
        );

      case 'mail':
        return <Mail size='16' color={theme === 'dark' ? 'white' : 'gray'} />;

      default:
        return <GitHub size='16' color={theme === 'dark' ? 'white' : 'gray'} />;
    }
  };

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='btn-text flex items-center gap-1'
    >
      {getSocialIcon()}
      <small>{title}</small>
    </a>
  );
};

export default FooterLink;
