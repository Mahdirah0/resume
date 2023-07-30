import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Top } from './sections/Top';
import { Projects } from './sections/Projects';
import { Summary } from './sections/Summary';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { IconPrinter } from '@tabler/icons-react';

export const App = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen '>
      <button className='btn btn-primary btn-wide my-10' onClick={handlePrint}>
        <IconPrinter />
        Print this out!
      </button>
      <div className='w-screen h-full flex items-center justify-center mb-20'>
        <div
          className='w-[816px] min-h-[1056px] bg-white relative text-black'
          ref={componentRef}
        >
          <div className='mx-14 h-full space-y-1'>
            <Top />
            <div className='space-y-6'>
              <Summary />
              <Projects />
              <Skills />
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
