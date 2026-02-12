export interface SearchHistoryEntry {
    query: string;
    timestamp: number;
    id: string;
    role: string;
}

const STORAGE_KEY = 'employee_search_history';
const MAX_HISTORY_ITEMS = 50;

/**
 * Save a search query to localStorage with role information
 */
export function saveSearchQuery(query: string, role: string): void {
    if (!query.trim()) return;

    const history = getSearchHistory();

    // Avoid duplicate consecutive searches
    if (history.length > 0 && history[0].query === query.trim() && history[0].role === role) {
        return;
    }

    const entry: SearchHistoryEntry = {
        query: query.trim(),
        role: role,
        timestamp: Date.now(),
        id: crypto.randomUUID(),
    };

    // Add to beginning of array (most recent first)
    const updatedHistory = [entry, ...history].slice(0, MAX_HISTORY_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
}

/**
 * Get all search history entries
 */
export function getSearchHistory(): SearchHistoryEntry[] {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];

        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('Failed to parse search history:', error);
        return [];
    }
}

/**
 * Delete a specific search history entry by ID
 */
export function deleteSearchEntry(id: string): void {
    const history = getSearchHistory();
    const filtered = history.filter(entry => entry.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Clear all search history
 */
export function clearSearchHistory(): void {
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * Export search history as CSV file
 */
export function exportSearchHistory(): void {
    const history = getSearchHistory();

    // Create CSV header
    const headers = ['Query', 'Role', 'Timestamp', 'Date'];

    // Convert entries to CSV rows
    const rows = history.map(entry => {
        const date = new Date(entry.timestamp).toLocaleString();
        return [
            `"${entry.query.replace(/"/g, '""')}"`, // Escape quotes in query
            `"${entry.role || 'N/A'}"`,
            entry.timestamp,
            `"${date}"`
        ].join(',');
    });

    // Combine headers and rows
    const csvContent = [headers.join(','), ...rows].join('\n');
    const dataBlob = new Blob([csvContent], { type: 'text/csv' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `employee-search-history-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
