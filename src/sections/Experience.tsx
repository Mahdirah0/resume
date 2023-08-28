import { SectionTitle } from '../components';
import { EXPERIENCE } from '../constants';

export const Experience = () => {
  return (
    <div className='space-y-2'>
      <SectionTitle title='Experience' />
      <div className='space-y-2'>
        {EXPERIENCE.map((item) => (
          <div>
            <div className='flex justify-between'>
              <h1 className='text-sm'>
                <span className='font-bold'> {item.title} </span> - {item.place}
              </h1>
              <h1 className='text-xs'>{item.date}</h1>
            </div>
            <div>
              <ul>
                {item.facts.map((item) => (
                  <li className='text-[13px] list-disc ml-6'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
