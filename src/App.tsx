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
      <div className='fixed bottom-5 right-5'>
        <button className='btn btn-primary rounded-full' onClick={handlePrint}>
          <IconPrinter />
        </button>
      </div>
      <div className='w-screen h-full flex items-center justify-center'>
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
