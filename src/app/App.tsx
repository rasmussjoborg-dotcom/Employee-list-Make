import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Settings, ChevronLeft, ChevronRight, Check, X, History } from "lucide-react";
import svgPaths from "../imports/svg-kuti7blt5y";
import { EMPLOYEES, Employee, FilterState } from "./data/employees";
import { FilterPanel } from "./components/FilterPanel";
import { SavedSearchesPanel } from "./components/SavedSearchesPanel";
import { SearchHistoryPanel } from "./components/SearchHistoryPanel";
import { CustomizeColumnsPanel } from "./components/CustomizeColumnsPanel";
import { BulkActionMenu } from "./components/BulkActionMenu";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { RoleSelection, UserRole } from "./components/RoleSelection";
import { saveSearchQuery } from "./utils/searchHistory";

const imgUserPersonas = "https://i.pravatar.cc/150?u=user";

// --- Icons using the imported SVG paths ---

const Icon = ({ path, className, viewBox = "0 0 20 20", fill = "currentColor" }: { path: string; className?: string; viewBox?: string; fill?: string }) => (
  <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={path} fill={fill} fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

const Logo = () => (
  <svg className="w-[143px] h-[29px]" viewBox="0 0 143 29" fill="none">
    <g>
      <path d={svgPaths.p3cd42900} fill="var(--primary)" />
      <path d={svgPaths.p11f9a580} fill="var(--primary)" />
      <path d={svgPaths.pfc95300} fill="var(--primary)" />
      <path d={svgPaths.p1d51f700} fill="var(--primary)" />
      <path d={svgPaths.p32472b00} fill="var(--primary)" />
      <path d={svgPaths.pf68b200} fill="var(--primary)" />
      <path d={svgPaths.p10654440} fill="var(--primary)" />
      <path d={svgPaths.pf3dcb80} fill="var(--primary)" />
      <path d={svgPaths.p1095ba80} fill="var(--primary)" />
    </g>
  </svg>
);

// --- Mock Data ---

const TABS = [
  { label: "Candidates", count: 0 },
  { label: "New hires", count: 2 },
  { label: "Employees", active: true },
  { label: "Archived", count: null },
];

const AVAILABLE_COLUMNS = [
  { key: "name", label: "Employee" },
  { key: "company", label: "Company" },
  { key: "office", label: "Office" },
  { key: "department", label: "Department" },
  { key: "permission", label: "Permission" },
  { key: "title", label: "Title" },
  { key: "startDate", label: "Start Date" },
  { key: "status", label: "Status" },
  { key: "employmentType", label: "Employment" },
  { key: "reportsTo", label: "Reports To" },
];

// --- Components ---

interface HeaderProps {
  selectedRole?: UserRole | null;
  onChangeRole?: () => void;
}

function Header({ selectedRole, onChangeRole }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-8 py-5 bg-card">
        {/* Left: Menu & Breadcrumbs */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <Icon path={svgPaths.p56fcb00} className="w-5 h-5" fill="var(--foreground)" />
            <span className="font-[number:var(--font-weight-semi-bold)] text-foreground text-[length:var(--text-paragraph-md)]">Menu</span>
          </button>

          <div className="flex items-center text-[length:var(--text-paragraph-md)] font-[number:var(--font-weight-semi-bold)]">
            <span className="text-muted-foreground px-2">Label</span>
            <div className="h-3 w-px bg-border mx-2 relative">
              <svg className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1.5 h-3" viewBox="0 0 5 13" fill="none">
                <path d={svgPaths.p3d310c40} stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-foreground px-2">Label</span>
          </div>

          {selectedRole && onChangeRole && (
            <>
              <div className="h-3 w-px bg-border mx-2" />
              <button
                onClick={onChangeRole}
                className="text-[length:var(--text-paragraph-sm)] text-primary hover:text-primary/80 font-[number:var(--font-weight-semi-bold)] transition-colors cursor-pointer underline"
              >
                Change Role ({selectedRole})
              </button>
            </>
          )}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Right: Search, Notifications, Profile */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative w-[280px]">
            <div className="absolute inset-y-0 left-2 flex items-center pl-2 pointer-events-none">
              <Icon path={svgPaths.p33912800} className="w-5 h-5" fill="var(--foreground)" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-[length:var(--text-paragraph-md)] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* AI Button */}
          <button className="p-2 bg-card border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
            <Icon path={svgPaths.p30f88080} className="w-5 h-5" fill="var(--foreground)" />
          </button>

          {/* Info Button */}
          <button className="p-2 bg-card border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
            <Icon path={svgPaths.p109b4100} className="w-5 h-5" fill="var(--foreground)" />
          </button>

          {/* Notification Button */}
          <button className="relative p-2 bg-card border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
            <Icon path={svgPaths.p1f824a80} className="w-5 h-5" fill="var(--foreground)" />
            <div className="absolute top-[-3px] left-[31px]">
              <div className="w-3 h-3 bg-primary rounded-full border-2 border-card"></div>
            </div>
          </button>

          {/* Profile */}
          <button className="w-10 h-10 rounded-lg overflow-hidden border border-border cursor-pointer">
            <ImageWithFallback src={imgUserPersonas} alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </header>
  );
}

function PageTitle() {
  return (
    <div className="px-8 py-8 max-w-[1024px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-foreground">Employees</h2>
      </div>
      <p className="text-muted-foreground text-[length:var(--text-paragraph-md)] leading-normal max-w-[960px]">
        View and manage your entire workforce in one place. Search, filter, and update employee details, departments, and permissions across all offices.
      </p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="w-full px-8">
      <div className="w-full border-b border-border flex items-center">
        {TABS.map((tab, i) => (
          <div
            key={i}
            className={`px-4 py-3 border-b-2 text-[length:var(--text-paragraph-md)] font-[number:var(--font-weight-semi-bold)] cursor-pointer transition-colors -mb-[2px] ${tab.active
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
          >
            {tab.label}
            {tab.count !== null && tab.count !== undefined && ` (${tab.count})`}
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterChip({ children, onRemove }: { children: React.ReactNode; onRemove?: () => void }) {
  return (
    <div
      className="px-2.5 py-1 rounded-sm bg-muted flex items-center gap-1.5 transition-colors"
    >
      <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)]">{children}</span>
      {onRemove && (
        <button onClick={onRemove} className="hover:text-foreground/70 cursor-pointer flex items-center justify-center">
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

function EmployeeTable({
  employees,
  totalEmployees,
  selectedEmployees,
  onToggleEmployee,
  onToggleAll,
  onOpenFilters,
  onOpenSavedSearches,
  onOpenSearchHistory,
  onOpenCustomizeColumns,
  searchQuery,
  onSearchChange,
  filters,
  onToggleFilterChip,
  currentPage,
  totalPages,
  onPageChange,
  visibleColumns,
  onClearFilters,
  selectedRole
}: {
  employees: Employee[];
  totalEmployees: number;
  selectedEmployees: string[];
  onToggleEmployee: (id: string) => void;
  onToggleAll: () => void;
  onOpenFilters: () => void;
  onOpenSavedSearches: () => void;
  onOpenSearchHistory: () => void;
  onOpenCustomizeColumns: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: FilterState;
  onToggleFilterChip: (filter: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  visibleColumns: string[];
  onClearFilters: () => void;
  selectedRole: UserRole | null;
}) {



  return (
    <div className="flex-1 bg-card rounded-2xl border border-border flex flex-col mx-8 mt-6 mb-8 shadow-[var(--elevation-sm)] p-6">
      {/* Header Bar */}
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-chart-2 p-1 rounded-lg">
              <Icon path={svgPaths.p2a145280} className="w-6 h-6" fill="#0D447A" viewBox="0 0 24 24" />
            </div>
            <h4 className="text-foreground">All employees ({totalEmployees})</h4>
          </div>
        </div>

        {/* Search Input Area */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Icon path={svgPaths.p1648f9c0} className="w-6 h-6" fill="var(--foreground)" viewBox="0 0 24 24" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchQuery.trim() && selectedRole) {
                saveSearchQuery(searchQuery, selectedRole);
              }
            }}
            className="w-full pl-12 pr-24 py-3 bg-transparent border border-border rounded-lg text-[length:var(--text-paragraph-md)] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search or filter — or ask AI to help…"
          />
          {/* Search History Button */}
          <button
            onClick={onOpenSearchHistory}
            className="absolute inset-y-0 right-14 flex items-center cursor-pointer hover:opacity-80 transition-opacity group"
            title="Search history"
          >
            <div className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <History className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </button>
          {/* Submit Search Button */}
          <button
            onClick={() => {
              if (searchQuery.trim() && selectedRole) {
                saveSearchQuery(searchQuery, selectedRole);
              }
            }}
            className="absolute inset-y-0 right-2 flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            title="Save search"
          >
            <div className="bg-chart-2 p-1 rounded-lg">
              <Icon path={svgPaths.p3e35800} className="w-6 h-6" fill="#0D447A" viewBox="0 0 24 24" />
            </div>
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground mr-1">Active filters:</span>

          {/* Active Chips */}
          {Object.entries(filters).flatMap(([category, values]) =>
            values.map((value: string) => ({ category, value }))
          ).map(({ category, value }, i) => (
            <FilterChip key={`${category}-${value}-${i}`} onRemove={() => onToggleFilterChip(value)}>
              {value}
            </FilterChip>
          ))}

          <div className="flex-1"></div>

          {(Object.values(filters).some(f => f.length > 0) || searchQuery.length > 0) && (
            <button
              onClick={onClearFilters}
              className="text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-black hover:opacity-70 transition-all cursor-pointer mr-3 px-2 py-1"
            >
              Clear filters
            </button>
          )}
          <button
            onClick={onOpenSavedSearches}
            className="flex items-center gap-1.5 px-3 py-2 border border-border text-secondary-foreground hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
          >
            <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)]">Saved searches</span>
            <Icon path={svgPaths.p767e780} className="w-5 h-5" fill="var(--secondary-foreground)" />
          </button>
          <button
            onClick={onOpenFilters}
            className="flex items-center gap-1.5 px-3 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <span className="font-[number:var(--font-weight-semi-bold)] text-[length:var(--text-paragraph-sm)] text-secondary-foreground">Filter list</span>
            <Icon path={svgPaths.p3d928200} className="w-5 h-5" fill="var(--secondary-foreground)" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left border-collapse">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="py-3 px-4 w-[50px] first:rounded-tl-lg">
                <div
                  onClick={onToggleAll}
                  className={`w-6 h-6 border rounded-sm flex items-center justify-center cursor-pointer transition-colors ${selectedEmployees.length === employees.length && employees.length > 0
                    ? "bg-secondary-foreground border-secondary-foreground"
                    : "bg-card border-foreground"
                    }`}
                >
                  {selectedEmployees.length === employees.length && employees.length > 0 && (
                    <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                  )}
                </div>
              </th>
              {visibleColumns.includes("name") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground">Employee</th>
              )}
              {visibleColumns.includes("title") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground">Title</th>
              )}
              {visibleColumns.includes("company") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground">Company</th>
              )}
              {visibleColumns.includes("office") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground">Office</th>
              )}
              {visibleColumns.includes("department") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground">Department</th>
              )}
              {visibleColumns.includes("startDate") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground whitespace-nowrap">Start Date</th>
              )}
              {visibleColumns.includes("status") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground">Status</th>
              )}
              {visibleColumns.includes("employmentType") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground whitespace-nowrap">Employment</th>
              )}
              {visibleColumns.includes("reportsTo") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground whitespace-nowrap">Reports To</th>
              )}
              {visibleColumns.includes("permission") && (
                <th className="py-3 px-4 text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground w-[120px]">Permission</th>
              )}
              <th className="py-3 px-4 w-[50px] last:rounded-tr-lg">
                <button onClick={onOpenCustomizeColumns} className="hover:text-foreground transition-colors p-1 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <Settings className="w-4 h-4 text-foreground" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, idx) => (
              <tr key={idx} className={`border-b border-border last:border-0 hover:bg-muted/20 group ${selectedEmployees.includes(employee.id) ? "bg-muted/20" : "bg-card"
                }`}>
                <td className="py-4 px-4">
                  <div
                    onClick={() => onToggleEmployee(employee.id)}
                    className={`w-6 h-6 border rounded-sm flex items-center justify-center cursor-pointer transition-colors ${selectedEmployees.includes(employee.id)
                      ? "bg-secondary-foreground border-secondary-foreground"
                      : "bg-card border-foreground"
                      }`}
                  >
                    {selectedEmployees.includes(employee.id) && (
                      <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
                    )}
                  </div>
                </td>
                {visibleColumns.includes("name") && (
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-border overflow-hidden shrink-0">
                        <ImageWithFallback src={employee.avatar} className="w-full h-full object-cover" alt={employee.name} />
                      </div>
                      <div>
                        <div className="text-[length:var(--text-paragraph-sm)] font-[number:var(--font-weight-semi-bold)] text-foreground whitespace-nowrap">{employee.name}</div>
                        <div className="text-[length:var(--text-paragraph-sm)] text-muted-foreground">#{employee.employeeNumber}</div>
                      </div>
                    </div>
                  </td>
                )}
                {visibleColumns.includes("title") && (
                  <td className="py-4 px-4">
                    <span className="text-[length:var(--text-paragraph-sm)] text-foreground">{employee.title}</span>
                  </td>
                )}
                {visibleColumns.includes("company") && (
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Icon path={svgPaths.p232bbd80} className="w-4 h-4" fill="var(--foreground)" />
                      <span className="text-[length:var(--text-paragraph-sm)] text-foreground">{employee.company}</span>
                    </div>
                  </td>
                )}
                {visibleColumns.includes("office") && (
                  <td className="py-4 px-4">
                    <span className="text-[length:var(--text-paragraph-sm)] text-foreground">{employee.office}</span>
                  </td>
                )}
                {visibleColumns.includes("department") && (
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[length:var(--text-paragraph-sm)] leading-[16px] font-[number:var(--font-weight-semi-bold)] bg-[#F5F3FF] text-[#5B21B6]">
                      {employee.department}
                    </span>
                  </td>
                )}
                {visibleColumns.includes("startDate") && (
                  <td className="py-4 px-4">
                    <span className="text-[length:var(--text-paragraph-sm)] text-foreground whitespace-nowrap">{employee.startDate}</span>
                  </td>
                )}
                {visibleColumns.includes("status") && (
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[length:var(--text-paragraph-sm)] leading-[16px] font-[number:var(--font-weight-semi-bold)] ${employee.status === "Active" ? "bg-green-100 text-green-800" :
                      employee.status === "Inactive" ? "bg-gray-100 text-gray-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                      {employee.status}
                    </span>
                  </td>
                )}
                {visibleColumns.includes("employmentType") && (
                  <td className="py-4 px-4">
                    <span className="text-[length:var(--text-paragraph-sm)] text-foreground">{employee.employmentType}</span>
                  </td>
                )}
                {visibleColumns.includes("reportsTo") && (
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[10px] overflow-hidden">
                        {/* Placeholder avatar logic or initials */}
                        {employee.reportsTo.charAt(0)}
                      </div>
                      <span className="text-[length:var(--text-paragraph-sm)] text-foreground">{employee.reportsTo}</span>
                    </div>
                  </td>
                )}
                {visibleColumns.includes("permission") && (
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[length:var(--text-paragraph-sm)] leading-[16px] font-[number:var(--font-weight-semi-bold)] ${employee.permission === "Manager" ? "bg-chart-3 text-[#0c693c]" :
                      employee.permission === "Admin" ? "bg-chart-4 text-[#693c0c]" :
                        "bg-chart-2 text-[#0d447a]"
                      }`}>
                      {employee.permission}
                    </span>
                  </td>
                )}
                <td className="py-4 px-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pt-4 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-[length:var(--text-paragraph-sm)] text-foreground">
          <span>Page</span>
          <div className="border border-border rounded-sm px-2 py-1 flex items-center gap-4 cursor-pointer hover:bg-muted/50 transition-colors">
            <span>{currentPage}</span>
            <Icon path={svgPaths.p3d310c40} className="w-2 h-2 rotate-90" fill="var(--foreground)" />
          </div>
          <span className="text-muted-foreground">of {totalPages}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="p-2 border border-border rounded-lg hover:bg-muted/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="p-2 border border-border rounded-lg hover:bg-muted/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div >
  );
}

export default function App() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCustomizeColumnsOpen, setIsCustomizeColumnsOpen] = useState(false);
  const [isSavedSearchesOpen, setIsSavedSearchesOpen] = useState(false);
  const [isSearchHistoryOpen, setIsSearchHistoryOpen] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);

  // Search, Filter & Pagination State
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    companies: [],
    offices: [],
    departments: [],
    roles: [],
    permissions: [],
    employmentTypes: []
  });

  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "name", "company", "office", "department", "permission"
  ]);

  const toggleColumn = (key: string) => {
    setVisibleColumns(prev =>
      prev.includes(key)
        ? prev.filter(c => c !== key)
        : [...prev, key]
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Filter Logic
  const filteredEmployees = EMPLOYEES.filter(employee => {
    // Search
    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch =
      employee.name.toLowerCase().includes(lowerQuery) ||
      employee.role.toLowerCase().includes(lowerQuery) ||
      employee.title.toLowerCase().includes(lowerQuery) ||
      employee.department.toLowerCase().includes(lowerQuery) ||
      employee.company.toLowerCase().includes(lowerQuery) ||
      employee.office.toLowerCase().includes(lowerQuery) ||
      employee.id.toLowerCase().includes(lowerQuery) ||
      employee.employeeNumber.includes(lowerQuery) ||
      employee.reportsTo.toLowerCase().includes(lowerQuery);

    if (!matchesSearch) return false;

    // Advanced Filters
    // If a filter category has selections, the employee must match ONE of the selected values (OR logic within category).
    // If multiple categories have selections, the employee must match ALL active categories (AND logic between categories).

    if (filters.companies.length > 0 && !filters.companies.includes(employee.company)) return false;
    if (filters.offices.length > 0 && !filters.offices.includes(employee.office)) return false;
    if (filters.departments.length > 0 && !filters.departments.includes(employee.department)) return false;
    if (filters.roles.length > 0 && !filters.roles.includes(employee.role)) return false; // Note: Filtering on "role" (e.g. Developer), not full title
    if (filters.permissions.length > 0 && !filters.permissions.includes(employee.permission)) return false;
    if (filters.employmentTypes.length > 0 && !filters.employmentTypes.includes(employee.employmentType)) return false;

    return true;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleAll = () => {
    if (selectedEmployees.length === paginatedEmployees.length && paginatedEmployees.length > 0) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(paginatedEmployees.map(e => e.id));
    }
  };

  const toggleEmployee = (id: string) => {
    if (selectedEmployees.includes(id)) {
      setSelectedEmployees(selectedEmployees.filter(empId => empId !== id));
    } else {
      setSelectedEmployees([...selectedEmployees, id]);
    }
  };

  const handleFilterApply = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleApplySavedSearch = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const toggleFilterChip = (chip: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };

      if (chip === "Managers") {
        const hasManager = newFilters.permissions.includes("Manager");
        newFilters.permissions = hasManager
          ? newFilters.permissions.filter(p => p !== "Manager")
          : [...newFilters.permissions, "Manager"];
      } else if (chip === "Stockholm office") {
        const hasStockholm = newFilters.offices.includes("Stockholm");
        newFilters.offices = hasStockholm
          ? newFilters.offices.filter(o => o !== "Stockholm")
          : [...newFilters.offices, "Stockholm"];
      }

      // Generic removal logic: search in all categories
      const keys = Object.keys(newFilters) as (keyof FilterState)[];
      for (const key of keys) {
        if (newFilters[key].includes(chip)) {
          newFilters[key] = newFilters[key].filter(item => item !== chip);
          break; // Assuming unique values across categories for simplicity, or we remove from all
        }
      }

      return newFilters;
    });
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      companies: [],
      offices: [],
      departments: [],
      roles: [],
      permissions: [],
      employmentTypes: [],
    });
    setSearchQuery("");
    setCurrentPage(1);
  };

  const selectedEmployeeAvatars = EMPLOYEES
    .filter(e => selectedEmployees.includes(e.id))
    .map(e => e.avatar);

  return (
    <>
      {!selectedRole ? (
        <RoleSelection onSelectRole={setSelectedRole} />
      ) : (
        <div className="min-h-screen bg-background font-[family-name:var(--font-inter)] text-foreground selection:bg-primary/20">
          <Header selectedRole={selectedRole} onChangeRole={() => setSelectedRole(null)} />
          <main className="flex flex-col">
            <PageTitle />
            <Tabs />
            <div className="flex-1">
              <EmployeeTable
                employees={paginatedEmployees}
                totalEmployees={EMPLOYEES.length}
                selectedEmployees={selectedEmployees}
                onToggleEmployee={toggleEmployee}
                onToggleAll={toggleAll}
                onOpenFilters={() => setIsFilterOpen(true)}
                onOpenSavedSearches={() => setIsSavedSearchesOpen(true)}
                onOpenSearchHistory={() => setIsSearchHistoryOpen(true)}
                onOpenCustomizeColumns={() => setIsCustomizeColumnsOpen(true)}
                onClearFilters={handleClearFilters}
                filters={filters}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onToggleFilterChip={toggleFilterChip}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                visibleColumns={visibleColumns}
                selectedRole={selectedRole}
              />
            </div>
          </main>
          <AnimatePresence>
            {isFilterOpen && <FilterPanel onClose={() => setIsFilterOpen(false)} filters={filters} onApply={handleFilterApply} />}
            {isSavedSearchesOpen && <SavedSearchesPanel onClose={() => setIsSavedSearchesOpen(false)} onApply={handleApplySavedSearch} />}
            {isSearchHistoryOpen && <SearchHistoryPanel onClose={() => setIsSearchHistoryOpen(false)} onApplySearch={handleSearchChange} />}
            {isCustomizeColumnsOpen && <CustomizeColumnsPanel onClose={() => setIsCustomizeColumnsOpen(false)} allColumns={AVAILABLE_COLUMNS} visibleColumns={visibleColumns} onToggleColumn={toggleColumn} />}
            {selectedEmployees.length > 0 && <BulkActionMenu key="bulk-menu" selectedAvatars={selectedEmployeeAvatars} />}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}