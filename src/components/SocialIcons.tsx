import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


interface Icon {
  icon: IconLookup;
  url: string;
}

const SocialIcon = ({ icon, url }: Icon) => { 
  return(
    <a href={url}>
      <FontAwesomeIcon icon={icon} className="h-7" />
    </a>
  );
}

export default function SocialIcons() {
  return(
    <span className='text-emerald-900 dark:text-neutral-200 flex space-x-4'>
      <SocialIcon
        icon={faGithubSquare}
        url='https://github.com/l-m-meyer'
      />
      <SocialIcon
        icon={faLinkedin}
        url='https://www.linkedin.com/in/lisa-meyer-dev/'
      />
      <SocialIcon
        icon={solid('envelope')}
        url='mailto:lisameyer@gmail.com'
      />
    </span>
  );
};