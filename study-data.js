// CompTIA Security+ SY0-701 study content
// Sourced from Pete Zerger Exam Cram PDFs (1:5 through 5:5)

window.SECPLUS_PDFS = [
  { id: 1, file: "pdfs/1-general-security-concepts.pdf", title: "Domain 1 — General Security Concepts (12%))", domain: 1, pages: 134 },
  { id: 2, file: "pdfs/2-threats-vulnerabilities.pdf", title: "Domain 2 — Threats, Vulnerabilities & mitigations (22%)", domain: 2, pages: 185 },
  { id: 3, file: "pdfs/3-security-architecture.pdf", title: "Domain 3 — Security Architecture (18%)", domain: 3, pages: 158 },
  { id: 4, file: "pdfs/4-security-operations.pdf", title: "Domain 4 — Security Operations (28%)", domain: 4, pages: 275 },
  { id: 5, file: "pdfs/5-governance-risk-compliance.pdf", title: "Domain 5 — Security Program Manangement and Oversight (20%)", domain: 5, pages: 126 }
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
