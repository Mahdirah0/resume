import { IconPointFilled } from '@tabler/icons-react';
import { SectionTitle } from '../components';
import { SKILLS } from '../constants';
import { Fragment } from 'react';

export const Skills = () => {
  const mappedSkills = SKILLS.map((skill, idx) => (
    <Fragment key={skill}>
      <span className='text-sm'>{skill}</span>
      {idx < SKILLS.length - 1 && (
        <IconPointFilled key={idx} className='w-2 h-2 text-gray-800' />
      )}
    </Fragment>
  ));

  return (
    <div className='space-y-2'>
      <SectionTitle title='Skills' />
      <div className='flex items-center justify-between flex-wrap gap-2'>
        {mappedSkills}
      </div>
    </div>
  );
};
