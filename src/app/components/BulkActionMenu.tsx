import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Search, ArrowRight } from "lucide-react";

function Avatar({ src }: { src: string }) {
  return (
    <div className="bg-muted mr-[-12px] relative rounded-full shrink-0 size-[32px] border border-border overflow-hidden">
       <ImageWithFallback src={src} className="w-full h-full object-cover" />
    </div>
  );
}

function AvatarCount({ count }: { count: number }) {
  return (
    <div className="bg-muted flex items-center justify-center mr-[-12px] px-[5px] py-[9px] relative rounded-full shrink-0 border border-border size-[32px]">
      <div className="flex flex-col font-[number:var(--font-weight-semi-bold)] h-[14px] justify-center leading-[0] text-foreground text-[length:var(--text-paragraph-sm)] text-center uppercase w-[22px]">
        <p className="leading-none">+{count}</p>
      </div>
    </div>
  );
}

function ActionButton({ label, onClick, isActive = false }: { label: string; onClick?: () => void; isActive?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`relative rounded-lg shrink-0 border border-border transition-colors cursor-pointer group ${isActive ? 'bg-muted/50' : 'hover:bg-muted/50'}`}
    >
      <div className="flex gap-[4px] items-center justify-center overflow-clip px-3 py-2 relative rounded-[inherit]">
        <div className="flex items-center justify-center relative shrink-0">
          <p className="font-[number:var(--font-weight-semi-bold)] leading-[20px] text-secondary-foreground text-[length:var(--text-paragraph-sm)]">{label}</p>
        </div>
      </div>
    </button>
  );
}

function ApplyButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-secondary-foreground flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[8px] relative rounded-lg shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <p className="font-[number:var(--font-weight-semi-bold)] leading-[20px] text-primary-foreground text-[length:var(--text-paragraph-sm)]">Apply changes</p>
      </div>
      <div className="flex items-center relative shrink-0 w-[20px]">
         <ArrowRight className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(151,115,255,0.4)]" />
    </button>
  );
}

function DepartmentChip({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-muted flex items-center px-[10px] py-[4px] rounded-sm shrink-0 cursor-pointer hover:bg-primary/15 transition-colors border border-transparent hover:border-border"
    >
      <p className="font-[number:var(--font-weight-semi-bold)] leading-[16px] text-foreground text-[length:var(--text-paragraph-sm)]">{label}</p>
    </div>
  );
}

export function BulkActionMenu({ selectedAvatars }: { selectedAvatars: string[] }) {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [subAction, setSubAction] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const selectedCount = selectedAvatars.length;
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Reset action when selection clears
  React.useEffect(() => {
    if (selectedCount === 0) {
        setActiveAction(null);
        setSubAction(null);
        setSelectedDepartment(null);
    }
  }, [selectedCount]);

  if (selectedCount === 0) return null;

  const visibleAvatars = selectedAvatars.slice(0, 3);
  const remainingCount = selectedCount > 3 ? selectedCount - 3 : 0;

  const secondaryOptions = [
    "Title", "Department", "Office", "Organization", "Manager", "Permissions", "Employment type"
  ];

  const departmentOptions = [
    "Customer Success", "Operations", "Marketing", "Product & Tech", "Finance", "IT", "Board of Directors"
  ];

  const handleSecondaryOptionClick = (option: string) => {
    if (option === "Department") {
        setSubAction("Department");
    } else {
        // Placeholder for other options
        console.log(`Clicked ${option}`);
    }
  };

  const handleDepartmentClick = (dept: string) => {
      setSelectedDepartment(dept);
  };

  const resetChange = () => {
    setActiveAction(null);
    setSubAction(null);
    setSelectedDepartment(null);
  };

  const resetSubAction = () => {
    setSubAction(null);
    setSelectedDepartment(null);
  }

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-64px)] max-w-[1423px]"
    >
      <div className="bg-card rounded-[calc(var(--radius)*2)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] border border-border py-[18px] px-4 flex items-center justify-between overflow-hidden">
         <div className="flex items-center px-4 gap-6 w-full">
            {/* Avatars & Count */}
            <div className="flex items-center pr-6 border-r border-border/50 h-full shrink-0">
               <div className="flex items-center pr-3">
                  {visibleAvatars.map((src, index) => (
                    <Avatar key={index} src={src} />
                  ))}
                  {remainingCount > 0 && <AvatarCount count={remainingCount} />}
               </div>
               <div className="flex flex-col justify-center ml-2">
                  <p className="font-[number:var(--font-weight-semi-bold)] text-foreground text-[length:var(--text-paragraph-sm)] leading-tight">{selectedCount} Users</p>
                  <p className="text-muted-foreground text-[length:var(--text-paragraph-sm)] leading-tight">Selected</p>
               </div>
            </div>

            {/* Actions Section */}
            <div className="flex items-center flex-1 overflow-hidden h-full justify-between">
               <AnimatePresence mode="wait" initial={false}>
                 {activeAction === "Change" ? (
                    <motion.div 
                      key="change-mode"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-6 w-full h-full"
                    >
                       {/* "I want to: Change [Department] [To:]" Group */}
                       <div className="flex items-center gap-3 pr-6 border-r border-border/50 h-full shrink-0">
                          <p className="font-[number:var(--font-weight-semi-bold)] text-foreground text-[length:var(--text-paragraph-sm)]">I want to:</p>
                          <ActionButton label="Change" isActive={true} onClick={resetChange} />
                          
                          {subAction === "Department" && (
                              <>
                                <ActionButton label="Department" isActive={true} onClick={resetSubAction} />
                                <p className="font-[number:var(--font-weight-semi-bold)] text-foreground text-[length:var(--text-paragraph-sm)] ml-1">To:</p>
                              </>
                          )}

                          {selectedDepartment && (
                              <ActionButton label={selectedDepartment} isActive={true} />
                          )}
                       </div>

                       {/* Options Area */}
                       <div className="flex items-center flex-1 overflow-hidden h-full">
                           {!selectedDepartment && subAction === "Department" ? (
                               <motion.div 
                                  key="department-options"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  className="flex items-center justify-between w-full"
                               >
                                  {/* Left Arrow */}
                                  <button 
                                    onClick={() => handleScroll('left')}
                                    className="p-1 hover:bg-muted rounded-full transition-colors mr-2 cursor-pointer"
                                  >
                                     <ChevronLeft className="w-4 h-4 text-foreground" />
                                  </button>

                                  {/* Chips */}
                                  <div 
                                    ref={scrollContainerRef}
                                    className="flex items-center gap-2 overflow-hidden flex-1 px-2 no-scrollbar"
                                  >
                                      {departmentOptions.map((option) => (
                                          <DepartmentChip 
                                            key={option} 
                                            label={option} 
                                            onClick={() => handleDepartmentClick(option)} 
                                          />
                                      ))}
                                  </div>

                                  {/* Right Arrow */}
                                  <button 
                                    onClick={() => handleScroll('right')}
                                    className="p-1 hover:bg-muted rounded-full transition-colors ml-2 mr-4 cursor-pointer"
                                  >
                                     <ChevronRight className="w-4 h-4 text-foreground" />
                                  </button>
                                  
                                  {/* Search */}
                                  <div className="relative w-[150px] shrink-0">
                                      <input 
                                        type="text" 
                                        placeholder="Search.." 
                                        className="w-full pl-3 pr-8 py-1.5 bg-card border border-border rounded-lg text-[length:var(--text-paragraph-sm)] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                      />
                                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                          <Search className="w-4 h-4 text-muted-foreground" />
                                      </div>
                                  </div>
                               </motion.div>
                           ) : !selectedDepartment ? (
                               <motion.div 
                                  key="secondary-options"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 20 }}
                                  className="flex items-center gap-2 overflow-x-auto no-scrollbar mask-gradient-right w-full"
                               >
                                  {secondaryOptions.map((option) => (
                                     <ActionButton 
                                        key={option} 
                                        label={option} 
                                        onClick={() => handleSecondaryOptionClick(option)}
                                     />
                                  ))}
                               </motion.div>
                           ) : null}
                       </div>
                    </motion.div>
                 ) : (
                    <motion.div 
                      key="default-mode"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-3"
                    >
                       <p className="font-[number:var(--font-weight-semi-bold)] text-foreground text-[length:var(--text-paragraph-sm)] shrink-0">I want to:</p>
                       
                       <div className="flex gap-2">
                          <ActionButton label="Add" />
                          <ActionButton label="Change" onClick={() => setActiveAction("Change")} />
                          <ActionButton label="Send" />
                          <ActionButton label="Export" />
                       </div>
                    </motion.div>
                 )}
               </AnimatePresence>

               {/* Right Action Button (Apply Changes) */}
               {selectedDepartment && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="ml-auto pl-6"
                  >
                     <ApplyButton />
                  </motion.div>
               )}
            </div>
         </div>
      </div>
    </motion.div>
  );
}
