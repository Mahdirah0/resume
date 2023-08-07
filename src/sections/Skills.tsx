import { SKILLS, TECHNOLOGIES } from '../constants';

export const Skills = () => {
  return (
    <div>
      <h1 className='section-title'>Skills</h1>
      <div className='space-y-1 text-sm'>
        {SKILLS.map((skill) => (
          <div className='flex items-center space-x-2'>
            <h1 className='font-bold'>{skill.title}:</h1>
            <div className='flex'>
              <label className='font-bold mr-1'>Proficient:</label>
              <div>{skill.proficient.join(', ')}</div>
            </div>
            <div className='flex'>
              <label className='font-bold mx-1'>Familiar:</label>
              <div>{skill.familiar.join(', ')}</div>
            </div>
          </div>
        ))}
        <div className='flex items-center'>
          <label className='font-bold mr-1'>Technologies:</label>
          <div>{TECHNOLOGIES.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};
