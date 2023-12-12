import { Link } from 'react-router-dom';
import { SectionTitle } from '../components';
import { EXPERIENCE } from '../constants';

export const Experience = () => {
  return (
    <div className='space-y-2'>
      <SectionTitle title='Experience' />
      <div className='space-y-2'>
        {EXPERIENCE.map((item) => (
          <div key={item.place}>
            <div className='flex justify-between'>
              <div className='flex space-x-2 justify-center items-center'>
                <h2 className='text-sm'>
                  <span className='font-bold'> {item.title} </span> -{' '}
                  {item.place}
                </h2>
                {item.link && (
                  <Link to={`${item.link}`} target='_blank'>
                    <span className='text-xs font-light'>({item.link})</span>
                  </Link>
                )}
              </div>
              <h2 className='text-xs'>{item.date}</h2>
            </div>
            <div>
              <ul>
                {item.facts.map((item) => (
                  <li key={item} className='text-[13px] list-disc ml-6'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
