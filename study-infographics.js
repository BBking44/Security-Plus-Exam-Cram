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