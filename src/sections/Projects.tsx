import { Link } from 'react-router-dom';
import { PROJECT } from '../constants';

export const Projects = () => {
  return (
    <div className=''>
      <h1 className='section-title'>Projects</h1>
      <div className='space-y-4'>
        {PROJECT.map((project) => (
          <div key={project.title}>
            <div className='flex items-center mb-1'>
              <h1 className='font-bold mr-2'>{project.title}</h1>
              <Link to={`https://${project.link}`} target='_blank'>
                <span className='text-xs font-light'>({project.link})</span>
              </Link>
            </div>
            <div>
              <ul className='list-disc text-sm'>
                {project.facts.map((item) => (
                  <li key={item} className='mx-6'>
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
