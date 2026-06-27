/* === study-data.js === */
// CompTIA Security+ SY0-701 study content
// Sourced from Pete Zerger Exam Cram PDFs (1:5 through 5:5)

window.SECPLUS_PDFS = [
  { id: 1, file: "1-general-security-concepts.pdf", title: "Domain 1 — General Security Concepts", domain: 1, pages: 134 },
  { id: 2, file: "2-threats-vulnerabilities.pdf", title: "Domain 2 — Threats, Vulnerabilities & Mitigations", domain: 2, pages: 185 },
  { id: 3, file: "3-security-architecture.pdf", title: "Domain 3 — Security Architecture & Design", domain: 3, pages: 158 },
  { id: 4, file: "4-security-operations.pdf", title: "Domain 4 — Security Operations / Implementation", domain: 4, pages: 275 },
  { id: 5, file: "5-governance-risk-compliance.pdf", title: "Domain 5 — Governance, Risk & Compliance", domain: 6, pages: 126 }
];

window.SECPLUS_STUDY_GUIDE = {
  1: {
    summary: "Security control categories & types, CIA/AAA, Zero Trust, change management, and cryptographic fundamentals.",
    sections: [
      { title: "Control Categories", items: ["Technical (HW/SW: encryption, firewalls, ACLs, biometrics)", "Managerial (policies, risk assessments, hiring practices)", "Operational (awareness training, config mgmt, media protection)", "Physical (guards, fences, cameras, locks)"] },
      { title: "Control Types", items: ["Preventive — stop unauthorized activity", "Deterrent — discourage policy violations", "Detective — discover violations/events", "Corrective — fix after incident", "Compensating — alternate when primary fails", "Directive — policies, procedures, signage"] },
      { title: "Core Concepts", items: ["CIA Triad", "AAA (AuthN / AuthZ / Accounting)", "Zero Trust — Control Plane vs Data Plane", "Deception tech: honeypot, honeynet, honeyfile, honeytoken", "Safeguards = proactive; Countermeasures = reactive"] }
    ],
    tips: "Controls often fit multiple types by context (camera = deterrent + detective). Match exam keywords: 'monitoring'→Detective, 'policy'→Directive, 'backup/restore'→Corrective.",
    acronyms: ["CIA", "AAA", "PEP", "MFA", "HSM", "TPM", "AES", "RSA"]
  },
  2: {
    summary: "Threat actors, motivations, threat vectors, attack surfaces, vulnerabilities, malware indicators, and mitigations.",
    sections: [
      { title: "Threat Actors", items: ["Nation-state", "Organized crime", "Hacktivist", "Insider threat", "Unskilled attacker", "Shadow IT (risk)"] },
      { title: "Motivations", items: ["Financial gain", "Espionage / data exfiltration", "Service disruption", "Blackmail", "Revenge", "Ideology", "War / cyberwarfare"] },
      { title: "Vectors & Attacks", items: ["Phishing (#1 attack), vishing, smishing, BEC", "Supply chain / MSP compromise", "SQL injection, XSS, directory traversal", "DDoS (amplified/reflected), DNS attacks", "Malware: ransomware, trojan, worm, rootkit, logic bomb", "Indicators: impossible travel, account lockout, missing logs"] }
    ],
    tips: "Castle analogy: threat vector = specific breach path; attack surface = all entry points. Nation-state + high funding = highest sophistication threat.",
    acronyms: ["BEC", "APT", "DDoS", "XSS", "SQLi", "MITM", "RFID"]
  },
  3: {
    summary: "Architecture models: cloud, on-prem, hybrid, segmentation, virtualization, containers, ICS/SCADA, resilience.",
    sections: [
      { title: "Cloud & Shared Responsibility", items: ["IaaS — customer owns guest OS+", "PaaS — customer owns app/data", "SaaS — customer owns data/access config", "Hybrid & multi-cloud considerations", "Third-party vendor risk"] },
      { title: "Infrastructure", items: ["Air-gapped physical isolation", "VLANs, VPNs, subnets, VRF", "SDN — control plane separated from data plane", "IaC — declarative, idempotent, CI/CD", "Serverless, microservices, containerization (Docker/K8s)"] },
      { title: "Special Environments", items: ["IoT / embedded / RTOS", "ICS/SCADA — segmentation critical", "SASE (Secure Access Service Edge)", "802.1X port-based NAC", "Data classification: public, private, confidential, restricted"] }
    ],
    tips: "Containers share the host kernel — lighter but weaker isolation than VMs. SDN MITM/DoS risks — secure with TLS. Air gaps common in finance, medical, military, ICS.",
    acronyms: ["IaaS", "PaaS", "SaaS", "IaC", "SDN", "SD-WAN", "SASE", "SCADA", "ICS"]
  },
  4: {
    summary: "Secure baselines, hardening, mobile/MDM, wireless, application security, asset management, monitoring.",
    sections: [
      { title: "Baselines & Hardening", items: ["Benchmark → Baseline → Control hierarchy", "CIS benchmarks & vendor guides (IIS, Apache, Cisco)", "Establish → Deploy → Maintain lifecycle", "Patch management = update management", "Harden: disable services, ACLs, FDE (BitLocker/dm-crypt)"] },
      { title: "Mobile & Wireless", items: ["MDM: remote wipe, geofencing, app allow lists", "BYOD / COPE / CYOD deployment models", "UEM manages desktops + mobile + IoT", "WPA3 + RADIUS/AAA", "Site surveys & heat maps for AP placement", "Rooting/jailbreaking removes vendor restrictions"] },
      { title: "Operations", items: ["Asset lifecycle: acquire → assign → monitor → dispose", "CVE/CVSS vulnerability scoring", "SIEM correlation, SNMP, NetFlow", "Sandboxing, input validation, code signing", "Secure cookies, static code analysis"] }
    ],
    tips: "Geofencing alerts when devices leave defined boundaries. Heat maps: green/blue = strong signal, red = dead zones. Benchmark is the recipe; baseline is the implementation.",
    acronyms: ["MDM", "UEM", "MAM", "BYOD", "COPE", "WPA3", "RADIUS", "CVE", "CVSS", "SNMP"]
  },
  5: {
    summary: "Incident response lifecycle, detection, forensics, backups, disaster recovery, and security operations.",
    sections: [
      { title: "Incident Response", items: ["NIST IR: Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned", "SOAR playbooks automate response", "Chain of custody for evidence", "Order of volatility: RAM first, disk later", "Write blockers preserve evidence integrity"] },
      { title: "Detection & Recovery", items: ["SIEM log aggregation & correlation", "3-2-1 backup rule", "RTO / RPO / MTTR / MTBF", "Tabletop exercises", "Jump server / bastion host for audited access"] }
    ],
    tips: "Memorize IR steps in order. Collect most volatile evidence first (registers → cache → RAM → disk).",
    acronyms: ["IR", "SIEM", "SOAR", "RTO", "RPO", "MTTR", "MTBF"]
  },
  6: {
    summary: "Governance hierarchy, risk management, third-party risk, compliance, audits, and security awareness.",
    sections: [
      { title: "Governance Hierarchy", items: ["Policy = WHY (high-level direction)", "Standard = WHAT/WHEN (mandatory technical specs)", "Procedure = HOW (step-by-step)", "Guideline = COULD (recommended, not mandatory)", "AUP, BCP, DRP, IR, SDLC policies"] },
      { title: "Risk Management", items: ["SLE × ARO = ALE", "Qualitative vs quantitative analysis", "Risk strategies: Transfer, Accept, Avoid, Mitigate", "Risk appetite vs tolerance", "BIA drives RTO/RPO", "Risk register with owners & KRIs"] },
      { title: "Roles & Compliance", items: ["Data owner, controller, processor, custodian/steward", "GDPR, HIPAA, PCI-DSS, SOX, FedRAMP", "Penetration test vs vulnerability assessment", "Security awareness: phishing simulations, training"] }
    ],
    tips: "Policy→Standard→Procedure chain: recipe→ingredients→cooking steps. FIPS 140-2/3 for federal crypto modules.",
    acronyms: ["ALE", "SLE", "ARO", "BIA", "AUP", "GDPR", "PCI-DSS", "HIPAA", "KRI"]
  }
};

window.SECPLUS_MINDMAP_CONCEPTS = {
  "CIA Triad": { domain: 1, desc: "Confidentiality, Integrity, Availability — foundational security goals protecting data and systems." },
  "Zero Trust": { domain: 1, desc: "Never trust, always verify. Control Plane (policy engine) + Data Plane (enforcement points)." },
  "Threat Actors": { domain: 2, desc: "Nation-state, organized crime, hacktivists, insiders, script kiddies — each with distinct motivations and capabilities." },
  "Social Engineering": { domain: 2, desc: "Phishing, vishing, smishing, pretexting, tailgating — manipulating people to bypass technical controls." },
  "Malware": { domain: 2, desc: "Ransomware, trojans, worms, rootkits, logic bombs — watch for indicators like resource spikes and missing logs." },
  "Cloud Models": { domain: 3, desc: "IaaS/PaaS/SaaS with shared responsibility matrix defining CSP vs customer duties." },
  "Segmentation": { domain: 3, desc: "VLANs, DMZ, micro-segmentation, air gaps — limit lateral movement." },
  "IaC / SDN": { domain: 3, desc: "Infrastructure as Code + Software-Defined Networking enable automated, repeatable secure deployments." },
  "Hardening": { domain: 4, desc: "Reduce attack surface via baselines, patching, disabling services, encryption, and least privilege." },
  "MDM / Mobile": { domain: 4, desc: "BYOD/COPE/CYOD models with remote wipe, geofencing, and app management." },
  "Wireless": { domain: 4, desc: "WPA3, RADIUS, site surveys, heat maps — secure Wi-Fi deployment and monitoring." },
  "Incident Response": { domain: 5, desc: "NIST lifecycle from preparation through lessons learned with SIEM/SOAR support." },
  "Governance": { domain: 6, desc: "Policy → Standard → Procedure → Guideline hierarchy drives organizational security." },
  "Risk Management": { domain: 6, desc: "Identify, assess, analyze (ALE/SLE/ARO), treat, and monitor risk continuously." }
};

window.SECPLUS_QUIZ_BANK = [
  { q: "Which control type includes security awareness training delivered by staff?", opts: ["Technical", "Operational", "Physical", "Compensating"], correct: 1, domain: 1 },
  { q: "A visible security camera primarily serves as which control type(s)?", opts: ["Preventive only", "Deterrent and Detective", "Corrective", "Directive"], correct: 1, domain: 1 },
  { q: "In Zero Trust, the Policy Enforcement Point belongs to which plane?", opts: ["Control Plane", "Data Plane", "Management Plane", "Application Plane"], correct: 1, domain: 1 },
  { q: "Which threat actor is MOST likely motivated by political ideology?", opts: ["Organized crime", "Nation-state", "Hacktivist", "Shadow IT"], correct: 2, domain: 2 },
  { q: "Impossible travel between login locations is an indicator of:", opts: ["Patch failure", "Account compromise", "DDoS attack", "SQL injection"], correct: 1, domain: 2 },
  { q: "Which attack hides malware inside image files?", opts: ["Typosquatting", "Steganography", "Pass-the-hash", "Credential stuffing"], correct: 1, domain: 2 },
  { q: "In IaaS, who is primarily responsible for guest OS patching?", opts: ["Cloud provider", "Customer", "Third-party auditor", "Shared equally"], correct: 1, domain: 3 },
  { q: "An air-gapped network is an example of:", opts: ["Logical segmentation", "Physical isolation", "SDN", "Microservices"], correct: 1, domain: 3 },
  { q: "Containers differ from VMs because containers:", opts: ["Include a full guest OS", "Share the host kernel", "Cannot be orchestrated", "Require Type 2 hypervisors"], correct: 1, domain: 3 },
  { q: "A CIS benchmark document is best described as:", opts: ["A mandatory law", "Recommended secure configuration guidance", "An incident playbook", "A digital certificate"], correct: 1, domain: 4 },
  { q: "Geofencing in MDM is used to:", opts: ["Encrypt all device storage", "Alert when devices leave defined boundaries", "Block all third-party apps", "Enable WPA3"], correct: 1, domain: 4 },
  { q: "Rooting and jailbreaking primarily:", opts: ["Enable vendor security updates", "Remove vendor restrictions to run unauthorized software", "Encrypt SMS messages", "Configure RADIUS"], correct: 1, domain: 4 },
  { q: "Which Wi-Fi protocol uses SAE and provides forward secrecy?", opts: ["WEP", "WPA2-PSK", "WPA3", "WPA-Enterprise only"], correct: 2, domain: 4 },
  { q: "During forensics, which should be collected FIRST?", opts: ["Hard drive image", "RAM contents", "Firewall archived logs", "Backup tapes"], correct: 1, domain: 5 },
  { q: "The 3-2-1 backup rule means:", opts: ["3 passwords, 2 firewalls, 1 SIEM", "3 copies, 2 media types, 1 offsite", "3 VLANs, 2 DMZs, 1 WAF", "3 audits, 2 scans, 1 patch"], correct: 1, domain: 5 },
  { q: "A Security Policy primarily answers which question?", opts: ["How do we implement?", "Why do we protect assets?", "What exact cipher?", "Who patches servers?"], correct: 1, domain: 6 },
  { q: "ALE is calculated as:", opts: ["SLE + ARO", "SLE × ARO", "SLE ÷ ARO", "ARO − SLE"], correct: 1, domain: 6 },
  { q: "Risk appetite differs from risk tolerance because appetite is:", opts: ["Per-incident only", "Organization's overall willingness to accept risk", "Always zero for government", "Same as residual risk"], correct: 1, domain: 6 },
  { q: "A data custodian/steward is responsible for:", opts: ["Setting risk appetite", "Day-to-day protection and proper data handling", "Issuing digital certificates", "Penetration testing"], correct: 1, domain: 6 },
  { q: "SDN separates which two planes?", opts: ["Application and Transport", "Control and Data", "Session and Network", "Physical and Virtual"], correct: 1, domain: 3 }
];

window.SECPLUS_FLASHCARDS = [
  // ── DOMAIN 1: General Security Concepts (PDF 1) ──
  { domain: 1, q: "What are the three components of the CIA triad?", a: "Confidentiality — only authorized access.\nIntegrity — data is accurate and unaltered.\nAvailability — systems and data are accessible when needed." },
  { domain: 1, q: "What are the four categories of security controls?", a: "Technical (HW/SW), Managerial (policies, risk assessments), Operational (awareness, config mgmt by people), Physical (guards, fences, cameras)." },
  { domain: 1, q: "List the six control types (functions).", a: "Preventive, Deterrent, Detective, Corrective, Compensating, Directive." },
  { domain: 1, q: "Give examples of Preventive controls.", a: "Locks, firewalls, encryption, ACLs, biometrics, MFA, job rotation, mandatory vacations." },
  { domain: 1, q: "Give examples of Detective controls.", a: "Security cameras, motion detectors, audit trails, IDS/IPS, honeypots, logs, incident investigations." },
  { domain: 1, q: "Give examples of Deterrent controls.", a: "Fences, lighting, alarms, security badges, awareness training, penetration testing, visible cameras, signage." },
  { domain: 1, q: "What is the difference between safeguards and countermeasures?", a: "Safeguards are proactive (reduce likelihood). Countermeasures are reactive (reduce impact after occurrence)." },
  { domain: 1, q: "Explain Zero Trust architecture.", a: "Never trust, always verify. Assume breach. Verify every access request. Least privilege. Micro-segmentation. Continuous validation." },
  { domain: 1, q: "What is Zero Trust's Control Plane vs Data Plane?", a: "Control Plane: Policy Engine, Policy Administrator, adaptive identity.\nData Plane: Policy Enforcement Point (PEP), subject/system, trust zones." },
  { domain: 1, q: "What are the four main deception technologies?", a: "Honeypot (decoy system), Honeynet (decoy network), Honeyfile (fake file), Honeytoken (fake credential to detect use)." },
  { domain: 1, q: "What does Least Privilege mean?", a: "Users and systems receive minimum permissions required for their job. Reduces blast radius of compromise." },
  { domain: 1, q: "What is the principle of defense in depth?", a: "Multiple layers of security controls so if one fails, others still protect." },
  { domain: 1, q: "What is privileged access management (PAM)?", a: "Controls for privileged accounts: just-in-time access, session recording, password vaulting, credential rotation." },
  { domain: 1, q: "Define non-repudiation.", a: "Assurance someone cannot deny performing an action. Achieved with digital signatures and logging." },
  { domain: 1, q: "What are the main authentication factors?", a: "Something you know, have, are, somewhere you are, something you do." },
  { domain: 1, q: "What is federation / federated identity?", a: "Trust between IdPs allowing authentication at one org to access resources at another (SAML, OIDC)." },
  { domain: 1, q: "What is the difference between SSO and MFA?", a: "SSO = one login for many systems. MFA = multiple proof factors during authentication." },
  { domain: 1, q: "What is the difference between identification and authentication?", a: "Identification = claiming identity (username). Authentication = proving identity (password + MFA)." },

  // ── DOMAIN 2: Threats & Vulnerabilities (PDF 2) ──
  { domain: 2, q: "List the main threat actors per the exam cram.", a: "Nation-state, Unskilled attacker, Hacktivist, Insider threat, Organized crime, Shadow IT." },
  { domain: 2, q: "What is a Nation-state threat actor?", a: "Government-backed attackers with high sophistication and resources targeting other nations for espionage or disruption." },
  { domain: 2, q: "What is Shadow IT?", a: "Employees using unauthorized/unmanaged IT resources, creating vulnerabilities outside IT control." },
  { domain: 2, q: "Name key motivations of threat actors.", a: "Data exfiltration, Espionage, Service disruption, Blackmail, Financial gain, Ideology, Revenge, War." },
  { domain: 2, q: "Threat vector vs Attack surface?", a: "Vector = specific attack path (scaling one wall). Attack surface = all possible entry points (entire castle)." },
  { domain: 2, q: "Name three social engineering attacks.", a: "Phishing, vishing, smishing, spear phishing, whaling, tailgating, pretexting, impersonation, BEC." },
  { domain: 2, q: "What is steganography?", a: "Hiding malware or data inside files (e.g. images) so it isn't obvious during transfer." },
  { domain: 2, q: "What is a watering hole attack?", a: "Compromising websites frequented by a target group to infect visitors." },
  { domain: 2, q: "What is a supply chain attack?", a: "Compromising a vendor or software provider to target their customers (SolarWinds, XZ Utils)." },
  { domain: 2, q: "Explain SQL Injection.", a: "Malicious SQL in input fields causing the app to execute attacker-controlled database queries." },
  { domain: 2, q: "What is Cross-Site Scripting (XSS)?", a: "Injecting malicious scripts into web pages viewed by other users, stealing sessions or defacing sites." },
  { domain: 2, q: "What is pass-the-hash?", a: "Using a captured password hash (not plaintext) to authenticate to remote services." },
  { domain: 2, q: "What is a polymorphic virus?", a: "Malware that mutates its code each infection while keeping functionality, evading signatures." },
  { domain: 2, q: "What is a rootkit?", a: "Malware hiding its presence to maintain privileged access — kernel, boot sector, firmware, or userland." },
  { domain: 2, q: "List malware types from Domain 2.4.", a: "Ransomware, Trojan, Worm, Spyware, Virus, Keylogger, Logic bomb, Rootkit, Bloatware." },
  { domain: 2, q: "What are indicators of malicious activity?", a: "Account lockout, concurrent sessions, blocked content attempts, impossible travel, resource spikes, missing logs, out-of-cycle logging." },
  { domain: 2, q: "What is impossible travel?", a: "Logins from geographically distant locations in too short a time — suggests credential compromise." },
  { domain: 2, q: "DDoS attack types: amplified vs reflected?", a: "Amplified: small request generates large response to victim. Reflected: traffic bounced off third-party systems toward target." },
  { domain: 2, q: "What is the primary goal of a DDoS attack?", a: "Make services unavailable by overwhelming bandwidth, CPU, or connections." },
  { domain: 2, q: "What is a zero-day exploit?", a: "Attack using a vulnerability unknown to the vendor — no patch available yet." },

  // ── DOMAIN 3: Architecture & Design (PDF 3) ──
  { domain: 3, q: "What is the Shared Responsibility Model?", a: "Defines security duties between CSP and customer. More control in IaaS; less in SaaS." },
  { domain: 3, q: "Compare IaaS, PaaS, and SaaS.", a: "IaaS: VMs/network (EC2, Azure VMs). PaaS: runtime/middleware included. SaaS: full app (M365, Salesforce)." },
  { domain: 3, q: "Who patches the guest OS in IaaS?", a: "The customer — CSP handles physical host, storage, and network below virtualization." },
  { domain: 3, q: "Explain air-gapping.", a: "Physical isolation from unsecured networks. Used in finance, medical, military, ICS/SCADA." },
  { domain: 3, q: "What is logical segmentation?", a: "VLANs, VPNs, subnets, VRF — dividing networks without extra physical hardware." },
  { domain: 3, q: "What is SDN?", a: "Software-Defined Networking — centrally programmed network separating control plane from data plane. Risks: MITM, DoS; secure with TLS." },
  { domain: 3, q: "SDN northbound vs southbound interfaces?", a: "Northbound: trusted apps to controller. Southbound (OpenFlow): controller to network devices." },
  { domain: 3, q: "What is Infrastructure as Code (IaC)?", a: "Managing infrastructure via code/templates. Declarative, idempotent, version-controlled, reduces config drift." },
  { domain: 3, q: "Containers vs VMs security tradeoff?", a: "VMs: full guest OS, strong isolation, heavier. Containers: share kernel, lightweight, weaker isolation (namespace escapes)." },
  { domain: 3, q: "What is container orchestration?", a: "Automating container deploy/scale/network — Kubernetes, Docker Swarm." },
  { domain: 3, q: "What is serverless computing?", a: "CSP manages server allocation; functions run on-demand (Lambda, Azure Functions)." },
  { domain: 3, q: "Centralized vs decentralized infrastructure?", a: "Centralized: fewer DCs, lower cost but bigger outage impact. Decentralized: spread risk, more complexity." },
  { domain: 3, q: "ICS/SCADA security priorities?", a: "Segmentation/isolation, physical security, change management, password mgmt, monitoring. Often inability to patch." },
  { domain: 3, q: "What is SASE?", a: "Secure Access Service Edge — converged WAN + network security (SWG, CASB, ZTNA, FWaaS) delivered as cloud service." },
  { domain: 3, q: "What is 802.1X?", a: "IEEE port-based network access control — authenticates devices before granting network access." },
  { domain: 3, q: "What is micro-segmentation?", a: "Very small isolated network segments (often SDN overlays) limiting lateral movement." },
  { domain: 3, q: "What is the purpose of a DMZ?", a: "Network segment between internet and internal network for public-facing services with limited internal access." },
  { domain: 3, q: "What is a WAF?", a: "Web Application Firewall at Layer 7 protecting against XSS, SQLi, CSRF via rule sets (OWASP CRS)." },
  { domain: 3, q: "Architecture considerations from PDF 3?", a: "Availability, resilience, cost, scalability, ease of deployment/recovery, patch availability, inability to patch, power, compute." },

  // ── DOMAIN 4: Implementation / Operations (PDF 4) ──
  { domain: 4, q: "Benchmark vs Baseline vs Control?", a: "Benchmark = recommended config guide. Baseline = implementation on a specific system. Control = high-level security activity." },
  { domain: 4, q: "Secure baseline lifecycle?", a: "Establish (threat model, benchmarks, risk assessment) → Deploy (GPO, MDM, IaC) → Maintain (scan, patch, audit, review)." },
  { domain: 4, q: "What is system hardening?", a: "Reducing attack surface: disable unneeded services, patch, ACLs, least privilege, encryption, strong credentials." },
  { domain: 4, q: "Hardening targets from the exam cram?", a: "Mobile, workstations, switches/routers, cloud, servers, ICS/SCADA, embedded/RTOS, IoT." },
  { domain: 4, q: "What is a wireless site survey?", a: "Walking with wireless tools to map signal strength and plan AP placement." },
  { domain: 4, q: "What does a wireless heat map show?", a: "Visual signal strength: green/blue = strong, yellow/red = weak/dead zones. Used for AP placement and troubleshooting." },
  { domain: 4, q: "MDM key features?", a: "Remote wipe, geofencing, geolocation, app allow lists, content encryption, screen locks, push notification policies." },
  { domain: 4, q: "BYOD vs COPE vs CYOD?", a: "BYOD: personal device. COPE: corporate-owned, personal enabled. CYOD: employee picks from approved list." },
  { domain: 4, q: "What is UEM?", a: "Unified Endpoint Management — manages desktops, mobile, IoT; detects jailbreak/root; multi-platform (Intune, AirWatch)." },
  { domain: 4, q: "Rooting vs jailbreaking?", a: "Rooting = Android elevated permissions removing vendor restrictions. Jailbreaking = iOS equivalent allowing unauthorized software." },
  { domain: 4, q: "What is geofencing?", a: "GPS/RFID boundaries — alerts security when device leaves defined area." },
  { domain: 4, q: "What is WPA3?", a: "Wi-Fi security using SAE handshake, forward secrecy, stronger offline dictionary attack protection." },
  { domain: 4, q: "What is the difference between symmetric and asymmetric encryption?", a: "Symmetric: same key (AES, fast). Asymmetric: key pair (RSA/ECC) for key exchange and signatures." },
  { domain: 4, q: "What is a digital certificate?", a: "Binds public key to identity; signed by CA. Contains subject, issuer, validity, serial, extensions." },
  { domain: 4, q: "What is the purpose of a TPM?", a: "Hardware chip for secure key storage, remote attestation, measured boot, disk encryption." },
  { domain: 4, q: "Explain RBAC vs ABAC.", a: "RBAC: permissions via roles. ABAC: dynamic decisions on user/resource/environment attributes." },
  { domain: 4, q: "What is NAC?", a: "Network Access Control — enforces policy before network access; can quarantine non-compliant devices." },
  { domain: 4, q: "What is DLP?", a: "Data Loss Prevention — monitors/blocks unauthorized sensitive data transmission or exfiltration." },
  { domain: 4, q: "What does EDR do?", a: "Endpoint Detection & Response — real-time endpoint monitoring, threat detection, investigation, response." },
  { domain: 4, q: "What is certificate pinning?", a: "Embedding trusted cert/public key in app to prevent rogue CA MITM attacks." },
  { domain: 4, q: "Application security techniques?", a: "Input validation, secure cookies, static code analysis, code signing, sandboxing." },
  { domain: 4, q: "Asset management lifecycle?", a: "Acquisition → Assignment/Accounting → Monitoring/Tracking → Disposal/Decommissioning (secure wipe)." },
  { domain: 4, q: "What is CVE vs CVSS?", a: "CVE = vulnerability identifier. CVSS = severity scoring system for vulnerabilities." },

  // ── DOMAIN 5: Operations & IR ──
  { domain: 5, q: "NIST Incident Response lifecycle steps?", a: "1. Preparation  2. Detection & Analysis  3. Containment  4. Eradication  5. Recovery  6. Lessons Learned" },
  { domain: 5, q: "What is a SIEM?", a: "Aggregates logs, correlates events, alerts, dashboards, long-term retention for threat detection." },
  { domain: 5, q: "What does SOAR do?", a: "Security Orchestration, Automation, Response — automates IR via playbooks across tools." },
  { domain: 5, q: "What is chain of custody?", a: "Documented trail of evidence handling ensuring integrity and legal admissibility." },
  { domain: 5, q: "Order of volatility for evidence?", a: "Most volatile first: CPU registers → cache → RAM → network state → processes → disk → archival media." },
  { domain: 5, q: "What is the 3-2-1 backup rule?", a: "3 copies, 2 different media, 1 offsite/offline/air-gapped." },
  { domain: 5, q: "RTO vs RPO?", a: "RTO = max acceptable downtime. RPO = max acceptable data loss (time)." },
  { domain: 5, q: "What is a write blocker?", a: "Forensic device preventing writes to original evidence media." },
  { domain: 5, q: "What is a tabletop exercise?", a: "Discussion-based incident simulation to test plans and train teams without live execution." },
  { domain: 5, q: "Purpose of jump server / bastion host?", a: "Controlled, audited, hardened single entry point to sensitive internal systems." },
  { domain: 5, q: "What is NetFlow?", a: "Network protocol collecting IP traffic information for monitoring and anomaly detection." },
  { domain: 5, q: "MTTR vs MTBF?", a: "MTTR = mean time to repair. MTBF = mean time between failures." },

  // ── DOMAIN 6: Governance, Risk & Compliance (PDF 5) ──
  { domain: 6, q: "Policy vs Standard vs Procedure vs Guideline?", a: "Policy = WHY. Standard = WHAT/WHEN (mandatory). Procedure = HOW (steps). Guideline = COULD (recommended)." },
  { domain: 6, q: "What is an Acceptable Use Policy (AUP)?", a: "Defines allowed/prohibited uses of organizational IT resources." },
  { domain: 6, q: "What are the four risk management strategies?", a: "Transfer, Accept (exemption/exception), Avoid, Mitigate." },
  { domain: 6, q: "Risk appetite vs risk tolerance?", a: "Appetite = overall risk willing to accept. Tolerance = acceptable variation around that appetite." },
  { domain: 6, q: "Quantitative risk formulas?", a: "SLE × ARO = ALE. Exposure factor × asset value = SLE." },
  { domain: 6, q: "Qualitative vs quantitative risk?", a: "Qualitative: High/Med/Low matrices. Quantitative: dollar values (ALE, SLE, ARO)." },
  { domain: 6, q: "What is a BIA?", a: "Business Impact Analysis — identifies critical functions, impact of disruption, sets RTO/RPO." },
  { domain: 6, q: "What is residual risk?", a: "Risk remaining after all controls and mitigations are applied." },
  { domain: 6, q: "What is a risk register?", a: "Living document tracking risks, likelihood/impact, owners, KRIs, mitigation status." },
  { domain: 6, q: "Data roles: owner vs custodian?", a: "Owner: accountable for data classification and access decisions. Custodian/steward: day-to-day protection and proper handling." },
  { domain: 6, q: "Risk assessment types?", a: "Ad hoc (event-driven), Recurring (scheduled), One-time (formal), Continuous (ongoing/automated)." },
  { domain: 6, q: "Name common compliance frameworks.", a: "GDPR, HIPAA, PCI-DSS, SOX, CCPA, FedRAMP, NIST 800-53, ISO 27001, CMMC." },
  { domain: 6, q: "What are the four control functions?", a: "Preventive, Detective, Corrective, Deterrent (+ Compensating, Directive)." },
  { domain: 6, q: "Pen test vs vulnerability assessment?", a: "Vuln assessment finds weaknesses. Pen test actively exploits them to demonstrate impact." },
  { domain: 6, q: "Security awareness practices?", a: "Phishing simulations, role-based training, newsletters, gamification, reporting suspicious activity." }
];

// Assign sequential IDs
window.SECPLUS_FLASHCARDS = window.SECPLUS_FLASHCARDS.map((card, i) => ({ id: i + 1, ...card }));
/* === lecture-content.js === */
// Pete Zerger Security+ lecture transcripts — Domain 1-5
// Source: /Users/berk/Desktop/Domain 1-5 transcripts/

window.SECPLUS_TRANSCRIPTS = [
  { id: 1, domain: 1, file: null, title: "Domain 1 Lecture Transcript", objectives: ["1.1", "1.2", "1.3", "1.4"] },
  { id: 2, domain: 2, file: null, title: "Domain 2 Lecture Transcript", objectives: ["2.1", "2.2", "2.3", "2.4", "2.5"] },
  { id: 3, domain: 3, file: null, title: "Domain 3 Lecture Transcript", objectives: ["3.1", "3.2", "3.3", "3.4"] },
  { id: 4, domain: 4, file: null, title: "Domain 4 Lecture Transcript", objectives: ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9"] },
  { id: 5, domain: 6, file: null, title: "Domain 5 Lecture Transcript (Governance)", objectives: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"] }
];

window.SECPLUS_LECTURE_NOTES = {
  1: {
    "1.1": "Categories: Technical, Managerial, Operational (new granularity vs older exams), Physical. Types unchanged: Preventive, Deterrent, Detective, Corrective, Compensating, Directive. Exam advice: know examples of EACH; controls fit multiple types by context. Operational = people executing day-to-day compliance. Managerial = policies/procedures — won't stop an active attacker alone.",
    "1.2": "CIA + Non-repudiation + AAA. Access control models: DAC (NTFS = discretionary example), MAC (clearance-based), RBAC (non-discretionary, role permissions), Rule-based (firewall rules apply globally), ABAC (attributes). Control gap = discrepancy between controls that should exist vs what actually exists.",
    "1.3": "Change management impacts security: unauthorized changes cause outages and weakened security. Requires request → approve → test → document. Tied to configuration management and baselining.",
    "1.4": "Know symmetric vs asymmetric use cases, hashing (integrity), digital signatures (non-repudiation), PKI components. Block ciphers (AES) for bulk data; asymmetric for key exchange and signing."
  },
  2: {
    "2.1": "Threat actors mirror legitimate org motivations (money/mission). Nation-state = espionage/disruption. Organized crime = ransomware ROI. Unskilled = automated tools. High skill + funding = most dangerous.",
    "2.2": "Threat vector = specific path; attack surface = all entry points. Phishing is #1 attack. Supply chain via MSPs/vendors. AI deepfakes increasing vishing risk.",
    "2.3": "Zero-days have no patch — behavioral/ML detection valuable. IoT/ICS: limited patching, rely on segmentation/isolation. Cloud risks: misconfig, shared tenancy.",
    "2.4": "Indicators ≠ attacks. Analogy: indicators = smoke detector; malicious activity = flames; attack = fire spreading. Know indicators per attack type: impossible travel, account lockout, resource consumption, missing logs, out-of-cycle logging. Ransomware often trojan variant. Logic bomb = timer/event triggered.",
    "2.5": "Mitigation = reducing severity of risk consequences. Techniques: segmentation (VLAN/subnet/micro-segmentation/security groups), isolation, patching (including third-party apps!), hardening, application allow lists, encryption, decommissioning. Cloud micro-segmentation via NSGs. DevSecOps = security at design."
  },
  3: {
    "3.1": "Shared responsibility matrix critical. Hybrid cloud very common. Air gap = physical isolation (revisited). SDN separates control/data plane — TLS mitigates MITM/DoS risks. Containers share kernel; VMs have full guest OS.",
    "3.2": "Infrastructure considerations: secure baselines, 802.1X port security, encryption in transit/at rest, secure protocols, remote access security.",
    "3.3": "Data types and classifications drive handling requirements. Owner sets classification; custodian implements protection.",
    "3.4": "Resilience: HA, capacity planning, platform diversity, multi-cloud, continuity of operations, testing (DR drills)."
  },
  4: {
    "4.1": "Three terms: Benchmark (vendor/industry guide) → Baseline (implementation on system) → Control (high-level activity). Lifecycle: Establish → Deploy → Maintain. Hardening reduces attack surface. MDM: BYOD allows selective corporate wipe; COPE/CYOD company owns device.",
    "4.2": "Asset lifecycle: acquisition → assignment → monitoring → disposal (secure wipe). Procurement security reviews.",
    "4.3": "Vulnerability management: CVE identifiers, CVSS scoring, exposure factor, environmental variables, risk tolerance, reporting.",
    "4.4": "Monitoring: SIEM aggregation, SNMP, NetFlow, alerting, log correlation across data sources for full incident scope.",
    "4.5": "IR phases include scope/severity assessment, containment limits damage, Rules of Engagement for pen tests.",
    "4.6": "Automation and orchestration (SOAR), change management integration.",
    "4.7": "Identity and access: RBAC roles pre-scoped with permissions; least privilege limits incident scope.",
    "4.8": "Data protection: DLP, retention, encryption.",
    "4.9": "Pen testing: Rules of Engagement define purpose and scope."
  },
  5: {
    "5.0": "From Domain 4 transcript — IR operations: containment limits incident scope; assess severity before response; SIEM correlates logs across sources for full attack scope.",
    "5.1": "Preparation: documented IR plans, trained teams, tooling ready. Detection: SIEM alerts, user reports, anomaly detection.",
    "5.2": "Containment: isolate systems, block malicious IPs, disable compromised accounts — reduce scope before eradication.",
    "5.3": "Recovery & Lessons Learned: restore from clean backups, verify integrity, document timeline, update playbooks."
  },
  6: {
    "5.1": "Know all four: Policy (why), Standard (what/when), Procedure (how), Guideline (could). Data roles: Owner, Controller, Processor, Custodian/Steward.",
    "5.2": "EF × Asset Value = SLE; SLE × ARO = ALE. ARO <1/year = fraction. Strategies: Mitigate, Transfer, Avoid, Accept. Leaders accountable for risk.",
    "5.3": "Third-party risk: due diligence, contracts, onboarding/offboarding, continuous vendor monitoring.",
    "5.4": "Compliance: PCI-DSS, HIPAA, GDPR, SOX. Privacy varies by jurisdiction.",
    "5.5": "Pen test exploits vulns; vuln assessment identifies only. Audits verify compliance.",
    "5.6": "Awareness: phishing simulations, role-based training. Insider indicators: unusual hours, bulk data exfiltration."
  }
};

window.SECPLUS_LECTURE_CARDS = [
  // ── DOMAIN 1 (Lecture) ──
  { domain: 1, q: "[Lecture] What is new about control categories on SY0-701 vs older exams?", a: "The Operational category is explicitly called out — people-centric day-to-day activities (awareness training, config mgmt execution) distinct from Managerial policies and Technical HW/SW." },
  { domain: 1, q: "[Lecture] Two exam tips for security control questions?", a: "1) Know examples of each category AND type. 2) Controls can fit multiple types depending on context — don't overthink, match the descriptor keywords." },
  { domain: 1, q: "[Lecture] What is a control gap?", a: "A discrepancy between the security measures an organization should have in place versus what actually exists. Gap analysis identifies these." },
  { domain: 1, q: "[Lecture] DAC example from the lecture?", a: "NTFS file system on Windows — owners discretionally assign permissions to files they own." },
  { domain: 1, q: "[Lecture] RBAC authorization model type?", a: "Non-discretionary — permissions assigned to roles, users inherit role permissions. Cannot freely delegate like DAC." },
  { domain: 1, q: "[Lecture] Rule-based access control example?", a: "A firewall applying global rules that allow or block traffic for ALL users equally (not per-user discretion)." },
  { domain: 1, q: "[Lecture] MAC vs DAC key difference?", a: "MAC uses system-enforced labels/clearances (system determines access). DAC lets the data owner decide who gets access." },
  { domain: 1, q: "[Lecture] What is threat scope reduction in Zero Trust?", a: "An end goal of Zero Trust architecture — decrease risks to the organization by shrinking what each compromised identity can reach." },
  { domain: 1, q: "[Lecture] Managed identity in cloud example?", a: "A VM's managed identity created/deleted with the VM lifecycle, used automatically when the VM accesses cloud resources — no stored credentials." },
  { domain: 1, q: "[Lecture] Why is change management a Domain 1 topic?", a: "Unauthorized or untested changes cause outages and security weaknesses. Formal change mgmt (request/approve/test/document) reduces both." },

  // ── DOMAIN 2 (Lecture) ──
  { domain: 2, q: "[Lecture] Indicators vs malicious activity vs attack?", a: "Indicators = smoke detector (may be false positive). Malicious activity = visible flames. Attack = fire spreading causing real damage with intent." },
  { domain: 2, q: "[Lecture] Is ransomware a distinct malware type?", a: "Functionally yes, but lecture notes ransomware is often implemented as a Trojan variant — delivery mechanism matters for indicators." },
  { domain: 2, q: "[Lecture] What makes a logic bomb unique?", a: "Triggers at a predetermined timer or event — dormant until the condition is met, then executes malicious action." },
  { domain: 2, q: "[Lecture] Trojan vs worm key difference?", a: "Trojan requires user action to execute (disguised as legitimate). Worm self-replicates and spreads across networks without user action." },
  { domain: 2, q: "[Lecture] Spyware mitigation from lecture?", a: "Updated anti-spyware, caution with free software downloads, adjust browser privacy settings, user awareness training." },
  { domain: 2, q: "[Lecture] Rootkit mitigation techniques?", a: "Strong authentication/access controls, regular malware scans, monitor logs for unusual activity — many mitigations overlap with general defense-in-depth." },
  { domain: 2, q: "[Lecture] Worm indicators?", a: "Resource consumption during replication, network inaccessibility, out-of-cycle logging of propagation attempts, published/documented IOCs." },
  { domain: 2, q: "[Lecture] Why are zero-day vulnerabilities especially dangerous?", a: "No patch available — must rely on behavioral detection, segmentation, and defense-in-depth rather than signature/patch-based defense alone." },
  { domain: 2, q: "[Lecture] IoT/ICS patching challenge?", a: "Limited patching options, reduced configurability — mitigation shifts to network segmentation/isolation to prevent lateral movement." },
  { domain: 2, q: "[Lecture] Password spraying indicators?", a: "Account lockouts from high volume of failed logins across MANY accounts (vs brute force on one account)." },
  { domain: 2, q: "[Lecture] Downgrade attack indicator?", a: "Out-of-cycle or unexpected protocol/cipher negotiation — attacker forces weaker encryption." },

  // ── DOMAIN 2.5 Mitigations (Lecture) ──
  { domain: 2, q: "[Lecture] What is mitigation in risk terms?", a: "Process of reducing the severity/seriousness of potential consequences of a risk — implemented via security controls (proactive safeguards or reactive countermeasures)." },
  { domain: 2, q: "[Lecture] Segmentation: physical vs logical?", a: "Physical = separate hardware/networks. Logical = VLANs, subnets, software-defined boundaries. Cloud segmentation is almost always logical." },
  { domain: 2, q: "[Lecture] Why implement segmentation?", a: "Limits blast radius — if attacker gains foothold, segmentation/micro-segmentation restricts lateral movement to other subnets/services." },
  { domain: 2, q: "[Lecture] Cloud micro-segmentation tool?", a: "Security Groups / Network Security Groups — act as virtual firewalls per workload in VPC/vNet." },
  { domain: 2, q: "[Lecture] Isolation vs segmentation?", a: "Isolation technically blocks access between systems/networks entirely. Segmentation controls which services can communicate across boundaries." },
  { domain: 2, q: "[Lecture] Patching lecture warning?", a: "Third-party applications are commonly overlooked for patching — major risk even when OS is patched. Apply out-of-band updates promptly." },
  { domain: 2, q: "[Lecture] Four endpoint hardening/protection types?", a: "Host firewall, anti-malware, EDR, and HIDS/HIPS — prevention-focused hardening techniques for endpoints." },
  { domain: 2, q: "[Lecture] What is DevSecOps?", a: "Integrating security at every step starting with design — security considered during development, not bolted on after." },
  { domain: 2, q: "[Lecture] Application allow listing?", a: "Mitigation technique restricting execution to only approved applications — narrow but effective on endpoints/servers." },

  // ── DOMAIN 3 (Lecture) ──
  { domain: 3, q: "[Lecture] Hybrid cloud consideration?", a: "Very common enterprise model — understand split responsibilities between on-prem and CSP components; data residency and connectivity security." },
  { domain: 3, q: "[Lecture] SDN security concern?", a: "Separating control plane from data plane opens MITM and DoS risks on controller channels — secure with TLS." },
  { domain: 3, q: "[Lecture] Why containers reduce overhead vs VMs?", a: "Containers share the host OS kernel — no separate guest OS per container. Faster/lighter but weaker isolation boundary." },
  { domain: 3, q: "[Lecture] On-prem vs cloud advantage tradeoff?", a: "On-prem: full stack control, data residency, legacy/compliance. Cloud: OPEX vs CAPEX, CSP manages infrastructure, faster deployment." },

  // ── DOMAIN 4 (Lecture) ──
  { domain: 4, q: "[Lecture] Benchmark vs Baseline vs Control?", a: "Benchmark = recommended config guide (CIS, vendor). Baseline = that guide applied to a specific system. Control = high-level security activity to address." },
  { domain: 4, q: "[Lecture] BYOD remote wipe behavior?", a: "MDM can wipe corporate/business data container while leaving personal photos and apps unaffected on employee-owned device." },
  { domain: 4, q: "[Lecture] COPE vs CYOD vs BYOD device ownership?", a: "BYOD: employee buys device. COPE: company buys, employee uses personally. CYOD: employee picks from company-approved list (company may fund)." },
  { domain: 4, q: "[Lecture] Screen locks on mobile?", a: "Activate after inactivity period; limited PIN attempts before device disables — prevents casual unauthorized access." },
  { domain: 4, q: "[Lecture] Exam tip: rooting and jailbreaking?", a: "Both remove vendor restrictions to run unauthorized software. Typically DISALLOWED in corporate policy; MDM can detect and block." },
  { domain: 4, q: "[Lecture] Site survey purpose?", a: "Walk environment with wireless tools measuring signal strength to plan AP placement and eliminate dead zones before deployment." },
  { domain: 4, q: "[Lecture] Heat map color meaning?", a: "Green/blue = strong reliable signal. Yellow/orange/red = weak areas needing AP repositioning or troubleshooting." },
  { domain: 4, q: "[Lecture] OS hardening via baselines?", a: "Remove unneeded services/features to reduce attack surface AND patching burden. Apply via GPO, MDM, or IaC." },
  { domain: 4, q: "[Lecture] SIEM value proposition from lecture?", a: "Ingest logs from many sources into common schema to query/correlate across entire environment — identify full scope of incidents." },
  { domain: 4, q: "[Lecture] Rules of Engagement (pen test)?", a: "Define purpose of test, scope of systems, techniques allowed, timing, and damage thresholds before testing begins." },
  { domain: 4, q: "[Lecture] RBAC and incident scope?", a: "Pre-scoped roles with only job-required permissions limit scope of security incidents and data theft if account compromised." },

  // ── DOMAIN 5 Operations (Lecture - maps to domain 5) ──
  { domain: 5, q: "[Lecture] Containment goal in IR?", a: "Limit damage and reduce scope of the declared incident — stop spread before eradication and recovery." },
  { domain: 5, q: "[Lecture] Severity/scope assessment in IR?", a: "Determine how bad the incident is and which systems/data are affected before choosing containment strategy." },

  // ── DOMAIN 6 Governance (Lecture transcript 5) ──
  { domain: 6, q: "[Lecture] Policy vs Standard vs Procedure vs Guideline — specificity?", a: "Policy = broadest (why). Standard = mandatory technical specs (what/when). Procedure = step-by-step (how). Guideline = least specific recommendations (could)." },
  { domain: 6, q: "[Lecture] Exposure Factor formula?", a: "Percentage of asset value lost if risk is realized. SLE = Asset Value × EF. Example: 30% EF on $100K asset = $30K SLE." },
  { domain: 6, q: "[Lecture] ALE formula?", a: "ALE = SLE × ARO. Example: $100K SLE × 0.1 ARO (once per 10 years) = $10K ALE." },
  { domain: 6, q: "[Lecture] ARO less than once per year?", a: "Express as a fraction: once every 10 years = 0.1 ARO. Watch exam questions using multi-year frequencies." },
  { domain: 6, q: "[Lecture] Risk mitigation vs transference vs avoidance?", a: "Mitigate = implement controls, accept residual risk. Transfer = insurance/third party assumes risk. Avoid = don't implement the risky service at all." },
  { domain: 6, q: "[Lecture] Who is accountable for risk?", a: "Organizational leaders — accountability cannot be transferred (unlike risk itself which can be transferred)." },
  { domain: 6, q: "[Lecture] Due diligence vs due care?", a: "Due diligence = reasonable steps to assess risks before action. Due care = reasonable steps to mitigate risks ongoing." },
  { domain: 6, q: "[Lecture] Insider threat behavioral indicators?", a: "Working unusual hours, transferring large data volumes to personal storage, accessing resources outside job role." },
  { domain: 6, q: "[Lecture] Risk register contents?", a: "Identified risks, likelihood/impact, risk owners, key risk indicators (KRIs), thresholds, mitigation status." },
  { domain: 6, q: "[Lecture] BIA purpose?", a: "Identify critical business functions, assess impact over time if disrupted, establish RTO and RPO for recovery planning." }
];

window.SECPLUS_LECTURE_QUIZ = [
  { q: "[Lecture] NTFS file permissions are an example of which access model?", opts: ["MAC", "DAC", "RBAC", "Rule-based"], correct: 1, domain: 1 },
  { q: "[Lecture] A firewall rule applying to all users equally is:", opts: ["DAC", "ABAC", "Rule-based access control", "Mandatory access"], correct: 2, domain: 1 },
  { q: "[Lecture] Ransomware is often delivered as which malware type?", opts: ["Worm", "Trojan", "Logic bomb", "Adware"], correct: 1, domain: 2 },
  { q: "[Lecture] A logic bomb is defined by:", opts: ["Self-replication", "Timed/event trigger", "Voice phishing", "RFID cloning"], correct: 1, domain: 2 },
  { q: "[Lecture] Cloud segmentation is typically:", opts: ["Physical only", "Logical (VLANs/NSGs)", "Air-gapped", "Manual cable cuts"], correct: 1, domain: 2 },
  { q: "[Lecture] Third-party app patching is important because:", opts: ["OS patches cover all apps", "Third-party apps are commonly overlooked", "CSPs patch all software", "IoT never needs patches"], correct: 1, domain: 2 },
  { q: "[Lecture] In BYOD, MDM corporate wipe typically:", opts: ["Deletes entire personal phone", "Removes only corporate data", "Disables the carrier", "Encrypts personal photos"], correct: 1, domain: 4 },
  { q: "[Lecture] Company purchases device, employee personal use — which model?", opts: ["BYOD", "COPE", "CYOD", "MDM-only"], correct: 1, domain: 4 },
  { q: "[Lecture] If SLE is $50,000 and ARO is 0.2, ALE equals:", opts: ["$2,500", "$10,000", "$50,000", "$250,000"], correct: 1, domain: 6 },
  { q: "[Lecture] Asset $200K, exposure factor 25%. SLE is:", opts: ["$25,000", "$50,000", "$75,000", "$200,000"], correct: 1, domain: 6 },
  { q: "[Lecture] Buying cyber insurance is an example of:", opts: ["Risk avoidance", "Risk transference", "Risk mitigation", "Risk acceptance only"], correct: 1, domain: 6 },
  { q: "[Lecture] A guideline is best described as:", opts: ["Mandatory step-by-step", "Recommended best practice", "Legal regulation", "Hardware control"], correct: 1, domain: 6 }
];

// Merge into main datasets when loaded after study-data.js
(function() {
  window.SECPLUS_STUDY_GUIDE = window.SECPLUS_STUDY_GUIDE || {};
  window.SECPLUS_FLASHCARDS = window.SECPLUS_FLASHCARDS || [];
  window.SECPLUS_QUIZ_BANK = window.SECPLUS_QUIZ_BANK || [];

  if (window.SECPLUS_STUDY_GUIDE) {
    Object.keys(window.SECPLUS_LECTURE_NOTES).forEach(d => {
      const domain = parseInt(d);
      if (!window.SECPLUS_STUDY_GUIDE[domain]) return;
      window.SECPLUS_STUDY_GUIDE[domain].lectureNotes = window.SECPLUS_LECTURE_NOTES[d];
      window.SECPLUS_STUDY_GUIDE[domain].summary += " Includes detailed lecture transcript notes.";
    });
  }
  if (window.SECPLUS_FLASHCARDS) {
    window.SECPLUS_FLASHCARDS = window.SECPLUS_FLASHCARDS.concat(window.SECPLUS_LECTURE_CARDS);
    window.SECPLUS_FLASHCARDS = window.SECPLUS_FLASHCARDS.map((c, i) => ({ id: i + 1, ...c }));
  }
  if (window.SECPLUS_QUIZ_BANK) {
    window.SECPLUS_QUIZ_BANK = window.SECPLUS_QUIZ_BANK.concat(window.SECPLUS_LECTURE_QUIZ);
  }
})();
/* === study-guide-deep.js === */
// Transcript-derived deep study guide — definitions, key topics, analogies per objective
// Sources: Pete Zerger Exam Cram transcripts + PDFs

window.SECPLUS_DEEP_GUIDE = {
  "1": {
    "summary": "Foundation domain: control categories & types, CIA/AAA, Zero Trust (NIST 800-207), change management, and cryptography/PKI.",
    "objectives": [
      {
        "id": "1.1",
        "title": "Security Control Categories & Types",
        "definitions": [
          {
            "term": "Security Control",
            "def": "A measure that counters and minimizes loss or unavailability due to vulnerabilities. Safeguards are proactive; countermeasures are reactive."
          },
          {
            "term": "Technical Control",
            "def": "HW/SW mechanisms managing access — encryption, firewalls, ACLs, biometrics, IDS/IPS."
          },
          {
            "term": "Physical Control",
            "def": "Tangible facility protections — guards, fences, locks, cameras, motion detectors."
          },
          {
            "term": "Managerial Control",
            "def": "Policy/procedure-based admin controls — hiring, risk assessments, data classification, training."
          },
          {
            "term": "Operational Control",
            "def": "People-centric day-to-day compliance — awareness training delivery, backup verification, config mgmt execution."
          },
          {
            "term": "Preventive",
            "def": "Stops unwanted activity — locks, firewalls, encryption, MFA."
          },
          {
            "term": "Deterrent",
            "def": "Discourages violations — signage, visible cameras, guards, lighting."
          },
          {
            "term": "Detective",
            "def": "Discovers violations — audit trails, IDS, logs, mandatory vacation."
          },
          {
            "term": "Corrective",
            "def": "Restores normal operations — backups, patching, antivirus, IR."
          },
          {
            "term": "Compensating",
            "def": "Alternative when primary control fails — dual control, segregation of duties."
          },
          {
            "term": "Directive",
            "def": "Directs behavior — policies, procedures, standards, contracts, signage."
          }
        ],
        "keyTopics": [
          "SY0-701 adds Operational as explicit category (people doing the work)",
          "One control = one category but often MULTIPLE types by context",
          "Keywords: warning/sign→Deterrent; firewall→Preventive; monitor/audit→Detective; backup→Corrective; policy→Directive",
          "No security without physical security — physical breach bypasses technical controls"
        ],
        "analogies": [
          {
            "title": "The Unlocked Padlock",
            "text": "Preventive AND deterrent — even unlocked, signals restricted access and increases perceived effort."
          },
          {
            "title": "Security Camera",
            "text": "Detective (records) + deterrent (visible lens makes people think twice)."
          },
          {
            "title": "ACL Dual Role",
            "text": "Blocking access = preventive. Logging deletions for investigation = detective."
          }
        ],
        "examTip": "Match question keywords to control TYPE, not category. Don't overthink overlap."
      },
      {
        "id": "1.2",
        "title": "Fundamental Security Concepts",
        "definitions": [
          {
            "term": "Confidentiality",
            "def": "Only authorized subjects access objects."
          },
          {
            "term": "Integrity",
            "def": "Data/configs not modified without authorization."
          },
          {
            "term": "Availability",
            "def": "Authorized access within reasonable time — CIA worthless without it."
          },
          {
            "term": "Non-repudiation",
            "def": "Cannot deny a transaction. Digital signatures provide proof. Shared accounts destroy it."
          },
          {
            "term": "Identification",
            "def": "Claiming identity (username)."
          },
          {
            "term": "Authentication",
            "def": "Proving identity (password, MFA, biometrics)."
          },
          {
            "term": "Authorization",
            "def": "Access granted based on identity, roles, permissions."
          },
          {
            "term": "Accounting",
            "def": "Logging activity for audit trails and accountability."
          },
          {
            "term": "DAC",
            "def": "Owner decides access. Example: NTFS permissions."
          },
          {
            "term": "MAC",
            "def": "System-enforced labels/clearances. Owner cannot down-classify."
          },
          {
            "term": "RBAC",
            "def": "Non-discretionary permissions via job roles."
          },
          {
            "term": "Rule-Based",
            "def": "Global rules for all users. Example: firewall rules."
          },
          {
            "term": "ABAC",
            "def": "Access by attributes — department, location, device health."
          },
          {
            "term": "Control Gap",
            "def": "Difference between required controls and actual controls."
          },
          {
            "term": "Zero Trust",
            "def": "No default trust. Assume breach, verify explicitly, least privilege (NIST 800-207)."
          },
          {
            "term": "PEP",
            "def": "Data plane — enforces policies at connection gateway."
          },
          {
            "term": "PDP",
            "def": "Control plane — decides access using identity, device health, risk."
          },
          {
            "term": "Adaptive Identity",
            "def": "Auth requirements change by context — location, device, risk level."
          },
          {
            "term": "Threat Scope Reduction",
            "def": "Zero Trust goal — limit blast radius of compromise."
          }
        ],
        "keyTopics": [
          "Subjects = users/services; Objects = files, databases, printers",
          "ID + Auth + Auditing = Accountability",
          "Managed cloud identities tied to VM lifecycle",
          "Physical: bollards, access vestibules/mantraps (anti-tailgating), lighting",
          "Sensors: infrared, microwave, contact, ultrasonic",
          "Deception: honeypot, honeynet, honeyfile, honeytoken"
        ],
        "analogies": [
          {
            "title": "Subjects & Objects",
            "text": "Subjects knock on doors; objects are the rooms inside. Authorization model decides access."
          },
          {
            "title": "Castle Moat vs Zero Trust",
            "text": "Old: trust everyone inside walls. Zero Trust: verify at every door — assume breach already happened."
          },
          {
            "title": "Adaptive Bouncer",
            "text": "Extra ID check only when location/device/risk is suspicious — conditional access."
          }
        ],
        "examTip": "PEP = Data Plane. PDP = Control Plane. Shared accounts = no non-repudiation."
      },
      {
        "id": "1.3",
        "title": "Change & Configuration Management",
        "definitions": [
          {
            "term": "Configuration Management",
            "def": "Maintains known, enforced system state. Prevents configuration drift."
          },
          {
            "term": "Baselining",
            "def": "Standard secure starting config — imaging, GPO, IaC templates."
          },
          {
            "term": "Change Management",
            "def": "Request → approve → test → implement → document. Reduces outage and security risk."
          }
        ],
        "keyTopics": [
          "Unauthorized changes cause outages AND security gaps",
          "Automate state enforcement (GPO, MDM, IaC)",
          "Test in non-prod before production",
          "CAB reviews and approves significant changes"
        ],
        "analogies": [
          {
            "title": "Recipe & Taste Test",
            "text": "Baselining = standard recipe. Change mgmt = no new ingredients without approval and taste test."
          }
        ],
        "examTip": "Untested production patch = missing change management process."
      },
      {
        "id": "1.4",
        "title": "Cryptographic Solutions",
        "definitions": [
          {
            "term": "Symmetric Encryption",
            "def": "Same key encrypt/decrypt. Fast bulk data. AES, ChaCha20."
          },
          {
            "term": "Asymmetric Encryption",
            "def": "Key pair. Key exchange, signatures. RSA, ECC."
          },
          {
            "term": "Hashing",
            "def": "One-way integrity check. SHA-256. NOT encryption."
          },
          {
            "term": "Digital Signature",
            "def": "Private key signs; public key verifies. Integrity + auth + non-repudiation."
          },
          {
            "term": "PKI",
            "def": "Framework for certificate issuance, management, revocation."
          },
          {
            "term": "Root CA",
            "def": "Root of trust, kept offline. Issues certs to subordinate CAs."
          },
          {
            "term": "CRL / OCSP",
            "def": "Revocation checking — periodic list vs real-time query."
          },
          {
            "term": "TPM",
            "def": "On-chip key storage, measured boot, disk encryption."
          },
          {
            "term": "HSM",
            "def": "Dedicated crypto hardware module. FIPS 140-2/3."
          },
          {
            "term": "Steganography",
            "def": "Hiding data inside other files — conceals existence."
          }
        ],
        "keyTopics": [
          "Hybrid: asymmetric key exchange + symmetric data encryption",
          "Third-party CA certs for public TLS; self-signed for internal",
          "Key stretching (PBKDF2, bcrypt) against brute force",
          "PFS: compromise of long-term key doesn't expose past sessions"
        ],
        "analogies": [
          {
            "title": "Shared House Key",
            "text": "Symmetric — fast but one stolen key compromises everything."
          },
          {
            "title": "Mailbox",
            "text": "Asymmetric — anyone drops mail in (public), only owner opens (private)."
          },
          {
            "title": "Fingerprint",
            "text": "Hash — identifies but cannot reconstruct original."
          }
        ],
        "examTip": "Hashing = integrity only. Signatures = non-repudiation."
      }
    ],
    "tips": "Domain 1 is the exam foundation — control keywords and CIA/AAA recur in every domain.",
    "acronyms": [
      "CIA",
      "AAA",
      "PEP",
      "PDP",
      "DAC",
      "MAC",
      "RBAC",
      "ABAC",
      "PKI",
      "TPM",
      "HSM",
      "AES",
      "RSA",
      "MFA"
    ]
  },
  "2": {
    "summary": "Threat actors, motivations, vectors vs surfaces, vulnerabilities, malware indicators, and mitigation techniques.",
    "objectives": [
      {
        "id": "2.1",
        "title": "Threat Actors & Motivations",
        "definitions": [
          {
            "term": "Nation-State",
            "def": "Government-backed, highest sophistication/funding. Espionage, disruption, cyberwarfare."
          },
          {
            "term": "Organized Crime",
            "def": "Financially motivated. Ransomware-as-a-service ROI model."
          },
          {
            "term": "Hacktivist",
            "def": "Ideologically/politically motivated. Service disruption, defacement."
          },
          {
            "term": "Insider Threat",
            "def": "Authorized user abusing access — malicious or negligent."
          },
          {
            "term": "Unskilled Attacker",
            "def": "Script kiddie using automated tools without deep expertise."
          },
          {
            "term": "Shadow IT",
            "def": "Unauthorized IT resources outside IT governance — creates hidden risk."
          }
        ],
        "keyTopics": [
          "High skill + high funding = most dangerous combination",
          "Motivations: financial gain, espionage, disruption, blackmail, revenge, ideology, war",
          "Threat actors mirror legitimate org structures (money, mission, ideology)",
          "Supply chain attacks via MSPs and vendors increasingly common"
        ],
        "analogies": [
          {
            "title": "Threat Actor Spectrum",
            "text": "Like criminals from petty thief (script kiddie) to organized syndicate (crime) to foreign intelligence (nation-state)."
          }
        ],
        "examTip": "Hacktivist = ideology. Organized crime = money. Nation-state = espionage/disruption."
      },
      {
        "id": "2.2",
        "title": "Threat Vectors & Attack Surfaces",
        "definitions": [
          {
            "term": "Threat Vector",
            "def": "Specific path/method to breach security — one way in."
          },
          {
            "term": "Attack Surface",
            "def": "ALL possible entry points — the entire exposure area."
          },
          {
            "term": "Phishing",
            "def": "#1 attack vector. Email/social deception for credentials."
          },
          {
            "term": "Vishing",
            "def": "Voice phishing — phone-based social engineering."
          },
          {
            "term": "Smishing",
            "def": "SMS-based phishing."
          },
          {
            "term": "Supply Chain Attack",
            "def": "Compromise vendor/software to reach customers (SolarWinds)."
          }
        ],
        "keyTopics": [
          "Phishing, vishing, smishing, spear phishing, whaling, BEC",
          "AI deepfakes increasing vishing credibility",
          "Watering hole, typosquatting, RFID cloning, NFC attacks",
          "Reduce attack surface via hardening, patching, removing unused services"
        ],
        "analogies": [
          {
            "title": "Castle Analogy",
            "text": "Threat vector = scaling one weak wall or bribing a guard. Attack surface = the entire castle — all walls, gates, tunnels, and windows."
          }
        ],
        "examTip": "Vector = one path. Surface = everything exposed. Phishing is always #1."
      },
      {
        "id": "2.3",
        "title": "Vulnerabilities",
        "definitions": [
          {
            "term": "Vulnerability",
            "def": "Weakness that can be exploited — unpatched software, misconfig, weak passwords."
          },
          {
            "term": "Zero-Day",
            "def": "Unknown vulnerability with no patch. Requires behavioral detection."
          },
          {
            "term": "Exploit",
            "def": "Specific method/tool leveraging a vulnerability."
          },
          {
            "term": "Common Vulnerabilities",
            "def": "Misconfigurations, unpatched systems, weak credentials, default accounts, open ports."
          }
        ],
        "keyTopics": [
          "IoT/ICS: limited patching, rely on segmentation/isolation",
          "Cloud risks: misconfiguration, shared tenancy, exposed storage",
          "SQL injection, XSS, directory traversal, buffer overflows",
          "Zero-days need defense-in-depth, not just signatures"
        ],
        "analogies": [
          {
            "title": "Exploit as Recipe",
            "text": "Vulnerability = weak lock. Exploit = the recipe/instructions to pick it. Attack = actually breaking in."
          }
        ],
        "examTip": "Zero-day = no patch available. Answer: segmentation, monitoring, behavioral detection."
      },
      {
        "id": "2.4",
        "title": "Indicators of Malicious Activity",
        "definitions": [
          {
            "term": "Indicator",
            "def": "Signal something MAY be wrong — like a smoke detector (false or true positive)."
          },
          {
            "term": "Malicious Activity",
            "def": "Confirmed harmful behavior — like seeing flames in a window."
          },
          {
            "term": "Attack",
            "def": "Active exploitation causing damage — fire spreading through the building."
          },
          {
            "term": "Impossible Travel",
            "def": "Logins from distant locations in impossibly short time."
          },
          {
            "term": "Logic Bomb",
            "def": "Malware triggered by timer or specific event."
          }
        ],
        "keyTopics": [
          "Indicators: account lockout, impossible travel, resource spikes, missing logs, out-of-cycle logging",
          "Ransomware often delivered as Trojan variant",
          "Worm indicators: resource consumption, network saturation during replication",
          "Password spraying: many accounts, few attempts each (vs brute force on one)",
          "Downgrade attack: unexpected weak cipher/protocol negotiation",
          "Malware types: ransomware, trojan, worm, rootkit, spyware, virus, keylogger, logic bomb"
        ],
        "analogies": [
          {
            "title": "Smoke Detector",
            "text": "Indicators = smoke alarm (burning toast OR real fire). Malicious activity = visible flames. Attack = fire spreading with intent to destroy."
          },
          {
            "title": "Trojan vs Worm",
            "text": "Trojan = gift horse with soldiers inside (needs you to open the gate). Worm = plague spreading on its own through the village."
          }
        ],
        "examTip": "Distinguish indicator vs attack. Account lockout across MANY users = password spraying."
      },
      {
        "id": "2.5",
        "title": "Mitigation Techniques",
        "definitions": [
          {
            "term": "Mitigation",
            "def": "Reducing severity of risk consequences via proactive safeguards or reactive countermeasures."
          },
          {
            "term": "Segmentation",
            "def": "Dividing network to limit blast radius — VLANs, subnets, micro-segmentation, NSGs."
          },
          {
            "term": "Isolation",
            "def": "Blocking communication entirely between systems/networks."
          },
          {
            "term": "Hardening",
            "def": "Reducing attack surface — disable services, patch, least privilege, encryption."
          },
          {
            "term": "Application Allow Listing",
            "def": "Only approved applications can execute."
          },
          {
            "term": "DevSecOps",
            "def": "Security integrated at design/development, not bolted on after."
          }
        ],
        "keyTopics": [
          "Physical vs logical segmentation; cloud = almost always logical",
          "Micro-segmentation via Security Groups / NSGs in cloud",
          "Patch third-party apps — commonly overlooked even when OS is patched",
          "Endpoint protection: host firewall, anti-malware, EDR, HIDS/HIPS",
          "Encryption in transit and at rest",
          "Decommissioning/disposal with secure wipe"
        ],
        "analogies": [
          {
            "title": "Firebreak in Forest",
            "text": "Segmentation = firebreaks that stop a forest fire from consuming everything — limits lateral movement."
          },
          {
            "title": "Swiss Cheese Defense",
            "text": "Multiple mitigation layers — if one hole (control) fails, others still block the threat."
          }
        ],
        "examTip": "Isolation > segmentation in restrictiveness. Patching third-party apps is a common exam trap."
      }
    ],
    "tips": "Castle + smoke detector analogies appear constantly. Know indicator vs attack distinction.",
    "acronyms": [
      "BEC",
      "APT",
      "DDoS",
      "XSS",
      "SQLi",
      "MITM",
      "IoC",
      "EDR",
      "NSG"
    ]
  },
  "3": {
    "summary": "Architecture models, shared responsibility, segmentation, virtualization, data protection, and resilience.",
    "objectives": [
      {
        "id": "3.1",
        "title": "Architecture Models & Cloud",
        "definitions": [
          {
            "term": "IaaS",
            "def": "Customer manages guest OS and above. CSP manages physical/virtualization layer."
          },
          {
            "term": "PaaS",
            "def": "Customer manages applications and data. CSP manages runtime, middleware, OS."
          },
          {
            "term": "SaaS",
            "def": "Customer manages data and access config. CSP manages entire application stack."
          },
          {
            "term": "Shared Responsibility",
            "def": "Security duties split between CSP and customer — more customer responsibility in IaaS."
          },
          {
            "term": "Hybrid Cloud",
            "def": "Mix of on-prem and cloud — very common enterprise model."
          },
          {
            "term": "Air Gap",
            "def": "Physical network isolation from untrusted networks."
          }
        ],
        "keyTopics": [
          "On-prem: full control, data residency, legacy systems",
          "Cloud: OPEX vs CAPEX, faster deployment, CSP manages infra",
          "Multi-cloud and vendor lock-in considerations",
          "Third-party/vendor risk in cloud supply chain",
          "Serverless, microservices, containerization"
        ],
        "analogies": [
          {
            "title": "Renting vs Owning",
            "text": "IaaS = rent empty land (you build the house). PaaS = rent furnished apartment (bring belongings). SaaS = hotel (just use the room)."
          },
          {
            "title": "Air Gap = Island",
            "text": "No bridge, no cable — physically disconnected from the internet mainland."
          }
        ],
        "examTip": "Guest OS patching in IaaS = customer responsibility. Always."
      },
      {
        "id": "3.2",
        "title": "Enterprise Infrastructure Security",
        "definitions": [
          {
            "term": "SDN",
            "def": "Software-Defined Networking — control plane separated from data plane."
          },
          {
            "term": "Control Plane",
            "def": "SDN brain — makes routing/policy decisions centrally."
          },
          {
            "term": "Data Plane",
            "def": "SDN muscle — forwards traffic per controller instructions."
          },
          {
            "term": "IaC",
            "def": "Infrastructure as Code — declarative, version-controlled, idempotent deployments."
          },
          {
            "term": "802.1X",
            "def": "Port-based NAC — authenticate device before network access."
          },
          {
            "term": "DMZ",
            "def": "Perimeter segment for public-facing services with limited internal access."
          }
        ],
        "keyTopics": [
          "SDN risks: MITM and DoS on controller channel — secure with TLS",
          "Northbound: apps to controller. Southbound (OpenFlow): controller to switches",
          "VLANs, VPNs, subnets, VRF for logical segmentation",
          "SASE: converged WAN + security (SWG, CASB, ZTNA, FWaaS)",
          "Secure protocols, encryption in transit/at rest, remote access security"
        ],
        "analogies": [
          {
            "title": "SDN Air Traffic Control",
            "text": "Control plane = tower directing planes. Data plane = runways and planes actually moving."
          }
        ],
        "examTip": "SDN separates control and data planes. TLS protects controller communications."
      },
      {
        "id": "3.3",
        "title": "Data Protection Strategies",
        "definitions": [
          {
            "term": "Data Owner",
            "def": "Accountable for classification and access decisions."
          },
          {
            "term": "Data Custodian",
            "def": "Implements protection — backups, access controls, proper handling."
          },
          {
            "term": "Data Classification",
            "def": "Labels (public, private, confidential, restricted) driving handling requirements."
          },
          {
            "term": "DLP",
            "def": "Data Loss Prevention — monitors/blocks unauthorized sensitive data movement."
          },
          {
            "term": "Tokenization",
            "def": "Replace sensitive data with non-sensitive tokens."
          }
        ],
        "keyTopics": [
          "Encryption at rest, in transit, and in use (where possible)",
          "Data masking and obfuscation for non-prod environments",
          "Retention policies and secure disposal",
          "Geographic data residency requirements (GDPR, etc.)"
        ],
        "analogies": [
          {
            "title": "Owner vs Custodian",
            "text": "Owner = bank account holder who decides who gets access. Custodian = bank teller who implements the rules daily."
          }
        ],
        "examTip": "Owner sets classification. Custodian implements protection."
      },
      {
        "id": "3.4",
        "title": "Resilience & Recovery in Architecture",
        "definitions": [
          {
            "term": "High Availability (HA)",
            "def": "Redundant systems minimizing downtime — clustering, load balancing."
          },
          {
            "term": "Fault Tolerance",
            "def": "System continues operating through component failure."
          },
          {
            "term": "Capacity Planning",
            "def": "Ensuring resources meet current and future demand."
          },
          {
            "term": "Continuity of Operations",
            "def": "Maintaining essential functions during disruption."
          }
        ],
        "keyTopics": [
          "Platform diversity — avoid single-vendor dependency",
          "Multi-cloud for resilience and vendor flexibility",
          "ICS/SCADA: segmentation critical, often cannot patch",
          "IoT/embedded: limited configurability, monitor and isolate",
          "DR testing: tabletop exercises, full failover drills"
        ],
        "analogies": [
          {
            "title": "Spare Tire",
            "text": "HA = carrying a spare tire so one flat doesn't strand you. Fault tolerance = run-flat tires that keep going."
          }
        ],
        "examTip": "ICS/SCADA answer pattern: segmentation and monitoring over patching."
      }
    ],
    "tips": "Shared responsibility matrix is high-yield. Containers share kernel; VMs have full guest OS.",
    "acronyms": [
      "IaaS",
      "PaaS",
      "SaaS",
      "SDN",
      "IaC",
      "SASE",
      "DLP",
      "DMZ",
      "NAC",
      "ICS",
      "SCADA"
    ]
  },
  "4": {
    "summary": "Largest domain: baselines, hardening, mobile/MDM, wireless, vuln mgmt, monitoring, IAM, automation.",
    "objectives": [
      {
        "id": "4.1",
        "title": "Secure Baselines & Hardening",
        "definitions": [
          {
            "term": "Benchmark",
            "def": "Vendor/industry recommended secure config guide (CIS, STIG)."
          },
          {
            "term": "Baseline",
            "def": "Benchmark applied to a specific system — the actual implemented config."
          },
          {
            "term": "Control",
            "def": "High-level security activity addressing a specific risk."
          },
          {
            "term": "Hardening",
            "def": "Reducing attack surface — disable unneeded services, patch, ACLs, encryption."
          }
        ],
        "keyTopics": [
          "Lifecycle: Establish → Deploy → Maintain",
          "Establish: threat model, select benchmarks, risk assessment",
          "Deploy: GPO, MDM, IaC, imaging",
          "Maintain: scan, patch, audit, review baselines",
          "Hardening targets: mobile, workstations, servers, cloud, ICS, IoT"
        ],
        "analogies": [
          {
            "title": "Recipe → Meal",
            "text": "Benchmark = recipe (CIS guide). Baseline = the actual meal you cooked from it. Control = the cooking technique."
          }
        ],
        "examTip": "Benchmark ≠ Baseline. Benchmark is the guide; baseline is the implementation."
      },
      {
        "id": "4.2",
        "title": "Mobile Device Management",
        "definitions": [
          {
            "term": "MDM",
            "def": "Mobile Device Management — remote wipe, geofencing, app allow lists, compliance."
          },
          {
            "term": "BYOD",
            "def": "Employee-owned device. Corporate wipe removes only business data."
          },
          {
            "term": "COPE",
            "def": "Company-owned, personally enabled. Full wipe acceptable."
          },
          {
            "term": "CYOD",
            "def": "Choose Your Own Device — pick from company-approved list."
          },
          {
            "term": "UEM",
            "def": "Unified Endpoint Management — desktops, mobile, IoT in one platform."
          },
          {
            "term": "Rooting/Jailbreaking",
            "def": "Removing vendor restrictions. Typically DISALLOWED; MDM detects."
          }
        ],
        "keyTopics": [
          "Screen locks after inactivity; limited PIN attempts",
          "Geofencing alerts when device leaves defined area",
          "Remote wipe: BYOD = corporate data only; COPE = full device",
          "App allow/block lists, content encryption, jailbreak detection"
        ],
        "analogies": [
          {
            "title": "BYOD Wipe",
            "text": "Like erasing only your work folder on a shared home computer — personal photos stay untouched."
          }
        ],
        "examTip": "BYOD corporate wipe = business data only. COPE = company owns device, full wipe OK."
      },
      {
        "id": "4.3",
        "title": "Wireless Security & Site Surveys",
        "definitions": [
          {
            "term": "WPA3",
            "def": "Wi-Fi security with SAE handshake and forward secrecy."
          },
          {
            "term": "Site Survey",
            "def": "Walking environment with wireless tools to plan AP placement."
          },
          {
            "term": "Heat Map",
            "def": "Visual signal strength map — green/blue strong, red/yellow weak."
          },
          {
            "term": "RADIUS",
            "def": "Centralized AAA for network authentication (802.1X)."
          }
        ],
        "keyTopics": [
          "WPA3 over WPA2; never WEP",
          "Enterprise Wi-Fi uses 802.1X + RADIUS",
          "Heat maps guide AP repositioning and dead zone elimination",
          "Wireless attacks: evil twin, deauth, rogue AP detection"
        ],
        "analogies": [
          {
            "title": "Heat Map = Weather Radar",
            "text": "Green/blue = clear signal sunshine. Red = storm zones needing attention."
          }
        ],
        "examTip": "WPA3 = SAE + forward secrecy. Site survey BEFORE deployment."
      },
      {
        "id": "4.4",
        "title": "Asset & Vulnerability Management",
        "definitions": [
          {
            "term": "CVE",
            "def": "Common Vulnerabilities and Exposures — standardized vulnerability ID."
          },
          {
            "term": "CVSS",
            "def": "Common Vulnerability Scoring System — severity score 0-10."
          },
          {
            "term": "Exposure Factor",
            "def": "Percentage of asset value lost if risk occurs."
          },
          {
            "term": "Asset Lifecycle",
            "def": "Acquisition → Assignment → Monitoring → Disposal (secure wipe)."
          }
        ],
        "keyTopics": [
          "Vulnerability scans: credentialed vs non-credentialed",
          "Patch management = subset of vulnerability management",
          "Risk tolerance and environmental scoring variables",
          "Secure disposal: degaussing, shredding, crypto erase"
        ],
        "analogies": [],
        "examTip": "CVE = identifier. CVSS = severity score. Don't confuse them."
      },
      {
        "id": "4.5",
        "title": "Monitoring, SIEM & Alerting",
        "definitions": [
          {
            "term": "SIEM",
            "def": "Aggregates logs from many sources, correlates events, alerts, dashboards."
          },
          {
            "term": "SNMP",
            "def": "Network management protocol for device monitoring."
          },
          {
            "term": "NetFlow",
            "def": "Collects IP traffic flow data for anomaly detection."
          },
          {
            "term": "IoC",
            "def": "Indicator of Compromise — forensic data identifying potential threats."
          }
        ],
        "keyTopics": [
          "Log correlation across sources reveals full attack scope",
          "Alert tuning to reduce false positives",
          "SOAR automates response playbooks",
          "Baselining normal behavior to detect anomalies"
        ],
        "analogies": [
          {
            "title": "SIEM as Detective Agency",
            "text": "Individual logs = witness statements. SIEM = detective connecting clues across all witnesses to see the full crime."
          }
        ],
        "examTip": "SIEM value = correlation across multiple data sources for full incident scope."
      },
      {
        "id": "4.6",
        "title": "Identity & Access Management",
        "definitions": [
          {
            "term": "RBAC",
            "def": "Permissions via roles mapped to job functions."
          },
          {
            "term": "ABAC",
            "def": "Dynamic access based on user/resource/environment attributes."
          },
          {
            "term": "PAM",
            "def": "Privileged Access Management — JIT access, session recording, vaulting."
          },
          {
            "term": "Federation",
            "def": "Cross-org identity trust — SAML, OIDC."
          },
          {
            "term": "Least Privilege",
            "def": "Minimum permissions needed — limits incident scope if compromised."
          }
        ],
        "keyTopics": [
          "SSO vs MFA — complementary, not competing",
          "RBAC pre-scoped roles limit blast radius of compromised accounts",
          "NAC quarantines non-compliant devices",
          "Certificate-based authentication for devices"
        ],
        "analogies": [
          {
            "title": "Hotel Key Card",
            "text": "RBAC = key card only opens your floor and room. ABAC = key works only Mon-Fri, 9-5, from building lobby."
          }
        ],
        "examTip": "Least privilege limits incident scope — common IR/governance crossover answer."
      },
      {
        "id": "4.7",
        "title": "Automation, Orchestration & App Security",
        "definitions": [
          {
            "term": "SOAR",
            "def": "Security Orchestration, Automation, Response — playbook-driven IR automation."
          },
          {
            "term": "Sandboxing",
            "def": "Isolated environment to test suspicious code safely."
          },
          {
            "term": "Input Validation",
            "def": "Checking/sanitizing user input to prevent injection attacks."
          },
          {
            "term": "Code Signing",
            "def": "Digital signature verifying software publisher integrity."
          }
        ],
        "keyTopics": [
          "Static vs dynamic code analysis",
          "Secure cookies (HttpOnly, Secure, SameSite flags)",
          "WAF at Layer 7 for web app protection",
          "Change management integration with automation pipelines"
        ],
        "analogies": [],
        "examTip": "SOAR = automate playbooks. Sandbox = safe malware analysis environment."
      },
      {
        "id": "4.8",
        "title": "Penetration Testing",
        "definitions": [
          {
            "term": "Penetration Test",
            "def": "Authorized simulated attack exploiting vulnerabilities to demonstrate impact."
          },
          {
            "term": "Rules of Engagement",
            "def": "Scope, techniques allowed, timing, damage thresholds — defined BEFORE testing."
          },
          {
            "term": "Vulnerability Assessment",
            "def": "Identifies weaknesses without exploiting them."
          }
        ],
        "keyTopics": [
          "Black box (no knowledge) vs white box (full knowledge) vs gray box",
          "RoE defines purpose, scope, and boundaries",
          "Report findings with remediation recommendations",
          "Bug bounty programs as continuous testing"
        ],
        "analogies": [],
        "examTip": "Pen test = exploits vulns. Vuln assessment = identifies only. RoE required first."
      }
    ],
    "tips": "Domain 4 is the largest — benchmark/baseline hierarchy and MDM models are highest yield.",
    "acronyms": [
      "MDM",
      "UEM",
      "BYOD",
      "COPE",
      "CYOD",
      "WPA3",
      "RADIUS",
      "CVE",
      "CVSS",
      "SIEM",
      "SOAR",
      "PAM",
      "WAF"
    ]
  },
  "5": {
    "summary": "Incident response lifecycle, forensics, evidence handling, backups, and disaster recovery.",
    "objectives": [
      {
        "id": "5.1",
        "title": "Incident Response Lifecycle",
        "definitions": [
          {
            "term": "Preparation",
            "def": "IR plans, trained teams, tooling, communication channels ready."
          },
          {
            "term": "Detection & Analysis",
            "def": "SIEM alerts, user reports, anomaly detection — confirm and scope the incident."
          },
          {
            "term": "Containment",
            "def": "Isolate systems, block IPs, disable accounts — limit damage and scope."
          },
          {
            "term": "Eradication",
            "def": "Remove threat — delete malware, close vulnerabilities, patch."
          },
          {
            "term": "Recovery",
            "def": "Restore from clean backups, verify integrity, return to operations."
          },
          {
            "term": "Lessons Learned",
            "def": "Post-incident review, update playbooks, improve controls."
          }
        ],
        "keyTopics": [
          "Memorize order: Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned",
          "Assess severity/scope BEFORE choosing containment strategy",
          "Containment limits blast radius before eradication",
          "SOAR automates playbook steps across tools",
          "Chain of custody for all evidence"
        ],
        "analogies": [
          {
            "title": "House Fire Response",
            "text": "Preparation = fire drills and extinguishers. Detection = smoke alarm. Containment = close fire doors. Eradication = put out flames. Recovery = rebuild. Lessons = update building codes."
          }
        ],
        "examTip": "Containment comes BEFORE eradication. Never skip to recovery without eradication."
      },
      {
        "id": "5.2",
        "title": "Forensics & Evidence Handling",
        "definitions": [
          {
            "term": "Chain of Custody",
            "def": "Documented evidence handling trail ensuring integrity and admissibility."
          },
          {
            "term": "Order of Volatility",
            "def": "Collect most volatile first: CPU registers → cache → RAM → network → processes → disk → archival."
          },
          {
            "term": "Write Blocker",
            "def": "Prevents writes to original evidence media during imaging."
          },
          {
            "term": "Legal Hold",
            "def": "Preservation order preventing destruction of potential evidence."
          }
        ],
        "keyTopics": [
          "RAM before disk — most volatile evidence lost first",
          "Forensic imaging creates bit-for-bit copy",
          "Document who handled evidence, when, and why",
          "Volatile data collection: live memory, network connections, running processes"
        ],
        "analogies": [
          {
            "title": "Melting Ice Cube",
            "text": "RAM is the ice cube melting in the sun — collect it first or the evidence disappears forever."
          }
        ],
        "examTip": "RAM first, disk later. Write blocker prevents evidence contamination."
      },
      {
        "id": "5.3",
        "title": "Backups & Disaster Recovery",
        "definitions": [
          {
            "term": "3-2-1 Rule",
            "def": "3 copies, 2 different media types, 1 offsite/offline copy."
          },
          {
            "term": "RTO",
            "def": "Recovery Time Objective — max acceptable downtime."
          },
          {
            "term": "RPO",
            "def": "Recovery Point Objective — max acceptable data loss (time)."
          },
          {
            "term": "MTTR",
            "def": "Mean Time To Repair — average time to fix a failure."
          },
          {
            "term": "MTBF",
            "def": "Mean Time Between Failures — average uptime between failures."
          },
          {
            "term": "BIA",
            "def": "Business Impact Analysis — identifies critical functions, sets RTO/RPO."
          }
        ],
        "keyTopics": [
          "Full, incremental, differential backup strategies",
          "Offline/air-gapped backups protect against ransomware",
          "Tabletop exercises test plans without live execution",
          "Jump server/bastion host for audited privileged access",
          "Hot/warm/cold site recovery options"
        ],
        "analogies": [
          {
            "title": "3-2-1 as Insurance",
            "text": "3 copies = original + 2 backups. 2 media = don't put all eggs in one basket type. 1 offsite = fire at home doesn't destroy everything."
          },
          {
            "title": "RTO vs RPO",
            "text": "RTO = how long the store can stay closed. RPO = how much inventory you're willing to lose permanently."
          }
        ],
        "examTip": "RTO = downtime tolerance. RPO = data loss tolerance. BIA drives both."
      }
    ],
    "tips": "Memorize IR phase order. Forensics = volatile first. 3-2-1 backups are exam staples.",
    "acronyms": [
      "IR",
      "SIEM",
      "SOAR",
      "RTO",
      "RPO",
      "MTTR",
      "MTBF",
      "BIA"
    ]
  },
  "6": {
    "summary": "Governance hierarchy, quantitative risk formulas, third-party risk, compliance, audits, and awareness.",
    "objectives": [
      {
        "id": "5.1",
        "title": "Security Governance & Policy Hierarchy",
        "definitions": [
          {
            "term": "Policy",
            "def": "WHY — high-level direction and goals. Broadest, least specific."
          },
          {
            "term": "Standard",
            "def": "WHAT/WHEN — mandatory technical requirements translating policy."
          },
          {
            "term": "Procedure",
            "def": "HOW — step-by-step mandatory instructions."
          },
          {
            "term": "Guideline",
            "def": "COULD — recommended best practice, not mandatory."
          },
          {
            "term": "AUP",
            "def": "Acceptable Use Policy — allowed/prohibited uses of organizational IT."
          }
        ],
        "keyTopics": [
          "Policy → Standard → Procedure → Guideline (specificity increases down chain)",
          "Also know: BCP, DRP, IR policy, SDLC policy",
          "Data roles: Owner, Controller, Processor, Custodian/Steward",
          "Leaders are accountable for risk — accountability cannot be transferred"
        ],
        "analogies": [
          {
            "title": "Recipe Analogy",
            "text": "Policy = recipe goal ('make a secure pie'). Standard = ingredients list (mandatory). Procedure = cooking steps (how to mix and bake). Guideline = chef's suggestions (optional improvements)."
          }
        ],
        "examTip": "Policy = WHY. Standard = WHAT/WHEN mandatory. Procedure = HOW. Guideline = COULD."
      },
      {
        "id": "5.2",
        "title": "Risk Management & Quantitative Analysis",
        "definitions": [
          {
            "term": "Exposure Factor (EF)",
            "def": "Percentage of asset value lost if risk is realized."
          },
          {
            "term": "SLE",
            "def": "Single Loss Expectancy = Asset Value × EF."
          },
          {
            "term": "ARO",
            "def": "Annualized Rate of Occurrence — times per year (0.1 = once per 10 years)."
          },
          {
            "term": "ALE",
            "def": "Annualized Loss Expectancy = SLE × ARO."
          },
          {
            "term": "Risk Appetite",
            "def": "Organization's overall willingness to accept risk."
          },
          {
            "term": "Risk Tolerance",
            "def": "Acceptable variation/deviation around appetite."
          },
          {
            "term": "Residual Risk",
            "def": "Risk remaining after controls and mitigations applied."
          }
        ],
        "keyTopics": [
          "Four strategies: Mitigate, Transfer, Avoid, Accept",
          "Mitigate = implement controls, accept residual risk",
          "Transfer = insurance/contracts (accountability stays with org)",
          "Avoid = don't implement the risky activity",
          "Accept = acknowledge risk, no further action (with sign-off)",
          "Risk register: risks, likelihood, impact, owners, KRIs, status",
          "Qualitative = High/Med/Low matrices; Quantitative = dollar values",
          "SY0-701 expects you to CALCULATE ALE on exam (change from SY0-601)"
        ],
        "analogies": [
          {
            "title": "Car Insurance Math",
            "text": "SLE = cost of one accident ($10K). ARO = accidents per year (0.2). ALE = expected yearly accident cost ($2K). Insurance (transfer) vs driving less (avoid) vs airbags (mitigate)."
          }
        ],
        "examTip": "ALE = SLE × ARO. EF × Asset Value = SLE. ARO 0.1 = once every 10 years. You must do the math."
      },
      {
        "id": "5.3",
        "title": "Third-Party & Supply Chain Risk",
        "definitions": [
          {
            "term": "Due Diligence",
            "def": "Reasonable investigation BEFORE engaging a vendor."
          },
          {
            "term": "Due Care",
            "def": "Reasonable ongoing effort to maintain security AFTER engagement."
          },
          {
            "term": "SLA",
            "def": "Service Level Agreement — performance and security expectations."
          },
          {
            "term": "MOU/MOA",
            "def": "Memorandum of Understanding/Agreement — non-binding cooperation terms."
          }
        ],
        "keyTopics": [
          "Vendor assessment before onboarding",
          "Contract security requirements and right to audit",
          "Continuous vendor monitoring post-onboarding",
          "Secure offboarding — revoke access, return/destroy data"
        ],
        "analogies": [
          {
            "title": "Hiring a Babysitter",
            "text": "Due diligence = checking references before hiring. Due care = calling to check in while you're out."
          }
        ],
        "examTip": "Due diligence = before. Due care = ongoing. Accountability never transfers."
      },
      {
        "id": "5.4",
        "title": "Compliance & Regulations",
        "definitions": [
          {
            "term": "GDPR",
            "def": "EU data protection — consent, right to erasure, breach notification."
          },
          {
            "term": "HIPAA",
            "def": "US healthcare data protection — PHI safeguards."
          },
          {
            "term": "PCI-DSS",
            "def": "Payment card industry security standard."
          },
          {
            "term": "SOX",
            "def": "Sarbanes-Oxley — financial reporting integrity controls."
          },
          {
            "term": "FedRAMP",
            "def": "US federal cloud security authorization program."
          }
        ],
        "keyTopics": [
          "Privacy requirements vary by jurisdiction",
          "Data sovereignty and cross-border transfer restrictions",
          "Compliance audits verify adherence to standards/regulations",
          "FIPS 140-2/3 for federal cryptographic modules"
        ],
        "analogies": [],
        "examTip": "Match regulation to industry: HIPAA=healthcare, PCI=payments, GDPR=EU privacy."
      },
      {
        "id": "5.5",
        "title": "Audits & Assessments",
        "definitions": [
          {
            "term": "Internal Audit",
            "def": "Organization's own audit function — may lack independence."
          },
          {
            "term": "External Audit",
            "def": "Independent third-party — higher confidence attestations."
          },
          {
            "term": "Attestation",
            "def": "Formal auditor statement on control sufficiency."
          },
          {
            "term": "Gap Analysis",
            "def": "Compare current state vs standard — identify control gaps."
          }
        ],
        "keyTopics": [
          "Pen test exploits; vulnerability assessment identifies only",
          "External auditor independence carries more weight",
          "Continuous monitoring vs point-in-time audits",
          "ISO 27001, NIST 800-53, CMMC frameworks"
        ],
        "analogies": [],
        "examTip": "External attestation > internal. Pen test ≠ vuln scan."
      },
      {
        "id": "5.6",
        "title": "Security Awareness & Training",
        "definitions": [
          {
            "term": "Security Awareness",
            "def": "General knowledge program keeping security top-of-mind for all staff."
          },
          {
            "term": "Role-Based Training",
            "def": "Specialized training for specific job functions (developers, admins)."
          },
          {
            "term": "Phishing Simulation",
            "def": "Controlled fake phishing to measure and improve user vigilance."
          }
        ],
        "keyTopics": [
          "Insider threat indicators: unusual hours, bulk data transfers, access outside role",
          "Gamification and newsletters increase engagement",
          "Report suspicious activity culture",
          "Onboarding and offboarding security training",
          "KRIs in risk register signal emerging risks"
        ],
        "analogies": [
          {
            "title": "Fire Drill for Cyber",
            "text": "Phishing simulations = fire drills. You want people to practice the right response before a real emergency."
          }
        ],
        "examTip": "Insider indicators: unusual hours + bulk exfiltration + access outside job role."
      }
    ],
    "tips": "You must calculate ALE on SY0-701. Recipe analogy for policy hierarchy. Due diligence vs due care.",
    "acronyms": [
      "ALE",
      "SLE",
      "ARO",
      "EF",
      "BIA",
      "KRI",
      "GDPR",
      "HIPAA",
      "PCI-DSS",
      "SOX",
      "AUP"
    ]
  }
};

(function() {
  window.SECPLUS_STUDY_GUIDE = window.SECPLUS_STUDY_GUIDE || {};
  Object.keys(window.SECPLUS_DEEP_GUIDE).forEach(function(k) {
    var id = parseInt(k);
    var deep = window.SECPLUS_DEEP_GUIDE[id];
    var base = window.SECPLUS_STUDY_GUIDE[id] || {};
    window.SECPLUS_STUDY_GUIDE[id] = Object.assign({}, base, deep, {
      sections: base.sections || [],
      source: "Exam Cram PDFs + Lecture Transcripts (Pete Zerger)"
    });
  });
})();

/* === flashcard-pack.js === */
// Auto-generated from Desktop/DOMAIN 1-5 FLLASHCARDZ HTML files

window.SECPLUS_FLASHCARD_PACK = [
  { domain: 1, q: "[FC] Which category consists of hardware or software mechanisms?", a: "Technical", tag: "1.1 Categories" },
  { domain: 1, q: "[FC] Which category focuses on policies, procedures, and administrative controls?", a: "Managerial", tag: "1.1 Categories" },
  { domain: 1, q: "[FC] Which category is primarily executed by people?", a: "Operational", tag: "1.1 Categories" },
  { domain: 1, q: "[FC] Which category protects facilities and tangible objects?", a: "Physical", tag: "1.1 Categories" },
  { domain: 1, q: "[FC] Technical controls mnemonic?", a: "Technology (hardware and software)", tag: "1.1 Mnemonics" },
  { domain: 1, q: "[FC] Physical controls mnemonic?", a: "Tangible (touchable)", tag: "1.1 Mnemonics" },
  { domain: 1, q: "[FC] Managerial controls mnemonic?", a: "Policy (and policy implementation)", tag: "1.1 Mnemonics" },
  { domain: 1, q: "[FC] Operational controls mnemonic?", a: "People (doing stuff)", tag: "1.1 Mnemonics" },
  { domain: 1, q: "[FC] Name the six control types (functions).", a: "Preventive, Deterrent, Detective, Corrective, Compensating, Directive", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] What type of control stops unwanted activity from occurring?", a: "Preventive", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] What type of control discourages violation of security policies?", a: "Deterrent", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] What type of control discovers or detects unwanted activity?", a: "Detective", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] What type of control restores systems to normal after an incident?", a: "Corrective", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] What type of control provides alternatives to other controls?", a: "Compensating", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] What type of control directs/confines actions to encourage compliance?", a: "Directive", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] A security camera is both deterrent and detective. This demonstrates what?", a: "Control overlap — one control can serve multiple types depending on context", tag: "1.1 Overlap" },
  { domain: 1, q: "[FC] An ACL can be preventive (blocks) or detective (logs). This shows?", a: "Context matters when classifying controls", tag: "1.1 Overlap" },
  { domain: 1, q: "[FC] Safeguards: proactive or reactive?", a: "Proactive — reduce the likelihood of occurrence", tag: "1.1 Safeguards" },
  { domain: 1, q: "[FC] Countermeasures: proactive or reactive?", a: "Reactive — reduce the impact after occurrence", tag: "1.1 Countermeasures" },
  { domain: 1, q: "[FC] What does CIA stand for?", a: "Confidentiality, Integrity, Availability", tag: "1.2 CIA" },
  { domain: 1, q: "[FC] Confidentiality ensures...", a: "Only authorized subjects can access objects", tag: "1.2 CIA" },
  { domain: 1, q: "[FC] Integrity ensures...", a: "Data/system configurations are not modified without authorization", tag: "1.2 CIA" },
  { domain: 1, q: "[FC] Availability ensures...", a: "Authorized users can access systems and data when needed", tag: "1.2 CIA" },
  { domain: 1, q: "[FC] What is non-repudiation?", a: "The inability to deny that an action was performed (digital signatures, logs)", tag: "1.2 Core" },
  { domain: 1, q: "[FC] What does AAA stand for?", a: "Authentication, Authorization, Accounting", tag: "1.2 AAA" },
  { domain: 1, q: "[FC] Authentication is...", a: "Verifying the identity of a user or system", tag: "1.2 AAA" },
  { domain: 1, q: "[FC] Authorization is...", a: "Determining what an authenticated subject is allowed to do", tag: "1.2 AAA" },
  { domain: 1, q: "[FC] Accounting is...", a: "Logging and auditing actions performed by subjects", tag: "1.2 AAA" },
  { domain: 1, q: "[FC] What is gap analysis?", a: "Comparing current security state vs desired state to identify gaps", tag: "1.2 Core" },
  { domain: 1, q: "[FC] Zero Trust core principle?", a: "Never trust, always verify", tag: "1.2 Zero Trust" },
  { domain: 1, q: "[FC] Main components of the Zero Trust Control Plane?", a: "Policy Engine, Policy Administrator, Adaptive identity, Threat scope reduction, Policy-driven access control", tag: "1.2 Zero Trust" },
  { domain: 1, q: "[FC] Main components of the Zero Trust Data Plane?", a: "Policy Enforcement Point (PEP), Implicit trust zones, Subject/System", tag: "1.2 Zero Trust" },
  { domain: 1, q: "[FC] What physical control prevents vehicles from ramming a building?", a: "Bollards", tag: "1.2 Physical" },
  { domain: 1, q: "[FC] What is an access control vestibule also called?", a: "Mantrap", tag: "1.2 Physical" },
  { domain: 1, q: "[FC] List four examples of physical security sensors.", a: "Infrared, Pressure, Microwave, Ultrasonic", tag: "1.2 Physical" },
  { domain: 1, q: "[FC] What is a honeypot?", a: "A decoy system designed to attract and trap attackers", tag: "1.2 Deception" },
  { domain: 1, q: "[FC] What is a honeynet?", a: "A network of honeypots", tag: "1.2 Deception" },
  { domain: 1, q: "[FC] What is a honeyfile?", a: "A fake/decoy file monitored for unauthorized access", tag: "1.2 Deception" },
  { domain: 1, q: "[FC] What is a honeytoken?", a: "Fake data or credentials planted to detect unauthorized use", tag: "1.2 Deception" },
  { domain: 1, q: "[FC] A single control can be identified as multiple types depending on?", a: "The context of the situation and how it is implemented", tag: "1.1 Overlap" },
  { domain: 1, q: "[FC] Controls are designed to work together and their functions often?", a: "Overlap", tag: "1.1 Overlap" },
  { domain: 1, q: "[FC] Which control type picks up where prevention leaves off?", a: "Deterrent", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] Which control type is often after-the-fact rather than real-time?", a: "Detective", tag: "1.1 Control Types" },
  { domain: 1, q: "[FC] Examples of Technical controls?", a: "Encryption, Firewalls, IDS/IPS, ACLs, Passwords, Biometrics", tag: "1.1 Examples" },
  { domain: 2, q: "[FC] What are the six categories of threat actors?", a: "Nation-state, Unskilled attacker, Hacktivist, Insider threat, Organized crime, Shadow IT", tag: "2.1 Threat Actors" },
  { domain: 2, q: "[FC] Which threat actor type is a country's government using cyberattacks?", a: "Nation-state", tag: "2.1 Threat Actors" },
  { domain: 2, q: "[FC] Which threat actor has limited technical knowledge and may attack out of curiosity?", a: "Unskilled attacker", tag: "2.1 Threat Actors" },
  { domain: 2, q: "[FC] Which threat actor uses cyberattacks to promote a political or social cause?", a: "Hacktivist", tag: "2.1 Threat Actors" },
  { domain: 2, q: "[FC] Which threat actor is an authorized internal user who misuses access?", a: "Insider threat", tag: "2.1 Threat Actors" },
  { domain: 2, q: "[FC] Which threat actor uses cyberattacks primarily for financial gain via syndicates?", a: "Organized crime", tag: "2.1 Threat Actors" },
  { domain: 2, q: "[FC] List the threat actor attribute categories.", a: "Internal/external, Resources/funding, Level of sophistication/capability", tag: "2.1 Attributes" },
  { domain: 2, q: "[FC] List common attacker motivations (Security+ exam).", a: "Data exfiltration, Espionage, Service disruption, Blackmail, Financial gain, Philosophical/political beliefs, Ethical, Revenge, Disruption/chaos, War", tag: "2.1 Motivations" },
  { domain: 2, q: "[FC] What is the goal of espionage as a motivation?", a: "Stealing confidential information from another organization, often via nation-states or corporations", tag: "2.1 Motivations" },
  { domain: 2, q: "[FC] What is ethical hacking?", a: "Authorized simulated attacks by security researchers to find vulnerabilities and improve security posture", tag: "2.1 Motivations" },
  { domain: 2, q: "[FC] What is cyberwarfare?", a: "War waged through cyberattacks by military or civilian groups to disrupt enemy operations", tag: "2.1 Motivations" },
  { domain: 2, q: "[FC] Which threat actor has high skill and high resources/government backing, motivated by espionage?", a: "Nation-state", tag: "2.1 Actor Profiles" },
  { domain: 2, q: "[FC] Which threat actor uses automated tools and limited knowledge, often via phishing?", a: "Unskilled attacker", tag: "2.1 Actor Profiles" },
  { domain: 2, q: "[FC] Which threat actor combination is the MOST dangerous to an organization?", a: "High skill + High funding", tag: "2.1 Skill/Funding Impact" },
  { domain: 2, q: "[FC] Which threat actor combination is least dangerous (but still a threat)?", a: "Low skill + Low funding", tag: "2.1 Skill/Funding Impact" },
  { domain: 2, q: "[FC] What is a threat vector?", a: "A method or combination of methods attackers use to gain unauthorized access — the pathway to exploit a vulnerability", tag: "2.2 Definitions" },
  { domain: 2, q: "[FC] What is an attack surface?", a: "The sum total of all possible entry points an attacker can exploit on a system", tag: "2.2 Definitions" },
  { domain: 2, q: "[FC] In the castle analogy, what represents the attack surface vs threat vector?", a: "Attack surface = the entire castle and all its weaknesses; threat vector = one specific way to breach it", tag: "2.2 Analogy" },
  { domain: 2, q: "[FC] List the message-based threat vector types.", a: "Email, SMS, Instant Messaging (IM)", tag: "2.2 Message-Based" },
  { domain: 2, q: "[FC] What threat does steganography pose as an image-based vector?", a: "Hiding malware within images to evade detection", tag: "2.2 Image-Based" },
  { domain: 2, q: "[FC] Why are AI voice deepfakes relevant to voice call threat vectors?", a: "They make 'stop and verify' procedures a necessity to counter vishing/impersonation", tag: "2.2 Voice Call" },
  { domain: 2, q: "[FC] What's the difference between client-based and agentless vulnerable software?", a: "Client-based requires a local app/agent installed; agentless doesn't need a separate agent, has less attack surface but less configurability and patching options", tag: "2.2 Vulnerable Software" },
  { domain: 2, q: "[FC] What mitigates risk from unsupported systems and applications?", a: "Network segmentation and/or isolation", tag: "2.2 Unsupported Systems" },
  { domain: 2, q: "[FC] What are the three unsecure network types listed for Domain 2?", a: "Wireless, Wired, Bluetooth", tag: "2.2 Unsecure Networks" },
  { domain: 2, q: "[FC] What is the primary risk of open service ports?", a: "Attackers exploiting vulnerabilities in exposed services running on unnecessary open ports", tag: "2.2 Open Ports" },
  { domain: 2, q: "[FC] What is the risk of default credentials?", a: "Brute-force attacks guessing factory default usernames/passwords left unchanged", tag: "2.2 Default Credentials" },
  { domain: 2, q: "[FC] What are the supply chain risk categories?", a: "Managed Service Providers (MSPs), Vendors, Suppliers", tag: "2.2 Supply Chain" },
  { domain: 2, q: "[FC] List the principles of social engineering (persuasion principles).", a: "Authority, Intimidation, Consensus, Scarcity, Familiarity/liking, Trust, Urgency", tag: "2.2 Social Engineering" },
  { domain: 2, q: "[FC] Which social engineering principle involves citing position/responsibility to make a request?", a: "Authority", tag: "2.2 Social Engineering" },
  { domain: 2, q: "[FC] Which social engineering principle claims a peer already did the same task?", a: "Consensus", tag: "2.2 Social Engineering" },
  { domain: 2, q: "[FC] What is the difference between spear phishing and whaling?", a: "Spear phishing targets specific groups of users; whaling targets high-level executives", tag: "2.2 Phishing" },
  { domain: 2, q: "[FC] What is vishing vs smishing?", a: "Vishing = voice/phone-based phishing; Smishing = SMS/text-based phishing", tag: "2.2 Phishing" },
  { domain: 2, q: "[FC] What is pretexting?", a: "An attacker invents a story/scenario (pretext) to convince a victim to give up information or access", tag: "2.2 Pretexting" },
  { domain: 2, q: "[FC] What is typosquatting also known as?", a: "URL hijacking — registering domains with slight misspellings of popular sites", tag: "2.2 Typosquatting" },
  { domain: 2, q: "[FC] Define vulnerability, threat, exploit, and attack.", a: "Vulnerability = a weakness; Threat = potential event that could exploit it; Exploit = method/tool to take advantage of it; Attack = the actual attempt to exploit it", tag: "2.3 Core Terms" },
  { domain: 2, q: "[FC] In the house analogy, what is the vulnerability, threat, exploit, and attack?", a: "Weak lock = vulnerability; burglar = threat; crowbar = exploit; breaking in = attack", tag: "2.3 Analogy" },
  { domain: 2, q: "[FC] What is a buffer overflow?", a: "Code doesn't validate user input size, allowing data to overflow its allocated memory buffer; prevent with input validation", tag: "2.3 Buffer Overflow" },
  { domain: 2, q: "[FC] What is memory injection?", a: "Maliciously inserting information into memory — the primary goal of a buffer overflow attack", tag: "2.3 Buffer Overflow" },
  { domain: 2, q: "[FC] What is an integer overflow?", a: "An arithmetic error where an integer operation's result doesn't fit its allocated memory space, causing unexpected results", tag: "2.3 Integer Overflow" },
  { domain: 2, q: "[FC] What countermeasures help prevent integer overflow?", a: "Secure coding practices, proper variable typing, using larger variable types (e.g., long, long int)", tag: "2.3 Integer Overflow" },
  { domain: 2, q: "[FC] Define Time-of-Check (TOC) and Time-of-Use (TOU).", a: "TOC = moment a system verifies access permissions; TOU = moment the system actually uses/accesses the resource", tag: "2.3 Race Conditions" },
  { domain: 2, q: "[FC] What is a TOCTOU vulnerability?", a: "A timing vulnerability where a program checks access permissions too far in advance of the resource request", tag: "2.3 Race Conditions" },
  { domain: 2, q: "[FC] What is a malicious update attack and its mitigation?", a: "An attacker deploys a fake patch to compromise a system; mitigated by code signing and only accepting signed updates", tag: "2.3 Malicious Updates" },
  { domain: 2, q: "[FC] What OS-based vulnerability allows attackers to gain higher privileges than intended?", a: "Privilege escalation — mitigated by requiring auth to elevate (UAC, sudo)", tag: "2.3 OS Vulnerabilities" },
  { domain: 2, q: "[FC] What is a zero-day vulnerability?", a: "A vulnerability unknown to the vendor (or known only to a limited group), with no patch available — very dangerous", tag: "2.3 Zero-Day" },
  { domain: 2, q: "[FC] What is SQL injection?", a: "Using unexpected input to a web app to gain unauthorized access to the underlying database", tag: "2.3 Web-Based Threats" },
  { domain: 2, q: "[FC] What are the countermeasures for SQL injection?", a: "Input validation, stored procedures, limiting account privileges, and WAF", tag: "2.3 Web-Based Threats" },
  { domain: 2, q: "[FC] What defenses mitigate XSS?", a: "Input validation and filtering, validating both data length and data type", tag: "2.3 Web-Based Threats" },
  { domain: 2, q: "[FC] What hardware control helps prevent firmware attacks?", a: "A TPM (Trusted Platform Module) to facilitate a secure boot process", tag: "2.3 Hardware Vulnerabilities" },
  { domain: 2, q: "[FC] What is the exam definition of 'legacy' hardware/software?", a: "Hardware, software, or devices that are unsupported", tag: "2.3 Hardware Vulnerabilities" },
  { domain: 2, q: "[FC] What is VM escape?", a: "An attacker gains access to a VM, then attacks the host, hypervisor, or other VMs", tag: "2.3 Virtualization" },
  { domain: 2, q: "[FC] How do you protect against VM escape?", a: "Keep hypervisor/VM patches current, use low guest privileges, server-level redundancy, HIPS/HIDS", tag: "2.3 Virtualization" },
  { domain: 2, q: "[FC] What is resource reuse risk in the cloud?", a: "Cloud providers reassign hardware between customers, risking data remanence from incomplete erasure; mitigate with encryption", tag: "2.3 Cloud-Specific" },
  { domain: 2, q: "[FC] What is the 'CSA Egregious 11'?", a: "A list of the top 11 cloud-specific security threats from the Cloud Security Alliance", tag: "2.3 Cloud-Specific" },
  { domain: 2, q: "[FC] Name 5 items from the CSA Egregious 11.", a: "Data breaches, Misconfiguration/inadequate change control, Lack of cloud security strategy, Insufficient IAM/key management, Account hijacking (any 5 of the 11)", tag: "2.3 Cloud-Specific" },
  { domain: 2, q: "[FC] What is the difference between metastructure and applistructure?", a: "Metastructure = protocols/mechanisms interfacing cloud layers for management; Applistructure = apps deployed in the cloud and their underlying services", tag: "2.3 Cloud-Specific" },
  { domain: 2, q: "[FC] What are the main cloud risk mitigation strategies?", a: "Select a qualified CSP, design/architect with security in mind, encrypt data at rest and in transit, ongoing monitoring", tag: "2.3 Cloud Mitigation" },
  { domain: 2, q: "[FC] List the 8 types of cryptographic vulnerabilities.", a: "Weak encryption, Improper key management, Inadequate randomness, Inadequate authentication, Key lifetimes, Public key length, Symmetric key length, Strength of implementation", tag: "2.3 Cryptographic Vulns" },
  { domain: 2, q: "[FC] What random number generator should be used for cryptographic keys?", a: "True Random Number Generator (TRNG), not a Pseudo Random Number Generator (PRNG)", tag: "2.3 Cryptographic Vulns" },
  { domain: 2, q: "[FC] What is the recommended max lifespan for client/server certificates?", a: "Approximately one year", tag: "2.3 Cryptographic Vulns" },
  { domain: 2, q: "[FC] What is the recommended key length for x.509 certificates?", a: "2048-bit", tag: "2.3 Cryptographic Vulns" },
  { domain: 2, q: "[FC] What AES key length is required in some U.S. government scenarios?", a: "256-bit", tag: "2.3 Cryptographic Vulns" },
  { domain: 2, q: "[FC] What prevents misconfiguration vulnerabilities?", a: "Infrastructure-as-code, configuration management tools, CI/CD, checklists/templates, change management, regular audits/scans", tag: "2.3 Misconfiguration" },
  { domain: 2, q: "[FC] What is the difference between rooting and jailbreaking?", a: "Rooting = Android equivalent of gaining elevated permissions via custom firmware; Jailbreaking = the iOS equivalent, removes device security restrictions", tag: "2.3 Mobile Device" },
  { domain: 2, q: "[FC] What is sideloading?", a: "Installing an application package (.apk) on a mobile device outside the official app store, allowing unauthorized software", tag: "2.3 Mobile Device" },
  { domain: 2, q: "[FC] What is bloatware?", a: "Unnecessary pre-installed software that consumes resources; not malicious but unwanted and hard to remove", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] What is a keylogger and how do you mitigate it?", a: "Software/hardware recording keystrokes to steal credentials; mitigate with virtual keyboards, MFA, and OS/app updates", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] What are multipartite, stealth, and polymorphic viruses?", a: "Multipartite: uses multiple propagation techniques; Stealth: tampers with OS to hide from AV; Polymorphic: modifies its own code as it spreads", tag: "2.4 Virus Types" },
  { domain: 2, q: "[FC] What is a logic bomb?", a: "Malicious code triggered at a predetermined time or event, can erase data, corrupt files, or disable systems", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] What is ransomware and what variant is it based on?", a: "Malware that encrypts files and demands payment for the decryption key; ransomware is a trojan variant", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] What are ransomware countermeasures?", a: "Back up your computer, store backups separately, user awareness training", tag: "2.4 Ransomware" },
  { domain: 2, q: "[FC] What is a trojan and its primary defense?", a: "Software that appears harmless but carries a malicious hidden payload; defend by only allowing trusted software sources and restricting user installs", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] What is spyware?", a: "Software that monitors/steals user activity (keystrokes, passwords, browsing) without knowledge", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] What is a worm and how does it spread?", a: "A self-replicating program that spreads across a network exploiting software/hardware vulnerabilities", tag: "2.4 Malware" },
  { domain: 2, q: "[FC] List the categories of indicators of malicious activity.", a: "Account lockout, Concurrent session usage, Blocked content, Impossible travel, Resource consumption, Resource inaccessibility, Out-of-cycle logging, Published/documented, Missing logs", tag: "2.4 Indicators" },
  { domain: 2, q: "[FC] What does 'impossible travel' indicate?", a: "Login attempts from geographically distant locations in too short a time, suggesting stolen credentials", tag: "2.4 Indicators" },
  { domain: 2, q: "[FC] What does 'concurrent session usage' indicate?", a: "Access from geographically impossible locations at the same time, suggesting account compromise", tag: "2.4 Indicators" },
  { domain: 2, q: "[FC] What physical attack indicators relate to brute-force entry?", a: "Resource inaccessibility (damaged equipment), out-of-cycle logging (alarms triggered), missing logs (tampered cameras)", tag: "2.4 Physical Attacks" },
  { domain: 2, q: "[FC] What is RFID cloning and its mitigations?", a: "Cloning an RFID badge for unauthorized access; mitigate with encryption, shielded badge holders, anomaly detection", tag: "2.4 Physical Attacks" },
  { domain: 2, q: "[FC] What is the difference between DoS and DDoS?", a: "DoS = single-source resource consumption attack to prevent legitimate use; DDoS = same attack using multiple compromised systems", tag: "2.4 Network Attacks" },
  { domain: 2, q: "[FC] What is a reflected DDoS attack?", a: "Attacker sends requests with a spoofed source IP (the victim's) to a third party, which sends responses to the victim", tag: "2.4 Network Attacks" },
  { domain: 2, q: "[FC] What is an amplified DDoS attack?", a: "Uses reflection plus amplification — a small attacker request generates a much larger response sent to the victim", tag: "2.4 Network Attacks" },
  { domain: 2, q: "[FC] What is the difference between DNS poisoning and DNS spoofing?", a: "Poisoning alters DNS-to-IP mappings in the DNS system; spoofing sends false replies that beat the legitimate DNS server's response", tag: "2.4 DNS Attacks" },
  { domain: 2, q: "[FC] What is domain hijacking?", a: "Changing a domain's registration through technical exploits or social engineering against the registrar", tag: "2.4 DNS Attacks" },
  { domain: 2, q: "[FC] What countermeasures protect against DNS attacks?", a: "Allow only authorized DNS changes, restrict zone transfers, use verified forwarders, log privileged DNS activity, use DNSSEC", tag: "2.4 DNS Attacks" },
  { domain: 2, q: "[FC] What are bluejacking, bluesnarfing, and bluebugging?", a: "Bluejacking = unsolicited annoying messages; Bluesnarfing = data theft via Bluetooth; Bluebugging = creates a backdoor for eavesdropping/hacking", tag: "2.4 Wireless Attacks" },
  { domain: 2, q: "[FC] What is an evil twin vs a rogue access point?", a: "Evil twin = malicious AP mimicking a legitimate trusted network; Rogue AP = unauthorized AP added to the network (intentional or not)", tag: "2.4 Wireless Attacks" },
  { domain: 2, q: "[FC] What countermeasures address evil twins and rogue APs?", a: "Network monitoring, network segmentation, strong protocols (WPA2/WPA3), periodic network scans", tag: "2.4 Wireless Attacks" },
  { domain: 2, q: "[FC] What is an on-path (man-in-the-middle) attack?", a: "Attacker sits between two endpoints, intercepting/altering traffic while both parties think they're communicating directly", tag: "2.4 On-Path Attacks" },
  { domain: 2, q: "[FC] What countermeasures address on-path attacks?", a: "Secured Wi-Fi, VPN, HTTPS, and multi-factor authentication", tag: "2.4 On-Path Attacks" },
  { domain: 2, q: "[FC] What is a credential replay attack?", a: "Stealing/capturing legitimate login credentials (password, session token) and reusing them for unauthorized access", tag: "2.4 Network Attacks" },
  { domain: 2, q: "[FC] What countermeasures address credential replay?", a: "MFA, regular password rotation, secure login protocols, session/idle timeout, security training, log monitoring", tag: "2.4 Network Attacks" },
  { domain: 2, q: "[FC] What is directory traversal?", a: "Gaining access to restricted directories outside the web root, often via command injection; mitigated by scanning and patching", tag: "2.4 Application Attacks" },
  { domain: 2, q: "[FC] What is session replay?", a: "Attacker captures a legitimate user's session token/cookie and reuses it to gain unauthorized access", tag: "2.4 Application Attacks" },
  { domain: 2, q: "[FC] What countermeasures address session replay?", a: "Short-lived session tokens, invalidate sessions on logout, CSRF protection, MFA, server-side validation", tag: "2.4 Application Attacks" },
  { domain: 2, q: "[FC] What is the difference between CSRF and SSRF?", a: "CSRF exploits a site's trust of the user's browser to execute unwanted actions; SSRF exploits the server's trust of user-provided URLs to make unintended requests", tag: "2.4 Request Forgeries" },
  { domain: 2, q: "[FC] What is a collision attack?", a: "An attack on a cryptographic hash to find two inputs producing the same hash value; countered with collision-resistant hashing", tag: "2.4 Cryptographic Attacks" },
  { domain: 2, q: "[FC] What is a downgrade attack?", a: "Forcing a protocol to a lower-quality/older version, commonly targeting TLS", tag: "2.4 Cryptographic Attacks" },
  { domain: 2, q: "[FC] What is a birthday attack?", a: "Uses the birthday paradox to find hash collisions more easily, commonly targeting digital signatures", tag: "2.4 Cryptographic Attacks" },
  { domain: 2, q: "[FC] What is password spraying and its countermeasures?", a: "Trying one password against many accounts to avoid lockouts; countered with MFA, CAPTCHA, forced password change on first login", tag: "2.4 Password Attacks" },
  { domain: 2, q: "[FC] What is a brute force password attack and its countermeasures?", a: "Trying all possible combinations to find a password; countered with salts, CAPTCHA, login rate throttling, IP blocklists", tag: "2.4 Password Attacks" },
  { domain: 2, q: "[FC] List the 11+ mitigation techniques covered in 2.5.", a: "Segmentation, Access control, Application allow list, Isolation, Patching, Encryption, Monitoring, Least privilege, Configuration enforcement, Decommissioning, Hardening techniques", tag: "2.5 Mitigation Overview" },
  { domain: 2, q: "[FC] What's the difference between a mitigation technique and a security control?", a: "Mitigation reduces severity/risk of potential consequences (managing risk); security controls are safeguards/countermeasures protecting assets (proactive or reactive)", tag: "2.5 Definitions" },
  { domain: 2, q: "[FC] What's the difference between physical and logical segmentation, and which is typical on-prem vs cloud?", a: "Physical = hardware-based, Logical = software/configuration-based; on-prem can use either, cloud is usually logical", tag: "2.5 Segmentation" },
  { domain: 2, q: "[FC] What are the 3 reasons for segmentation?", a: "Boosting performance, reducing communication problems (e.g., broadcast storms), providing security (isolating traffic/access)", tag: "2.5 Segmentation" },
  { domain: 2, q: "[FC] What is a VPC and how is it named across AWS, Azure, and GCP?", a: "Virtual Private Cloud — isolated cloud network; AWS calls it VPC, Azure calls it VNET, GCP calls it VPC", tag: "2.5 Cloud Segmentation" },
  { domain: 2, q: "[FC] What does a Network Security Group (NSG) do?", a: "Acts as a layer 4 virtual firewall for VPCs/VNETs and resource instances using IP/port allow-deny rules", tag: "2.5 Cloud Segmentation" },
  { domain: 2, q: "[FC] How does mobile app management (MAM) support segmentation in BYOD?", a: "Keeps personal and business data separate, preventing business data from leaking into personal apps", tag: "2.5 Segmentation" },
  { domain: 2, q: "[FC] What is the difference between MAC, DAC, and rule-based access control?", a: "MAC = system-enforced policy via classification labels; DAC = owner/creator controls access (e.g., NTFS permissions); Rule-based = specific functions defined for access (e.g., firewall ACLs)", tag: "2.5 Access Control" },
  { domain: 2, q: "[FC] What is role-based access control (RBAC)?", a: "Uses defined job roles, each endowed with specific permissions, so users access only what they need for their job", tag: "2.5 Access Control" },
  { domain: 2, q: "[FC] What is the difference between an application allow list and deny list?", a: "Allow list permits only explicitly approved apps to run (more restrictive); deny list blocks specific apps while allowing everything else (more permissive)", tag: "2.5 Access Control" },
  { domain: 2, q: "[FC] What is an air gap?", a: "Isolation that eliminates all network connectivity; data moves only via removable media like USB", tag: "2.5 Isolation" },
  { domain: 2, q: "[FC] What is a Faraday cage used for?", a: "Blocking electromagnetic signals (e.g., cellular) from entering or exiting, used for confidential meetings/devices", tag: "2.5 Isolation" },
  { domain: 2, q: "[FC] What does patch management (update management) involve?", a: "Evaluating, testing, approving, deploying patches, and auditing to verify deployment across OS and 3rd party apps", tag: "2.5 Patching" },
  { domain: 2, q: "[FC] What is a Hardware Root of Trust?", a: "A line of defense verifying keys match before secure boot, used with certificates for FDE", tag: "2.5 Encryption" },
  { domain: 2, q: "[FC] What is a TPM (Trusted Platform Module)?", a: "A motherboard chip storing/managing encryption keys for FDE and secure boot; encrypted data is inaccessible if the drive is removed", tag: "2.5 Encryption" },
  { domain: 2, q: "[FC] What is the difference between FDE and SED?", a: "FDE (Full Disk Encryption, e.g., Bitlocker) is OS-based with keys on the TPM; SED (Self-Encrypting Drive) has encryption built into the drive hardware itself, following the Opal Storage Specification", tag: "2.5 Encryption" },
  { domain: 2, q: "[FC] What is measured boot?", a: "All boot components (firmware, apps, software) are measured and logged, with the log stored on the TPM", tag: "2.5 Boot Integrity" },
  { domain: 2, q: "[FC] What does UEFI provide that BIOS cannot?", a: "Support for secure boot of the OS", tag: "2.5 Boot Integrity" },
  { domain: 2, q: "[FC] What's the difference between SIEM and SOAR?", a: "SIEM collects/correlates data for real-time monitoring and alerting; SOAR provides centralized automated/single-click response via playbooks", tag: "2.5 Monitoring" },
  { domain: 2, q: "[FC] What is the difference between need-to-know and least privilege?", a: "Need-to-know limits info access to those who require it; least privilege gives subjects only the privileges necessary for their job tasks", tag: "2.5 Limiting Access" },
  { domain: 2, q: "[FC] What is separation of duties?", a: "Ensures no single person controls all elements of a critical function, reducing collusion risk", tag: "2.5 Limiting Access" },
  { domain: 2, q: "[FC] What is the difference between configuration management and change management?", a: "Configuration management ensures systems are similarly configured and documented (baselining); change management requires changes to be requested, approved, tested, and documented", tag: "2.5 Configuration Enforcement" },
  { domain: 2, q: "[FC] What does proper decommissioning require?", a: "Securely disposing of retired hardware so data is not forensically recoverable; crypto-shredding discards encryption keys to render data unrecoverable", tag: "2.5 Decommissioning" },
  { domain: 2, q: "[FC] What are the 4 types of endpoint protection to know for the exam?", a: "Antivirus, EDR (Endpoint Detection and Response), XDR (Extended Detection and Response), HIPS (Host Intrusion Prevention System)", tag: "2.5 Hardening" },
  { domain: 2, q: "[FC] What is the difference between EDR and XDR?", a: "EDR focuses on detection/response at the endpoint level; XDR extends beyond the endpoint to network devices, cloud infrastructure, and IoT for a broader view", tag: "2.5 Hardening" },
  { domain: 2, q: "[FC] What's the difference between HIDS and HIPS?", a: "HIDS detects known events in packets and logs them; HIPS detects known events and actively rejects the packet", tag: "2.5 Hardening" },
  { domain: 2, q: "[FC] What hardening steps should be taken for unused ports/services?", a: "Restrict listening ports to those necessary, filter traffic, disable unused services, block via firewalls", tag: "2.5 Hardening" },
  { domain: 2, q: "[FC] What should be done with default passwords and unnecessary software during hardening?", a: "Change default passwords before deployment; remove unnecessary software to reduce attack surface and patching burden", tag: "2.5 Hardening" },
  { domain: 3, q: "[FC] What are the three cloud service models (XaaS)?", a: "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)", tag: "3.1 Cloud Models" },
  { domain: 3, q: "[FC] In IaaS, what is the customer responsible for vs the CSP?", a: "Customer: VMs, virtual network, guest OS security (as if on-prem). CSP: physical host, storage, and network", tag: "3.1 IaaS" },
  { domain: 3, q: "[FC] In PaaS, what is the CSP responsible for?", a: "Physical components, internal network, and the tools/platform provided — cheaper for customer but less control", tag: "3.1 PaaS" },
  { domain: 3, q: "[FC] In SaaS, what remains the customer's responsibility?", a: "Configuring user access to the cloud service, plus shared responsibility for data recovery", tag: "3.1 SaaS" },
  { domain: 3, q: "[FC] In the shared responsibility model for on-premises, who is responsible for everything?", a: "The customer (100% theirs) — applications, data, runtime, middleware, OS, virtualization, servers, storage, networking", tag: "3.1 Shared Responsibility" },
  { domain: 3, q: "[FC] As you move from on-prem to IaaS to PaaS to SaaS, what happens to customer responsibility?", a: "Customer responsibility decreases and CSP responsibility increases (with a shared zone in the middle)", tag: "3.1 Shared Responsibility" },
  { domain: 3, q: "[FC] Describe the public cloud deployment model.", a: "Everything runs on the cloud provider's hardware; advantages include scalability, agility, pay-as-you-go (PAYG), no maintenance, low skills required", tag: "3.1 Cloud Deployment" },
  { domain: 3, q: "[FC] Describe the private cloud deployment model.", a: "A cloud environment in your own datacenter, dedicated to a single customer; advantages include legacy support, control, and compliance", tag: "3.1 Cloud Deployment" },
  { domain: 3, q: "[FC] Describe the hybrid cloud deployment model.", a: "Combines public and private clouds, allowing apps to run in the right location; offers flexibility for legacy, compliance, and scalability while controlling pace of public cloud adoption", tag: "3.1 Cloud Deployment" },
  { domain: 3, q: "[FC] Describe the community cloud deployment model.", a: "Similar to private cloud (not open to the general public) but shared by several related organizations in a common community", tag: "3.1 Cloud Deployment" },
  { domain: 3, q: "[FC] Describe the multi-cloud deployment model.", a: "Combines resources from two or more public cloud providers, allowing orgs to leverage service/price differences at the cost of added complexity", tag: "3.1 Cloud Deployment" },
  { domain: 3, q: "[FC] What should the logical design of cloud infrastructure achieve?", a: "Create tenant partitioning/isolation, limit and secure remote access, monitor the infrastructure, allow patching/updating of systems", tag: "3.1 Third Party" },
  { domain: 3, q: "[FC] What is multitenancy and its security concern?", a: "Multiple customers share CSP capacity/infrastructure with logical isolation; if isolation between tenants is breached, customer data is at risk", tag: "3.1 Multitenancy" },
  { domain: 3, q: "[FC] What does 'declarative' mean in the context of IaC?", a: "IaC must know the current state of infrastructure to determine whether to create resources or not", tag: "3.1 IaC" },
  { domain: 3, q: "[FC] What does 'idempotent' mean in the context of IaC?", a: "An IaC template can be applied multiple times without changing the results (e.g., if 3 of 4 required VMs exist, only 1 more is deployed)", tag: "3.1 IaC" },
  { domain: 3, q: "[FC] What is serverless architecture?", a: "A cloud execution model where the provider dynamically manages server allocation; pay-as-you-go, stateless resources, ephemeral servers, often event-triggered (e.g., Function-as-a-Service)", tag: "3.1 Serverless" },
  { domain: 3, q: "[FC] How does serverless differ from PaaS in terms of responsibility?", a: "PaaS: more control over deployment but app must be configured to auto-scale and takes time to spin up. Serverless: less control, no server management, app scales automatically, code only executes when invoked", tag: "3.1 Serverless" },
  { domain: 3, q: "[FC] What are microservices?", a: "Fine-grained, loosely coupled, technology-agnostic code modules each performing one function well, deployed/scaled/updated independently — greatly reduces attack surface", tag: "3.1 Microservices" },
  { domain: 3, q: "[FC] List logical segmentation techniques.", a: "VLANs (layer 2), VPNs (encrypted tunnels via IPSec), Virtual Routing and Forwarding (VRF), Subnets with ACLs", tag: "3.1 Logical Segmentation" },
  { domain: 3, q: "[FC] What is Software-Defined Networking (SDN)?", a: "A network architecture that centrally controls/programs the network via software, separating control plane from data plane, with capacity to reprogram the data plane at any time", tag: "3.1 SDN" },
  { domain: 3, q: "[FC] What vulnerabilities can SDN introduce and how are they secured?", a: "Man-in-the-middle (MITM) and denial-of-service (DoS); secured with TLS", tag: "3.1 SDN" },
  { domain: 3, q: "[FC] In the SDN architecture diagram, what are the three planes?", a: "Management plane, Control plane (SDN controller), Data plane (switches)", tag: "3.1 SDN" },
  { domain: 3, q: "[FC] What is the northbound interface in SDN used for?", a: "Ensures only trusted, authorized applications access critical network resources (connects controller to applications)", tag: "3.1 SDN" },
  { domain: 3, q: "[FC] What protocol interfaces the SDN controller with devices via southbound interfaces?", a: "OpenFlow protocol", tag: "3.1 SDN" },
  { domain: 3, q: "[FC] Compare on-premises vs off-premises (cloud) advantages.", a: "On-prem: full control of patching, upgrades, data residency, security. Off-prem: offloads infrastructure responsibility to CSP, freeing time/budget for business value; shifts CAPEX to OPEX", tag: "3.1 On-Prem vs Off-Prem" },
  { domain: 3, q: "[FC] Compare centralized vs decentralized infrastructure models.", a: "Centralized: infrastructure in one/few large datacenters, reduces cost/management but increases outage impact. Decentralized: spread across many locations, may increase cost/complexity but decreases impact of a single outage", tag: "3.1 Centralized vs Decentralized" },
  { domain: 3, q: "[FC] What is containerization and how does it reduce overhead vs VMs?", a: "A lightweight, portable way to package apps that run on a shared OS kernel (no own OS); examples include Docker and Kubernetes", tag: "3.1 Containerization" },
  { domain: 3, q: "[FC] What is the key architectural difference between a Type 1 hypervisor and containers?", a: "Type 1 hypervisor: each VM has its own OS kernel (more overhead). Containers: isolated but share a single OS kernel and bins/libs where possible", tag: "3.1 Containers vs VMs" },
  { domain: 3, q: "[FC] What are the core components of a container platform (Docker/Kubernetes)?", a: "Orchestration/scheduling controller, network and storage, container host, container images, container registry", tag: "3.1 Containers" },
  { domain: 3, q: "[FC] What is managed Kubernetes and give examples from major CSPs.", a: "A CSP-hosted Kubernetes service handling health monitoring/maintenance (PaaS); examples: AKS (Microsoft), EKS (AWS), GKE (GCP)", tag: "3.1 Containers" },
  { domain: 3, q: "[FC] What is VM sprawl and how is it avoided?", a: "Unmanaged VMs deployed on the network that IT doesn't know about, so they go unpatched; avoided by enforcing policies for adding VMs and periodic scanning", tag: "3.1 Virtualization" },
  { domain: 3, q: "[FC] Compare Type 1 and Type 2 hypervisors.", a: "Type 1 (bare metal): runs directly on hardware, reduced attack surface, more secure, used for QA/load testing/production (e.g., VMware ESXi, Hyper-V). Type 2 (hosted): runs on a host OS, increased attack surface, less secure, used for individual dev/lab, less expensive (e.g., VMware Workstation, VirtualBox)", tag: "3.1 Hypervisors" },
  { domain: 3, q: "[FC] What characterizes SCADA/ICS systems?", a: "Used in industrial/manufacturing/utility settings for centralized monitoring and control; usually no direct internet access and should be segmented off with security controls", tag: "3.1 Embedded Systems" },
  { domain: 3, q: "[FC] What is a Real-Time Operating System (RTOS)?", a: "An OS designed for a deterministic schedule, processing data immediately; if a task doesn't complete in time, the process fails. Used in wearables, cars, industrial equipment", tag: "3.1 Embedded Systems" },
  { domain: 3, q: "[FC] What is an embedded system and how should it be secured if it can't be patched?", a: "A full computer system embedded inside a larger system (printers, GPS, drones, VoIP phones, vehicles); if unpatchable, add layers of security like firewalls and IDPS", tag: "3.1 Embedded Systems" },
  { domain: 3, q: "[FC] List the architecture considerations covered in 3.1.", a: "Availability, Resilience, Cost, Responsiveness, Scalability, Ease of deployment, Risk transference, Ease of recovery, Patch availability, Inability to patch, Power, Compute", tag: "3.1 Considerations" },
  { domain: 3, q: "[FC] What is the difference between availability and resilience?", a: "Availability = system accessible to authorized users when needed. Resilience = subset of availability focused on handling disruptions (outages/attacks) without impacting availability", tag: "3.1 Considerations" },
  { domain: 3, q: "[FC] What is risk transference?", a: "Mitigating security risks by transferring responsibility to third parties via insurance, security contracts, or service agreements", tag: "3.1 Considerations" },
  { domain: 3, q: "[FC] What should you consider when patching is not feasible (inability to patch)?", a: "Alternative security measures like segmentation or intrusion detection to mitigate risks of unpatched systems", tag: "3.1 Considerations" },
  { domain: 3, q: "[FC] What factors influence device placement decisions on a network?", a: "Device purpose/function, network layout/segmentation, traffic flow (minimize hops/latency/congestion), security awareness training", tag: "3.2 Device Placement" },
  { domain: 3, q: "[FC] What is the purpose of security zones?", a: "Containment zones that prevent attackers in one zone from spreading throughout the network, limiting lateral movement and minimizing attack surface", tag: "3.2 Security Zones" },
  { domain: 3, q: "[FC] Define intranet, extranet, and screened subnet.", a: "Intranet: private internal network. Extranet: section of network serving external partners/public (cross between internet and intranet). Screened subnet (DMZ): extranet for public consumption, a secure zone for public-facing critical systems", tag: "3.2 Security Zones" },
  { domain: 3, q: "[FC] How do you minimize attack surface?", a: "Vulnerability management, network segmentation, access control, security awareness training", tag: "3.2 Attack Surface" },
  { domain: 3, q: "[FC] What is the difference between fail-open and fail-closed?", a: "Fail-open: everything passes through on failure (no security enforced, no disruption — good for availability-critical systems). Fail-closed: nothing passes through on failure (security maintained, traffic disrupted — good for safety/security-focused systems)", tag: "3.2 Failure Modes" },
  { domain: 3, q: "[FC] What is the difference between inline (in-band) and tap (out-of-band) NIDS/NIPS modes?", a: "Inline: placed on/near firewall, traffic passes through the device. Tap: replicates traffic for inspection while traffic continues on, eliminating risk of device failure", tag: "3.2 Device Attributes" },
  { domain: 3, q: "[FC] What is the difference between active and passive taps?", a: "Active taps require power, offer additional functionality, ports physically separate (power outage interrupts traffic). Passive taps just copy the signal with a direct path (power outage does NOT interrupt traffic)", tag: "3.2 Taps" },
  { domain: 3, q: "[FC] What is a jump server used for?", a: "Placed on a screened subnet to allow admins to connect remotely for secure remote administration", tag: "3.2 Network Appliances" },
  { domain: 3, q: "[FC] What is the difference between a forward proxy and a reverse proxy?", a: "Forward proxy: controls client requests to external resources, filters outbound traffic. Reverse proxy: on a screened subnet, performs authentication/decryption of incoming secure sessions to filter incoming traffic", tag: "3.2 Network Appliances" },
  { domain: 3, q: "[FC] What is the difference between IDS and IPS?", a: "IDS analyzes packets for known events and generates a log message when detected. IPS does the same but rejects the packet when a known event is detected", tag: "3.2 IDS/IPS" },
  { domain: 3, q: "[FC] What is the difference between HIDS/HIPS and NIDS/NIPS?", a: "Host-based (HIDS/HIPS) monitors a single system's NIC traffic (less visible to attackers can disable it). Network-based (NIDS/NIPS) monitors network-wide traffic and isn't as visible to attackers", tag: "3.2 IDS/IPS" },
  { domain: 3, q: "[FC] What is the difference between behavior-based and signature-based IDS?", a: "Behavior-based (anomaly/heuristic): baselines normal activity to detect abnormal behavior, can detect unknown attacks. Signature-based (knowledge-based): uses known signatures, only effective against known attacks", tag: "3.2 IDS Types" },
  { domain: 3, q: "[FC] What is NIC teaming?", a: "Pairing dual network cards for max throughput; if one adapter fails, the other maintains connectivity (supported on Windows and Linux)", tag: "3.2 Network Redundancy" },
  { domain: 3, q: "[FC] What is the difference between Active/Active and Active/Passive load balancer configurations?", a: "Active/Active: both LBs handle traffic together (single LB failure degrades performance). Active/Passive: active node handles load balancing while passive node monitors; passive takes over if active fails (provides redundancy)", tag: "3.2 Load Balancing" },
  { domain: 3, q: "[FC] What is a Virtual IP (VIP) in load balancing?", a: "An address that eliminates dependency on individual NICs; web traffic enters the NLB via the VIP on the frontend and is sent to a backend server", tag: "3.2 Load Balancing" },
  { domain: 3, q: "[FC] List the load balancer scheduling methods.", a: "Least Utilized Host, DNS Round Robin, Affinity (persistence/sticky session based on IP, IP+port, or session ID)", tag: "3.2 Load Balancing" },
  { domain: 3, q: "[FC] What is 802.1X and what server handles its authentication?", a: "IEEE standard for Port-Based Network Access Control (PNAC), authenticating devices via LAN/WLAN ports; authentication happens through a RADIUS server", tag: "3.2 802.1X" },
  { domain: 3, q: "[FC] Who are the three parties in 802.1X authentication?", a: "The user (supplicant), the authenticator (switch or WAP), and the authentication server (RADIUS)", tag: "3.2 802.1X" },
  { domain: 3, q: "[FC] What is WPA2-PSK and what replaced it in WPA3?", a: "Pre-Shared Key for home users entering a password to access a wireless network; replaced by SAE in WPA3", tag: "3.2 Wireless Auth" },
  { domain: 3, q: "[FC] What is WPS and its security weakness?", a: "Wi-Fi Protected Setup — stores the password locally and connects via button press; password is stored locally so could be brute-forced", tag: "3.2 Wireless Auth" },
  { domain: 3, q: "[FC] What is RADIUS Federation?", a: "Enables members of one organization to authenticate to another using their normal credentials, with trust across multiple RADIUS servers/organizations, commonly using 802.1X and EAP", tag: "3.2 Wireless Auth" },
  { domain: 3, q: "[FC] What is EAP (Extensible Authentication Protocol)?", a: "An authentication framework allowing new authentication technologies to be compatible with existing wireless or point-to-point connections", tag: "3.2 Wireless Auth Protocols" },
  { domain: 3, q: "[FC] What is LEAP and why was it replaced?", a: "Cisco's proprietary alternative to TKIP for WPA, developed before 802.11i/WPA2 was ratified; replaced by EAP-FAST because it was insecure", tag: "3.2 Wireless Auth Protocols" },
  { domain: 3, q: "[FC] What is PEAP?", a: "Protected EAP — encapsulates EAP methods within a TLS tunnel providing authentication and potentially encryption", tag: "3.2 Wireless Auth Protocols" },
  { domain: 3, q: "[FC] What is EAP-TLS and what does it require?", a: "A secure wireless authentication method requiring X.509 certificates; involves supplicant, authenticator, and authentication server (RADIUS)", tag: "3.2 Wireless Auth Protocols" },
  { domain: 3, q: "[FC] What is EAP-TTLS?", a: "Two-phase authentication: first sets up a secure tunnel via certificates (seamless to client), second phase uses a protocol like MS-CHAP; designed for connecting legacy systems", tag: "3.2 Wireless Auth Protocols" },
  { domain: 3, q: "[FC] Describe static packet-filtering, application-level, and circuit-level firewalls.", a: "Static packet-filtering: examines header data, operates layer 3+. Application-level: filters by service/protocol/application, operates layer 7. Circuit-level: establishes sessions between trusted partners, operates layer 5 (e.g., SOCKS)", tag: "3.2 Firewall Types" },
  { domain: 3, q: "[FC] What is the difference between stateless and stateful firewalls?", a: "Stateless: watches traffic based on source/destination/static values, not aware of patterns, faster under heavy load. Stateful: aware of communication paths/sessions, can implement tunnels and encryption, better at identifying forged communications", tag: "3.2 Firewall Types" },
  { domain: 3, q: "[FC] What is a WAF (Web Application Firewall)?", a: "Filters and monitors HTTP traffic between a web app and the internet, protecting against XSS, CSRF, and SQL injection; some come pre-configured with OWASP rulesets", tag: "3.2 Firewall Types" },
  { domain: 3, q: "[FC] What is an NGFW (Next-Generation Firewall)?", a: "A deep-packet inspection firewall that goes beyond port/protocol inspection, adding application-level inspection, intrusion prevention, and external threat intelligence", tag: "3.2 Firewall Types" },
  { domain: 3, q: "[FC] What is a UTM (Unified Threat Management) appliance?", a: "A multifunction device combining firewall with IDS, IPS, TLS/SSL proxy, web filtering, QoS, bandwidth throttling, NAT, VPN, and antivirus; common in SMBs", tag: "3.2 Firewall Types" },
  { domain: 3, q: "[FC] What is the difference between full tunnel and split tunnel VPN?", a: "Full tunnel: all traffic (Internet + corporate) goes through the VPN. Split tunnel: only corporate-destined traffic goes through VPN; Internet traffic uses its normal route", tag: "3.2 VPN" },
  { domain: 3, q: "[FC] What is the difference between site-to-site and remote access VPN modes?", a: "Site-to-site: always-on IPSec tunnel mode encrypting header and payload. Remote access: shorter-duration connection from a user's device using IPSec transport mode", tag: "3.2 VPN" },
  { domain: 3, q: "[FC] What is the difference between IPSec AH and ESP protocols?", a: "AH (Authentication Header): authentication only, faster (no encryption). ESP (Encapsulating Security Payload): provides confidentiality (encryption) and authentication; can be confidentiality-only, auth-only, or both", tag: "3.2 IPSec" },
  { domain: 3, q: "[FC] What is the difference between IPSec transport mode and tunnel mode?", a: "Transport mode: outer IP header determines policy, good for host-to-host ESP traffic. Tunnel mode: two IP headers sent, inner packet determines policy, good for VPNs and gateway-to-gateway", tag: "3.2 IPSec" },
  { domain: 3, q: "[FC] What is SD-WAN?", a: "Software-Defined Wide Area Network — lets branch offices remotely connect to enterprise networks using MPLS, LTE, broadband, etc; security via IPSec, VPN tunnels, NGFWs, and micro-segmentation", tag: "3.2 SD-WAN" },
  { domain: 3, q: "[FC] What is SASE and what is it closely related to?", a: "Secure Access Service Edge (pronounced 'sassy') — closely related to Zero Trust Network Architecture; merges networking and security functions as an integrated cloud service", tag: "3.2 SASE" },
  { domain: 3, q: "[FC] List the components of SASE.", a: "Firewall services, Secure web gateway, Anti-malware services, Intrusion prevention services, Cloud access service broker (CASB), Data loss prevention (DLP)", tag: "3.2 SASE" },
  { domain: 3, q: "[FC] What are the key criteria for selecting effective security controls?", a: "Identify assets and vulnerabilities, perform impact analysis of a potential breach, understand the threat landscape relevant to your environment", tag: "3.2 Selecting Controls" },
  { domain: 3, q: "[FC] List the regulated/specialized data types covered in 3.3.", a: "Regulated, Trade secret, Intellectual property, Legal information, Financial information, Human- and non-human readable", tag: "3.3 Data Types" },
  { domain: 3, q: "[FC] What is regulated data and give examples?", a: "Data subject to specific laws/regulations governing collection, storage, and use; examples include PII, PHI, and financial/credit card data — non-compliance can lead to fines", tag: "3.3 Data Types" },
  { domain: 3, q: "[FC] What is a trade secret and how long is it valid?", a: "Critical intellectual property that must not be disclosed (formulas, designs, customer lists); valid as long as secrecy is maintained", tag: "3.3 Data Types" },
  { domain: 3, q: "[FC] List IP protection types and their durations.", a: "Trademarks (10 years, renewable), Patents (~20 years, requires public disclosure), Trade Secrets (valid while secret), Copyright (life of creator + 70 years)", tag: "3.3 Data Rights" },
  { domain: 3, q: "[FC] What is the difference between human-readable and non-human-readable data?", a: "Human-readable: directly understood (text, images, video). Non-human-readable: requires software/tools to interpret (machine code, database files, encrypted data)", tag: "3.3 Data Types" },
  { domain: 3, q: "[FC] What are the four government data classification levels?", a: "Top Secret, Secret, Confidential, Unclassified", tag: "3.3 Data Classifications" },
  { domain: 3, q: "[FC] What are the four non-government (public) data classification levels?", a: "Confidential/Proprietary, Private, Sensitive, Public", tag: "3.3 Data Classifications" },
  { domain: 3, q: "[FC] Define public data and private data.", a: "Public: freely accessible info with no privacy/compliance concerns (brochures, press releases). Private: confidential individual info like PII and PHI", tag: "3.3 Data Classifications" },
  { domain: 3, q: "[FC] Define confidential data and restricted data.", a: "Confidential: info an org keeps secret within a designated group (salary, internal memos), access restricted by role. Restricted: subject to external regulations limiting access (e.g., HIPAA, PCI DSS) — confidential data can also be restricted", tag: "3.3 Data Classifications" },
  { domain: 3, q: "[FC] Define sensitive data and critical data.", a: "Sensitive: not publicly known, needs careful handling (includes private/confidential/restricted plus strategic plans, IP). Critical: essential for core mission/function; loss significantly impacts organizational goals", tag: "3.3 Data Classifications" },
  { domain: 3, q: "[FC] What is PII vs PHI?", a: "PII (Personally Identifiable Information): any info identifying an individual (name, SSN, birthdate, biometrics). PHI (Protected Health Information): health-related info tied to a specific person, covered by HIPAA", tag: "3.3 Data Classifications" },
  { domain: 3, q: "[FC] List the three data states.", a: "Data at rest, Data in transit, Data in use", tag: "3.3 Data States" },
  { domain: 3, q: "[FC] How is data at rest commonly encrypted in the cloud?", a: "Storage Service Encryption (CSPs encrypt by default before persisting to disks/blob/file/queue storage), Full Disk Encryption (BitLocker/dm-crypt), Transparent Data Encryption (TDE) for databases", tag: "3.3 Data at Rest" },
  { domain: 3, q: "[FC] How is data in transit typically encrypted?", a: "TLS or HTTPS — TLS has largely replaced SSL", tag: "3.3 Data in Transit" },
  { domain: 3, q: "[FC] How is data in use protected, with an example?", a: "Data in RAM (volatile, erased on power-down) during app use; example: Credential Guard encrypts password hashes in memory on Windows", tag: "3.3 Data in Use" },
  { domain: 3, q: "[FC] What is data sovereignty?", a: "Digital data is subject to the laws of the country where it was created/stored — moving data out of the EU does not remove GDPR requirements", tag: "3.3 Data Sovereignty" },
  { domain: 3, q: "[FC] What is geolocation used for in security?", a: "Uses GPS (more accurate than IP) to locate a mobile device, useful if lost/stolen, and as 'somewhere you are' in authentication decisions", tag: "3.3 Geolocation" },
  { domain: 3, q: "[FC] What is the key difference between encryption and hashing?", a: "Encryption is two-way (reversible with the right key) — used for bulk data encryption and digital signatures. Hashing is one-way (irreversible if properly designed) — used for integrity verification and password storage", tag: "3.3 Encryption vs Hashing" },
  { domain: 3, q: "[FC] What is data masking?", a: "Showing only partial data in a field (e.g., a credit card shown as **** **** **** 1234), implemented at the database or frontend code level", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] What is tokenization and how does it compare to encryption?", a: "Replaces meaningful data with a randomly generated token while the original data is held in a vault; stateless and stronger than encryption since keys aren't stored locally", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] What is pseudonymization?", a: "De-identification where PII fields are replaced with artificial identifiers/pseudonyms; reversal requires access to another data source", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] What is anonymization and its limitation?", a: "Removing all relevant data so the original subject can't be identified; only effective if you do NOT need the identity data afterward", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] What are geographic restrictions for data?", a: "Limiting access based on physical location, restricting attempts from certain countries/IPs, often for regulatory/security reasons", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] What is obfuscation?", a: "Intentionally making data less readable/understandable (e.g., code obfuscation, data masking) while retaining functionality, preventing easy interpretation if accessed", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] How does segmentation help secure data?", a: "Dividing data into smaller isolated segments via partitioning/logical separation, limiting breach impact to one segment instead of the whole dataset", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] What are permission restrictions (access control) for data?", a: "Controls access based on user roles/permissions (e.g., RBAC on Windows), ensuring only authorized individuals access sensitive info", tag: "3.3 Methods to Secure Data" },
  { domain: 3, q: "[FC] List the stages of the data lifecycle (functional perspective).", a: "Creation, Classification, Storage, Usage, Archive, Destruction", tag: "3.3 Data Lifecycle" },
  { domain: 3, q: "[FC] What happens during the Creation stage of the data lifecycle?", a: "Data can be created by users (e.g., creating a file) or by systems (e.g., a system logging access)", tag: "3.3 Data Lifecycle" },
  { domain: 3, q: "[FC] Why is the Classification stage important early in the data lifecycle?", a: "To ensure data is handled properly and protected by adequate security controls based on its classification", tag: "3.3 Data Lifecycle" },
  { domain: 3, q: "[FC] What does the Usage stage of the data lifecycle refer to?", a: "Anytime data is in use or in transit over a network", tag: "3.3 Data Lifecycle" },
  { domain: 3, q: "[FC] What is the purpose of the Archive stage and a data retention policy?", a: "Archival complies with laws/regulations requiring retention; a data retention policy ensures data is kept 'as long as necessary' per company policy or regulation", tag: "3.3 Data Lifecycle" },
  { domain: 3, q: "[FC] What is the risk of not properly destroying data?", a: "Data kept longer than needed, or not destroyed unreadably, creates additional risk", tag: "3.3 Data Lifecycle" },
  { domain: 3, q: "[FC] What is the difference between resilience and recovery?", a: "Resilience: ability to remain functional despite disruptions (proactive shield, via redundancy/failover). Recovery: restoring data/systems after an incident (reactive repair kit, via backup/DR/BCP)", tag: "3.4 Key Terms" },
  { domain: 3, q: "[FC] How does load balancing support resilience vs recovery?", a: "Resilience: distributes workload, prevents single-server overload, simplifies scalability. Recovery: faster failover by redirecting traffic from failed servers, simplifies isolating failed servers", tag: "3.4 High Availability" },
  { domain: 3, q: "[FC] How does clustering support resilience vs recovery?", a: "Resilience: hardware redundancy via a single logical entity from multiple servers, others take over if one fails. Recovery: automatic failover and data replication for quick restoration (commonly used with backend databases)", tag: "3.4 High Availability" },
  { domain: 3, q: "[FC] How do multi-cloud systems support resilience and recovery?", a: "Resilience: distributing data/apps across providers creates redundancy/fault tolerance. Recovery: enables rapid failover to unaffected platforms, mitigating vendor lock-in", tag: "3.4 Multi-Cloud" },
  { domain: 3, q: "[FC] How does platform diversity support resilience and recovery?", a: "Resilience: mixing OSes/cloud providers/vendors reduces single points of failure. Recovery: allows shifting operations to unaffected platforms while addressing the compromised one", tag: "3.4 Platform Diversity" },
  { domain: 3, q: "[FC] What is Continuity of Operations (COOP)?", a: "Plans outlining procedures/resources to maintain critical business functions during disruptions, including backup/recovery strategies and alternative communications", tag: "3.4 Continuity of Operations" },
  { domain: 3, q: "[FC] What are the three types of recovery sites?", a: "Hot, Warm, Cold", tag: "3.4 Recovery Sites" },
  { domain: 3, q: "[FC] Describe a cold site (cost/effort to recover).", a: "Just data center space, power, and connectivity ready and waiting; cost = LOW, effort to recover = HIGH (must move hardware in and set up)", tag: "3.4 Recovery Sites" },
  { domain: 3, q: "[FC] Describe a warm site (cost/effort to recover).", a: "Hardware pre-installed and bandwidth pre-configured; cost = MEDIUM, effort to recover = MEDIUM (just load software/data)", tag: "3.4 Recovery Sites" },
  { domain: 3, q: "[FC] Describe a hot site (cost/effort to recover).", a: "Production environment fully replicated and running for immediate cutover; cost = HIGH, effort to recover = LOW — a must for mission-critical sites", tag: "3.4 Recovery Sites" },
  { domain: 3, q: "[FC] What geographic considerations apply to recovery sites?", a: "Distance vs practicality, location selection for recoverability (CSPs maintain 300+ miles between sites for natural disaster protection), offsite storage of backups", tag: "3.4 Geographic Considerations" },
  { domain: 3, q: "[FC] What are the three components of capacity planning?", a: "People (skilled workforce), Technology (security tools like firewalls/IDS/IPS/anti-malware/scanners), Infrastructure (storage/network/processing for peak loads and elasticity)", tag: "3.4 Capacity Planning" },
  { domain: 3, q: "[FC] What is a failover test?", a: "Actually shutting down the primary site to test whether the recovery site properly handles the load — must be carefully planned since it can impact production", tag: "3.4 Testing" },
  { domain: 3, q: "[FC] What is a simulation test?", a: "Functional exercises testing plans in a simulated operational environment without affecting production systems", tag: "3.4 Testing" },
  { domain: 3, q: "[FC] What is parallel processing testing?", a: "Activates the DR site to run alongside (in parallel with) the main site during the test, enabling testing with less risk than full failover", tag: "3.4 Testing" },
  { domain: 3, q: "[FC] What backup considerations should you know for the exam?", a: "Onsite/offsite storage, frequency, encryption, snapshots, recovery, replication, journaling", tag: "3.4 Backups" },
  { domain: 3, q: "[FC] What is the difference between onsite and offsite backups?", a: "Onsite: stored at the same physical location as original data (e.g., external drive). Offsite: stored separately (e.g., cloud, remote data center)", tag: "3.4 Backups" },
  { domain: 3, q: "[FC] What is a snapshot backup?", a: "A point-in-time copy of data allowing recovery to that specific state", tag: "3.4 Backups" },
  { domain: 3, q: "[FC] What is journaling in the context of backups?", a: "Transaction logging that records all data changes sequentially, enabling point-in-time recovery or roll-forward recovery by replaying transactions (common in relational databases)", tag: "3.4 Backups" },
  { domain: 3, q: "[FC] What backup type provides the fastest recovery time (exam fact)?", a: "A FULL backup", tag: "3.4 Backups" },
  { domain: 3, q: "[FC] What is a UPS and what does it protect against?", a: "Uninterruptible Power Supply — a battery providing short-term power (minutes) during outages, and cleans grid power (eliminates spikes/surges/voltage fluctuations) to protect systems and data", tag: "3.4 Power" },
  { domain: 3, q: "[FC] What is a generator used for and how long can it sustain power?", a: "A standby power source (diesel/gas/propane/natural gas) providing electricity for hours or days, used by hospitals and data centers for sustained operation", tag: "3.4 Power" },
  { domain: 4, q: "[FC] What is the difference between a control, benchmark, and baseline?", a: "Control: high-level description of a feature/activity to address. Benchmark: security recommendations for a specific technology. Baseline: implementation of the benchmark on an individual service.", tag: "4.1 Baselines" },
  { domain: 4, q: "[FC] What is the purpose of configuration management?", a: "Ensures systems are configured similarly, configurations are known and documented; imaging is a common baselining method", tag: "4.1 Baselines" },
  { domain: 4, q: "[FC] What is change management and what does it require?", a: "Policy outlining procedures for processing changes to reduce risk of outages or weakened security; requires changes to be requested, approved, tested, and documented", tag: "4.1 Baselines" },
  { domain: 4, q: "[FC] What are the three phases of secure baselines?", a: "Establish (threat modeling, benchmarks, risk assessment), Deploy (config management tools, MDM, IaC, CI/CD), Maintain (vuln scans, patch management, monitoring, auditing)", tag: "4.1 Baselines" },
  { domain: 4, q: "[FC] What is hardening?", a: "The practice of reducing a system's attack surface, thereby enhancing its overall security posture", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for mobile devices?", a: "Strong passwords, app management, OS updates, remote wipe, disable unused features", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for workstations?", a: "Strong login credentials, disable unneeded services, least privilege access, anti-malware, host firewall", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for network devices?", a: "Strong passwords, disable unused features, firmware updates, ACLs, segment networks", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for cloud infrastructure?", a: "IAM, encryption, logging and monitoring, secure configuration, DevOps/CI/CD/IaC", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for ICS/SCADA?", a: "Segmentation or isolation, physical security, change management, password management, monitoring", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for embedded systems and RTOS?", a: "Secure coding practices, limited functionality design, firmware updates, code reviews, limited network access, secure boot", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the hardening steps for IoT devices?", a: "Strong passwords, firmware updates, network segmentation, limiting functionality, secure communication protocols", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] How is server hardening applied?", a: "By applying a configuration baseline to a single VM image or VM template; CIS offers hardened VM images in CSP marketplaces", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What should be done about open ports and services during hardening?", a: "Listening ports restricted to only those necessary, filtered to restrict traffic, disabled entirely if unneeded; block through firewalls", tag: "4.1 Hardening" },
  { domain: 4, q: "[FC] What are the wireless site survey and heat map used for?", a: "Site survey investigates presence/strength/reach of APs. Heat map visually represents signal strength — green/blue = strong, yellow/orange/red = weak — guides optimal AP placement", tag: "4.1 Wireless" },
  { domain: 4, q: "[FC] What is MDM (Mobile Device Management) and name key features?", a: "MDM manages and secures mobile devices; key features: passwords/PINs, geofencing, app management, content management, remote wipe, screen locks, geolocation, push notifications", tag: "4.1 MDM" },
  { domain: 4, q: "[FC] What is geofencing and what exam fact should you remember about it?", a: "Uses GPS or RFID to define geographic boundaries; for the exam: geofencing prevents mobile devices from being removed from company premises", tag: "4.1 MDM" },
  { domain: 4, q: "[FC] What is the difference between MDM, MAM, and UEM?", a: "MDM manages the full device. MAM (Mobile App Management) manages only apps/data, even on unmanaged devices (useful for BYOD). UEM (Unified Endpoint Management) manages hardware across all device types including desktops, tablets, smartphones, IoT", tag: "4.1 Mobile" },
  { domain: 4, q: "[FC] What are the four mobile deployment models?", a: "BYOD (employee's own device), Corporate-Owned (company buys and fully controls), CYOD (employee chooses from approved list), COPE (company buys and allows personal use)", tag: "4.1 Deployment Models" },
  { domain: 4, q: "[FC] What is sideloading on mobile?", a: "Installing an .apk file directly on a mobile device outside the official app store — useful for developers but enables unauthorized software", tag: "4.1 Mobile" },
  { domain: 4, q: "[FC] What is firmware OTA update?", a: "Firmware pushed out periodically by the vendor to keep mobile devices secure (e.g., software update notifications)", tag: "4.1 Mobile" },
  { domain: 4, q: "[FC] What security risks do SMS/MMS/RCS messaging pose?", a: "Text messages can launch attacks; MMS/RCS image/video capability enables data theft; both are delivery channels for ransomware", tag: "4.1 Mobile" },
  { domain: 4, q: "[FC] What is the difference between Wi-Fi Direct and ad-hoc wireless networks?", a: "Wi-Fi Direct: connects two Wi-Fi devices directly (single-path, cannot share internet). Ad-hoc: connects two wireless devices without WAP (multipath, can share internet)", tag: "4.1 Mobile" },
  { domain: 4, q: "[FC] What are the four major wireless connection models?", a: "Point-to-point (one-to-one), Point-to-multipoint (one WAP to many), Broadcast (one source to all), Mesh (nodes communicate directly, self-healing)", tag: "4.1 Wireless" },
  { domain: 4, q: "[FC] What is a disassociation attack and how does it relate to evil twins?", a: "A DoS attack breaking the wireless connection between victim and AP; gives the attacker a window to inject an evil twin access point", tag: "4.1 Wireless Attacks" },
  { domain: 4, q: "[FC] What is jamming?", a: "A DoS attack that occupies a wireless channel to prevent other nodes from communicating — can be difficult to detect and often unintentional", tag: "4.1 Wireless Attacks" },
  { domain: 4, q: "[FC] What is CCMP and what does it use?", a: "Counter Mode with Cipher Block Chaining Message Authentication Code Protocol — created to replace WEP and TKIP/WPA, uses AES with a 128-bit key; used with WPA2", tag: "4.1 Wireless Security" },
  { domain: 4, q: "[FC] What is SAE and what does it replace?", a: "Simultaneous Authentication of Equals — used with WPA3-Personal to replace WPA2-PSK; uses a secure Diffie-Hellman 'dragonfly' handshake with perfect forward secrecy, immune to offline attacks", tag: "4.1 Wireless Security" },
  { domain: 4, q: "[FC] What improvements does WPA3 have over WPA2?", a: "Released 2018; uses 256-bit GCMP-256 encryption (vs 128-bit in WPA2). Personal uses SAE with PFS. Enterprise uses 256-bit AES and ECDHE for initial handshake", tag: "4.1 WPA3" },
  { domain: 4, q: "[FC] What is the difference between RADIUS and TACACS+?", a: "RADIUS: uses UDP, encrypts password only. TACACS+: uses TCP, encrypts the entire session", tag: "4.1 AAA Protocols" },
  { domain: 4, q: "[FC] What is a captive portal?", a: "Used in airports/public spaces, Wi-Fi redirects users to a webpage on connection for additional identity validation (email, social login) — may include AUP and premium upgrade offer", tag: "4.1 Captive Portal" },
  { domain: 4, q: "[FC] What is input validation and what does it prevent?", a: "Ensures only correctly formatted data within accepted ranges is accepted at input; prevents buffer overflow, integer overflow, and SQL injection attacks", tag: "4.1 App Security" },
  { domain: 4, q: "[FC] What are secure cookies?", a: "Setting the 'secure' flag in website code ensures cookies are only transmitted over HTTPS sessions, preventing session hijacking via cookie theft", tag: "4.1 App Security" },
  { domain: 4, q: "[FC] What is HTTP Strict Transport Security (HSTS)?", a: "An HTTP response header that instructs browsers to ignore all HTTP connections (non-HTTPS), preventing downgrade and MITM attacks", tag: "4.1 App Security" },
  { domain: 4, q: "[FC] What is code signing?", a: "Using a certificate to digitally sign scripts/executables to verify authenticity and confirm they are genuine", tag: "4.1 App Security" },
  { domain: 4, q: "[FC] What is the difference between static and dynamic code analysis?", a: "Static: analyzes code without executing it, requires source code access. Dynamic: executes code, uses fuzzing to inject random input, does not require source code access", tag: "4.1 App Security" },
  { domain: 4, q: "[FC] What is fuzzing?", a: "Inputting random data into an application to see if it crashes, leaks memory, or returns errors — used in both white-box (pre-release) and black-box (post-release) testing", tag: "4.1 App Security" },
  { domain: 4, q: "[FC] What is sandboxing in the context of application security?", a: "Installing an application in an isolated VM environment to patch, test, and ensure security before production; also used to investigate dangerous malware. Linux equivalent: chroot jail", tag: "4.1 Sandboxing" },
  { domain: 4, q: "[FC] What is the asset management lifecycle and its phases?", a: "Process tracking valuable assets through: Acquisition/Procurement, Assignment/Accounting, Monitoring/Asset Tracking, Disposal/Decommissioning", tag: "4.2 Asset Management" },
  { domain: 4, q: "[FC] What is a CMDB and what is it used for?", a: "Configuration Management Database — tracks asset inventory including type, location, and owner", tag: "4.2 Asset Management" },
  { domain: 4, q: "[FC] What is enumeration in asset management?", a: "Regularly identifying and documenting all assets on the network; enables tracking location, status, and potential vulnerabilities", tag: "4.2 Asset Management" },
  { domain: 4, q: "[FC] What happens during asset disposal/decommissioning?", a: "Sanitization (data removal), Destruction (physical beyond recovery), Certification (documented proof for compliance), Data Retention policies enforced", tag: "4.2 Asset Management" },
  { domain: 4, q: "[FC] What is the vulnerability lifecycle?", a: "Identification → Analysis → Response/Remediation → Validation of Remediation → Reporting", tag: "4.3 Vulnerability Management" },
  { domain: 4, q: "[FC] What is the difference between a vulnerability scan and a vulnerability assessment?", a: "Scan: routine automated scan detecting known vulnerabilities/missing patches/open ports. Assessment: broader, extends beyond technical scans to include reviews and audits", tag: "4.3 Vulnerability Management" },
  { domain: 4, q: "[FC] What is the difference between credentialed and non-credentialed vulnerability scans?", a: "Credentialed: has login privileges, more powerful, spots privilege-required vulnerabilities. Non-credentialed: lower privileges, identifies what an attacker would easily find", tag: "4.3 Vuln Scans" },
  { domain: 4, q: "[FC] What is the difference between intrusive and non-intrusive scans?", a: "Non-intrusive: passive, reports vulnerabilities without causing damage. Intrusive: tries to exploit vulnerabilities, may cause damage — use only in sandboxes, not production", tag: "4.3 Vuln Scans" },
  { domain: 4, q: "[FC] What is CVE vs CVSS and where do you find CVSS scores?", a: "CVE (Common Vulnerabilities and Exposures): list of publicly disclosed vulnerabilities with ID, description, dates. CVSS (Common Vulnerability Scoring System): 0.0-10.0 severity score — found in the NVD (National Vulnerability Database), not in CVE listings", tag: "4.3 CVE/CVSS" },
  { domain: 4, q: "[FC] What three metrics make up a CVSS score?", a: "Exploitability (how easy to exploit), Impact (damage potential), Scope (what systems/assets it affects)", tag: "4.3 CVE/CVSS" },
  { domain: 4, q: "[FC] What is the NVD and who maintains it?", a: "National Vulnerability Database — maintained by NIST, synchronized with the MITRE CVE list, where CVSS scores are found", tag: "4.3 CVE/CVSS" },
  { domain: 4, q: "[FC] What is OSINT and give examples?", a: "Open-Source Intelligence — free cyber threat intelligence gathering; examples: threatcrowd.org, openphish.com, NVD, shodan.io", tag: "4.3 Threat Intelligence" },
  { domain: 4, q: "[FC] What is a threat intelligence feed?", a: "A continuous stream of data about potential cyber threats; can include IoCs, threat actor info, and emerging threats; consumed via STIX/TAXII (machine-readable) or email/dashboards (human-readable)", tag: "4.3 Threat Intelligence" },
  { domain: 4, q: "[FC] What is STIX vs TAXII?", a: "STIX defines 'what' is shared (common language for cyber threat info). TAXII defines 'how' STIX messages are securely transferred between systems", tag: "4.3 Threat Intelligence" },
  { domain: 4, q: "[FC] What is AIS (Automated Indicator Sharing)?", a: "A CISA capability enabling real-time exchange of machine-readable cyber threat indicators and defensive measures — free to AIS community participants", tag: "4.3 Threat Intelligence" },
  { domain: 4, q: "[FC] What is an IoC (Indicator of Compromise)?", a: "Pieces of forensic data (log entries, files) that identify potentially malicious activity on a system or network; sometimes called 'threat indicators'", tag: "4.3 Threat Intelligence" },
  { domain: 4, q: "[FC] What is dark web intelligence gathering?", a: "An overlay network (accessed via Tor/.onion sites) containing info about hacker groups and activities; requires specialized software", tag: "4.3 Threat Intelligence" },
  { domain: 4, q: "[FC] What is package monitoring?", a: "Tracking third-party and open-source libraries/packages for known vulnerabilities; ensures libraries are patched and versions up-to-date", tag: "4.3 App Security" },
  { domain: 4, q: "[FC] What is the difference between a penetration test and a vulnerability scan?", a: "Vuln scan: automated, identifies weaknesses, reports severity (like a fire alarm). Pen test: manual + automated, actively exploits vulnerabilities, requires special skills, intrusive (like a firefighter testing the system)", tag: "4.3 Pen Testing" },
  { domain: 4, q: "[FC] What are the three pen test environment types?", a: "White box (known environment): full info given to tester. Black box (unknown environment): tester goes in blind. Gray box (partially known): limited info given, simulates long-term attacker knowledge", tag: "4.3 Pen Testing" },
  { domain: 4, q: "[FC] What are lateral movement, privilege escalation, persistence, and pivoting in pen testing?", a: "Lateral movement: gaining access then moving to other internal devices. Privilege escalation: gaining higher permissions than authorized. Persistence: maintaining long-term access. Pivoting: using a compromised system to attack others", tag: "4.3 Pen Testing" },
  { domain: 4, q: "[FC] What are the Red, Blue, Purple, and White team roles?", a: "Red team: offense (emulates attackers). Blue team: defense (internal security). Purple team: improves Red/Blue effectiveness. White team: judge/referee overseeing engagements", tag: "4.3 Pen Testing" },
  { domain: 4, q: "[FC] What is a bug bounty program?", a: "A monetary reward given to ethical hackers for discovering and responsibly reporting vulnerabilities or bugs to the developer", tag: "4.3 Pen Testing" },
  { domain: 4, q: "[FC] What is exposure factor?", a: "The percentage of value an asset would lose due to a specific incident (e.g., 30% damage to a $1M building = EF of 30%)", tag: "4.3 Risk" },
  { domain: 4, q: "[FC] What are environmental variables in vulnerability analysis?", a: "Asset criticality, network topology, data sensitivity, user base, external dependencies, threat landscape, operational constraints, regulatory requirements", tag: "4.3 Risk" },
  { domain: 4, q: "[FC] What is risk tolerance vs risk appetite?", a: "Risk appetite: aggregate amount of risk an org is willing to accept. Risk tolerance: per-individual-risk threshold before action is taken", tag: "4.3 Risk" },
  { domain: 4, q: "[FC] What are the four risk management responses?", a: "Risk Acceptance (do nothing), Risk Mitigation (implement countermeasure, accept residual risk), Risk Transference (transfer to 3rd party/insurance), Risk Avoidance (stop the activity)", tag: "4.3 Risk" },
  { domain: 4, q: "[FC] What are the vulnerability remediation options?", a: "Patching, Insurance (risk transference), Segmentation (isolate on a segment), Compensating controls, Exceptions/Exemptions (risk acceptance)", tag: "4.3 Remediation" },
  { domain: 4, q: "[FC] What are the three methods to validate remediation?", a: "Rescanning (most common — re-scan after remediation), Audit (in-depth review of process/documentation), Verification (actively test if the vulnerability can still be exploited)", tag: "4.3 Remediation" },
  { domain: 4, q: "[FC] What are the three monitoring resource types in 4.4?", a: "Systems (CPU, memory, disk, login attempts), Applications (response times, resource usage, error logs), Infrastructure (networks, firewalls, storage — traffic volume, bandwidth, latency)", tag: "4.4 Monitoring" },
  { domain: 4, q: "[FC] What is log aggregation and why is it important?", a: "Centralizing logs from systems, apps, and network devices for easier analysis; logs are valueless without review — SIEM provides aggregation and enables threat detection", tag: "4.4 Monitoring" },
  { domain: 4, q: "[FC] What is alert tuning?", a: "Fine-tuning alert rules to reduce false positives and ensure alerts are triggered only for significant security events", tag: "4.4 Monitoring" },
  { domain: 4, q: "[FC] What is SCAP (Security Content Automation Protocol)?", a: "A set of open standards automating vulnerability management and security policy compliance; provides automation, standardization, improved accuracy, and compliance benefits", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is the difference between SIEM and SOAR?", a: "SIEM: collects/correlates/analyzes data from many sources for real-time monitoring, alerting, and investigative monitoring. SOAR: centralized automated response via playbooks/runbooks — response can be fully automated or single-click", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is the difference between a playbook and a runbook?", a: "Playbook: document/checklist defining how to verify and respond to an incident (the paperwork). Runbook: implements the playbook as an automated tool (the technology)", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is UEBA/UBA and what does it establish?", a: "User (Entity) Behavior Analytics — creates a baseline of 'normal' user activity and flags deviations; detects compromised accounts, insider threats, and malware infections", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What are the benefits of UBA?", a: "Early threat detection, reduced false positives (vs signature-based tools), improved investigation efficiency via user activity context", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is DLP (Data Loss Prevention)?", a: "Identifies, inventories, and controls use of sensitive data; spans detective, preventive, and corrective controls; applicable to email, SharePoint, cloud storage, removable devices, databases — protection travels with the document", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is SNMP and what version should be used?", a: "Simple Network Management Protocol — monitors/manages network devices via SNMP traps from agents. SNMPv1/v2 send passwords in cleartext; SNMPv3 encrypts credentials", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is XDR vs EDR?", a: "EDR: endpoint-focused detection and response, in-depth visibility for a single device. XDR: extended across endpoints, cloud infrastructure, email, mobile, and more — broader view using AI/ML/threat intelligence", tag: "4.4 Tools" },
  { domain: 4, q: "[FC] What is NAC (Network Access Control)?", a: "Checks that an authenticating device is patched and compliant with corporate security policies; compliant devices get LAN access, non-compliant are redirected to a quarantine/remediation network", tag: "4.5 Enterprise Security" },
  { domain: 4, q: "[FC] What is the difference between persistent and dissolvable NAC agents?", a: "Persistent agent: permanently installed on the host. Dissolvable agent: installed temporarily for a single use", tag: "4.5 Enterprise Security" },
  { domain: 4, q: "[FC] What is a screened subnet and what else is it called?", a: "A boundary layer between the internet and trusted network hosting public-facing resources; other names: DMZ (Demilitarized Zone) or perimeter network. AD and sensitive systems should NOT reside here", tag: "4.5 Firewall" },
  { domain: 4, q: "[FC] What are standard vs extended ACLs?", a: "Standard ACL: simple rules based on source/destination IP. Extended ACL: complex rules considering port numbers, protocols, and traffic direction. If no allow rule matches, the last rule is a deny-all", tag: "4.5 Firewall" },
  { domain: 4, q: "[FC] What is a web filter and its two deployment models?", a: "A tool allowing/blocking traffic based on content rules. Agent-based: software on individual devices (supports work-from-anywhere). Centralized proxy: all traffic routed through a central server", tag: "4.5 Web Filter" },
  { domain: 4, q: "[FC] What web filter techniques are used?", a: "URL scanning (blacklists), Content categorization (categories + custom rules), Block rules (specific sites/content), Reputation (trust scores based on historical behavior)", tag: "4.5 Web Filter" },
  { domain: 4, q: "[FC] What is Group Policy in Windows and what is SELinux?", a: "Group Policy: policy-based control of Windows systems via GPOs in AD Domain Services. SELinux: Linux kernel security module providing additional security, used in multiple Linux distros and Android", tag: "4.5 OS Security" },
  { domain: 4, q: "[FC] What secure protocols and ports should you know for the exam?", a: "SSH/SCP/SFTP (22), DNSSEC (53), Kerberos (88), HTTPS/TLS (443), LDAPS (636), SNMP v3 (UDP 162), SMTPS (587), IMAP4 (993), POP3 (995), FTPS (989/990), RDP (3389), SIP (5060/5061), SRTP (5061), IPSec (UDP 500)", tag: "4.5 Secure Protocols" },
  { domain: 4, q: "[FC] What are the characteristics of a secure protocol?", a: "Confidentiality (encryption), Integrity (digital signatures detecting tampering), Authentication (verifies identity), Non-repudiation (prevents denial of sending), Availability (redundancy, access control)", tag: "4.5 Secure Protocols" },
  { domain: 4, q: "[FC] What is DNS filtering?", a: "Intercepts DNS requests before they reach malicious websites; blocks via a list of prohibited domains and replaces the DNS response with a block page or redirect", tag: "4.5 DNS Filter" },
  { domain: 4, q: "[FC] What is DKIM and what does it prevent?", a: "DomainKeys Identified Mail — attaches a cryptographic signature to outgoing emails so receiving servers can verify the email originated from your authorized mail server; prevents email spoofing", tag: "4.5 Email Security" },
  { domain: 4, q: "[FC] What is SPF and how does it work?", a: "Sender Policy Framework — publishes a list of authorized mail servers allowed to send emails for your domain in DNS; receiving servers check if sender's IP is authorized to prevent spoofing", tag: "4.5 Email Security" },
  { domain: 4, q: "[FC] What is DMARC and what are its three enforcement policies?", a: "Domain-based Message Authentication Reporting and Conformance — tells receiving servers what to do with emails failing SPF/DKIM. Policies: None (monitor only), Quarantine (hold for review), Reject (block entirely)", tag: "4.5 Email Security" },
  { domain: 4, q: "[FC] How do SPF, DKIM, and DMARC work together?", a: "SPF verifies the sender, DKIM verifies the message integrity, DMARC leverages SPF and DKIM results to determine how to handle failing emails — multi-layered approach", tag: "4.5 Email Security" },
  { domain: 4, q: "[FC] What is file integrity monitoring (FIM)?", a: "Creates a baseline cryptographic hash (MD5, SHA-256) for monitored files, then monitors for unauthorized changes to that fingerprint outside normal update processes", tag: "4.5 FIM" },
  { domain: 4, q: "[FC] What is provisioning vs deprovisioning?", a: "Provisioning: creating user accounts with appropriate access at onboarding. Deprovisioning: disabling/deleting accounts when employment ends or roles change — timing is critical", tag: "4.6 IAM" },
  { domain: 4, q: "[FC] What is identity proofing?", a: "Verifying that a person claiming a particular identity is actually who they say they are; methods include document verification, KBA, biometric, and out-of-band verification", tag: "4.6 IAM" },
  { domain: 4, q: "[FC] What is federation in identity management?", a: "A collection of domains that have established trust for shared access to resources, including authentication and authorization", tag: "4.6 IAM" },
  { domain: 4, q: "[FC] What is SSO and what is SAML used for?", a: "Single Sign-On: user logs in once, credential used for multiple apps. SAML (Security Assertion Markup Language): XML-based standard for exchanging auth/authorization data between identity provider and service provider; common in on-prem federation", tag: "4.6 SSO" },
  { domain: 4, q: "[FC] What is OAuth 2.0?", a: "An open standard for authorization, allowing internet users to log into third-party websites using social identities (Microsoft, Google, Facebook) without exposing their password", tag: "4.6 SSO" },
  { domain: 4, q: "[FC] What is LDAP and what does Kerberos provide?", a: "LDAP (Lightweight Directory Access Protocol): protocol for storing/retrieving directory service info (used by Active Directory). Kerberos: authentication protocol for AD, uses tickets and timestamps to prevent replay attacks", tag: "4.6 LDAP/Kerberos" },
  { domain: 4, q: "[FC] What is Active Directory and its limitation?", a: "Set of directory services by Microsoft for on-prem domain networks; manages multiple infrastructure components with a single identity per user; does NOT natively support mobile devices, SaaS, or apps requiring modern authentication", tag: "4.6 Active Directory" },
  { domain: 4, q: "[FC] What is attestation in IAM?", a: "Confirming that a device (laptop, mobile) is an approved, managed device compliant with company policies — common in Zero Trust; remote attestation uses MDM and validates unique hardware identifiers", tag: "4.6 Attestation" },
  { domain: 4, q: "[FC] What are the access control models: MAC, DAC, RBAC, Rule-based, ABAC?", a: "MAC: system-assigned labels determine access. DAC: owner of every object grants/denies access (e.g., NTFS). RBAC: access via job roles (non-discretionary). Rule-based: global rules apply to all subjects (e.g., firewall). ABAC: access based on account attributes like department or location", tag: "4.6 Access Control" },
  { domain: 4, q: "[FC] What is time-of-day restriction and what is it useful for?", a: "Limits network access to specific hours (e.g., 7am-6pm) based on shift role; prevents data theft at off-hours, effective in regulated industries with shift workers", tag: "4.6 Access Control" },
  { domain: 4, q: "[FC] What are the three MFA factors?", a: "Something you know (PIN/password), Something you have (trusted device), Something you are (biometric)", tag: "4.6 MFA" },
  { domain: 4, q: "[FC] What are the four MFA attributes?", a: "Somewhere you are (location), Something you can do (signature), Something you exhibit (gait), Someone you know (challenge response based on known individual)", tag: "4.6 MFA" },
  { domain: 4, q: "[FC] What is the Crossover Error Rate (CER) in biometrics?", a: "Identifies the accuracy of a biometric method — the point where FRR (False Rejection Rate) equals FAR (False Acceptance Rate). False acceptance = Type 2 error (worse). False rejection = Type 1 error", tag: "4.6 Biometrics" },
  { domain: 4, q: "[FC] What is TOTP vs HOTP?", a: "TOTP (Time-based One-Time Password): moving factor is time (timestep usually 30-60 seconds). HOTP (HMAC-based One-Time Password): moving factor is a counter. Both are OATH token types", tag: "4.6 MFA Tokens" },
  { domain: 4, q: "[FC] What is FIDO2/passwordless authentication?", a: "Uses public-key (asymmetric) cryptography with a physical USB/NFC device; sequence: provide username → cryptographic challenge → sign with FIDO2 key → service verifies and grants access; eliminates passwords (immune to phishing/replay)", tag: "4.6 Passwordless" },
  { domain: 4, q: "[FC] What is PAM (Privileged Access Management)?", a: "Applies more stringent security controls over accounts with elevated privileges (admin/root); includes just-in-time permissions, password vaulting, and ephemeral credentials", tag: "4.6 PAM" },
  { domain: 4, q: "[FC] What is just-in-time permissions?", a: "Administrators request activation of administrative privileges only when needed; privileges automatically expire after a set period", tag: "4.6 PAM" },
  { domain: 4, q: "[FC] What is password vaulting?", a: "Allows users to access privileged accounts without knowing the password; enables checking out privileged credentials as needed; ensures passwords are available for emergencies", tag: "4.6 PAM" },
  { domain: 4, q: "[FC] What are ephemeral credentials?", a: "Credentials that automatically expire after a brief period (usually minutes), used in scenarios requiring temporary, time-bound access; minimizes exposure window for unauthorized access", tag: "4.6 PAM" },
  { domain: 4, q: "[FC] What is the difference between password complexity, length, reuse, and age policies?", a: "Complexity: 3 of 4 character groups (lower, upper, number, special). Length: 12+ chars ideal. Reuse: prevents repeating recent passwords (e.g., last 12). Age: minimum age prevents rapid cycling to reuse old passwords", tag: "4.6 Passwords" },
  { domain: 4, q: "[FC] What is the difference between orchestration and automation?", a: "Automation: mechanizing a single task (patch management, scanning, password resets). Orchestration: managing automated tasks across tools to form complete end-to-end security workflows (like SOAR)", tag: "4.7 Automation" },
  { domain: 4, q: "[FC] What are the key use cases for security automation?", a: "User provisioning/deprovisioning, resource provisioning, guardrails, security group management, ticket creation, escalation, enabling/disabling services, CI/CD, API integrations", tag: "4.7 Automation" },
  { domain: 4, q: "[FC] What are the benefits of automation and orchestration?", a: "Efficiency/time saving, enforcing baselines, standard infrastructure configurations, scaling securely, improved employee retention, faster reaction time, workforce multiplier", tag: "4.7 Benefits" },
  { domain: 4, q: "[FC] What are the negative considerations of automation?", a: "Complexity, Cost (initial investment), Single point of failure, Technical debt (outdated scripts), Ongoing supportability", tag: "4.7 Considerations" },
  { domain: 4, q: "[FC] What are the 7 phases of incident response?", a: "1.Preparation, 2.Detection, 3.Analysis (triage), 4.Containment (limit scope), 5.Eradication (remove artifacts), 6.Recovery (restore to normal), 7.Lessons Learned (root cause analysis)", tag: "4.8 Incident Response" },
  { domain: 4, q: "[FC] What happens during Preparation in the IR lifecycle?", a: "IR plans are written, configurations documented, and the IR team is formed", tag: "4.8 IR Phases" },
  { domain: 4, q: "[FC] What is triage in the Detection/Analysis phase?", a: "The initial assessment and prioritization of an incident — determining severity and scope", tag: "4.8 IR Phases" },
  { domain: 4, q: "[FC] What is the difference between containment and mitigation?", a: "Containment: limits/controls the incident from spreading (e.g., disconnecting infected hosts). Mitigation: reduces the severity of the incident — begins the fixes", tag: "4.8 IR Phases" },
  { domain: 4, q: "[FC] What happens during Eradication in IR?", a: "Removing all artifacts of the incident (malware, backdoors); example: completely wiping and reinstalling compromised systems", tag: "4.8 IR Phases" },
  { domain: 4, q: "[FC] What is root cause analysis?", a: "Process focusing on identifying the underlying cause of an issue/compromise; aims to fix the systemic issues that allowed the event to occur; findings captured in a stakeholder report with actionable recommendations", tag: "4.8 IR" },
  { domain: 4, q: "[FC] What is threat hunting?", a: "A proactive process of regularly seeking out cyber threats inside your network; threat hunters operate under the 'presumption of compromise'; leverages threat feeds, intelligence fusion, and fusion centers", tag: "4.8 Threat Hunting" },
  { domain: 4, q: "[FC] What is legal hold in digital forensics?", a: "Protecting documents that can be used as evidence from being altered or destroyed; also called litigation hold", tag: "4.8 Digital Forensics" },
  { domain: 4, q: "[FC] What makes evidence admissible in court?", a: "Must be relevant (makes a fact more/less probable), material (important to proving the case), competent/legally collected (reliable and obtained legally), and sufficient (convincing beyond doubt)", tag: "4.8 Digital Forensics" },
  { domain: 4, q: "[FC] What evidence sources should be considered in digital forensics acquisition?", a: "Disk, RAM (volatile), Swap/Pagefile, OS, Device (full system image), Firmware, Snapshots (VMs), Cache (volatile), Network (volatile connections), Artifacts (logs, registry, DNA, fingerprints), Video (CCTV)", tag: "4.8 Digital Forensics" },
  { domain: 6, q: "[FC] What is the hierarchy from security policy to implementation?", a: "Policy (the 'why' — high-level vision), Standards (the 'what/when' — mandatory technical requirements), Procedures (the 'how' — step-by-step instructions), Guidelines (the 'could' — optional recommendations)", tag: "5.1 Governance Terms" },
  { domain: 6, q: "[FC] What are security guidelines?", a: "Non-mandatory recommendations and best practices for achieving security objectives; least specific, can be adapted to specific situations; provide the 'could'", tag: "5.1 Guidelines" },
  { domain: 6, q: "[FC] What are security policies and what do they define?", a: "High-level direction and objectives for information security; define the 'why' behind security measures; general statements broad in scope; major input to procedures", tag: "5.1 Policies" },
  { domain: 6, q: "[FC] What is the Business Continuity policy?", a: "High-level document outlining the organization's commitment to maintaining critical business functions during disruptions; defines overall business continuity strategy", tag: "5.1 Policies" },
  { domain: 6, q: "[FC] What is the Disaster Recovery policy?", a: "Focuses on recovery from disasters (natural disasters, major outages); guides IT/Security in designing and implementing recovery systems", tag: "5.1 Policies" },
  { domain: 6, q: "[FC] What is the Incident Response policy?", a: "Sets high-level direction for how the organization will identify, contain, eradicate, and recover from security incidents", tag: "5.1 Policies" },
  { domain: 6, q: "[FC] What is the SDLC policy?", a: "High-level guidance software development teams must follow; acts as a roadmap ensuring quality, security, and efficiency during development", tag: "5.1 Policies" },
  { domain: 6, q: "[FC] What are security standards?", a: "Mandatory technical specifications and best practices implementing the security policy; define the 'what' and 'when' — more detailed than policies", tag: "5.1 Standards" },
  { domain: 6, q: "[FC] What password standard guidance exists?", a: "Defines complexity and management practices (frequent changes, avoiding reuse); NIST and CIS maintain guidance", tag: "5.1 Standards" },
  { domain: 6, q: "[FC] What is FIPS 140-2/3?", a: "A mandatory standard for protection of sensitive data within U.S. Federal systems", tag: "5.1 Standards" },
  { domain: 6, q: "[FC] What are security procedures?", a: "Step-by-step instructions on how to implement standards and perform specific security tasks; define the 'how'; highly detailed", tag: "5.1 Procedures" },
  { domain: 6, q: "[FC] What are the three types of procedures covered in 5.1?", a: "Change Management (proposing/reviewing/approving/implementing/documenting changes), Onboarding/Offboarding (granting/revoking access), Playbooks (step-by-step for specific security events, automated as runbooks in SOAR)", tag: "5.1 Procedures" },
  { domain: 6, q: "[FC] What external considerations affect security governance?", a: "Regulatory (GDPR, HIPAA, PCI DSS), Legal (data breach/IP laws), Industry (sector best practices), Local/Regional/National/Global laws and regulations", tag: "5.1 External" },
  { domain: 6, q: "[FC] What are the four types of governance structures?", a: "Boards (highest authority, binding decisions), Committees (subgroups with limited scope, report to board), Government Entities (NIST, FedRAMP — issue regulations/standards), Centralized/Decentralized (central vs delegated security decisions)", tag: "5.1 Governance Structures" },
  { domain: 6, q: "[FC] What is monitoring vs revision in security governance?", a: "Monitoring: ongoing security audits, log reviews, vuln scans, IR metrics to identify what's working. Revision: updating governance documents/practices based on monitoring insights", tag: "5.1 Monitoring" },
  { domain: 6, q: "[FC] Who is the Data Owner?", a: "Holds the legal rights and complete control over a single piece of data; usually senior management; can delegate day-to-day duties but CANNOT delegate total responsibility", tag: "5.1 Data Roles" },
  { domain: 6, q: "[FC] Who is the Data Custodian?", a: "Responsible for safe custody, transport, and storage of data; implements technical controls (CIA, audit trails) for the data owner; usually IT; does not decide which controls are needed — only implements them. Tip: 'day-to-day' = custodian", tag: "5.1 Data Roles" },
  { domain: 6, q: "[FC] What is the difference between a data controller and a data processor (GDPR)?", a: "Data Controller: determines the purpose and means of processing (responsible for the data). Data Processor: processes data solely on behalf of the controller", tag: "5.1 Data Roles" },
  { domain: 6, q: "[FC] What is a data steward?", a: "Ensures the data's context and meaning are understood and business rules governing usage are known and followed; data owners often delegate some duties to this role", tag: "5.1 Data Roles" },
  { domain: 6, q: "[FC] What is a data subject?", a: "Any individual person who can be identified (directly or indirectly) via identifiers — name, ID number, location data, or physical/genetic/social attributes", tag: "5.1 Data Roles" },
  { domain: 6, q: "[FC] What is the difference between risk identification and risk assessment?", a: "Risk Identification: identifies threats and vulnerabilities in the environment. Risk Assessment: the broader process — identifies, analyzes, evaluates, and prioritizes potential risks including developing mitigation strategies", tag: "5.2 Risk Terms" },
  { domain: 6, q: "[FC] What are the four types of risk assessment?", a: "Ad hoc (informal, one-time, in response to a specific event/change), Recurring (periodic at predetermined intervals), One-time (formal version of ad hoc, in response to incident or management request), Continuous (ongoing, often automated daily operations)", tag: "5.2 Risk Assessment" },
  { domain: 6, q: "[FC] What is the difference between risk assessment and risk analysis?", a: "Risk assessment: broader lifecycle — identification, analysis, evaluation, mitigation. Risk analysis: specific step within risk assessment focused on evaluating likelihood and impact of identified risks", tag: "5.2 Risk Assessment" },
  { domain: 6, q: "[FC] What is qualitative vs quantitative risk analysis?", a: "Quantitative: assigns dollar values, objective, uses formulas (AV, EF, SLE, ARO, ALE). Qualitative: uses scoring system (low/med/high), subjective, uses judgments", tag: "5.2 Risk Analysis" },
  { domain: 6, q: "[FC] What is Exposure Factor (EF)?", a: "The percentage of loss an org would experience if a specific asset were violated by a realized risk (e.g., $30,000 loss on $100,000 asset = EF of 30%)", tag: "5.2 Risk Formulas" },
  { domain: 6, q: "[FC] What is Single Loss Expectancy (SLE) and its formula?", a: "How much it would cost if the risk occurred just once; SLE = Asset Value (AV) × Exposure Factor (EF)", tag: "5.2 Risk Formulas" },
  { domain: 6, q: "[FC] What is Annualized Rate of Occurrence (ARO)?", a: "How many times a specific threat/risk will occur within a single year; if it occurs once every 5 years: 1 ÷ 5 = 0.2; once every 2 years: 1 ÷ 2 = 0.5", tag: "5.2 Risk Formulas" },
  { domain: 6, q: "[FC] What is Annualized Loss Expectancy (ALE) and its formula?", a: "Possible yearly cost of all instances of a specific realized threat; ALE = SLE × ARO (or AV × EF × ARO)", tag: "5.2 Risk Formulas" },
  { domain: 6, q: "[FC] Work through this ALE example: Office building = $200,000, hurricane damage = 50%, hurricane probability = once every 10 years", a: "EF = 50%, AV = $200,000. SLE = $200,000 × 0.50 = $100,000. ARO = 1/10 = 0.10. ALE = $100,000 × 0.10 = $10,000/year", tag: "5.2 Risk Formulas" },
  { domain: 6, q: "[FC] What is the difference between probability and likelihood in risk?", a: "Probability: quantitative, expressed as a number between 0-1 (certain). Likelihood: qualitative, expressed as high/medium/low/rare", tag: "5.2 Risk Analysis" },
  { domain: 6, q: "[FC] What is a risk register and what does it contain?", a: "A risk management tool tracking potential issues; contains: Risk ID, Description, Probability, Impact, Severity, Response, Owner. Should be a living document updated periodically (at least annually)", tag: "5.2 Risk Register" },
  { domain: 6, q: "[FC] What are Key Risk Indicators (KRIs)?", a: "Measurable metrics signaling potential changes in the likelihood or impact of a risk; enable early detection, escalation, and mitigation", tag: "5.2 Risk Register" },
  { domain: 6, q: "[FC] What is a risk threshold?", a: "The level of risk tolerance established by the organization — the level a risk must reach before the org chooses to take action to manage it", tag: "5.2 Risk Register" },
  { domain: 6, q: "[FC] What is a risk matrix/heat map?", a: "A visual representation of risks affecting a company; heat map shows severity with most severe risks in red; axes are likelihood vs impact", tag: "5.2 Risk Register" },
  { domain: 6, q: "[FC] What is the difference between risk appetite and risk tolerance?", a: "Risk Appetite: amount of risk an org is willing to accept without mitigating (aggregate). Risk Tolerance: the org's ability to take on risk per individual risk; the two should be aligned", tag: "5.2 Risk Appetite" },
  { domain: 6, q: "[FC] What are the three levels of risk appetite?", a: "Expansionary: willing to accept high risk for high rewards. Neutral: balanced approach. Conservative: prefers low risk, prioritizes preserving current security posture", tag: "5.2 Risk Appetite" },
  { domain: 6, q: "[FC] What is the difference between a risk exception and a risk exemption?", a: "Exception: temporary deviation from a policy/control for specific circumstances; documented and approved for a defined period. Exemption: permanent deviation; formal decision because mitigation is impractical or infeasible", tag: "5.2 Risk Strategies" },
  { domain: 6, q: "[FC] What is a BIA (Business Impact Analysis)?", a: "Identifies mission-critical functions and systems, maximum downtime limits, scenarios that can impact them, and potential losses; contains a cost-benefit analysis (CBA) and return on investment (ROI) calculation", tag: "5.2 BIA" },
  { domain: 6, q: "[FC] What is RPO vs RTO?", a: "RPO (Recovery Point Objective): max tolerable data loss — how old must recovered data be? RTO (Recovery Time Objective): max time to restore a business process after disaster before unacceptable consequences", tag: "5.2 BIA" },
  { domain: 6, q: "[FC] What is MTBF vs MTTR?", a: "MTBF (Mean Time Between Failures): how long a piece of IT infrastructure will continue working before it fails. MTTR (Mean Time to Repair): how long it will take to get hardware/software repaired and back online", tag: "5.2 BIA" },
  { domain: 6, q: "[FC] What are the methods for vendor assessment?", a: "Penetration testing, Right-to-audit clause, Evidence of internal audits, Independent assessments, Supply chain analysis", tag: "5.3 Vendor Assessment" },
  { domain: 6, q: "[FC] What is a right-to-audit clause?", a: "Written into supply chain contracts, allows an auditor to visit premises and inspect that the contractor is complying with contractual obligations; helps identify faulty goods, short shipments, kickbacks, etc.", tag: "5.3 Vendor Assessment" },
  { domain: 6, q: "[FC] What is due diligence in vendor selection?", a: "Effort to collect and analyze information before making a decision or signing a contract; involves reviewing vendor financial health, reputation, security practices, and regulatory compliance; supports due care actions", tag: "5.3 Vendor Selection" },
  { domain: 6, q: "[FC] What is conflict of interest in vendor selection?", a: "Financial interests (ownership stake, kickbacks), Information sharing issues (confidentiality breaches, unequal info), Professional relationships (pre-existing relationships, 'revolving door' problem) — all can unfairly influence selection", tag: "5.3 Vendor Selection" },
  { domain: 6, q: "[FC] What is an SLA (Service-Level Agreement)?", a: "Stipulates performance expectations such as maximum downtimes and includes penalties if the vendor doesn't meet expectations; generally used with vendors", tag: "5.3 Agreement Types" },
  { domain: 6, q: "[FC] What is the difference between MOU and MOA?", a: "MOU (Memorandum of Understanding): formal agreement indicating intention to work together; more formal than a handshake but NOT legally binding, no monetary penalties. MOA (Memorandum of Agreement): similar but IS a legal contract", tag: "5.3 Agreement Types" },
  { domain: 6, q: "[FC] What is an MSA (Master Service Agreement)?", a: "General contract between parties providing structure for repeated vendor engagements; covers compliance/process requirements; comes BEFORE statements of work and spans the entire relationship; must include breach notification requirements", tag: "5.3 Agreement Types" },
  { domain: 6, q: "[FC] What is a SOW (Statement of Work)?", a: "Legal document created AFTER an MSA; governs a specific unit of work; documents requirements, expectations, and deliverables for a project. MSA = overall ongoing; SOW = limited and specific", tag: "5.3 Agreement Types" },
  { domain: 6, q: "[FC] What is an NDA (Non-Disclosure Agreement)?", a: "Contract prohibiting disclosure of the company's confidential information; used with vendors/suppliers and with employees to prevent sharing proprietary data; duration and terms vary", tag: "5.3 Agreement Types" },
  { domain: 6, q: "[FC] What is a BPA (Business Partners Agreement)?", a: "Used between two companies/individuals in a business venture; details each partner's contributions, rights, responsibilities, operations, decision-making, profit sharing, and partnership dissolution rules", tag: "5.3 Agreement Types" },
  { domain: 6, q: "[FC] What is vendor monitoring and what role do questionnaires play?", a: "Continuous monitoring to track evolving risks; a vulnerable vendor can impact the entire supply chain. Questionnaires are periodic self-attestation from vendors about their security controls — should elicit lower confidence than an external assessment", tag: "5.3 Vendor Monitoring" },
  { domain: 6, q: "[FC] What is internal vs external compliance reporting?", a: "Internal: informing internal stakeholders/management about compliance posture, demonstrates transparency. External: submitting reports to regulatory bodies/auditors (GDPR, PCI, HIPAA require annual or on-request reporting)", tag: "5.4 Compliance" },
  { domain: 6, q: "[FC] What are the consequences of non-compliance?", a: "Fines, Sanctions (legal repercussions — harsher than fines, restrictions on operations, criminal charges), Reputational damage (loss of customer trust/revenue, effects can last years), Loss of license, Contractual impacts", tag: "5.4 Compliance" },
  { domain: 6, q: "[FC] What is due diligence vs due care in compliance?", a: "Due diligence: collecting and analyzing information to assess risks. Due care: the actions taken by the organization based on the due diligence findings", tag: "5.4 Compliance Monitoring" },
  { domain: 6, q: "[FC] What is attestation and acknowledgement in compliance?", a: "Obtaining formal confirmation from relevant parties (e.g., employees) that they understand and will comply with security policies and procedures", tag: "5.4 Compliance Monitoring" },
  { domain: 6, q: "[FC] What is the difference between privacy and confidentiality?", a: "Privacy: rights of individuals to control their personal information — ownership and control over data. Confidentiality: ensuring data is only accessed by authorized individuals — protection from unauthorized access", tag: "5.4 Privacy" },
  { domain: 6, q: "[FC] What is the source of U.S. privacy rights and what law extends it electronically?", a: "Fourth Amendment to the U.S. Constitution; the Stored Communications Act (SCA) of 1986 extends Fourth Amendment protections to the electronic realm", tag: "5.4 Privacy" },
  { domain: 6, q: "[FC] What is GDPR and who does it apply to?", a: "General Data Protection Regulation — EU data privacy law considered the gold standard; applies to EVERY company with customers in the EU (including U.S. companies); moving data out of EU does NOT remove GDPR requirements", tag: "5.4 Privacy" },
  { domain: 6, q: "[FC] What is the right to be forgotten?", a: "A data subject's right to request deletion of their personal data under GDPR; organizations must have processes to handle subject deletion requests", tag: "5.4 Privacy" },
  { domain: 6, q: "[FC] What is a data inventory and why is it needed?", a: "A comprehensive record of all personal data collected and processed; must include PII, PHI, financial, IP, legal, and regulated info; accompanied by data retention policies specifying how long data is stored before secure disposal", tag: "5.4 Privacy" },
  { domain: 6, q: "[FC] What is the difference between a security audit and a security assessment?", a: "Audit: verifies compliance with standards/regulations, formal (often external auditor), reports on compliance gaps. Assessment: identifies and prioritizes risks, can be formal or informal, reports risks and recommendations", tag: "5.5 Audits" },
  { domain: 6, q: "[FC] What is attestation in the context of audits?", a: "Independent verification of an organization's adherence to specific controls or standards; can be internal or external; auditors must always be independent (internal auditors must be free to report without fear of punishment)", tag: "5.5 Audits" },
  { domain: 6, q: "[FC] What are the three types of internal audits?", a: "Compliance Audits (assess internal controls vs industry standards/regulations), Audit Committee (reports to board, oversees internal audit independence), Self-Assessments (conducted by org's own staff to identify improvement areas)", tag: "5.5 Internal Audits" },
  { domain: 6, q: "[FC] What are the three types of external audits?", a: "Regulatory Audits (required by government agencies, e.g., SOX for public companies), Examinations (broader term for external reviews), Independent Third-Party Audits (external unbiased entity free from conflicts of interest)", tag: "5.5 External Audits" },
  { domain: 6, q: "[FC] What are the four penetration testing categories?", a: "Physical (unauthorized physical access), Offensive (technical — exploiting vulnerabilities), Defensive (evaluating effectiveness of existing controls), Integrated (combines all three)", tag: "5.5 Pen Testing" },
  { domain: 6, q: "[FC] What is passive vs active reconnaissance?", a: "Passive: no direct target interaction, target cannot log activity (browsing target website, OSINT, WHOIS, social media). Active: directly interacts with target, may be detected (ping sweeps, Nmap, extracting DNS info, vuln scanners)", tag: "5.5 Recon" },
  { domain: 6, q: "[FC] List the seven principles of social engineering.", a: "Authority, Intimidation, Consensus, Scarcity, Familiarity/Liking, Trust, Urgency — all aim to get users to circumvent standard security policies", tag: "5.6 Social Engineering" },
  { domain: 6, q: "[FC] What is the difference between tailgating, shoulder surfing, and dumpster diving?", a: "Tailgating: unauthorized person follows authorized person through a secured door. Shoulder surfing: spying over someone's shoulder to steal data. Dumpster diving: gathering intelligence from discarded materials (often legal)", tag: "5.6 Social Engineering" },
  { domain: 6, q: "[FC] What is elicitation?", a: "Strategic use of casual conversation to extract information without arousing suspicion; can involve complex cover stories and co-conspirators", tag: "5.6 Social Engineering" },
  { domain: 6, q: "[FC] What is pharming?", a: "An online scam where a website's traffic is manipulated through DNS, redirecting users to a malicious website; portmanteau of 'phishing' and 'farming'", tag: "5.6 Social Engineering" },
  { domain: 6, q: "[FC] What is the difference between spam and SPIM?", a: "SPAM: unsolicited email (irritant, also ransomware delivery channel; defeated with spam filtering). SPIM: SPAM over instant messaging; create cryptic usernames and avoid IM public directories", tag: "5.6 Social Engineering" },
  { domain: 6, q: "[FC] What are phishing campaigns used for in security awareness?", a: "Simulated phishing campaigns test employee awareness and preparedness; identify knowledge gaps requiring additional training", tag: "5.6 Phishing" },
  { domain: 6, q: "[FC] What are the red flags of a phishing email?", a: "Generic greetings, typos, urgency, suspicious attachments or links", tag: "5.6 Phishing" },
  { domain: 6, q: "[FC] What are examples of risky, unexpected, and unintentional anomalous behaviors?", a: "Risky: downloading untrusted files, sharing passwords. Unexpected: failed login spikes, accessing sensitive info outside normal duties. Unintentional: weak/reused passwords, falling for phishing, printing sensitive docs unattended", tag: "5.6 Anomalous Behavior" },
  { domain: 6, q: "[FC] What topics should be included in end-user security training programs?", a: "Policy/handbooks, Situational awareness, Insider threat, Password management, Removable media and cables, Social engineering, Operational security (OpSec), Hybrid/remote work environment guidance", tag: "5.6 User Training" },
  { domain: 6, q: "[FC] What is operational security (OpSec) in the context of user training?", a: "Being mindful of information shared online or in public places; awareness of risks of unsecured Wi-Fi networks or public computers", tag: "5.6 User Training" },
  { domain: 6, q: "[FC] What is the difference between initial and recurring security awareness reporting/monitoring?", a: "Initial: baseline assessment of current employee security awareness (surveys, knowledge tests). Recurring: regular training sessions to reinforce best practices and monitor reporting trends; materials need regular updates for evolving threats", tag: "5.6 Reporting/Monitoring" },
  { domain: 6, q: "[FC] How should an organization handle reported suspicious messages?", a: "Establish a clear reporting procedure for employees to forward suspicious emails to the IT security team; include instructions on forwarding without compromising security", tag: "5.6 Phishing" },
];

(function() {
  // Works even when study-data.js fails to load (e.g. missing on Netlify)
  const pack = window.SECPLUS_FLASHCARD_PACK || [];
  const existing = window.SECPLUS_FLASHCARDS || [];
  const norms = new Set(existing.map(c => (c.q || '').replace(/\[(FC|Lecture)\]\s*/, '').toLowerCase().slice(0, 80)));
  const toAdd = pack.filter(c => {
    const n = c.q.replace(/\[(FC|Lecture)\]\s*/, '').toLowerCase().slice(0, 80);
    if (norms.has(n)) return false;
    norms.add(n);
    return true;
  });
  window.SECPLUS_FLASHCARDS = existing.concat(toAdd).map((c, i) => ({ id: i + 1, ...c }));
  window.SECPLUS_FLASHCARD_PACK_META = {
    total: pack.length,
    added: toAdd.length,
    source: "DOMAIN 1-5 Flashcard Pack"
  };
})();
/* === study-infographics.js === */
// SY0-701 Study Guide Infographics — inline SVG visuals per domain

window.SECPLUS_INFOGRAPHICS = {
  1: {
    title: "Domain 1 Visual Reference",
    panels: [
      {
        label: "CIA Triad + AAA",
        svg: `<svg viewBox="0 0 420 200" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#22d3ee"/><stop offset="100%" stop-color="#10b981"/></linearGradient></defs>
          <polygon points="210,18 380,170 40,170" fill="none" stroke="url(#g1)" stroke-width="2.5"/>
          <text x="210" y="72" text-anchor="middle" fill="#67e8f9" font-size="13" font-weight="600">Confidentiality</text>
          <text x="210" y="88" text-anchor="middle" fill="#94a3b8" font-size="10">Only authorized access</text>
          <text x="95" y="155" text-anchor="middle" fill="#67e8f9" font-size="13" font-weight="600">Integrity</text>
          <text x="95" y="171" text-anchor="middle" fill="#94a3b8" font-size="10">Data is accurate</text>
          <text x="325" y="155" text-anchor="middle" fill="#67e8f9" font-size="13" font-weight="600">Availability</text>
          <text x="325" y="171" text-anchor="middle" fill="#94a3b8" font-size="10">Accessible when needed</text>
          <rect x="130" y="108" width="160" height="44" rx="8" fill="#0f172a" stroke="#334155"/>
          <text x="210" y="128" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">AAA</text>
          <text x="210" y="144" text-anchor="middle" fill="#94a3b8" font-size="9">AuthN → AuthZ → Accounting</text>
        </svg>`
      },
      {
        label: "Control Categories & Types",
        svg: `<svg viewBox="0 0 420 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="18" fill="#64748b" font-size="10" font-weight="600">CATEGORIES</text>
          <rect x="10" y="28" width="90" height="36" rx="6" fill="#164e63" stroke="#22d3ee"/><text x="55" y="50" text-anchor="middle" fill="#a5f3fc" font-size="10">Technical</text>
          <rect x="110" y="28" width="90" height="36" rx="6" fill="#1e293b" stroke="#475569"/><text x="155" y="50" text-anchor="middle" fill="#cbd5e1" font-size="10">Managerial</text>
          <rect x="210" y="28" width="90" height="36" rx="6" fill="#1e293b" stroke="#475569"/><text x="255" y="50" text-anchor="middle" fill="#cbd5e1" font-size="10">Operational</text>
          <rect x="310" y="28" width="100" height="36" rx="6" fill="#1e293b" stroke="#475569"/><text x="360" y="50" text-anchor="middle" fill="#cbd5e1" font-size="10">Physical</text>
          <text x="10" y="88" fill="#64748b" font-size="10" font-weight="600">TYPES (functions)</text>
          <rect x="10" y="98" width="62" height="28" rx="5" fill="#052e16" stroke="#22c55e"/><text x="41" y="116" text-anchor="middle" fill="#86efac" font-size="9">Prevent</text>
          <rect x="78" y="98" width="62" height="28" rx="5" fill="#422006" stroke="#f59e0b"/><text x="109" y="116" text-anchor="middle" fill="#fcd34d" font-size="9">Deter</text>
          <rect x="146" y="98" width="62" height="28" rx="5" fill="#172554" stroke="#3b82f6"/><text x="177" y="116" text-anchor="middle" fill="#93c5fd" font-size="9">Detect</text>
          <rect x="214" y="98" width="62" height="28" rx="5" fill="#450a0a" stroke="#ef4444"/><text x="245" y="116" text-anchor="middle" fill="#fca5a5" font-size="9">Correct</text>
          <rect x="282" y="98" width="62" height="28" rx="5" fill="#3b0764" stroke="#a855f7"/><text x="313" y="116" text-anchor="middle" fill="#d8b4fe" font-size="9">Compens</text>
          <rect x="350" y="98" width="60" height="28" rx="5" fill="#1e1b4b" stroke="#818cf8"/><text x="380" y="116" text-anchor="middle" fill="#c7d2fe" font-size="9">Direct</text>
          <rect x="10" y="145" width="400" height="65" rx="8" fill="#0f172a" stroke="#334155"/>
          <text x="210" y="165" text-anchor="middle" fill="#f472b6" font-size="10" font-weight="600">Exam keyword cheat sheet</text>
          <text x="20" y="183" fill="#94a3b8" font-size="9">monitoring/audit → Detective</text>
          <text x="20" y="198" fill="#94a3b8" font-size="9">firewall/encrypt → Preventive</text>
          <text x="220" y="183" fill="#94a3b8" font-size="9">signs/warnings → Deterrent</text>
          <text x="220" y="198" fill="#94a3b8" font-size="9">backup/patch → Corrective</text>
        </svg>`
      }
    ]
  },
  2: {
    title: "Domain 2 Visual Reference",
    panels: [
      {
        label: "Threat Actor Matrix",
        svg: `<svg viewBox="0 0 400 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="200" y="16" text-anchor="middle" fill="#64748b" font-size="10">SOPHISTICATION ↑</text>
          <text x="12" y="130" fill="#64748b" font-size="10" transform="rotate(-90 12 130)">FUNDING →</text>
          <rect x="50" y="30" width="150" height="80" rx="6" fill="#1e293b" stroke="#475569"/>
          <rect x="210" y="30" width="150" height="80" rx="6" fill="#450a0a" stroke="#ef4444"/>
          <rect x="50" y="120" width="150" height="80" rx="6" fill="#1e293b" stroke="#475569"/>
          <rect x="210" y="120" width="150" height="80" rx="6" fill="#422006" stroke="#f59e0b"/>
          <text x="125" y="58" text-anchor="middle" fill="#94a3b8" font-size="9">Script kiddie</text>
          <text x="285" y="52" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="600">Nation-state</text>
          <text x="285" y="68" text-anchor="middle" fill="#94a3b8" font-size="9">MOST DANGEROUS</text>
          <text x="125" y="158" text-anchor="middle" fill="#94a3b8" font-size="9">Hacktivist</text>
          <text x="285" y="152" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="600">Organized crime</text>
          <text x="285" y="168" text-anchor="middle" fill="#94a3b8" font-size="9">Ransomware ROI</text>
          <rect x="50" y="210" width="310" height="24" rx="5" fill="#0f172a" stroke="#334155"/>
          <text x="205" y="226" text-anchor="middle" fill="#67e8f9" font-size="9">Vector = one path in · Surface = all entry points (castle)</text>
        </svg>`
      },
      {
        label: "Attack Chain & Indicators",
        svg: `<svg viewBox="0 0 420 160" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="50" width="75" height="40" rx="6" fill="#1e293b" stroke="#f59e0b"/><text x="47" y="74" text-anchor="middle" fill="#fcd34d" font-size="9">Vulnerability</text>
          <text x="95" y="74" fill="#64748b" font-size="14">→</text>
          <rect x="105" y="50" width="60" height="40" rx="6" fill="#1e293b" stroke="#ef4444"/><text x="135" y="74" text-anchor="middle" fill="#fca5a5" font-size="9">Threat</text>
          <text x="175" y="74" fill="#64748b" font-size="14">→</text>
          <rect x="185" y="50" width="60" height="40" rx="6" fill="#1e293b" stroke="#a855f7"/><text x="215" y="74" text-anchor="middle" fill="#d8b4fe" font-size="9">Exploit</text>
          <text x="255" y="74" fill="#64748b" font-size="14">→</text>
          <rect x="265" y="50" width="60" height="40" rx="6" fill="#450a0a" stroke="#ef4444"/><text x="295" y="74" text-anchor="middle" fill="#fff" font-size="9">Attack</text>
          <text x="10" y="28" fill="#64748b" font-size="10" font-weight="600">Weak lock → Burglar → Crowbar → Break-in</text>
          <rect x="10" y="108" width="400" height="44" rx="8" fill="#0f172a" stroke="#334155"/>
          <text x="210" y="126" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">Key Indicators of Compromise</text>
          <text x="20" y="144" fill="#94a3b8" font-size="8">Impossible travel · Account lockout · Resource spikes · Missing logs · Out-of-cycle logging</text>
        </svg>`
      }
    ]
  },
  3: {
    title: "Domain 3 Visual Reference",
    panels: [
      {
        label: "Shared Responsibility Model",
        svg: `<svg viewBox="0 0 420 260" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="18" fill="#64748b" font-size="10">STACK LAYERS (bottom = CSP, top = Customer)</text>
          ${['Applications','Data','Runtime','Middleware','OS','Virtualization','Servers','Storage','Networking'].map((l,i)=>{
            const y=30+i*24; const cust=i<2; const shared=i===2; const csp=i>2;
            const fill=cust?'#164e63':shared?'#422006':csp?'#1e293b';
            const stroke=cust?'#22d3ee':shared?'#f59e0b':csp?'#475569';
            const tc=cust?'#a5f3fc':shared?'#fcd34d':'#94a3b8';
            return `<rect x="120" y="${y}" width="180" height="20" rx="4" fill="${fill}" stroke="${stroke}"/><text x="210" y="${y+14}" text-anchor="middle" fill="${tc}" font-size="9">${l}</text>`;
          }).join('')}
          <text x="60" y="90" fill="#22d3ee" font-size="9">SaaS</text>
          <text x="60" y="140" fill="#f59e0b" font-size="9">PaaS</text>
          <text x="60" y="200" fill="#94a3b8" font-size="9">IaaS</text>
          <rect x="320" y="30" width="90" height="20" rx="4" fill="#164e63" stroke="#22d3ee"/><text x="365" y="44" text-anchor="middle" fill="#a5f3fc" font-size="8">Customer</text>
          <rect x="320" y="55" width="90" height="20" rx="4" fill="#422006" stroke="#f59e0b"/><text x="365" y="69" text-anchor="middle" fill="#fcd34d" font-size="8">Shared</text>
          <rect x="320" y="80" width="90" height="20" rx="4" fill="#1e293b" stroke="#475569"/><text x="365" y="94" text-anchor="middle" fill="#94a3b8" font-size="8">CSP</text>
        </svg>`
      },
      {
        label: "Segmentation & VMs vs Containers",
        svg: `<svg viewBox="0 0 420 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="190" height="70" rx="8" fill="#0f172a" stroke="#22d3ee"/>
          <text x="105" y="40" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">Network Segmentation</text>
          <rect x="25" y="50" width="50" height="30" rx="4" fill="#164e63" stroke="#22d3ee"/><text x="50" y="68" text-anchor="middle" fill="#a5f3fc" font-size="8">DMZ</text>
          <rect x="85" y="50" width="50" height="30" rx="4" fill="#1e293b" stroke="#475569"/><text x="110" y="68" text-anchor="middle" fill="#94a3b8" font-size="8">VLAN</text>
          <rect x="145" y="50" width="45" height="30" rx="4" fill="#1e293b" stroke="#475569"/><text x="167" y="68" text-anchor="middle" fill="#94a3b8" font-size="8">Air gap</text>
          <rect x="220" y="20" width="190" height="70" rx="8" fill="#0f172a" stroke="#10b981"/>
          <text x="315" y="40" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="600">VM vs Container</text>
          <rect x="235" y="50" width="70" height="30" rx="4" fill="#052e16" stroke="#22c55e"/><text x="270" y="62" text-anchor="middle" fill="#86efac" font-size="8">VM</text><text x="270" y="74" text-anchor="middle" fill="#64748b" font-size="7">Full guest OS</text>
          <rect x="320" y="50" width="75" height="30" rx="4" fill="#422006" stroke="#f59e0b"/><text x="357" y="62" text-anchor="middle" fill="#fcd34d" font-size="8">Container</text><text x="357" y="74" text-anchor="middle" fill="#64748b" font-size="7">Shared kernel</text>
          <rect x="10" y="110" width="400" height="60" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
          <text x="210" y="132" text-anchor="middle" fill="#c7d2fe" font-size="10" font-weight="600">SDN: Control Plane ≠ Data Plane</text>
          <text x="210" y="152" text-anchor="middle" fill="#94a3b8" font-size="9">Northbound = apps to controller · Southbound = OpenFlow to switches · Secure with TLS</text>
        </svg>`
      }
    ]
  },
  4: {
    title: "Domain 4 Visual Reference",
    panels: [
      {
        label: "Baseline Hierarchy & Lifecycle",
        svg: `<svg viewBox="0 0 400 200" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <polygon points="200,20 340,70 60,70" fill="#164e63" stroke="#22d3ee" stroke-width="1.5"/>
          <text x="200" y="52" text-anchor="middle" fill="#a5f3fc" font-size="11" font-weight="600">Benchmark</text>
          <text x="200" y="64" text-anchor="middle" fill="#64748b" font-size="8">CIS / vendor guide</text>
          <polygon points="200,78 300,118 100,118" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <text x="200" y="104" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="600">Baseline</text>
          <text x="200" y="116" text-anchor="middle" fill="#64748b" font-size="8">Applied to system</text>
          <polygon points="200,126 260,158 140,158" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="200" y="148" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="600">Control</text>
          <rect x="280" y="130" width="110" height="60" rx="6" fill="#0f172a" stroke="#334155"/>
          <text x="335" y="148" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="600">Lifecycle</text>
          <text x="335" y="163" text-anchor="middle" fill="#94a3b8" font-size="8">Establish</text>
          <text x="335" y="175" text-anchor="middle" fill="#94a3b8" font-size="8">Deploy → Maintain</text>
        </svg>`
      },
      {
        label: "Mobile Deployment Models",
        svg: `<svg viewBox="0 0 420 170" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="125" height="90" rx="8" fill="#0f172a" stroke="#22d3ee"/>
          <text x="72" y="42" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="600">BYOD</text>
          <text x="72" y="58" text-anchor="middle" fill="#94a3b8" font-size="8">Employee owns device</text>
          <text x="72" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">Corp wipe = biz data only</text>
          <text x="72" y="96" text-anchor="middle" fill="#64748b" font-size="8">Personal photos safe</text>
          <rect x="147" y="20" width="125" height="90" rx="8" fill="#0f172a" stroke="#10b981"/>
          <text x="209" y="42" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="600">COPE</text>
          <text x="209" y="58" text-anchor="middle" fill="#94a3b8" font-size="8">Company owns device</text>
          <text x="209" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">Personal use allowed</text>
          <text x="209" y="96" text-anchor="middle" fill="#64748b" font-size="8">Full wipe if lost OK</text>
          <rect x="284" y="20" width="125" height="90" rx="8" fill="#0f172a" stroke="#f59e0b"/>
          <text x="346" y="42" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="600">CYOD</text>
          <text x="346" y="58" text-anchor="middle" fill="#94a3b8" font-size="8">Pick from approved list</text>
          <text x="346" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">Company may fund</text>
          <rect x="10" y="125" width="400" height="38" rx="6" fill="#1e1b4b" stroke="#818cf8"/>
          <text x="210" y="143" text-anchor="middle" fill="#c7d2fe" font-size="9">MDM: geofencing · remote wipe · app allow lists · jailbreak detection</text>
          <text x="210" y="157" text-anchor="middle" fill="#94a3b8" font-size="8">Wireless: WPA3 + RADIUS · Site survey · Heat map (green=strong, red=weak)</text>
        </svg>`
      }
    ]
  },
  5: {
    title: "Domain 5 Visual Reference",
    panels: [
      {
        label: "NIST Incident Response Lifecycle",
        svg: `<svg viewBox="0 0 440 140" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          ${[
            ['1','Preparation','#164e63','#22d3ee'],
            ['2','Detection','#1e3a5f','#3b82f6'],
            ['3','Containment','#422006','#f59e0b'],
            ['4','Eradication','#450a0a','#ef4444'],
            ['5','Recovery','#052e16','#22c55e'],
            ['6','Lessons','#3b0764','#a855f7']
          ].map(([n,l,fill,stroke],i)=>{
            const x=10+i*72;
            return `<rect x="${x}" y="40" width="66" height="50" rx="8" fill="${fill}" stroke="${stroke}"/><text x="${x+33}" y="58" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">${n}</text><text x="${x+33}" y="76" text-anchor="middle" fill="#e2e8f0" font-size="8">${l}</text>${i<5?`<text x="${x+70}" y="68" fill="#64748b" font-size="16">→</text>`:''}`;
          }).join('')}
          <text x="220" y="22" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="600">Memorize this order for the exam</text>
          <rect x="10" y="105" width="420" height="28" rx="6" fill="#0f172a" stroke="#334155"/>
          <text x="220" y="123" text-anchor="middle" fill="#94a3b8" font-size="9">SIEM detects · SOAR automates playbooks · Chain of custody for evidence</text>
        </svg>`
      },
      {
        label: "Backups & Evidence Volatility",
        svg: `<svg viewBox="0 0 420 170" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="195" height="70" rx="8" fill="#0f172a" stroke="#22d3ee"/>
          <text x="107" y="35" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">3-2-1 Backup Rule</text>
          <text x="30" y="55" fill="#a5f3fc" font-size="18" font-weight="700">3</text><text x="50" y="55" fill="#94a3b8" font-size="9">copies of data</text>
          <text x="30" y="70" fill="#a5f3fc" font-size="18" font-weight="700">2</text><text x="50" y="70" fill="#94a3b8" font-size="9">different media types</text>
          <text x="30" y="85" fill="#a5f3fc" font-size="18" font-weight="700">1</text><text x="50" y="85" fill="#94a3b8" font-size="9">offsite / offline copy</text>
          <rect x="215" y="15" width="195" height="70" rx="8" fill="#0f172a" stroke="#f59e0b"/>
          <text x="312" y="35" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="600">Order of Volatility</text>
          <text x="225" y="55" fill="#94a3b8" font-size="8">1.CPU 2.Cache 3.RAM 4.Network</text>
          <text x="225" y="68" fill="#94a3b8" font-size="8">5.Processes 6.Disk 7.Archive</text>
          <text x="225" y="81" fill="#64748b" font-size="8">Collect most volatile FIRST</text>
          <rect x="10" y="100" width="400" height="60" rx="8" fill="#1e293b" stroke="#475569"/>
          <text x="110" y="122" text-anchor="middle" fill="#6ee7b7" font-size="10">RTO</text><text x="110" y="138" text-anchor="middle" fill="#64748b" font-size="8">Max downtime</text>
          <text x="210" y="122" text-anchor="middle" fill="#6ee7b7" font-size="10">RPO</text><text x="210" y="138" text-anchor="middle" fill="#64748b" font-size="8">Max data loss</text>
          <text x="310" y="122" text-anchor="middle" fill="#6ee7b7" font-size="10">MTTR</text><text x="310" y="138" text-anchor="middle" fill="#64748b" font-size="8">Mean repair time</text>
        </svg>`
      }
    ]
  },
  6: {
    title: "Domain 6 Visual Reference",
    panels: [
      {
        label: "Governance Hierarchy",
        svg: `<svg viewBox="0 0 400 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="10" width="200" height="36" rx="8" fill="#164e63" stroke="#22d3ee"/>
          <text x="200" y="28" text-anchor="middle" fill="#a5f3fc" font-size="12" font-weight="600">POLICY</text>
          <text x="200" y="40" text-anchor="middle" fill="#64748b" font-size="8">WHY — high-level direction</text>
          <line x1="200" y1="46" x2="200" y2="58" stroke="#475569" stroke-width="2"/>
          <rect x="120" y="58" width="160" height="36" rx="8" fill="#1e3a5f" stroke="#3b82f6"/>
          <text x="200" y="76" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="600">STANDARD</text>
          <text x="200" y="88" text-anchor="middle" fill="#64748b" font-size="8">WHAT/WHEN — mandatory</text>
          <line x1="200" y1="94" x2="200" y2="106" stroke="#475569" stroke-width="2"/>
          <rect x="140" y="106" width="120" height="36" rx="8" fill="#422006" stroke="#f59e0b"/>
          <text x="200" y="124" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="600">PROCEDURE</text>
          <text x="200" y="136" text-anchor="middle" fill="#64748b" font-size="8">HOW — step-by-step</text>
          <line x1="200" y1="142" x2="200" y2="154" stroke="#475569" stroke-width="2"/>
          <rect x="155" y="154" width="90" height="30" rx="6" fill="#1e293b" stroke="#64748b"/>
          <text x="200" y="172" text-anchor="middle" fill="#94a3b8" font-size="10">GUIDELINE</text>
          <text x="200" y="182" text-anchor="middle" fill="#64748b" font-size="7">COULD — optional</text>
          <rect x="10" y="195" width="380" height="22" rx="5" fill="#0f172a" stroke="#334155"/>
          <text x="200" y="210" text-anchor="middle" fill="#94a3b8" font-size="8">Recipe → Ingredients → Cooking steps → Suggestions</text>
        </svg>`
      },
      {
        label: "Risk Quantitative Formulas",
        svg: `<svg viewBox="0 0 420 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="125" height="55" rx="8" fill="#0f172a" stroke="#f59e0b"/>
          <text x="72" y="35" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="600">Exposure Factor</text>
          <text x="72" y="52" text-anchor="middle" fill="#94a3b8" font-size="8">% of asset lost</text>
          <text x="72" y="64" text-anchor="middle" fill="#64748b" font-size="8">e.g. 30% of $100K</text>
          <text x="145" y="45" fill="#64748b" font-size="14">×</text>
          <rect x="160" y="15" width="100" height="55" rx="8" fill="#0f172a" stroke="#22d3ee"/>
          <text x="210" y="35" text-anchor="middle" fill="#67e8f9" font-size="10" font-weight="600">Asset Value</text>
          <text x="210" y="55" text-anchor="middle" fill="#94a3b8" font-size="8">=</text>
          <rect x="275" y="15" width="130" height="55" rx="8" fill="#164e63" stroke="#22d3ee"/>
          <text x="340" y="38" text-anchor="middle" fill="#a5f3fc" font-size="11" font-weight="600">SLE</text>
          <text x="340" y="55" text-anchor="middle" fill="#94a3b8" font-size="8">Single Loss Expectancy</text>
          <rect x="80" y="85" width="260" height="40" rx="8" fill="#1e1b4b" stroke="#818cf8"/>
          <text x="210" y="105" text-anchor="middle" fill="#c7d2fe" font-size="11" font-weight="600">ALE = SLE × ARO</text>
          <text x="210" y="120" text-anchor="middle" fill="#94a3b8" font-size="8">ARO = times per year (0.1 if once/10 yrs)</text>
          <rect x="10" y="140" width="95" height="32" rx="6" fill="#052e16" stroke="#22c55e"/><text x="57" y="160" text-anchor="middle" fill="#86efac" font-size="9">Mitigate</text>
          <rect x="112" y="140" width="95" height="32" rx="6" fill="#1e3a5f" stroke="#3b82f6"/><text x="159" y="160" text-anchor="middle" fill="#93c5fd" font-size="9">Transfer</text>
          <rect x="214" y="140" width="95" height="32" rx="6" fill="#450a0a" stroke="#ef4444"/><text x="261" y="160" text-anchor="middle" fill="#fca5a5" font-size="9">Avoid</text>
          <rect x="316" y="140" width="95" height="32" rx="6" fill="#422006" stroke="#f59e0b"/><text x="363" y="160" text-anchor="middle" fill="#fcd34d" font-size="9">Accept</text>
        </svg>`
      }
    ]
  }
};
/* === official-domains-flowchart.js === */
// CompTIA Security+ SY0-701 — five official exam domains
// Subtopics sourced from Pete Zerger Exam Cram PDFs 1–5

window.SECPLUS_OFFICIAL_DOMAINS = [
  {
    id: 1,
    code: "1.0",
    title: "General Security Concepts",
    pct: 12,
    pdf: "1-general-security-concepts.pdf",
    summary: "Security control categories and types, CIA/AAA, Zero Trust, change management, and cryptographic fundamentals.",
    flashcardDomains: [1],
    subtopics: [
      {
        title: "Security Controls",
        desc: "Categories (technical, managerial, operational, physical) and types (preventive, deterrent, detective, corrective, compensating, directive).",
        items: ["Technical · Managerial · Operational · Physical", "Preventive · Deterrent · Detective", "Corrective · Compensating · Directive", "Safeguards vs countermeasures"]
      },
      {
        title: "CIA Triad & AAA",
        desc: "Foundational goals and identity framework tested across every domain.",
        items: ["Confidentiality · Integrity · Availability", "Identification · Authentication", "Authorization · Accounting", "Non-repudiation · Least privilege"]
      },
      {
        title: "Zero Trust Architecture",
        desc: "NIST 800-207 — never trust, always verify; assume breach.",
        items: ["Control plane vs data plane", "Policy Engine · Administrator", "Policy Enforcement Point (PEP)", "Micro-segmentation · continuous validation"]
      },
      {
        title: "Deception Technology",
        desc: "Detect intruders by offering attractive decoy assets.",
        items: ["Honeypot · Honeynet", "Honeyfile · Honeytoken", "Early threat detection", "Low false-positive traps"]
      },
      {
        title: "Change & Configuration Mgmt",
        desc: "Authorized, tested changes prevent outages and security gaps.",
        items: ["Configuration baselines", "Change request → approve → test", "GPO · MDM · IaC enforcement", "CAB review for major changes"]
      },
      {
        title: "Cryptography & PKI",
        desc: "Protect confidentiality, integrity, and non-repudiation.",
        items: ["Symmetric (AES) · Asymmetric (RSA/ECC)", "Hashing (SHA-256) · digital signatures", "PKI · CA · CRL / OCSP", "TPM · HSM · key stretching"]
      }
    ]
  },
  {
    id: 2,
    code: "2.0",
    title: "Threats, Vulnerabilities & Mitigations",
    pct: 22,
    pdf: "2-threats-vulnerabilities.pdf",
    summary: "Threat actors, motivations, vectors, attack surfaces, vulnerabilities, malware indicators, and mitigation techniques.",
    flashcardDomains: [2],
    subtopics: [
      {
        title: "Threat Actors & Motivations",
        desc: "Who attacks and why — match actor type to motivation on the exam.",
        items: ["Nation-state · organized crime", "Hacktivist · insider threat", "Unskilled attacker · shadow IT", "Financial · espionage · ideology · disruption"]
      },
      {
        title: "Threat Vectors & Surfaces",
        desc: "Vector = one path in; surface = all possible entry points.",
        items: ["Phishing · vishing · smishing", "Spear phishing · whaling · BEC", "Supply chain · watering hole", "Typosquatting · RFID / NFC attacks"]
      },
      {
        title: "Vulnerabilities & Exploits",
        desc: "Weaknesses and the methods that leverage them.",
        items: ["Misconfigurations · unpatched systems", "Zero-day · no patch available", "SQL injection · XSS · directory traversal", "Cloud misconfig · weak credentials"]
      },
      {
        title: "Malware & Attack Types",
        desc: "Malware families and network/application attacks.",
        items: ["Ransomware · trojan · worm · rootkit", "Spyware · virus · logic bomb", "DDoS amplified / reflected", "Pass-the-hash · MITM · DNS attacks"]
      },
      {
        title: "Indicators of Malicious Activity",
        desc: "Signals that something may be wrong — distinguish from confirmed attacks.",
        items: ["Impossible travel · account lockout", "Resource spikes · missing logs", "Concurrent sessions · password spraying", "Out-of-cycle logging · blocked content"]
      },
      {
        title: "Mitigation Techniques",
        desc: "Proactive safeguards and reactive countermeasures.",
        items: ["Segmentation · isolation · micro-segmentation", "Hardening · patching · allow listing", "EDR · HIDS/HIPS · encryption", "DevSecOps · secure disposal"]
      }
    ]
  },
  {
    id: 3,
    code: "3.0",
    title: "Security Architecture",
    pct: 18,
    pdf: "3-security-architecture.pdf",
    summary: "Cloud and on-prem models, shared responsibility, segmentation, SDN/IaC, data protection, ICS/IoT, and resilience.",
    flashcardDomains: [3],
    subtopics: [
      {
        title: "Cloud & Shared Responsibility",
        desc: "IaaS, PaaS, SaaS — who patches what.",
        items: ["IaaS · PaaS · SaaS models", "Hybrid · multi-cloud", "Guest OS patching in IaaS = customer", "Third-party vendor risk"]
      },
      {
        title: "Enterprise Infrastructure",
        desc: "Modern programmable and virtualized infrastructure.",
        items: ["SDN control vs data plane", "IaC declarative deployments", "Containers · VMs · serverless", "VPNs · VLANs · subnets · VRF"]
      },
      {
        title: "Segmentation & Isolation",
        desc: "Limit lateral movement and exposure.",
        items: ["DMZ · air-gapped networks", "Logical vs physical segmentation", "Micro-segmentation · NSGs", "802.1X port-based NAC"]
      },
      {
        title: "Data Protection Strategies",
        desc: "Classification drives handling and controls.",
        items: ["Public · private · confidential · restricted", "Encryption at rest / in transit", "DLP · tokenization · masking", "Data owner vs custodian roles"]
      },
      {
        title: "ICS/SCADA & IoT",
        desc: "Special environments with unique constraints.",
        items: ["ICS/SCADA segmentation", "Inability to patch · monitor instead", "IoT · embedded · RTOS risks", "SASE converged edge security"]
      },
      {
        title: "Resilience & Recovery Design",
        desc: "Architect for availability and fault tolerance.",
        items: ["High availability · fault tolerance", "Platform diversity · multi-cloud", "Capacity planning", "DR testing · tabletop exercises"]
      }
    ]
  },
  {
    id: 4,
    code: "4.0",
    title: "Security Operations",
    pct: 28,
    pdf: "4-security-operations.pdf",
    summary: "Largest domain — baselines, hardening, mobile/wireless, vuln management, monitoring, IAM, automation, and incident response.",
    flashcardDomains: [4, 5],
    subtopics: [
      {
        title: "Baselines & Hardening",
        desc: "Benchmark → baseline → control hierarchy from PDF 4.",
        items: ["CIS benchmarks · STIG guides", "Establish → deploy → maintain", "Disable services · ACLs · FDE", "Patch & configuration management"]
      },
      {
        title: "Mobile Device Management",
        desc: "BYOD, COPE, CYOD deployment models.",
        items: ["MDM remote wipe · geofencing", "BYOD · COPE · CYOD · UEM", "App allow lists · jailbreak detection", "Screen lock · content encryption"]
      },
      {
        title: "Wireless Security",
        desc: "Secure Wi-Fi deployment and monitoring.",
        items: ["WPA3 · SAE · forward secrecy", "802.1X · RADIUS / AAA", "Site surveys · heat maps", "Evil twin · rogue AP detection"]
      },
      {
        title: "Asset & Vulnerability Mgmt",
        desc: "Lifecycle tracking and vulnerability scoring.",
        items: ["Acquire → assign → monitor → dispose", "CVE identifiers · CVSS scores", "Credentialed vs non-credentialed scans", "Secure wipe · degaussing"]
      },
      {
        title: "Monitoring, SIEM & SOAR",
        desc: "Aggregate, correlate, alert, and automate response.",
        items: ["SIEM log correlation", "SNMP · NetFlow · IoC tracking", "Alert tuning · baselining", "SOAR playbook automation"]
      },
      {
        title: "Identity & Access Management",
        desc: "Control who accesses what and how.",
        items: ["RBAC · ABAC · PAM", "SSO · MFA · federation", "Least privilege · NAC quarantine", "Certificate-based device auth"]
      },
      {
        title: "Automation & App Security",
        desc: "Secure development and orchestrated operations.",
        items: ["Input validation · code signing", "Static / dynamic code analysis", "Sandboxing · secure cookies", "WAF Layer 7 protection"]
      },
      {
        title: "Incident Response",
        desc: "NIST IR lifecycle — memorize the order.",
        items: ["Preparation → detection → containment", "Eradication → recovery → lessons learned", "Chain of custody", "SOAR IR playbooks"]
      },
      {
        title: "Forensics & Evidence",
        desc: "Preserve and collect evidence correctly.",
        items: ["Order of volatility — RAM first", "Write blockers · forensic imaging", "Legal hold · documentation", "Volatile data collection"]
      },
      {
        title: "Backups & Disaster Recovery",
        desc: "Recovery objectives and backup strategy.",
        items: ["3-2-1 backup rule", "RTO · RPO · MTTR · MTBF", "BIA drives recovery targets", "Hot / warm / cold sites"]
      }
    ]
  },
  {
    id: 5,
    code: "5.0",
    title: "Security Program Management & Oversight",
    pct: 20,
    pdf: "5-governance-risk-compliance.pdf",
    summary: "Governance hierarchy, risk management, third-party risk, compliance, audits, and security awareness.",
    flashcardDomains: [6],
    subtopics: [
      {
        title: "Governance & Policy Hierarchy",
        desc: "Policy → standard → procedure → guideline chain.",
        items: ["Policy = WHY (direction)", "Standard = WHAT/WHEN (mandatory)", "Procedure = HOW (step-by-step)", "Guideline = COULD (recommended)"]
      },
      {
        title: "Risk Management",
        desc: "Quantitative and qualitative risk analysis — calculate ALE.",
        items: ["SLE × ARO = ALE", "Mitigate · transfer · avoid · accept", "Risk appetite vs tolerance", "Risk register · KRIs · residual risk"]
      },
      {
        title: "Third-Party & Supply Chain Risk",
        desc: "Vendor due diligence and ongoing oversight.",
        items: ["Due diligence vs due care", "SLA · MOU/MOA contracts", "Right to audit vendors", "Secure offboarding"]
      },
      {
        title: "Compliance & Regulations",
        desc: "Match frameworks to industries on the exam.",
        items: ["GDPR · HIPAA · PCI-DSS", "SOX · FedRAMP · FIPS 140-2/3", "Data sovereignty · privacy", "Pen test vs vuln assessment"]
      },
      {
        title: "Audits & Assessments",
        desc: "Internal vs external assurance activities.",
        items: ["Internal vs external audit", "Attestation · gap analysis", "ISO 27001 · NIST 800-53", "Continuous monitoring"]
      },
      {
        title: "Security Awareness & Training",
        desc: "Human layer of defense and insider threat detection.",
        items: ["Phishing simulations", "Role-based training", "Insider threat indicators", "Onboarding / offboarding training"]
      }
    ]
  }
];
