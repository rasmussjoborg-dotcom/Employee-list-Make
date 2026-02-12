import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock, Download, Trash2, History } from "lucide-react";
import {
    getSearchHistory,
    deleteSearchEntry,
    clearSearchHistory,
    exportSearchHistory,
    SearchHistoryEntry,
} from "../utils/searchHistory";

interface SearchHistoryPanelProps {
    onClose: () => void;
    onApplySearch: (query: string) => void;
}

export function SearchHistoryPanel({ onClose, onApplySearch }: SearchHistoryPanelProps) {
    const [history, setHistory] = useState<SearchHistoryEntry[]>([]);
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [shiftPressCount, setShiftPressCount] = useState(0);
    const [shiftTimer, setShiftTimer] = useState<number | null>(null);

    useEffect(() => {
        setHistory(getSearchHistory());
    }, []);

    // Admin mode toggle: Press Shift twice quickly
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Shift') {
                setShiftPressCount(prev => {
                    const newCount = prev + 1;

                    // Clear existing timer
                    if (shiftTimer) clearTimeout(shiftTimer);

                    // If double-shift detected, toggle admin mode
                    if (newCount === 2) {
                        setIsAdminMode(current => !current);
                        return 0;
                    }

                    // Set timer to reset count
                    const timer = setTimeout(() => setShiftPressCount(0), 500);
                    setShiftTimer(timer);

                    return newCount;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (shiftTimer) clearTimeout(shiftTimer);
        };
    }, [shiftTimer]);

    const handleDelete = (id: string) => {
        deleteSearchEntry(id);
        setHistory(getSearchHistory());
    };

    const handleClearAll = () => {
        if (confirm("Are you sure you want to clear all search history?")) {
            clearSearchHistory();
            setHistory([]);
        }
    };

    const handleExport = () => {
        exportSearchHistory();
    };

    const formatTimestamp = (timestamp: number) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return "Just now";
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;

        return date.toLocaleDateString();
    };

    const getRoleBadgeStyle = (role: string) => {
        const styles: Record<string, string> = {
            Owner: "bg-purple-500/10 text-purple-600 border-purple-500/20",
            Admin: "bg-blue-500/10 text-blue-600 border-blue-500/20",
            Manager: "bg-green-500/10 text-green-600 border-green-500/20",
            Colleague: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        };
        return styles[role] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
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
                        <History className="w-5 h-5 text-primary mr-2" />
                        <p className="flex-1 font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-heading-xs)] text-foreground">
                            Search History
                        </p>
                        <button
                            onClick={onClose}
                            className="text-secondary-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            <div className="size-4 shrink-0 transition-transform hover:scale-110 active:scale-90">
                                <XIcon />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto min-h-0 relative">
                    <div className="p-4 flex flex-col gap-3 w-full">
                        {history.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="size-12 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                                    <Clock className="w-6 h-6 text-muted-foreground" />
                                </div>
                                <p className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-foreground mb-1">
                                    No search history yet
                                </p>
                                <p className="text-[length:var(--text-paragraph-xs)] text-muted-foreground max-w-[240px]">
                                    Your search queries will appear here when you press Enter or click the search button
                                </p>
                            </div>
                        ) : (
                            history.map((entry) => (
                                <div
                                    key={entry.id}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-muted/50 transition-all group"
                                >
                                    <button
                                        onClick={() => {
                                            onApplySearch(entry.query);
                                            onClose();
                                        }}
                                        className="flex-1 flex items-start gap-3 text-left cursor-pointer"
                                    >
                                        <div className="size-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 flex flex-col min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-foreground group-hover:text-primary transition-colors truncate">
                                                    {entry.query}
                                                </span>
                                                {entry.role && (
                                                    <span className={`px-1.5 py-0.5 rounded-md border text-[9px] font-semibold uppercase tracking-wider shrink-0 ${getRoleBadgeStyle(entry.role)}`}>
                                                        {entry.role}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-[length:var(--text-paragraph-xs)] text-secondary-foreground">
                                                {formatTimestamp(entry.timestamp)}
                                            </span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(entry.id)}
                                        className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                                        title="Delete search"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Scroll Gradients */}
                    <div className="pointer-events-none absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-card to-transparent" />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Footer */}
                <div className="shrink-0 w-full relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-border" />
                    <div className="p-4 flex flex-col gap-2 w-full">
                        {history.length > 0 && (
                            <>
                                <button
                                    onClick={handleExport}
                                    className="w-full h-10 border border-border rounded-lg flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors cursor-pointer"
                                >
                                    <Download className="w-4 h-4 text-secondary-foreground" />
                                    <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-secondary-foreground">
                                        Export
                                    </span>
                                </button>
                                {isAdminMode && (
                                    <button
                                        onClick={handleClearAll}
                                        className="w-full h-10 border border-destructive/20 rounded-lg flex items-center justify-center gap-2 hover:bg-destructive/10 text-destructive transition-colors cursor-pointer"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)]">
                                            Clear All (Admin)
                                        </span>
                                    </button>
                                )}
                            </>
                        )}
                        <button
                            onClick={onClose}
                            className="w-full h-10 bg-[#2D1663] text-white rounded-lg flex items-center justify-center hover:bg-[#2D1663]/90 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                        >
                            <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)]">
                                Close
                            </span>
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
