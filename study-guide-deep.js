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
