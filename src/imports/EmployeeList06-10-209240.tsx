import svgPaths from "./svg-2seoo8fdml";
import imgUserPersonas from "figma:asset/b90b274deaf4a83cfbf8cee0dfa8e6020f59425a.png";
import imgMemojis from "figma:asset/d030f7123d76565c57db031b4ab13197a8509b6d.png";
import imgMemojis1 from "figma:asset/5730c07decd2e48094d00c83c6fc1b319dea6b87.png";
import imgMemojis2 from "figma:asset/0f7d02f94ad6b09805264578febd1c3b70698510.png";
import imgMemojis3 from "figma:asset/e07a4d65c39203ccc478fbf2f0291174fd4a9b6a.png";
import imgMemojis4 from "figma:asset/af73d5890a9420dab0ffb3336be528f870435bc3.png";
import imgMemojis5 from "figma:asset/f840e3e9cc312d9cc3623addea67bdd715ac8046.png";
import imgMemojis6 from "figma:asset/3f59377667e8935b865acb151bf023ea0e5942b2.png";

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

function Container() {
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

function Container1() {
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
          <Container />
          <Center />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return <div className="content-stretch flex gap-[12px] items-center justify-end shrink-0 w-[459px]" data-name="Buttons" />;
}

function TitelAndButtons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Titel and buttons">
      <p className="flex-[1_0_0] font-['source_serif_4:regular',sans-serif] leading-[48px] max-w-[960px] min-h-px min-w-px not-italic relative text-[#16141e] text-[39px] whitespace-pre-wrap">Employees</p>
      <Buttons />
    </div>
  );
}

function Content() {
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
        <Content />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#9773ff] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#16141e] text-[16px]">Employee list</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5c5963] text-[16px]">Feature Access</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#5c5963] text-[16px]">Access Explorer</p>
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

function IconCentral() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <UserCircle />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="Badge">
      <IconCentral />
    </div>
  );
}

function Labelcontainer() {
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

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Labelcontainer />
      <TrailingIcon />
    </div>
  );
}

function TitleAndActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Title and Actions">
      <Badge />
      <p className="flex-[1_0_0] font-['Inter:semibold',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#16141e] text-[18px] whitespace-pre-wrap">All employees (142)</p>
      <Button />
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

function IconCentral1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <MagnifyingGlass1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[16px] text-ellipsis w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Select all employees in the list</p>
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

function IconCentral2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <ArrowRight />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0" data-name="Badge">
      <IconCentral2 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <IconCentral1 />
          <Text />
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

function Text1() {
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
      <Text1 />
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

function Labelcontainer1() {
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

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Button">
      <Labelcontainer1 />
      <TrailingIcon1 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center p-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button1 />
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

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Active filters:</p>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0" data-name="TableCell">
      <Text2 />
    </div>
  );
}

function CrossLarge() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="cross-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cross-large">
          <path clipRule="evenodd" d={svgPaths.p9bb380} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <CrossLarge />
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex gap-[2px] items-center pl-[10px] pr-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Subordinates</p>
      <IconCentral3 />
    </div>
  );
}

function CrossLarge1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="cross-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cross-large">
          <path clipRule="evenodd" d={svgPaths.p9bb380} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <CrossLarge1 />
    </div>
  );
}

function Chip5() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex gap-[2px] items-center pl-[10px] pr-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">James Whitmore</p>
      <IconCentral4 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-h-[64px] py-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <Chip4 />
      <Chip5 />
    </div>
  );
}

function FilterChip() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Filter chip">
      <div className="flex flex-row items-center self-stretch">
        <TableCell7 />
      </div>
      <TableCell8 />
    </div>
  );
}

function Labelcontainer2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Clear all</p>
    </div>
  );
}

function CrossLarge2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cross-large">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cross-large">
          <path clipRule="evenodd" d={svgPaths.p35bbf180} fill="var(--fill-0, #2D0C69)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[20px]" data-name="TrailingIcon">
      <CrossLarge2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="Button">
      <Labelcontainer2 />
      <TrailingIcon2 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[12px] relative rounded-[8px] shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button2 />
    </div>
  );
}

function ClearAllButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Clear all button">
      <TableCell9 />
    </div>
  );
}

function ActiveFilters() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Active filters">
      <FilterChip />
      <ClearAllButton />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="bg-[#9773ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[7.828px] relative shrink-0 w-[11.742px]" data-name="Vector">
          <div className="absolute inset-[-11.79%_-7.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5874 9.67362">
              <path d={svgPaths.p1c559300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84518" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f61d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex h-full items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0" data-name="_TableHeader">
      <Checkbox />
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

function Content1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[297px]" data-name="_TableHeader">
      <Content1 />
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

function Content2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left1 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[280px]" data-name="_TableHeader">
      <Content2 />
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

function Content3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left2 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[280px]" data-name="_TableHeader">
      <Content3 />
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

function Content4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left3 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex h-full items-center py-[12px] relative shrink-0 w-[281px]" data-name="_TableHeader">
      <Content4 />
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

function Content5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Left4 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px py-[12px] relative" data-name="_TableHeader">
      <Content5 />
    </div>
  );
}

function Frame8() {
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
      <Frame8 />
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

function IconCentral5() {
  return (
    <div className="content-stretch flex h-full items-center justify-end pr-[12px] relative shrink-0" data-name="IconCentral">
      <SettingsGear />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[44px] items-center relative shrink-0">
      <IconCentral5 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#f2f0f7] content-stretch flex items-start relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <Frame />
      <Frame5 />
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="bg-[#9773ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[7.828px] relative shrink-0 w-[11.742px]" data-name="Vector">
          <div className="absolute inset-[-11.79%_-7.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5874 9.67362">
              <path d={svgPaths.p1c559300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84518" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f61d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer1 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox1 />
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

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Freya Sandberg</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#012</p>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar />
      <Text3 />
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

function IconCentral6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral6 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio Ltd</p>
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

function IconCentral7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <IconCentral7 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">London</p>
      </div>
    </div>
  );
}

function Chip6() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Marketing</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
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

function TableCell15() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell12 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell14 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell15 />
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

function InnerContainer2() {
  return (
    <div className="bg-[#9773ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[7.828px] relative shrink-0 w-[11.742px]" data-name="Vector">
          <div className="absolute inset-[-11.79%_-7.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5874 9.67362">
              <path d={svgPaths.p1c559300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84518" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f61d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer2 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox2 />
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

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Noah Falk</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#167</p>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar1 />
      <Text4 />
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

function IconCentral8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation1 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral8 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio Ltd</p>
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

function IconCentral9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building1 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral9 />
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

function TableCell20() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip8 />
    </div>
  );
}

function Chip9() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell17 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell18 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell19 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell20 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell21 />
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

function InnerContainer3() {
  return (
    <div className="bg-[#9773ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[7.828px] relative shrink-0 w-[11.742px]" data-name="Vector">
          <div className="absolute inset-[-11.79%_-7.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5874 9.67362">
              <path d={svgPaths.p1c559300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84518" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f61d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer3 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox3 />
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

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Sofia Lindqvist</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#058</p>
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar2 />
      <Text5 />
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

function IconCentral10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation2 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral10 />
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

function IconCentral11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building2 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral11 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">London</p>
      </div>
    </div>
  );
}

function Chip10() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Marketing</p>
    </div>
  );
}

function TableCell26() {
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

function TableCell27() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell22 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell23 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell24 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell25 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell26 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell27 />
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

function InnerContainer4() {
  return (
    <div className="bg-[#9773ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Inner container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[7.828px] relative shrink-0 w-[11.742px]" data-name="Vector">
          <div className="absolute inset-[-11.79%_-7.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5874 9.67362">
              <path d={svgPaths.p1c559300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.84518" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#7f61d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Checkbox">
      <InnerContainer4 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="bg-white content-stretch flex h-full items-center min-h-[54px] pl-[16px] pr-[24px] py-[24px] relative shrink-0" data-name="TableCell">
      <Checkbox4 />
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

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Oliver Hayes</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">#201</p>
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[297px]" data-name="_TableCell">
      <Avatar3 />
      <Text6 />
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

function IconCentral12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Organisation3 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral12 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Novidio Ltd</p>
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

function IconCentral13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="IconCentral">
      <Building3 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[54px] py-[24px] relative shrink-0 w-[280px]" data-name="TableCell">
      <IconCentral13 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#16141e] text-[13px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">London</p>
      </div>
    </div>
  );
}

function Chip12() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Marketing</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-full items-center min-h-[64px] py-[24px] relative shrink-0 w-[281px]" data-name="TableCell">
      <Chip12 />
    </div>
  );
}

function Chip13() {
  return (
    <div className="bg-[#dae9f8] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#0d447a] text-[13px]">Colleague</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center min-h-[64px] min-w-px py-[24px] relative" data-name="TableCell">
      <Chip13 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <TableCell28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell29 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell30 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell31 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCell32 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TableCell33 />
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

function LeadingIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="LeadingIcon">
      <ChevronBottom />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center overflow-clip py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <LeadingIcon />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="ButtonGroup">
      <Button3 />
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

function TrailingIcon3() {
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
        <TrailingIcon3 />
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

function TrailingIcon4() {
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
        <TrailingIcon4 />
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
      <WidgetActionFooter />
    </div>
  );
}

function WidgetContent() {
  return (
    <div className="bg-white relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Widget content">
      <div aria-hidden="true" className="absolute border-[#dddbe4] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] px-[24px] relative w-full">
        <SearchBar />
        <ActiveFilters />
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Widget />
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
    <div className="bg-[#f5f2ff] mr-[-12px] relative rounded-[85.333px] shrink-0 size-[32px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[85.333px]" />
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
    <div className="bg-[#f5f2ff] mr-[-12px] relative rounded-[85.333px] shrink-0 size-[32px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[85.333px]" />
    </div>
  );
}

function Memojis7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Memojis">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemojis6} />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-[#f5f2ff] mr-[-12px] relative rounded-[85.333px] shrink-0 size-[32px]" data-name="Avatar">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Memojis7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[85.333px]" />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center justify-center mr-[-12px] px-[5px] py-[9px] relative rounded-[85.333px] shrink-0" data-name="Avatar">
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[85.333px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#16141e] text-[14px] text-center uppercase w-[22px]">
        <p className="leading-none whitespace-pre-wrap">+4</p>
      </div>
    </div>
  );
}

function AvatarStacked() {
  return (
    <div className="content-stretch flex items-center pr-[12px] relative shrink-0" data-name="Avatar Stacked">
      <Avatar4 />
      <Avatar5 />
      <Avatar6 />
      <Avatar7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-ellipsis" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#16141e] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">7 Users</p>
      </div>
      <div className="flex flex-col font-['Inter:regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5c5963] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Selected</p>
      </div>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72px] items-center min-h-[54px] pr-[24px] relative shrink-0" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-r border-solid inset-0 pointer-events-none" />
      <AvatarStacked />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">I want to:</p>
      </div>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72px] items-center min-h-[54px] py-[10px] relative shrink-0" data-name="TableCell">
      <Text8 />
    </div>
  );
}

function Labelcontainer3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Change</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <Labelcontainer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Labelcontainer4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d0c69] text-[13px]">Department</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <Labelcontainer4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#16141e] text-[13px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">To:</p>
      </div>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="content-stretch flex gap-[12px] h-[72px] items-center min-h-[54px] py-[10px] relative shrink-0" data-name="TableCell">
      <Text9 />
    </div>
  );
}

function Decided() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center pr-[24px] relative shrink-0" data-name="Decided">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-r border-solid inset-0 pointer-events-none" />
      <TableCell35 />
      <Frame6 />
      <TableCell36 />
    </div>
  );
}

function ChevronLeft1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-left">
          <path clipRule="evenodd" d={svgPaths.p441dff0} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral14() {
  return (
    <div className="content-stretch flex h-full items-center px-[24px] relative shrink-0" data-name="IconCentral">
      <ChevronLeft1 />
    </div>
  );
}

function Chip14() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Customer Success</p>
    </div>
  );
}

function Chip15() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Operations</p>
    </div>
  );
}

function Chip16() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Marketing</p>
    </div>
  );
}

function Chip17() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">{`Product & Tech`}</p>
    </div>
  );
}

function Chip18() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Finance</p>
    </div>
  );
}

function Chip19() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">IT</p>
    </div>
  );
}

function Chip20() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Board of Directors</p>
    </div>
  );
}

function Chip21() {
  return (
    <div className="bg-[#f5f2ff] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[4px] shrink-0" data-name="Chip">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#16141e] text-[13px]">Board of Directors</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-clip relative">
      <Chip14 />
      <Chip15 />
      <Chip16 />
      <Chip17 />
      <Chip18 />
      <Chip19 />
      <Chip20 />
      <Chip21 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p2f036b00} fill="var(--fill-0, #16141E)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function IconCentral15() {
  return (
    <div className="content-stretch flex items-center px-[24px] relative shrink-0" data-name="IconCentral">
      <ChevronRight1 />
    </div>
  );
}

function Labelcontainer5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] relative shrink-0" data-name="Labelcontainer">
      <p className="font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#706e78] text-[13px]">Search..</p>
    </div>
  );
}

function MagnifyingGlass2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="magnifying-glass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="magnifying-glass">
          <path clipRule="evenodd" d={svgPaths.p33912800} fill="var(--fill-0, #706E78)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[20px]" data-name="TrailingIcon">
      <MagnifyingGlass2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[150px]" data-name="Search">
      <div className="content-stretch flex items-center justify-between overflow-clip p-[8px] relative rounded-[inherit] w-full">
        <Labelcontainer5 />
        <TrailingIcon5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Decide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px overflow-clip relative" data-name="Decide">
      <IconCentral14 />
      <Frame7 />
      <IconCentral15 />
      <Search />
    </div>
  );
}

function Choose() {
  return (
    <div className="flex-[1_0_0] h-full min-h-[64px] min-w-px relative" data-name="Choose">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[24px] relative size-full">
          <Decided />
          <Decide />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <TableCell34 />
          <Choose />
        </div>
      </div>
    </div>
  );
}

function ActionBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-white left-1/2 rounded-[16px] top-[647px] w-[1423px]" data-name="Action bar">
      <div className="content-stretch flex items-center overflow-clip py-[12px] relative rounded-[inherit] w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Wrapper />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dddbe4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ContentFullWidth() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative" data-name="ContentFullWidth">
      <Tabs />
      <Container4 />
      <ActionBar />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Container">
      <ContentFullWidth />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start p-[32px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

export default function EmployeeList() {
  return (
    <div className="bg-[#fffcfb] content-stretch flex flex-col isolate items-start relative size-full" data-name="Employee-list-06">
      <Header />
      <PageHeader />
      <Container2 />
    </div>
  );
}