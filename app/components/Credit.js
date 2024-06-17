"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Credit = () => {
  return (
    <div className="md:hidden">
      <div className="flex justify-between pb-5">
        <p className="text-[#8D7F6D]">Seu cartão</p>
        <Button variant="secondary">
          <img src="/assets/Pluss.svg" />
        </Button>
      </div>
      <div
        className="flex gap-2 overflow-x-scroll"
        style={{
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <img src="/assets/creditCard.png" />
        <img src="/assets/creditCard.png" />
        <img src="/assets/creditCard.png" />
      </div>
    </div>
  );
};

export default Credit;
