
import { motion } from "motion/react";
import { Check } from "lucide-react";
import svgPaths from "../../imports/svg-92p0w6mpsc";

// --- Icons ---

const Icon = ({ path, className }: { path: string; className: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" preserveAspectRatio="none">
    <path clipRule="evenodd" fillRule="evenodd" d={path} fill="currentColor" />
  </svg>
);

// --- Components ---

function CheckboxItem({ label, checked = false, onChange }: { label: string; checked?: boolean; onChange?: () => void }) {
  return (
    <div
      className="flex gap-2 items-center w-full cursor-pointer group py-1"
      onClick={onChange}
    >
      <div
        className={`
          relative size-6 shrink-0 rounded-sm border flex items-center justify-center transition-colors
          ${checked ? 'bg-secondary-foreground border-secondary-foreground' : 'border-foreground bg-card group-hover:border-primary'}
        `}
      >
        {checked && (
          <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
        )}
      </div>
      <p className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-foreground">{label}</p>
    </div>
  );
}

interface CustomizeColumnsPanelProps {
  onClose: () => void;
  allColumns: { key: string; label: string }[];
  visibleColumns: string[];
  onToggleColumn: (key: string) => void;
}

export function CustomizeColumnsPanel({ onClose, allColumns, visibleColumns, onToggleColumn }: CustomizeColumnsPanelProps) {

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
            <p className="flex-1 font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-heading-xs)] text-foreground">Customize Columns</p>
            <button onClick={onClose} className="flex gap-[2px] items-center justify-center py-1 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="size-4 shrink-0 text-secondary-foreground">
                <Icon path={svgPaths.p9bb380} className="size-full" />
              </div>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0 relative">
          <div className="p-4 flex flex-col gap-2 w-full">
            {allColumns.map((col) => (
              <CheckboxItem
                key={col.key}
                label={col.label}
                checked={visibleColumns.includes(col.key)}
                onChange={() => onToggleColumn(col.key)}
              />
            ))}
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
