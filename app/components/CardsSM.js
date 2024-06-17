import React from "react";
import { Card, CardContent } from "../../components/ui/card";
const CardsSM = () => {
  return (
    <div className=" text-[14px] font-[600] text-[#28365C] grid md:hidden grid-cols-4 gap-2">
      <Card className="bg-[#F8F7F7] flex items-center justify-center border-none">
        <CardContent className="py-4 flex flex-col gap-2 items-center justify-center">
          <img className="h-[25px] w-[25px] " src="/assets/Icon.svg" />
          Contatos
        </CardContent>
      </Card>
      <Card className="bg-[#F8F7F7] border-none flex items-center justify-center">
        <CardContent className="py-4 flex flex-col gap-2 items-center justify-center">
          <img className="h-[25px] w-[25px] " src="/assets/Icon (1).svg" />
          Comprar
        </CardContent>
      </Card>
      <Card className="bg-[#F8F7F7] border-none flex items-center justify-center">
        <CardContent className="py-4 flex flex-col gap-2 items-center justify-center">
          <img className="h-[25px] w-[25px] " src="/assets/Icon (2).svg" />
          Investir
        </CardContent>
      </Card>
      <Card className="bg-[#F8F7F7] border-none flex items-center justify-center">
        <CardContent className="py-4 flex flex-col gap-2 items-center justify-center">
          {" "}
          <img className="h-[25px] w-[25px] " src="/assets/Icon (3).svg" />
          Suporte
        </CardContent>
      </Card>
    </div>
  );
};

export default CardsSM;
