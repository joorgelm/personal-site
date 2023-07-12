import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';

const data = [
  {
    link: 'https://github.com/joorgelm',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/jlmelgarejo/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://api.whatsapp.com/send?phone=5567981052680',
    label: 'WhatsApp',
    icon: faWhatsapp,
  },
  {
    link: 'mailto:melgarejo.colarte@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
