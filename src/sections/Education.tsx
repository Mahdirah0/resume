import { EDUCATION } from '../constants';

export const Education = () => {
  return (
    <div className='pb-6'>
      <h1 className='section-title'>Education</h1>
      <div className='space-y-2'>
        {EDUCATION.map((education) => (
          <div key={education.subject} className='text-sm'>
            <div className='flex justify-between'>
              <h3 className='text-'>
                {education.school} - {education.city}
              </h3>
              <h1 className='text-xs'>
                {education.startDate} - {education.endDate}
              </h1>
            </div>
            <div>
              <h3>
                <span className='font-bold'>{education.qualification}: </span>{' '}
                {education.subject}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
