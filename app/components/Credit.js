import { Button } from "@/components/ui/button";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Credit = () => {
  return (
    <div className="md:hidden">
      <div className="flex  justify-between pb-5">
        <p className="text-[#8D7F6D]">Seu cartão</p>
        <Button
          variant="outline"
          className="h-[20px] w-[20px] rounded-full border-[#D0D5DD] border-dashed p-1 text-[#98A2B3]"
        >
          <FaPlus />
        </Button>
      </div>
      <div className="flex gap-2 overflow-x-scroll">
        <img src="/assets/creditCard.png" />
        <img src="/assets/creditCard.png" />
        <img src="/assets/creditCard.png" />
      </div>
    </div>
  );
};

export default Credit;
