import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-2u8uqinpb0";
import {
  FilterState,
  COMPANIES,
  OFFICES,
  DEPARTMENTS,
  PERMISSIONS,
  EMPLOYMENT_TYPES,
  ROLES // Added for completeness if needed in future, though job title usually means Role or Title
} from "../data/employees";
import { Check } from "lucide-react";

// --- Icons ---

const Icon = ({ path, className }: { path: string; className: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" preserveAspectRatio="none">
    <path clipRule="evenodd" fillRule="evenodd" d={path} fill="currentColor" />
  </svg>
);

// --- Components ---

function CheckboxItem({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div
      className="flex gap-2 items-center w-full cursor-pointer group select-none"
      onClick={onChange}
    >
      <div
        className={`relative size-6 shrink-0 rounded-sm border flex items-center justify-center transition-colors ${checked
          ? "bg-primary border-primary text-primary-foreground"
          : "border-foreground bg-card group-hover:border-primary"
          }`}
      >
        {checked && <Check className="w-4 h-4" strokeWidth={3} />}
      </div>
      <p className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-foreground">{label}</p>
    </div>
  );
}

function SectionHeader({ title, isOpen, onClick }: { title: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className="flex gap-1 items-center py-2 cursor-pointer w-full select-none"
      onClick={onClick}
    >
      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <p className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-md)] text-foreground">{title}</p>
      </div>
      <div className="flex items-center justify-center p-1 rounded-lg">
        <div className="size-4 shrink-0 text-foreground">
          <Icon path={isOpen ? svgPaths.p9b6e500 : svgPaths.p1599ea80} className="size-full" />
        </div>
      </div>
    </div>
  );
}

function FilterSection({
  title,
  children,
  defaultOpen = false
}: {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="w-full shrink-0 flex flex-col gap-2 pb-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="pt-1">
        <SectionHeader title={title} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && children && (
        <div className="flex flex-col gap-2 w-full pl-0">
          {children}
        </div>
      )}
    </div>
  );
}

interface FilterPanelProps {
  onClose: () => void;
  filters: FilterState;
  onApply: (newFilters: FilterState) => void;
}

export function FilterPanel({ onClose, filters, onApply }: FilterPanelProps) {
  const toggleFilter = (category: keyof FilterState, value: string) => {
    const currentList = filters[category];
    const newList = currentList.includes(value)
      ? currentList.filter(item => item !== value)
      : [...currentList, value];

    onApply({ ...filters, [category]: newList });
  };



  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center pointer-events-none">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-0 bg-black/15 pointer-events-auto"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="pointer-events-auto relative mr-2 my-2 w-[344px] h-[calc(100vh-16px)] flex flex-col bg-card rounded-[calc(var(--radius)*2)] shadow-lg overflow-hidden border border-border"
      >
        {/* Header */}
        <div className="shrink-0 relative w-full">
          <div className="flex items-center p-4 w-full border-b border-border">
            <p className="flex-1 font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-heading-xs)] text-foreground">Filters</p>
            <button onClick={onClose} className="flex gap-[2px] items-center justify-center py-1 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="size-4 shrink-0 text-secondary-foreground">
                <Icon path={svgPaths.p9bb380} className="size-full" />
              </div>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0 relative">
          <div className="p-4 flex flex-col items-start w-full">

            {/* Legal Entity */}
            <FilterSection title="Legal entity" defaultOpen={true}>
              {COMPANIES.map(company => (
                <CheckboxItem
                  key={company}
                  label={company}
                  checked={filters.companies.includes(company)}
                  onChange={() => toggleFilter("companies", company)}
                />
              ))}
            </FilterSection>

            {/* Office */}
            <FilterSection title="Office" defaultOpen={true}>
              {OFFICES.map(office => (
                <CheckboxItem
                  key={office}
                  label={office}
                  checked={filters.offices.includes(office)}
                  onChange={() => toggleFilter("offices", office)}
                />
              ))}
            </FilterSection>

            {/* Department */}
            <FilterSection title="Department" defaultOpen={true}>
              {DEPARTMENTS.map(dept => (
                <CheckboxItem
                  key={dept}
                  label={dept}
                  checked={filters.departments.includes(dept)}
                  onChange={() => toggleFilter("departments", dept)}
                />
              ))}
            </FilterSection>

            {/* Roles (Job title in UI) */}
            <FilterSection title="Job title" defaultOpen={false}>
              {ROLES.map(role => (
                <CheckboxItem
                  key={role}
                  label={role}
                  checked={filters.roles.includes(role)}
                  onChange={() => toggleFilter("roles", role)}
                />
              ))}
            </FilterSection>

            {/* Permissions */}
            <FilterSection title="Permissions" defaultOpen={false}>
              {PERMISSIONS.map(perm => (
                <CheckboxItem
                  key={perm}
                  label={perm}
                  checked={filters.permissions.includes(perm)}
                  onChange={() => toggleFilter("permissions", perm)}
                />
              ))}
            </FilterSection>

            {/* Employment Type */}
            <FilterSection title="Employment type" defaultOpen={false}>
              {EMPLOYMENT_TYPES.map(type => (
                <CheckboxItem
                  key={type}
                  label={type}
                  checked={filters.employmentTypes.includes(type)}
                  onChange={() => toggleFilter("employmentTypes", type)}
                />
              ))}
            </FilterSection>

          </div>

          {/* Scroll Gradients */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-card to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Footer */}
        <div className="shrink-0 w-full relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-border" />
          <div className="p-4 flex gap-2 w-full">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex-1 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-secondary-foreground">Close</span>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
