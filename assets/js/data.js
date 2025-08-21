// User database with realistic passwords and individualized access
const userDatabase = {
    "GUEST": { 
        name: "Guest", 
        password: null 
    },
    "RESEARCH-772": { 
        name: "Dr. Aris Thorne", 
        password: "quantumFlux7!",
        access: [1, 2] // cadmia-archive, scholasticae
    },
    "ARBITER-553": { 
        name: "Commander Valerius", 
        password: "sentinelGuard_42",
        access: [1, 3, 4] // cadmia-archive, concord-directory, ktharr-network
    },
    "SCHOLAR-009": { 
        name: "Lira Vex", 
        password: "primalTheorist@9",
        access: [1, 2, 5] // cadmia-archive, scholasticae, deiarch-core
    },
    "TECH-330": { 
        name: "Jax Corbin", 
        password: "cd122_technician",
        access: [1, 3] // cadmia-archive, concord-directory
    },
    "OBSERVER-101": { 
        name: "Kaelen Rourke", 
        password: "multiverseWatcher101",
        access: [1, 2, 3] // cadmia-archive, scholasticae, concord-directory
    },
    "ADMIN-001": { 
        name: "System Administrator", 
        password: "rootAccess#777",
        isSuperUser: true // Access to everything
    }
};

// Regsite database
const regsiteDatabase = [
    {
        id: 1,
        title: "Cadmia Archives",
        description: "The central repository of knowledge about The Loom, its vibrational states, and the factions navigating the multiverse.",
        url: "reg://cadmia-archive.arc",
        physicalPath: "regsites/cadmia-archive",
        keywords: ["cadmia", "archive", "knowledge", "multiverse", "loom", "scholasticae"],
        private: false,
        allowedUsers: []
    },
    {
        id: 2,
        title: "Scholasticae Library",
        description: "The official knowledge repository maintained by the Scholasticae, containing research on The Loom and vibrational theory.",
        url: "reg://scholasticae.schol",
        physicalPath: "regsites/scholasticae",
        keywords: ["scholasticae", "library", "research", "knowledge", "vibrational theory"],
        private: false,
        allowedUsers: []
    },
    {
        id: 3,
        title: "Concord Directory",
        description: "Official directory of the Stellar Concord, containing regulations, member systems, and public announcements.",
        url: "reg://concord-directory.con",
        physicalPath: "regsites/concord-directory",
        keywords: ["concord", "directory", "regulations", "stellar", "government"],
        private: false,
        allowedUsers: []
    },
    {
        id: 4,
        title: "K'tharr Network",
        description: "Secure communication network for the K'tharr Hegemony. Access restricted to authorized personnel only.",
        url: "reg://ktharr-network.kth",
        physicalPath: "regsites/ktharr-network",
        keywords: ["k'tharr", "hegemony", "network", "secure", "silicon-based"],
        private: true,
        allowedUsers: ["ARBITER-553", "ADMIN-001"]
    },
    {
        id: 5,
        title: "Deiarch Core",
        description: "Primary access point to the Deiarch's consciousness. Extreme clearance required.",
        url: "reg://deiarch-core.dai",
        physicalPath: "regsites/deiarch-core",
        keywords: ["deiarch", "core", "consciousness", "quantum computer", "primal engine"],
        private: true,
        allowedUsers: ["SCHOLAR-009", "ADMIN-001"]
    }
];
