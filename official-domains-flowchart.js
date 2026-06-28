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