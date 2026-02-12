export interface Employee {
    id: string; // Internal ID
    employeeNumber: string; // Visible Employee Number
    name: string;
    role: string; // e.g., "Developer", "Designer"
    title: string; // e.g., "Senior Software Engineer"
    company: string;
    office: string;
    department: string;
    permission: "Colleague" | "Manager" | "Admin";
    startDate: string;
    status: "Active" | "Inactive" | "On Leave";
    employmentType: "Full-time" | "Part-time" | "Consultant";
    reportsTo: string; // Name of the manager
    avatar: string;
}

export interface FilterState {
    companies: string[];
    offices: string[];
    departments: string[];
    roles: string[];
    permissions: string[];
    employmentTypes: string[];
}

export interface SavedSearch {
    id: string;
    name: string;
    filters: FilterState;
}

export const SAVED_SEARCHES: SavedSearch[] = [
    {
        id: "ss-1",
        name: "Stockholm Developers",
        filters: {
            companies: ["Novidio AB"],
            offices: ["Stockholm"],
            departments: ["Product & Tech"],
            roles: ["Developer"],
            permissions: [],
            employmentTypes: []
        }
    },
    {
        id: "ss-2",
        name: "London Managers",
        filters: {
            companies: ["Novidio Ltd"],
            offices: ["London"],
            departments: [],
            roles: [],
            permissions: ["Manager"],
            employmentTypes: []
        }
    },
    {
        id: "ss-3",
        name: "Swedish Consultants",
        filters: {
            companies: ["Novidio AB"],
            offices: ["Stockholm"],
            departments: [],
            roles: [],
            permissions: [],
            employmentTypes: ["Consultant"]
        }
    }
];

export const SWEDISH_NAMES = [
    "Nora Halvorsen", "Clara Jensen", "Sophie Andersson", "Elin Strandberg", "Erik Lundgren",
    "Luna Berg", "Axel Holm", "Saga Nor", "Hugo Lind", "Freja Ek",
    "Elias Vik", "Alma Sol", "Ivar Dal", "Astrid Ny", "Oskar Sjv",
    "Ebba Gran", "Arvid Eng", "Klara Berg", "Ludvig Ask", "Stina Ahl",
    "Malte Loo", "Wilma Ros", "Hjalmar Sten", "Tyra Falk", "Sixten Alv",
    "Ines Blom", "Folke Gren", "Signe Björk", "Gunnar Malm", "Siri Hed",
    "Ture Sjö", "Agnes Järn", "Valter Alm", "Ellen Bark", "Einar Kvist",
    "Maja Ström", "Lars Varg", "Henrik Sjö", "Linn Malm", "Sven Blom",
    "Karin Lind", "Olof Berg", "Ingrid Ek", "Björn Dal", "Ulla Ny",
    "Eirik Fors", "Gudrun Alm", "Torsten Hed", "Astrid Sjö", "Ragnar Ek"
];

export const ENGLISH_NAMES = [
    "James Whitmore", "Liam Smith", "Olivia Johnson", "Noah Williams", "Emma Brown",
    "Oliver Jones", "Ava Garcia", "Elijah Miller", "Charlotte Davis", "William Rodriguez",
    "James Hernandez", "Amelia Lopez", "Benjamin Gonzalez", "Mia Wilson", "Lucas Anderson",
    "Harper Thomas", "Henry Taylor", "Evelyn Moore", "Alexander Jackson", "Abigail Martin",
    "Michael Lee", "Emily Perez", "Daniel Thompson", "Elizabeth White", "Matthew Harris",
    "Jackson Clark", "Avery Ramirez", "Sebastian Lewis", "Ella Robinson", "David Walker",
    "Madison Young", "Carter Allen", "Scarlett King", "Wyatt Wright"
];

export const MIXED_NAMES = [
    "Sofia Sanchez", "Jayden Torres", "Luna Nguyen", "Grace Flores", "Layla Rivera",
    "Gabriel Campbell", "Riley Mitchell", "Anthony Carter", "Zoey Roberts", "Isaac Gomez",
    "Jack Diaz", "Eleanor Parker", "Julian Cruz", "Hannah Edwards", "Levi Collins",
    "Lillian Reyes", "Christopher Stewart", "Addison Morris", "Joshua Morales", "Aubrey Murphy"
];

export const NAMES = [...SWEDISH_NAMES, ...ENGLISH_NAMES, ...MIXED_NAMES];

export const COMPANIES = ["Novidio AB", "Novidio Ltd"];
export const OFFICES = ["Stockholm", "London"];
export const ROLES = ["Developer", "Designer", "Product Manager", "Data Analyst", "HR Specialist", "Sales Representative", "Marketing Specialist", "Customer Success Manager", "Finance Manager", "Operations Coordinator"];
export const TITLES = ["Junior", "Mid-level", "Senior", "Lead", "Principal", "Director", "VP", "Head of"];
export const DEPARTMENTS = ["Product & Tech", "Marketing", "Sales", "Customer Success", "Finance", "HR", "Operations", "Legal"];
export const PERMISSIONS = ["Colleague", "Manager", "Admin"] as const;
export const STATUSES = ["Active", "Inactive", "On Leave"] as const;
export const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Consultant"] as const;

function getRandomElement<T>(arr: readonly T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function generateEmployees(count: number): Employee[] {
    const employees: Employee[] = [];

    // 1. Prepare name pools (shuffled to ensure variety)
    const swedishPool = shuffleArray(SWEDISH_NAMES);
    const englishPool = shuffleArray(ENGLISH_NAMES);
    const mixedPool = shuffleArray(MIXED_NAMES);

    const swedishCount = Math.floor(count * 0.5);
    const englishCount = Math.floor(count * 0.3);
    const mixedCount = count - swedishCount - englishCount;

    const namesToUse: string[] = [];

    // Fill with Swedish (50%)
    for (let i = 0; i < swedishCount; i++) {
        namesToUse.push(swedishPool[i % swedishPool.length]);
    }
    // Fill with English (30%)
    for (let i = 0; i < englishCount; i++) {
        namesToUse.push(englishPool[i % englishPool.length]);
    }
    // Fill with Mixed (20%)
    for (let i = 0; i < mixedCount; i++) {
        namesToUse.push(mixedPool[i % mixedPool.length]);
    }

    // Shuffle final name list so they are distributed across the table
    const finalNames = shuffleArray(namesToUse);

    // 2. Generate basic employee data
    for (let i = 0; i < count; i++) {
        const name = finalNames[i];
        const role = getRandomElement(ROLES);
        const titlePrefix = getRandomElement(TITLES);

        const reportsTo = i > 10 ? employees[Math.floor(Math.random() * 10)].name : "CEO"; // First 10 report to CEO, others report to random early employees

        // Determine Company and Office linkage
        const isSwedish = Math.random() > 0.5;
        const company = isSwedish ? "Novidio AB" : "Novidio Ltd";
        const office = isSwedish ? "Stockholm" : "London";

        employees.push({
            id: `#${i + 1}`,
            employeeNumber: `${i + 1}`,
            name: name,
            role: role,
            title: `${titlePrefix} ${role}`,
            company: company,
            office: office,
            department: getRandomElement(DEPARTMENTS),
            permission: "Colleague", // Placeholder, will be assigned below
            startDate: new Date(2020 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
            status: getRandomElement(STATUSES),
            employmentType: getRandomElement(EMPLOYMENT_TYPES),
            reportsTo: reportsTo,
            avatar: `https://i.pravatar.cc/150?u=${i + 1}`,
        });
    }

    // 2. Assign permissions based on Rank (Title) to ensure counts
    // Rank based on TITLES index: Higher index = Higher rank
    // ["Junior", "Mid-level", "Senior", "Lead", "Principal", "Director", "VP", "Head of"]

    // Create a shallow copy to sort without affecting the original ID order (though we shuffle later anyway)
    const sortedByRank = [...employees].sort((a, b) => {
        const getRank = (title: string) => {
            const prefix = title.split(' ')[0]; // Assumes "Prefix Role" format
            let rank = TITLES.indexOf(prefix);
            if (title.includes("Head of")) rank = TITLES.indexOf("Head of"); // Handle "Head of" specifically
            return rank;
        };
        return getRank(b.title) - getRank(a.title); // Descending rank
    });

    // Assign Top 10 as Admin
    for (let i = 0; i < 10; i++) {
        if (sortedByRank[i]) sortedByRank[i].permission = "Admin";
    }

    // Assign Next 28 as Manager
    for (let i = 10; i < 38; i++) { // 10 + 28 = 38
        if (sortedByRank[i]) sortedByRank[i].permission = "Manager";
    }

    // Remaining (38 to 150) stay "Colleague" (112 total)

    // 3. Shuffle the employees array using Fisher-Yates algorithm
    for (let i = employees.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [employees[i], employees[j]] = [employees[j], employees[i]];
    }

    return employees;
}

export const EMPLOYEES: Employee[] = generateEmployees(150);
