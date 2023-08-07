import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

export const Projects = () => {
  return (
    <div className=''>
      <h1 className='section-title'>Projects</h1>
      <div className='space-y-1'>
        {PROJECTS.map((project) => (
          <div key={project.title}>
            <div className='flex items-center'>
              <h1 className='font-bold mr-2 text-sm'>{project.title}</h1>
              <Link to={`https://${project.link}`} target='_blank'>
                <span className='text-xs font-light'>({project.link})</span>
              </Link>
            </div>
            <div>
              <ul className='list-disc text-[13px]'>
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
