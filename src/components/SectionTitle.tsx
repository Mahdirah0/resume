interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='h-[1px] w-full bg-gray-600'></div>
      <h1 className='section-title'>{title}</h1>
      <div className='h-[1px] w-full bg-gray-600'></div>
    </div>
  );
};
