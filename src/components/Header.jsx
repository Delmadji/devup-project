import doctorImage from "../assets/react.png";

export default function Header() {
  return (
    <div className="flex justify-between mt-[100px]">
      <div>
        <p className="text-[#0F2650] font-bold text-[48px]">
          Fai che il tuo <span className="text-[#01CFC9]">sorriso</span> sia
          <br></br>la curva che raddrizza la tua vita.
        </p>
        <p className="my-[30px]">
          Offriamo servizi dentali di alta qualità con la presenza di<br></br>{" "}
          esperti di ogni tipologia di trattamento, soddisfando le esigenze di
          ogni paziente
        </p>
        <button className="text-[#01CFC9]  h-[65px] w-[280px] bg-gradient-to-r from-[#0F2650] from-100% to-[#0F2650] to-0% rounded-[14px]">
          Prenota ora
        </button>
        <div>contact</div>
      </div>
      <div className="bg-[#01CFC9] w-[564px] h-[563px] rounded-[115px] relative">
        <img
          src={doctorImage}
          alt="doctor"
          className="w-[649px] h-[738px] absolute bottom-0"
        />
      </div>
    </div>
  );
}
