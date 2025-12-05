function Frame() {
  return (
    <div className="content-stretch flex font-['Montserrat:SemiBold',sans-serif] font-semibold gap-[72px] items-center leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
      <p className="relative shrink-0">HOME</p>
      <p className="relative shrink-0">MEET LEO</p>
      <p className="relative shrink-0">CONTACT</p>
      <p className="relative shrink-0">WORKS</p>
      <p className="relative shrink-0">NEWS</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[480px] items-end relative size-full">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
        Leo Guo<span className="text-[rgba(255,255,255,0.53)]"> </span>
        <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.53)]">{`| `}</span>
        <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.53)]">Designer</span>
      </p>
      <Frame />
    </div>
  );
}