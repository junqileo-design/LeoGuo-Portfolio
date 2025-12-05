function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold gap-[8px] items-start leading-[normal] relative shrink-0 text-sm sm:text-base lg:text-lg min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]">
      <p className="relative shrink-0 text-white w-full">Based in Singapore</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.6)] w-full">Local with a twist</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold gap-[8px] items-start leading-[normal] relative shrink-0 text-sm sm:text-base lg:text-lg min-w-[200px] sm:min-w-[230px] lg:min-w-[259px]">
      <p className="relative shrink-0 text-white w-full">Experience Design</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.6)] w-full">Industrial | UIUX | Experimental</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-[72px] items-start sm:items-center relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}