export default function Navbar() {
  return (
    <div className="flex  flex-row justify-between items-center">
      <div className="">
        <h1 className="uppercase text-[#0F2650] font-bold text-3xl">
          dental<span className="text-[#01CFC9]">care</span>
        </h1>
      </div>

      <div className="cursor-pointer text-base">home</div>
      <div className="cursor-pointer">terapie</div>
      <div className="cursor-pointer">servizi</div>
      <div className="cursor-pointer">Chi siamo</div>
      <div className="cursor-pointer text-base">Contatti</div>

      <div className="">
        <button className="text-[#01CFC9]  h-12 w-36 bg-gradient-to-r from-[#0F2650] from-100% to-[#0F2650] to-0% rounded-[14px]">
          prenota
        </button>
      </div>
    </div>
  );
}
