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