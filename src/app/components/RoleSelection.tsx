import { motion, AnimatePresence } from "motion/react";
import { UserCircle, Shield, Users, User, Trash2, X } from "lucide-react";
import { clearSearchHistory } from "../utils/searchHistory";
import { useState } from "react";

export type UserRole = "Owner" | "Admin" | "Manager" | "Colleague";

interface RoleSelectionProps {
    onSelectRole: (role: UserRole) => void;
}

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleClearData = () => {
        setShowPasswordModal(true);
        setPassword("");
        setErrorMessage("");
    };

    const handleSubmitPassword = () => {
        if (password !== "reset") {
            setErrorMessage("Incorrect password");
            return;
        }

        // Password is correct, clear the data immediately
        clearSearchHistory();
        setShowPasswordModal(false);
        setPassword("");
        setErrorMessage("");
        alert("Search history cleared successfully!");
    };

    const roles: { name: UserRole; icon: typeof UserCircle; color: string; description: string }[] = [
        {
            name: "Owner",
            icon: Shield,
            color: "from-purple-500 to-purple-600",
            description: "Full system access and control"
        },
        {
            name: "Admin",
            icon: UserCircle,
            color: "from-blue-500 to-blue-600",
            description: "Administrative privileges"
        },
        {
            name: "Manager",
            icon: Users,
            color: "from-green-500 to-green-600",
            description: "Team management access"
        },
        {
            name: "Colleague",
            icon: User,
            color: "from-amber-500 to-amber-600",
            description: "Standard employee access"
        }
    ];

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Select Your Role
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Choose your role to access the employee management system
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {roles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <motion.button
                                key={role.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onSelectRole(role.name)}
                                className="relative group p-8 rounded-2xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className={`mb-4 p-4 rounded-full bg-gradient-to-br ${role.color} shadow-lg`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h2 className="text-2xl font-bold text-foreground mb-2">
                                        {role.name}
                                    </h2>

                                    <p className="text-sm text-muted-foreground">
                                        {role.description}
                                    </p>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            </motion.button>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-8 text-sm text-muted-foreground"
                >
                    Your role selection helps us track search analytics and usage patterns
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-center mt-6"
                >
                    <button
                        onClick={handleClearData}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-destructive border border-border hover:border-destructive/20 rounded-lg hover:bg-destructive/5 transition-colors cursor-pointer"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                        Clear data
                    </button>
                </motion.div>

                {/* Password Modal */}
                <AnimatePresence>
                    {showPasswordModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                            onClick={() => {
                                setShowPasswordModal(false);
                                setPassword("");
                                setErrorMessage("");
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-foreground">Enter Password</h2>
                                    <button
                                        onClick={() => {
                                            setShowPasswordModal(false);
                                            setPassword("");
                                            setErrorMessage("");
                                        }}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    Enter the password to clear all search history data.
                                </p>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrorMessage("");
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSubmitPassword();
                                        }
                                        if (e.key === 'Escape') {
                                            setShowPasswordModal(false);
                                            setPassword("");
                                            setErrorMessage("");
                                        }
                                    }}
                                    placeholder="Password"
                                    autoFocus
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                                />

                                {errorMessage && (
                                    <p className="text-sm text-destructive mb-4">{errorMessage}</p>
                                )}

                                <div className="flex gap-3 justify-end">
                                    <button
                                        onClick={() => {
                                            setShowPasswordModal(false);
                                            setPassword("");
                                            setErrorMessage("");
                                        }}
                                        className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSubmitPassword}
                                        className="px-4 py-2 text-sm bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
                                    >
                                        Clear Data
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
