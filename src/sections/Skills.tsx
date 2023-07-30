import { SKILLS_ARRAY } from '../constants';

export const Skills = () => {
  return (
    <div>
      <h1 className='section-title'>Skills</h1>
      <div className='mx-6'>
        <ul className='list-disc grid grid-cols-2'>
          {SKILLS_ARRAY.map((skill) => (
            <li key={skill} className='text-sm'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
