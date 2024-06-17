import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RxCopy } from "react-icons/rx";

const transactions = [
  {
    transaction: "Catalog",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/spotify.svg",
  },
  {
    transaction: "Circooles",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/acoffee.svg",
  },
  {
    transaction: "Command+R",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/stripe.svg",
  },
  {
    transaction: "Hourglass",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/figma.png",
  },
  {
    transaction: "Layers",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/tbfbakery.svg",
  },
  {
    transaction: "Quotient",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/freshf&v.svg",
  },
  {
    transaction: "Sisyphus",
    desc: "Pix Depósito",
    Valor: "- $88.00",
    date: "31/07/2023",
    profile: "/assets/stripe.svg",
  },
];

const TransactionSM = () => {
  return (
    <div className="md:hidden">
      <div className=" rounded-[12px] flex-1">
        <h3 className="py-[16px]  text-[16px] leading-[24px] text-[#8D7F6D] font-[600]">
          Transações recentes
        </h3>
        <Table className="w-full">
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow
                key={transaction.transaction}
                className=" text-[14px] md:gap-[12px] leading-[20px] font-[400]"
              >
                <TableCell className="w-max text-[14px] leading-[20px] text-[#101828] py-[16px]  font-[500] flex gap-[12px] items-center">
                  <Avatar className="  bg-[#F2F4F7] text-[#475467] border-gray-200 flex items-center justify-center font-[600] border">
                    OR
                  </Avatar>
                  <span className="flex flex-col">
                    {transaction.transaction}{" "}
                    <span className="text-gray-600">{transaction.desc}</span>
                  </span>
                </TableCell>
                <TableCell
                  className={`${
                    transaction.Valor.includes("-")
                      ? "text-[#B42318]"
                      : "text-[#079455]"
                  } text-end`}
                >
                  <span className=" flex flex-col">
                    {transaction.Valor}
                    <span className="text-[#475467]">{transaction.date}</span>
                  </span>
                </TableCell>
                <TableCell className="flex justify-center">
                  <Button variant="outline">
                    <RxCopy size={20} className="text-black" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-right py-[24px] text-[14px] text-[#28365C] font-[600] leading-[20px]"
              >
                Ver extrato completo
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default TransactionSM;
