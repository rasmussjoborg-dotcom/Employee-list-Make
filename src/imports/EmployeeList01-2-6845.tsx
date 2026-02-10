import svgPaths from "./svg-2u8uqinpb0";
import imgUserPersonas from "figma:asset/b90b274deaf4a83cfbf8cee0dfa8e6020f59425a.png";
import imgMemojis from "figma:asset/d905e8d85736d6527cdd94e7bb8946d00c5dbd12.png";
import imgMemojis1 from "figma:asset/9288009c4470f2f1e8ad3fda374a8b6f29b3406c.png";
import imgMemojis2 from "figma:asset/f840e3e9cc312d9cc3623addea67bdd715ac8046.png";
import imgMemojis3 from "figma:asset/d1ee2d4d06598e886802bf7863fdde2e9449dca3.png";
import imgMemojis4 from "figma:asset/f9683eb1b496970eeb2f9a10967ae0007d6ad68b.png";
import imgMemojis5 from "figma:asset/3de5cd1b2fad2d201773a51180d63cb37257aa49.png";

function CrossLarge() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="cross-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cross-large">
          <path clipRule="evenodd" d={svgPaths.p9bb380} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="LeadingIcon">
      <CrossLarge />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <LeadingIcon />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Buttons">
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:semibold',sans-serif] leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[18px] text-ellipsis whitespace-nowrap">Filters</p>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[8px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[17px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">Legal entity</p>
      </div>
    </div>
  );
}

function MinusLarge() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="minus-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="minus-large">
          <path clipRule="evenodd" d={svgPaths.p9b6e500} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <MinusLarge />
    </div>
  );
}

function ButtonGraveyardDoNotUse() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="ButtonGraveyard (do-not-use)">
      <IconCentral />
    </div>
  );
}

function SlotsHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[40px] pb-[12px] pt-[4px] relative rounded-[3.75px] shrink-0 w-full" data-name="Slots header">
      <Text />
      <ButtonGraveyardDoNotUse />
    </div>
  );
}

function Level2SlotRows() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <SlotsHeader />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Nordivio AB</p>
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer1 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Nordivio Ltd</p>
    </div>
  );
}

function Level2SlotRows1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <Checkbox />
      <Checkbox2 />
    </div>
  );
}

function FilterCategory() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative shrink-0 w-full" data-name="FilterCategory">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
      <Level2SlotRows />
      <Level2SlotRows1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[8px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[17px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">Office</p>
      </div>
    </div>
  );
}

function MinusLarge1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="minus-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="minus-large">
          <path clipRule="evenodd" d={svgPaths.p9b6e500} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <MinusLarge1 />
    </div>
  );
}

function ButtonGraveyardDoNotUse1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="ButtonGraveyard (do-not-use)">
      <IconCentral1 />
    </div>
  );
}

function SlotsHeader1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[40px] pb-[12px] pt-[4px] relative rounded-[3.75px] shrink-0 w-full" data-name="Slots header">
      <Text1 />
      <ButtonGraveyardDoNotUse1 />
    </div>
  );
}

function Level2SlotRows2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <SlotsHeader1 />
    </div>
  );
}

function InnerContainer2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer2 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox5 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Stockholm</p>
    </div>
  );
}

function InnerContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer3 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox7 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">London</p>
    </div>
  );
}

function InnerContainer4() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer4 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox9 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Oslo</p>
    </div>
  );
}

function InnerContainer5() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer5 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox11 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Remote</p>
    </div>
  );
}

function Level2SlotRows3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <Checkbox4 />
      <Checkbox6 />
      <Checkbox8 />
      <Checkbox10 />
    </div>
  );
}

function FilterCategory1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative shrink-0 w-full" data-name="FilterCategory">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
      <Level2SlotRows2 />
      <Level2SlotRows3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[8px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[17px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">Job title</p>
      </div>
    </div>
  );
}

function PlusLarge() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus-large">
          <path clipRule="evenodd" d={svgPaths.p1599ea80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <PlusLarge />
    </div>
  );
}

function ButtonGraveyardDoNotUse2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="ButtonGraveyard (do-not-use)">
      <IconCentral2 />
    </div>
  );
}

function SlotsHeader2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[52px] pb-[12px] pt-[4px] relative shrink-0 w-full" data-name="Slots header">
      <Text2 />
      <ButtonGraveyardDoNotUse2 />
    </div>
  );
}

function Level2SlotRows4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Level2SlotRows">
      <SlotsHeader2 />
    </div>
  );
}

function InnerContainer6() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer6 />
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox13 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer7 />
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox15 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer8() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer8 />
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox17 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer9() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox19() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer9 />
    </div>
  );
}

function Checkbox18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox19 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer10() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox21() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer10 />
    </div>
  );
}

function Checkbox20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox21 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer11() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox23() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer11 />
    </div>
  );
}

function Checkbox22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox23 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function Level2SlotRows5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <Checkbox12 />
      <Checkbox14 />
      <Checkbox16 />
      <Checkbox18 />
      <Checkbox20 />
      <Checkbox22 />
    </div>
  );
}

function FilterCategory2() {
  return (
    <div className="h-[52px] min-h-[52px] relative shrink-0 w-full" data-name="FilterCategory">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Level2SlotRows4 />
        <Level2SlotRows5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[8px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[17px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">Department</p>
      </div>
    </div>
  );
}

function MinusLarge2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="minus-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="minus-large">
          <path clipRule="evenodd" d={svgPaths.p9b6e500} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <MinusLarge2 />
    </div>
  );
}

function ButtonGraveyardDoNotUse3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="ButtonGraveyard (do-not-use)">
      <IconCentral3 />
    </div>
  );
}

function SlotsHeader3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[40px] pb-[12px] pt-[4px] relative rounded-[3.75px] shrink-0 w-full" data-name="Slots header">
      <Text3 />
      <ButtonGraveyardDoNotUse3 />
    </div>
  );
}

function Level2SlotRows6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <SlotsHeader3 />
    </div>
  );
}

function InnerContainer12() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox25() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer12 />
    </div>
  );
}

function Checkbox24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox25 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Customer Success</p>
    </div>
  );
}

function InnerContainer13() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox27() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer13 />
    </div>
  );
}

function Checkbox26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox27 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">{`Product & Tech`}</p>
    </div>
  );
}

function InnerContainer14() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox29() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer14 />
    </div>
  );
}

function Checkbox28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox29 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Finance</p>
    </div>
  );
}

function InnerContainer15() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox31() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer15 />
    </div>
  );
}

function Checkbox30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox31 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Marketing</p>
    </div>
  );
}

function InnerContainer16() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox33() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer16 />
    </div>
  );
}

function Checkbox32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox33 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Operations</p>
    </div>
  );
}

function InnerContainer17() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox35() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer17 />
    </div>
  );
}

function Checkbox34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox35 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Board of Directors</p>
    </div>
  );
}

function Level2SlotRows7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <Checkbox24 />
      <Checkbox26 />
      <Checkbox28 />
      <Checkbox30 />
      <Checkbox32 />
      <Checkbox34 />
    </div>
  );
}

function FilterCategory3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] relative shrink-0 w-full" data-name="FilterCategory">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
      <Level2SlotRows6 />
      <Level2SlotRows7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[8px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[17px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">Permissions</p>
      </div>
    </div>
  );
}

function PlusLarge1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus-large">
          <path clipRule="evenodd" d={svgPaths.p1599ea80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <PlusLarge1 />
    </div>
  );
}

function ButtonGraveyardDoNotUse4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="ButtonGraveyard (do-not-use)">
      <IconCentral4 />
    </div>
  );
}

function SlotsHeader4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[52px] pb-[12px] pt-[4px] relative shrink-0 w-full" data-name="Slots header">
      <Text4 />
      <ButtonGraveyardDoNotUse4 />
    </div>
  );
}

function Level2SlotRows8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Level2SlotRows">
      <SlotsHeader4 />
    </div>
  );
}

function InnerContainer18() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox37() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer18 />
    </div>
  );
}

function Checkbox36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox37 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer19() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox39() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer19 />
    </div>
  );
}

function Checkbox38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox39 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer20() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox41() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer20 />
    </div>
  );
}

function Checkbox40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox41 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer21() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox43() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer21 />
    </div>
  );
}

function Checkbox42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox43 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer22() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox45() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer22 />
    </div>
  );
}

function Checkbox44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox45 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer23() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox47() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer23 />
    </div>
  );
}

function Checkbox46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox47 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function Level2SlotRows9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <Checkbox36 />
      <Checkbox38 />
      <Checkbox40 />
      <Checkbox42 />
      <Checkbox44 />
      <Checkbox46 />
    </div>
  );
}

function FilterCategory4() {
  return (
    <div className="h-[52px] min-h-[52px] relative shrink-0 w-full" data-name="FilterCategory">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Level2SlotRows8 />
        <Level2SlotRows9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px py-[8px] relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[17px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">Employment type</p>
      </div>
    </div>
  );
}

function PlusLarge2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus-large">
          <path clipRule="evenodd" d={svgPaths.p1599ea80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <PlusLarge2 />
    </div>
  );
}

function ButtonGraveyardDoNotUse5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="ButtonGraveyard (do-not-use)">
      <IconCentral5 />
    </div>
  );
}

function SlotsHeader5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[52px] pb-[12px] pt-[4px] relative shrink-0 w-full" data-name="Slots header">
      <Text5 />
      <ButtonGraveyardDoNotUse5 />
    </div>
  );
}

function Level2SlotRows10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Level2SlotRows">
      <SlotsHeader5 />
    </div>
  );
}

function InnerContainer24() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox49() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer24 />
    </div>
  );
}

function Checkbox48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox49 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer25() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox51() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer25 />
    </div>
  );
}

function Checkbox50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox51 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer26() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox53() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer26 />
    </div>
  );
}

function Checkbox52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox53 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer27() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox55() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer27 />
    </div>
  );
}

function Checkbox54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox55 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer28() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox57() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer28 />
    </div>
  );
}

function Checkbox56() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox57 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function InnerContainer29() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox59() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer29 />
    </div>
  );
}

function Checkbox58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Checkbox">
      <Checkbox59 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Label</p>
    </div>
  );
}

function Level2SlotRows11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Level2SlotRows">
      <Checkbox48 />
      <Checkbox50 />
      <Checkbox52 />
      <Checkbox54 />
      <Checkbox56 />
      <Checkbox58 />
    </div>
  );
}

function FilterCategory5() {
  return (
    <div className="h-[52px] min-h-[52px] relative shrink-0 w-full" data-name="FilterCategory">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Level2SlotRows10 />
        <Level2SlotRows11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SlotRows() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px overflow-clip relative w-full" data-name="SlotRows">
      <FilterCategory />
      <FilterCategory1 />
      <FilterCategory2 />
      <FilterCategory3 />
      <FilterCategory4 />
      <FilterCategory5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
          <SlotRows />
        </div>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="bg-gradient-to-b from-white relative size-full to-[rgba(255,255,255,0)]" data-name="Shadow">
      <div className="size-full" />
    </div>
  );
}

function ScrollGradient() {
  return (
    <div className="absolute bg-gradient-to-b from-white h-[16px] left-px right-px to-[rgba(255,255,255,0)] top-0" data-name="Scroll gradient">
      <div className="size-full" />
    </div>
  );
}

function ScrollGradient1() {
  return (
    <div className="bg-gradient-to-b from-white relative size-full to-[rgba(255,255,255,0)]" data-name="Scroll gradient">
      <div className="size-full" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" data-name="Content">
      <Content1 />
      <div className="absolute bottom-0 flex h-[16px] items-center justify-center left-[0.3%] right-[0.3%]">
        <div className="flex-none h-[16px] rotate-180 w-[334px]">
          <Shadow />
        </div>
      </div>
      <ScrollGradient />
      <div className="absolute bottom-0 flex h-[16px] items-center justify-center left-px right-px">
        <div className="flex-none h-[16px] rotate-180 w-[334px]">
          <ScrollGradient1 />
        </div>
      </div>
    </div>
  );
}

function Labelcontainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Cancel</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative w-full">
          <Labelcontainer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Labelcontainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[13px] text-white">Footer 2</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#2d0c69] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative w-full">
          <Labelcontainer1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(151,115,255,0.4)]" />
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Footer">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Footer1 />
      </div>
    </div>
  );
}

function FloatingContent1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full" data-name="FloatingContent">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Heading />
        <Content />
        <Footer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function FloatingContent() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[966px] items-start overflow-clip pr-[8px] py-[8px] right-0 top-1/2 w-[344px]" data-name="FloatingContent">
      <FloatingContent1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.16)] h-[1024px] left-0 overflow-clip top-0 w-[1535px] z-[4]" data-name="Container">
      <FloatingContent />
    </div>
  );
}

function DotGrid3X() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="dot-grid-3x3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="dot-grid-3x3">
          <path clipRule="evenodd" d={svgPaths.p56fcb00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuButton() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[103px]" data-name="Menu/Button">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <DotGrid3X />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[17px]">Menu</p>
    </div>
  );
}

function HeaderBreadcrumbsItems() {
  return (
    <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0" data-name="Header/Breadcrumbs/Items">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c2c0c9] text-[17px]">Label</p>
    </div>
  );
}

function Breakline() {
  return (
    <div className="h-[11.413px] relative shrink-0 w-0" data-name="Breakline">
      <div className="absolute inset-[-6.57%_-3.1px_-6.57%_-2.1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.20861 12.9131">
          <g id="Breakline">
            <path d={svgPaths.p3d310c40} id="Vector" stroke="var(--stroke-0, #C2C0C9)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeaderBreadcrumbsItems1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center pl-[2px] pr-[3px] py-[4px] relative shrink-0" data-name="Header/Breadcrumbs/Items">
      <Breakline />
    </div>
  );
}

function HeaderBreadcrumbsItems2() {
  return (
    <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0" data-name="Header/Breadcrumbs/Items">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#16141e] text-[17px]">Label</p>
    </div>
  );
}

function HeaderBreadcrumbs() {
  return (
    <div className="content-stretch flex items-center min-h-[36px] min-w-[34px] relative shrink-0" data-name="Header/Breadcrumbs">
      <HeaderBreadcrumbsItems />
      <HeaderBreadcrumbsItems1 />
      <HeaderBreadcrumbsItems2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative z-[3]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <MenuButton />
        <HeaderBreadcrumbs />
      </div>
    </div>
  );
}

function SimployerTextDefault() {
  return (
    <div className="h-[29.031px] relative shrink-0 w-[143px]" data-name="SimployerText/Default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 29.0312">
        <g clipPath="url(#clip0_1_962247)" id="SimployerText/Default">
          <path d={svgPaths.p3cd42900} fill="var(--fill-0, #9773FF)" id="Vector" />
          <path d={svgPaths.p11f9a580} fill="var(--fill-0, #9773FF)" id="Vector_2" />
          <path d={svgPaths.pfc95300} fill="var(--fill-0, #9773FF)" id="Vector_3" />
          <path d={svgPaths.p1d51f700} fill="var(--fill-0, #9773FF)" id="Vector_4" />
          <path d={svgPaths.p32472b00} fill="var(--fill-0, #9773FF)" id="Vector_5" />
          <path d={svgPaths.pf68b200} fill="var(--fill-0, #9773FF)" id="Vector_6" />
          <path d={svgPaths.p10654440} fill="var(--fill-0, #9773FF)" id="Vector_7" />
          <path d={svgPaths.pf3dcb80} fill="var(--fill-0, #9773FF)" id="Vector_8" />
          <path d={svgPaths.p1095ba80} fill="var(--fill-0, #9773FF)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_1_962247">
            <rect fill="white" height="29.0312" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Center() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative z-[2]" data-name="Center">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <SimployerTextDefault />
      </div>
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="magnifying-glass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="magnifying-glass">
          <path clipRule="evenodd" d={svgPaths.p33912800} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function HeaderSearch() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] max-w-[280px] min-h-px min-w-px relative rounded-[5px]" data-name="Header/Search">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center max-w-[inherit] p-[8px] relative size-full">
          <MagnifyingGlass />
          <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[#c2c0c9] text-[17px] whitespace-pre-wrap">Search...</p>
        </div>
      </div>
    </div>
  );
}

function SparklesThree() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="sparkles-three">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="sparkles-three">
          <g id="vector">
            <path clipRule="evenodd" d={svgPaths.p30f88080} fill="var(--fill-0, #16141E)" fillRule="evenodd" />
            <path d={svgPaths.p2d5c2b00} fill="var(--fill-0, #16141E)" />
            <path d={svgPaths.p1b9d3d00} fill="var(--fill-0, #16141E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[5px] shrink-0 size-[40px]" data-name="Header/Button">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <SparklesThree />
    </div>
  );
}

function CircleInfo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="circle-info">
          <g id="vector">
            <path clipRule="evenodd" d={svgPaths.p289e680} fill="var(--fill-0, #16141E)" fillRule="evenodd" />
            <path d={svgPaths.p4256e00} fill="var(--fill-0, #16141E)" />
            <path clipRule="evenodd" d={svgPaths.p109b4100} fill="var(--fill-0, #16141E)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderButton1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[5px] shrink-0 size-[40px]" data-name="Header/Button">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <CircleInfo />
    </div>
  );
}

function Notification() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="notification">
          <path clipRule="evenodd" d={svgPaths.p1f824a80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function HeaderButtonDot() {
  return (
    <div className="absolute left-[31px] size-[12px] top-[-3px]" data-name="Header/Button/Dot">
      <div className="absolute bg-[#9773ff] inset-0 rounded-[53.333px]" data-name="Dot">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[55.333px]" />
      </div>
    </div>
  );
}

function HeaderButton2() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[5px] shrink-0 size-[40px]" data-name="Header/Button">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Notification />
      <HeaderButtonDot />
    </div>
  );
}

function UserPersonas() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="UserPersonas">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUserPersonas} />
    </div>
  );
}

function Memojis() {
  return (
    <div className="relative rounded-[5px] shrink-0 size-[40px]" data-name="Memojis">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <UserPersonas />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function HeaderButton3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative shrink-0 size-[40px]" data-name="Header/Button">
      <Memojis />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative w-full">
        <HeaderSearch />
        <HeaderButton />
        <HeaderButton1 />
        <HeaderButton2 />
        <HeaderButton3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full z-[3]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center pb-[25px] pt-[24px] px-[32px] relative w-full">
          <Container1 />
          <Center />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Buttons1() {
  return <div className="content-stretch flex gap-[12px] items-center justify-end shrink-0 w-[459px]" data-name="Buttons" />;
}

function TitelAndButtons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Titel and buttons">
      <p className="flex-[1_0_0] font-['source_serif_4:regular',sans-serif] leading-[48px] max-w-[960px] min-h-px min-w-px not-italic relative text-[#16141e] text-[39px] whitespace-pre-wrap">Employees</p>
      <Buttons1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Content">
      <TitelAndButtons />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] max-w-[960px] not-italic relative shrink-0 text-[#5c5963] text-[16px] w-full whitespace-pre-wrap">Define who can access what. Set defaults for common roles, or create custom roles with scoped permissions. Changes take effect instantly across your workspace.</p>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="PageHeader">
      <div className="content-stretch flex gap-[16px] items-start px-[32px] py-[16px] relative w-full">
        <Content2 />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5c5963] text-[16px]">Candidates (0)</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5c5963] text-[16px]">New hires (2)</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#9773ff] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#16141e] text-[16px]">Employees</p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5c5963] text-[16px]">Archived</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tabs">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b-2 border-solid inset-0 pointer-events-none" />
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user-circle">
          <path clipRule="evenodd" d={svgPaths.p2a145280} fill="var(--fill-0, #0D447A)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <UserCircle />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="Badge">
      <IconCentral6 />
    </div>
  );
}

function Labelcontainer2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Save search</p>
    </div>
  );
}

function FloppyDisk() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="floppy-disk-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="floppy-disk-2">
          <path clipRule="evenodd" d={svgPaths.p767e780} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[20px]" data-name="TrailingIcon">
      <FloppyDisk />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Labelcontainer2 />
      <TrailingIcon />
    </div>
  );
}

function TitleAndActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title and Actions">
      <Badge />
      <p className="flex-[1_0_0] font-['Inter:semibold',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#16141e] text-[18px] whitespace-pre-wrap">All employees (142)</p>
      <Button3 />
    </div>
  );
}

function WidgetHeader() {
  return (
    <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Widget header">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[24px] px-[24px] relative w-full">
        <TitleAndActions />
      </div>
    </div>
  );
}

function MagnifyingGlass1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="magnifying-glass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="magnifying-glass">
          <path clipRule="evenodd" d={svgPaths.p1648f9c0} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <MagnifyingGlass1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#5c5963] text-[16px] text-ellipsis w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Search, filter or give the AI a task...</p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-right">
          <path clipRule="evenodd" d={svgPaths.p3e35800} fill="var(--fill-0, #0D447A)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <ArrowRight />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="Badge">
      <IconCentral8 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <IconCentral7 />
          <Text6 />
          <Badge1 />
        </div>
      </div>
    </div>
  );
}

function Toolbar1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Toolbar">
      <TableCell />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] inset-[0_0_53.33%_0] items-start" data-name="Toolbar">
      <Toolbar1 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Filter suggestions:</p>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0" data-name="TableCell">
      <Text7 />
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">All employees with access to salary</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <Chip />
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Recent hieres</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <Chip1 />
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Managers</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <Chip2 />
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Stockholm office</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <Chip3 />
    </div>
  );
}

function Suggestions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-h-px min-w-px relative" data-name="Suggestions">
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function Labelcontainer3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">More filters</p>
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="filter-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filter-1">
          <path clipRule="evenodd" d={svgPaths.p3d928200} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[20px]" data-name="TrailingIcon">
      <Filter />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Button">
      <Labelcontainer3 />
      <TrailingIcon1 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center p-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button4 />
    </div>
  );
}

function Tools() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Tools">
      <TableCell6 />
    </div>
  );
}

function CommonFilters() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] inset-[60%_0_0_0] items-start" data-name="Common filters">
      <Suggestions />
      <Tools />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-white h-[120px] relative shrink-0 w-full" data-name="Search bar">
      <Toolbar />
      <CommonFilters />
    </div>
  );
}

function InnerContainer30() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox60() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer30 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0" data-name="_TableHeader">
      <Checkbox60 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis">Employee</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[297px]" data-name="_TableHeader">
      <Content3 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis">Company</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left1 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[280px]" data-name="_TableHeader">
      <Content4 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis">Office</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left2 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[280px]" data-name="_TableHeader">
      <Content5 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis">Department</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left3 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[281px]" data-name="_TableHeader">
      <Content6 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis">Permission</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left4 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[12px] relative" data-name="_TableHeader">
      <Content7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <TableHeader1 />
      <TableHeader2 />
      <TableHeader3 />
      <TableHeader4 />
      <TableHeader5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[44px] items-center min-h-px min-w-px relative">
      <TableHeader />
      <Frame12 />
    </div>
  );
}

function SettingsGear() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="settings-gear-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="settings-gear-2">
          <path clipRule="evenodd" d={svgPaths.p384d5780} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral9() {
  return (
    <div className="content-stretch flex h-full items-center justify-end pr-[12px] relative shrink-0" data-name="IconCentral">
      <SettingsGear />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0">
      <IconCentral9 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#f2f0f7] content-stretch flex items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <Frame />
      <Frame10 />
    </div>
  );
}

function InnerContainer31() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox61() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer31 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox61 />
    </div>
  );
}

function Memojis1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis} />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Nora Halvorsen</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#75</p>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar />
      <Text8 />
    </div>
  );
}

function Organisation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral10 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <IconCentral11 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Customer Success</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Chip4 />
    </div>
  );
}

function Chip5() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell11 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell12 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer32() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox62() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer32 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox62 />
    </div>
  );
}

function Memojis2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis1} />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Clara Jensen</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#48</p>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar1 />
      <Text9 />
    </div>
  );
}

function Organisation1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation1 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral12 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building1 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral13 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip6() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Operations</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip6 />
    </div>
  );
}

function Chip7() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell14 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell15 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell17 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell18 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer33() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox63() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer33 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox63 />
    </div>
  );
}

function Memojis3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis2} />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">James Whitmore</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#77</p>
      </div>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar2 />
      <Text10 />
    </div>
  );
}

function Organisation2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation2 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral14 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio Ltd</p>
      </div>
    </div>
  );
}

function Building2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building2 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral15 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">London</p>
      </div>
    </div>
  );
}

function Chip8() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Marketing</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip8 />
    </div>
  );
}

function Chip9() {
  return (
    <div className="bg-[#e6f3ed] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#10563a] text-[13px]">Manager</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell19 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell20 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell21 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell22 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell23 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell24 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer34() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox64() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer34 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox64 />
    </div>
  );
}

function Memojis4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis3} />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Sophie Andersson</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#102</p>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar3 />
      <Text11 />
    </div>
  );
}

function Organisation3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation3 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral16 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building3 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral17 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip10() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">{`Product & Tech`}</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip10 />
    </div>
  );
}

function Chip11() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell25 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell26 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell27 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell29 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell30 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer35() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox65() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer35 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox65 />
    </div>
  );
}

function Memojis5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis4} />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Elin Strandberg</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#29</p>
      </div>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar4 />
      <Text12 />
    </div>
  );
}

function Organisation4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation4 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral18 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio Ltd</p>
      </div>
    </div>
  );
}

function Building4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building4 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral19 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">London</p>
      </div>
    </div>
  );
}

function Chip12() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Finance</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip12 />
    </div>
  );
}

function Chip13() {
  return (
    <div className="bg-[#fdead6] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#613609] text-[13px]">Admin</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell31 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell32 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell33 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell34 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell35 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell36 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer36() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox66() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer36 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox66 />
    </div>
  );
}

function Memojis6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis5} />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Erik Lundgren</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#52</p>
      </div>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar5 />
      <Text13 />
    </div>
  );
}

function Organisation5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation5 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral20 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building5 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral21 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip14() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">{`Product & Tech`}</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip14 />
    </div>
  );
}

function Chip15() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip15 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell37 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell38 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell39 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell40 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell41 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell42 />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer37() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox67() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer37 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox67 />
    </div>
  );
}

function Memojis7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis} />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Nora Halvorsen</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#75</p>
      </div>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar6 />
      <Text14 />
    </div>
  );
}

function Organisation6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation6 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral22 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building6 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral23 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip16() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Customer Success</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip16 />
    </div>
  );
}

function Chip17() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip17 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell43 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell44 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell45 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell46 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell47 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell48 />
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer38() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox68() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer38 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox68 />
    </div>
  );
}

function Memojis8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis1} />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Clara Jensen</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#48</p>
      </div>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar7 />
      <Text15 />
    </div>
  );
}

function Organisation7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation7 />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral24 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building7 />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral25 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip18() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Operations</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip18 />
    </div>
  );
}

function Chip19() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell49 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell50 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell51 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell52 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell53 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell54 />
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer39() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox69() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer39 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox69 />
    </div>
  );
}

function Memojis9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis2} />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">James Whitmore</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#77</p>
      </div>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar8 />
      <Text16 />
    </div>
  );
}

function Organisation8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation8 />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral26 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio Ltd</p>
      </div>
    </div>
  );
}

function Building8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building8 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral27 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">London</p>
      </div>
    </div>
  );
}

function Chip20() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Marketing</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip20 />
    </div>
  );
}

function Chip21() {
  return (
    <div className="bg-[#e6f3ed] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#10563a] text-[13px]">Manager</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip21 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell55 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell56 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell57 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell58 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell59 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell60 />
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InnerContainer40() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="size-full" />
      <div aria-hidden="true" className="absolute border border-[#16141e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox70() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer40 />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox70 />
    </div>
  );
}

function Memojis10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis3} />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="bg-[#f5f2ff] relative rounded-[106.667px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[106.667px]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Sophie Andersson</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#102</p>
      </div>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar9 />
      <Text17 />
    </div>
  );
}

function Organisation9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="organisation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="organisation">
          <path clipRule="evenodd" d={svgPaths.pf725b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation9 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral28 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio AB</p>
      </div>
    </div>
  );
}

function Building9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="building-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="building-1">
          <path clipRule="evenodd" d={svgPaths.p232bbd80} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building9 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral29 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Stockholm</p>
      </div>
    </div>
  );
}

function Chip22() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">{`Product & Tech`}</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip22 />
    </div>
  );
}

function Chip23() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip23 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell61 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell62 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell63 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell64 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell65 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell66 />
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-l border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChevronBottom() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-bottom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-bottom">
          <path clipRule="evenodd" d={svgPaths.p77ade80} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="LeadingIcon">
      <ChevronBottom />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <LeadingIcon1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="ButtonGroup">
      <Button5 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] max-h-[40px] min-h-[40px] relative rounded-[5px] shrink-0 w-full" data-name="_Input">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] pl-[16px] pr-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Inter:semibold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#8b8892] text-[13px] whitespace-pre-wrap">1</p>
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[70px]" data-name="Input">
      <Input1 />
    </div>
  );
}

function DropDownContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Drop down container">
      <p className="font-['inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[13px] text-black">Page</p>
      <Input />
      <p className="flex-[1_0_0] font-['inter:regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[13px] text-black whitespace-pre-wrap">of 19</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left">
          <path clipRule="evenodd" d={svgPaths.p276c1e00} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="TrailingIcon">
      <ChevronLeft />
    </div>
  );
}

function Previous() {
  return (
    <div className="relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Previous">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <TrailingIcon2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[8.5px] rounded-tl-[8.5px]" />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p39c9b380} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="TrailingIcon">
      <ChevronRight />
    </div>
  );
}

function Next() {
  return (
    <div className="relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Next">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <TrailingIcon3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-[-0.5px] pointer-events-none rounded-br-[8.5px] rounded-tr-[8.5px]" />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="ButtonGroup">
      <Previous />
      <Next />
    </div>
  );
}

function CardPaginationFooter() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Card Pagination footer">
      <DropDownContainer />
      <ButtonGroup1 />
    </div>
  );
}

function Center1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Center">
      <CardPaginationFooter />
    </div>
  );
}

function WidgetActionFooter() {
  return (
    <div className="bg-white h-[88px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Widget action footer">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[24px] relative size-full">
          <Center1 />
        </div>
      </div>
    </div>
  );
}

function EmployeeTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="employee-table">
      <Header1 />
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <WidgetActionFooter />
    </div>
  );
}

function WidgetContent() {
  return (
    <div className="bg-white h-[1252px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Widget content">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] px-[24px] relative size-full">
        <SearchBar />
        <EmployeeTable />
      </div>
    </div>
  );
}

function Widget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Widget">
      <WidgetHeader />
      <WidgetContent />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Widget />
    </div>
  );
}

function ContentFullWidth() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative" data-name="ContentFullWidth">
      <Tabs />
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Container">
      <ContentFullWidth />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start p-[32px] relative w-full">
        <Container4 />
      </div>
    </div>
  );
}

export default function EmployeeList() {
  return (
    <div className="bg-[#fffcfb] content-stretch flex flex-col isolate items-start relative size-full" data-name="Employee-list-01">
      <Container />
      <Header />
      <PageHeader />
      <Container3 />
    </div>
  );
}