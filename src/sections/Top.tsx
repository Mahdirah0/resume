import { Link } from 'react-router-dom';
import {
  GITHUB_URL,
  LINKED_IN_URL,
  PORTFOLIO_URL,
  PHONE_NUMBER,
} from '../constants';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconWorldWww,
  IconMapPinFilled,
  IconPhonePlus,
} from '@tabler/icons-react';

export const Top = () => {
  return (
    <div className='pt-6 space-y-1'>
      <div className='flex'>
        <h1 className='text-3xl font-bold uppercase'>Mahdi Rahman</h1>
      </div>
      <div>
        <h1 className='text-sm flex items-center'>
          <IconMapPinFilled size={16} />
          <span className='mx-1'>London, Software Developer</span>
        </h1>
      </div>
      <div className='flex justify-between underline items-center text-[10px]'>
        <span className='flex items-center justify-center'>
          <IconMail size={16} className='mr-1' /> rahmanmahdi15@gmail.com
        </span>
        <div>|</div>
        <span className='flex items-center justify-center'>
          <IconPhonePlus size={16} className='mr-1' /> {PHONE_NUMBER}
        </span>
        <div>|</div>
        <span className=''>
          <Link
            to={`https://${GITHUB_URL}`}
            target='_blank'
            className='flex items-center justify-center'
          >
            <IconBrandGithub size={16} className='mr-1' />
            github.com/Mahdirah0
          </Link>
        </span>
        <div>|</div>
        <span>
          <Link
            to={`https://${LINKED_IN_URL}`}
            target='_blank'
            className='flex items-center justify-center'
          >
            <IconBrandLinkedin size={16} className='mr-1' />
            linkedin.com/in/mahdirah0
          </Link>
        </span>
        <div>|</div>
        <span>
          <Link
            to={`https://${PORTFOLIO_URL}`}
            target='_blank'
            className='flex items-center justify-center'
          >
            <IconWorldWww size={16} className='mr-1' />
            mahdirah0.netlify.app
          </Link>
        </span>
      </div>
    </div>
  );
};
