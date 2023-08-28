import { Link } from 'react-router-dom';
import { GITHUB_URL, PORTFOLIO_URL, PHONE_NUMBER } from '../constants';

export const Top = () => {
  return (
    <div className='pt-6 space-y-2'>
      <h1 className='text-3xl uppercase text-center'>Mahdi Rahman</h1>
      <h2 className='text-center uppercase text-[14px] tracking-widest'>
        Software Developer
      </h2>
      <div className='flex justify-between items-centsser text-[13px]'>
        <div className='flex items-center justify-center'>
          rahmanmahdi15@gmail.com
        </div>
        <div>|</div>
        <div className='flex items-center justify-center'>{PHONE_NUMBER}</div>
        <div>|</div>
        <div className=''>
          <Link
            to={`https://${GITHUB_URL}`}
            target='_blank'
            className='flex items-center justify-center'
          >
            github.com/Mahdirah0
          </Link>
        </div>
        <div>|</div>
        <div>
          <Link
            to={`https://${PORTFOLIO_URL}`}
            target='_blank'
            className='flex items-center justify-center'
          >
            mahdirah0.netlify.app
          </Link>
        </div>
      </div>
    </div>
  );
};
