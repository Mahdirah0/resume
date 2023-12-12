import { SectionTitle } from '../components';
import { EDUCATION } from '../constants';

export const Education = () => {
  return (
    <div className='pb-6'>
      <SectionTitle title='Education' />
      <div className='space-y-2'>
        {EDUCATION.map((education) => (
          <div key={education.subject} className='text-sm'>
            <div className='flex justify-between'>
              <h3 className='text-'>
                {education.school} - {education.city}
              </h3>
              <h2 className='text-xs'>
                {education.startDate} - {education.endDate}
              </h2>
            </div>
            <div>
              <h3>
                <span className='font-bold'>{education.qualification}: </span>{' '}
                {education.subject} - <span className='font-bold'>Grade: </span>{' '}
                {education.grade}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
