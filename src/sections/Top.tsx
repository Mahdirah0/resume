import { Link } from 'react-router-dom';
import { GITHUB_URL, LINKED_IN_URL, PORTFOLIO_URL } from '../constants';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconWorldWww,
} from '@tabler/icons-react';

export const Top = () => {
  return (
    <div className='py-6'>
      <div className='flex'>
        <h1 className='text-3xl font-bold uppercase mr-4'>Mahdi</h1>
        <h1 className='text-3xl font-bold uppercase'>Rahman</h1>
      </div>
      <div className='flex justify-between underline mt-2'>
        <span className='flex text-xs items-center justify-center'>
          <IconMail className='mr-1' /> rahmanmahdi15@gmail.com
        </span>
        <div>|</div>
        <span className=''>
          <Link
            to={GITHUB_URL}
            target='_blank'
            className='flex text-xs items-center justify-center'
          >
            <IconBrandGithub className='mr-1' />
            github.com/Mahdirah0
          </Link>
        </span>
        <div>|</div>
        <span>
          <Link
            to={LINKED_IN_URL}
            target='_blank'
            className='flex text-xs items-center justify-center'
          >
            <IconBrandLinkedin className='mr-1' />
            linkedin.com/in/mahdirah0
          </Link>
        </span>
        <div>|</div>
        <span>
          <Link
            to={PORTFOLIO_URL}
            target='_blank'
            className='flex text-xs items-center justify-center'
          >
            <IconWorldWww className='mr-1' />
            mahdirah0.netlify.app
          </Link>
        </span>
      </div>
    </div>
  );
};
