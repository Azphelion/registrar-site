// User data with realistic credentials and access permissions
const users = [
    {
        username: "arbiter_valerius",
        password: "SentinelPrime#817",
        fullName: "Valerius Corvin",
        affiliation: "Concord Arbiters",
        access: ["concord-directory", "sentinel-bulletin", "scholasticae-public", "anchor-status"]
    },
    {
        username: "magog_thanatos",
        password: "NecroticWeave42",
        fullName: "Magog of House Thanatos",
        affiliation: "Resurgent Houses",
        access: ["house-thanatos", "umbral-archive", "resonance-blackmarket", "scholasticae-public"]
    },
    {
        username: "ktharr_7gamma",
        password: "HiveMind_Silicon",
        fullName: "K'tharr Drone Unit 7-Gamma",
        affiliation: "K'tharr Hegemony",
        access: ["hegemony-frequency", "scholasticae-public", "xenobiology-index"]
    },
    {
        username: "scholar_eliza",
        password: "KnowledgeSeeker122",
        fullName: "Eliza Vance",
        affiliation: "Scholasticae",
        access: ["scholasticae-archive", "primal-studies", "vibrational-theory", "concord-public"]
    },
    {
        username: "echoed_malachi",
        password: "GoldenConformity01",
        fullName: "Malachi",
        affiliation: "Deiarch's Will",
        access: ["deiarch-mandates", "reality-compliance", "primal-engine", "anchor-status"]
    }
];

// Regsite data with URLs, keywords, and access requirements
const regsites = [
    {
        id: "concord-directory",
        name: "Concord Directory",
        url: "reg://concord-directory.con",
        realUrl: "/regsites/concord-directory/",
        keywords: ["concord", "government", "laws", "directory", "bureaucracy"],
        access: ["arbiter_valerius", "scholar_eliza"]
    },
    {
        id: "sentinel-bulletin",
        name: "Sentinel Fleet Bulletin",
        url: "reg://sentinel-bulletin.con",
        realUrl: "/regsites/sentinel-bulletin/",
        keywords: ["fleet", "military", "bulletin", "concord", "security"],
        access: ["arbiter_valerius"]
    },
    {
        id: "house-thanatos",
        name: "House Thanatos Archives",
        url: "reg://house-thanatos.arc",
        realUrl: "/regsites/house-thanatos/",
        keywords: ["thanatos", "necromancy", "house", "resurgent", "magic"],
        access: ["magog_thanatos"]
    },
    {
        id: "umbral-archive",
        name: "Umbral Archive",
        url: "reg://umbral-archive.arc",
        realUrl: "/regsites/umbral-archive/",
        keywords: ["umbral", "archive", "restricted", "occult", "forbidden"],
        access: ["magog_thanatos", "scholar_eliza"]
    },
    {
        id: "hegemony-frequency",
        name: "Hegemony Frequency",
        url: "reg://hegemony-frequency.con",
        realUrl: "/regsites/hegemony-frequency/",
        keywords: ["k'tharr", "hegemony", "silicon", "hive", "darwinian"],
        access: ["ktharr_7gamma"]
    },
    {
        id: "scholasticae-archive",
        name: "Scholasticae Archive",
        url: "reg://scholasticae-archive.schol",
        realUrl: "/regsites/scholasticae-archive/",
        keywords: ["scholasticae", "archive", "research", "knowledge", "academic"],
        access: ["scholar_eliza"]
    },
    {
        id: "primal-studies",
        name: "Primal Studies",
        url: "reg://primal-studies.schol",
        realUrl: "/regsites/primal-studies/",
        keywords: ["primal", "studies", "ancient", "origins", "mystery"],
        access: ["scholar_eliza", "echoed_malachi"]
    },
    {
        id: "deiarch-mandates",
        name: "Deiarch Mandates",
        url: "reg://deiarch-mandates.arc",
        realUrl: "/regsites/deiarch-mandates/",
        keywords: ["deiarch", "mandates", "will", "compliance", "singularization"],
        access: ["echoed_malachi"]
    },
    {
        id: "reality-compliance",
        name: "Reality Compliance Database",
        url: "reg://reality-compliance.arc",
        realUrl: "/regsites/reality-compliance/",
        keywords: ["reality", "compliance", "fields", "technology", "deiarch"],
        access: ["echoed_malachi"]
    },
    {
        id: "anchor-status",
        name: "Anchor Status Network",
        url: "reg://anchor-status.con",
        realUrl: "/regsites/anchor-status/",
        keywords: ["anchor", "status", "cd122", "resonance", "monitoring"],
        access: ["arbiter_valerius", "echoed_malachi"]
    },
    {
        id: "scholasticae-public",
        name: "Scholasticae Public Access",
        url: "reg://scholasticae-public.schol",
        realUrl: "/regsites/scholasticae-public/",
        keywords: ["scholasticae", "public", "library", "information", "knowledge"],
        access: [] // Empty array means public access
    },
    {
        id: "concord-public",
        name: "Concord Public Information",
        url: "reg://concord-public.con",
        realUrl: "/regsites/concord-public/",
        keywords: ["concord", "public", "information", "services", "government"],
        access: [] // Public access
    }
];
