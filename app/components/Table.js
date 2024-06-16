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

const transactions = [
  {
    transaction: "Spotify",
    Valor: "- $18.99",
    date: "Wed 1:00pm",
    profile: "/assets/spotify.svg",
  },
  {
    transaction: "A Coffee",
    Valor: "- $4.50",
    date: "Wed 7:20am",
    profile: "/assets/acoffee.svg",
  },
  {
    transaction: "Stripe",
    Valor: "+ $88.00",
    date: "Wed 2:45am",
    profile: "/assets/stripe.svg",
  },
  {
    transaction: "Figma",
    Valor: "- $15.00",
    date: "Tue 6:10pm",
    profile: "/assets/figma.png",
  },
  {
    transaction: "TBF Bakery",
    Valor: "- $12.50",
    date: "Tue 7:52am",
    profile: "/assets/tbfbakery.svg",
  },
  {
    transaction: "Fresh F&V",
    Valor: "- $40.20",
    date: "Tue 12:15pm",
    profile: "/assets/freshf&v.svg",
  },
  {
    transaction: "Stripe",
    Valor: "+ $88.00",
    date: "Tue 5:40am",
    profile: "/assets/stripe.svg",
  },
];

const favorites = [
    {
      profile: "/assets/spotify.svg",
      name: "Spotify",
      type: "PIX",
    },
    {
      profile: "/assets/acoffee.svg",
      name: "A Coffee",
      type: "TED",
    },
    {
      profile: "/assets/stripe.svg",
      name: "Stripe",
      type: "Pagamento",
    },
]

const InfoTable = () => {
  return (
    <div className="flex  gap-[16px]">
    <div className="border border-[#EAECF0] rounded-[12px] flex-1">
      <h3 className="bg-white py-[16px] px-[24px] text-[16px] leading-[24px] text-[#8D7F6D] font-[600] border rounded-t-[12px] ">
        Transações recentes da conta
      </h3>
      <Table className="bg-white border border-[#EAECF0]">
        <TableHeader className="text-[12px] leading-[18px] text-[#475467] font-[500] bg-[#F7F8F9] py-[12px] px-[24px]">
          <TableRow>
            <TableHead className="w-[100px]">Transação</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Data</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transaction} className="py-[16px] px-[24px] text-[14px] gap-[12px] leading-[20px] font-[400]">
              <TableCell className="w-max text-[14px] leading-[20px] text-[#101828] py-[16px] px-[24px] font-[500] flex gap-[12px] items-center">
                <Avatar className="w-[32px] h-[32px]">
                  <AvatarImage src={transaction.profile} />
                  <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
                <span>{transaction.transaction}</span>
              </TableCell>
              <TableCell className={`${transaction.Valor.includes("-") ? 'text-[#B42318]' : 'text-[#079455]'}`}>
                {transaction.Valor}
              </TableCell>
              <TableCell className="text-[#475467]">{transaction.date}</TableCell>
              <TableCell className="flex justify-center">
                <Button className="bg-transparent active:bg-gray-300 focus:bg-transparent">
                  <img
                    width="20px"
                    height="20px"
                    src="/assets/copy2.svg"
                    alt="copy"
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-right bg-white py-[24px] px-[24px] text-[14px] text-[#28365C] font-[600] leading-[20px]">
              Ver extrato completo
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

    <div className="border border-[#EAECF0] max-w-[392px] bg-white rounded-[12px] flex-shrink">
  <h3 className="bg-white py-[16px] px-[24px] text-[16px] leading-[24px] text-[#8D7F6D] font-[600] border rounded-t-[12px] ">
    Contatos favoritos
  </h3>
  <div className="flex flex-col h-[90%]">
    <Table className="bg-white border border-[#EAECF0] flex-1">
      <TableHeader className="text-[12px] leading-[18px] text-[#475467] font-[500] bg-[#F7F8F9] py-[12px] px-[24px]">
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Tipo de transação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {favorites.map((favorite) => (
          <TableRow
            key={favorite.name}
            className="py-[16px] px-[24px] text-[14px] gap-[12px] leading-[20px] font-[400]"
          >
            <TableCell className="w-max text-[14px] leading-[20px] text-[#101828] py-[16px] px-[24px] font-[500] flex gap-[12px] items-center">
              <Avatar className="w-[32px] h-[32px]">
                <AvatarImage src={favorite.profile} />
                <AvatarFallback>Profile</AvatarFallback>
              </Avatar>
              <span>{favorite.name}</span>
            </TableCell>
            <TableCell className="text-[#475467]">{favorite.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* Remove TableFooter from here */}
    </Table>
    <div className="flex-1 bg-white py-[24px] px-[24px] text-center text-[14px] text-[#98A2B3] font-[400] leading-[20px]">
      <div className="flex h-full items-center justify-center">
        Quanto mais transações, mais contatos favoritos são definidos
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default InfoTable;
