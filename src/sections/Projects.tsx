import { PROJECT } from '../constants';

export const Projects = () => {
  return (
    <div className=''>
      <h1 className='section-title'>Projects</h1>
      <div className='space-y-4'>
        {PROJECT.map((project) => (
          <div key={project.title}>
            <h1 className='font-bold mb-1'>{project.title}</h1>
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
