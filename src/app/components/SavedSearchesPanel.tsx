import { motion } from "motion/react";
import svgPaths from "../../imports/svg-2u8uqinpb0";
import { SAVED_SEARCHES, FilterState } from "../data/employees";
import { Search, Star, ChevronRight, Save, Bookmark } from "lucide-react";

const Icon = ({ path, className }: { path: string; className: string }) => (
    <svg className={className} viewBox="0 0 16 16" fill="none" preserveAspectRatio="none">
        <path clipRule="evenodd" fillRule="evenodd" d={path} fill="currentColor" />
    </svg>
);

interface SavedSearchesPanelProps {
    onClose: () => void;
    onApply: (filters: FilterState) => void;
}

export function SavedSearchesPanel({ onClose, onApply }: SavedSearchesPanelProps) {
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
                        <p className="flex-1 font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-heading-xs)] text-foreground">Saved searches</p>
                        <button onClick={onClose} className="text-secondary-foreground hover:text-foreground transition-colors cursor-pointer">
                            <div className="size-4 shrink-0 transition-transform hover:scale-110 active:scale-90">
                                <XIcon />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto min-h-0 relative">
                    <div className="p-4 flex flex-col gap-4 w-full">
                        {/* Save Current Search Item */}
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all group text-left cursor-pointer">
                            <div className="size-10 rounded-full bg-background flex items-center justify-center text-foreground shadow-sm">
                                <Save className="w-5 h-5" />
                            </div>
                            <span className="flex-1 font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-foreground">
                                Save current search
                            </span>
                            <Bookmark className="w-4 h-4 text-secondary-foreground group-hover:text-primary transition-colors" />
                        </button>

                        <div className="h-px bg-border/50 mx-1" />

                        {/* Saved Searches List */}
                        <div className="flex flex-col gap-2">
                            {SAVED_SEARCHES.map((search) => {
                                const filterCount = Object.values(search.filters).flat().length;
                                return (
                                    <button
                                        key={search.id}
                                        onClick={() => {
                                            onApply(search.filters);
                                            onClose();
                                        }}
                                        className="w-full flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-all group text-left cursor-pointer"
                                    >
                                        <div className="size-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                                            <Star className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-foreground group-hover:text-primary transition-colors">
                                                {search.name}
                                            </span>
                                            <span className="text-[length:var(--text-paragraph-xs)] text-secondary-foreground">
                                                {filterCount} filters
                                            </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scroll Gradients */}
                    <div className="pointer-events-none absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-card to-transparent" />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Footer */}
                <div className="shrink-0 w-full relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                    <div className="p-4 flex gap-3 w-full">
                        <button
                            onClick={onClose}
                            className="flex-1 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                            <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-secondary-foreground">Cancel</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 h-10 bg-[#2D1663] text-white rounded-lg flex items-center justify-center hover:bg-[#2D1663]/90 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                        >
                            <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)]">Apply</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
