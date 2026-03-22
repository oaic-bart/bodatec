export interface Service {
  slug: string
  title: string
  shortDescription: string
  icon: string
  description: string
  scope: string[]
  deliverables: string[]
  idealFor: string[]
  href: string
}

export const services: Service[] = [
  {
    slug: 'electrical-engineering',
    title: 'Electrical Engineering Support',
    shortDescription:
      'Practical engineering support for electrical system design, documentation, and technical studies.',
    icon: 'Cpu',
    description:
      'Bodatec provides hands-on electrical engineering support for industrial and energy projects. From concept through detailed design to as-built documentation, our engineers integrate directly into project teams or operate independently to deliver reliable technical work.',
    scope: [
      'Single-line diagram development and review',
      'Protection relay settings studies',
      'Cable sizing, routing, and schedule preparation',
      'Equipment specifications and datasheet review',
      'Load flow, short-circuit, and arc flash calculations',
      'FAT / SAT preparation and witnessing support',
      'Engineering QA / document control support',
    ],
    deliverables: [
      'Electrical design documentation',
      'Calculation reports',
      'Equipment specifications',
      'Review and comment reports',
      'As-built documentation packages',
    ],
    idealFor: [
      'EPC contractors requiring specialist engineering input',
      'Industrial clients running capital projects',
      'OEMs needing field application support',
      'Utilities requiring design review and verification',
    ],
    href: '/services/electrical-engineering',
  },
  {
    slug: 'testing-commissioning',
    title: 'Testing & Commissioning',
    shortDescription:
      'Systematic pre-commissioning, commissioning, and site acceptance testing for electrical systems.',
    icon: 'ClipboardCheck',
    description:
      'Bodatec delivers structured testing and commissioning support for electrical systems from MV/LV switchgear to complete substation and plant installations. Our teams follow rigorous test procedures, produce full documentation, and coordinate with all site stakeholders.',
    scope: [
      'Pre-commissioning checks and continuity testing',
      'MV / LV switchgear testing and inspection',
      'Protection relay testing (functional and secondary injection)',
      'Transformer commissioning and testing',
      'Cable HV testing (AC/DC withstand, tan delta)',
      'Earth grid and earthing system testing',
      'SCADA / control system loop checks',
      'SAT coordination and punch-list management',
    ],
    deliverables: [
      'Test record sheets and commissioning dossiers',
      'Punch-list and defect register',
      'Commissioning completion certificates',
      'As-tested documentation',
    ],
    idealFor: [
      'Substation construction and upgrade projects',
      'Industrial plant new build or expansion',
      'Renewable energy plant commissioning',
      'EPC contractors on electrical commissioning packages',
    ],
    href: '/services/testing-commissioning',
  },
  {
    slug: 'maintenance-troubleshooting',
    title: 'Maintenance & Troubleshooting',
    shortDescription:
      'Planned maintenance support and fast-response fault investigation for operational electrical systems.',
    icon: 'Wrench',
    description:
      'Bodatec supports operational plants and infrastructure owners with planned maintenance execution and reactive troubleshooting. Our technicians and engineers can mobilise quickly for fault resolution, and our structured approach ensures thorough investigation, clear findings, and practical corrective actions.',
    scope: [
      'Planned maintenance execution on MV/LV equipment',
      'Protection relay testing and recalibration',
      'Transformer inspection and oil sampling',
      'Switchgear maintenance (ACB, VCB, SF6)',
      'Fault investigation and root cause analysis',
      'Thermographic inspection support',
      'Earthing system condition assessment',
    ],
    deliverables: [
      'Maintenance execution reports',
      'Fault investigation and RCA reports',
      'Condition assessment reports',
      'Recommended corrective action plans',
    ],
    idealFor: [
      'Industrial plants during annual shutdowns',
      'Utilities managing aging grid assets',
      'Facilities teams needing specialist electrical support',
      'Clients requiring rapid response on unexpected faults',
    ],
    href: '/services/maintenance-troubleshooting',
  },
  {
    slug: 'hv-mv-support',
    title: 'HV / MV Support',
    shortDescription:
      'Specialist high-voltage and medium-voltage technical support for substations, cable systems, and grid assets.',
    icon: 'Zap',
    description:
      'Bodatec provides specialist high-voltage and medium-voltage support across the full asset lifecycle — from design review to on-site testing, commissioning, and ongoing maintenance. Our HV-qualified personnel operate safely and competently on live and de-energised HV systems.',
    scope: [
      'HV substation commissioning (132kV, 66kV, 33kV, 11kV)',
      'HV cable jointing and termination supervision',
      'HV cable testing: XLPE, paper-insulated systems',
      'GIS and AIS switchgear testing',
      'Busbar differential and distance protection testing',
      'Transformer protection, OLTC, and differential relay testing',
      'HV energisation support and hold-point inspections',
    ],
    deliverables: [
      'HV test reports',
      'Energisation readiness dossiers',
      'Protection settings and test records',
      'HV commissioning completion documentation',
    ],
    idealFor: [
      'Transmission and distribution network operators',
      'Substation project contractors',
      'Renewable energy developers with grid connection works',
      'Industrial clients with 11kV–132kV on-site substations',
    ],
    href: '/services/hv-mv-support',
  },
  {
    slug: 'industrial-electrical-works',
    title: 'Industrial Electrical Works',
    shortDescription:
      'Site electrical installation, cabling, and low-voltage works for industrial facilities.',
    icon: 'HardHat',
    description:
      'Bodatec supports industrial clients with practical site electrical works — from cabling and containment installation to LV panel assembly and electrical systems integration. We coordinate with construction, process, and instrumentation teams to deliver clean, safe, and compliant installations.',
    scope: [
      'Cable installation and termination (LV, control, instrumentation)',
      'Cable tray, ladder, and containment installation',
      'MCC and switchboard installation and connection',
      'Motor connections and testing',
      'Grounding and bonding installation',
      'Junction box wiring and marshalling',
      'Lighting and small power installation',
      'Permit-to-work coordination during site execution',
    ],
    deliverables: [
      'Installation completion records',
      'Cable schedule and termination records',
      'Test and inspection records',
      'Redline / as-built mark-ups',
    ],
    idealFor: [
      'Industrial plant contractors requiring electrical subcontractors',
      'Brownfield expansion and modification projects',
      'Shutdown and turnaround scope execution',
      'Petrochemical, food processing, pharmaceutical, and manufacturing facilities',
    ],
    href: '/services/industrial-electrical-works',
  },
  {
    slug: 'technical-specialist-support',
    title: 'Technical Specialist Support',
    shortDescription:
      'Flexible deployment of qualified electrical engineers and technicians to supplement project or operational teams.',
    icon: 'Users',
    description:
      'When projects need specific expertise or additional capacity, Bodatec provides qualified technical personnel on a flexible basis. From individual specialists to small site teams, we can supplement client or contractor workforces with engineers and technicians who can integrate quickly and deliver from day one.',
    scope: [
      'Site electrical engineer or supervisor supply',
      'Commissioning engineer and technician deployment',
      'HV authorised person (AP) and competent person (CP) provision',
      'Project engineering support (documentation, reporting)',
      'Inspection and punch-list engineer support',
      'Long-term resident engineer assignments',
      'Freelance technical expert placement',
    ],
    deliverables: [
      'Defined scope assignment reports',
      'Time and activity reports',
      'Technical deliverables per agreed scope',
      'Handover documentation',
    ],
    idealFor: [
      'EPC contractors with peak demand on specialist roles',
      'Clients needing short-notice technical coverage',
      'Projects with specific HV or protection expertise gaps',
      'Utilities running complex capital programmes',
    ],
    href: '/services/technical-specialist-support',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
