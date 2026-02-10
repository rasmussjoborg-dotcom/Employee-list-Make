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

export const NAMES = [
    "Nora Halvorsen", "Clara Jensen", "James Whitmore", "Sophie Andersson", "Elin Strandberg",
    "Erik Lundgren", "Liam Smith", "Olivia Johnson", "Noah Williams", "Emma Brown",
    "Oliver Jones", "Ava Garcia", "Elijah Miller", "Charlotte Davis", "William Rodriguez",
    "Sophia Martinez", "James Hernandez", "Amelia Lopez", "Benjamin Gonzalez", "Mia Wilson",
    "Lucas Anderson", "Harper Thomas", "Henry Taylor", "Evelyn Moore", "Alexander Jackson",
    "Abigail Martin", "Michael Lee", "Emily Perez", "Daniel Thompson", "Elizabeth White",
    "Matthew Harris", "Sofia Sanchez", "Jackson Clark", "Avery Ramirez", "Sebastian Lewis",
    "Ella Robinson", "David Walker", "Madison Young", "Carter Allen", "Scarlett King",
    "Wyatt Wright", "Victoria Scott", "Jayden Torres", "Luna Nguyen", "John Hill",
    "Grace Flores", "Owen Green", "Chloe Adams", "Dylan Nelson", "Penelope Baker",
    "Luke Hall", "Layla Rivera", "Gabriel Campbell", "Riley Mitchell", "Anthony Carter",
    "Zoey Roberts", "Isaac Gomez", "Nora Phillips", "Grayson Evans", "Lily Turner",
    "Jack Diaz", "Eleanor Parker", "Julian Cruz", "Hannah Edwards", "Levi Collins",
    "Lillian Reyes", "Christopher Stewart", "Addison Morris", "Joshua Morales", "Aubrey Murphy",
    "Andrew Cook", "Stella Rogers", "Lincoln Gutierrez", "Natalie Ortiz", "Mateo Morgan",
    "Zoe Cooper", "Ryan Peterson", "Leah Bailey", "Jaxon Reed", "Hazel Kelly",
    "Nathan Howard", "Violet Ramos", "Aaron Cox", "Aurora Ward", "Isaiah Richardson",
    "Savannah Watson", "Thomas Brooks", "Audrey Chavez", "Charles Wood", "Brooklyn Bennett",
    "Caleb Gray", "Bella Mendoza", "Josiah Ruiz", "Claire Hughes", "Christian Price",
    "Skylar Alvarez", "Hunter Castillo", "Lucy Sanders", "Eli Patel", "Paisley Myers",
    "Jonathan Long", "Everly Ross", "Connor Foster", "Anna Jimenez", "Santiago Powell"
];

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

function generateEmployees(count: number): Employee[] {
    const employees: Employee[] = [];

    // 1. Generate basic employee data
    for (let i = 0; i < count; i++) {
        const name = NAMES[i % NAMES.length] + (i >= NAMES.length ? ` ${Math.ceil(i / NAMES.length) + 1}` : "");
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
