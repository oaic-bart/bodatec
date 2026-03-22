export interface JobCategory {
  title: string
  description: string
  examples: string[]
  icon: string
}

export const jobCategories: JobCategory[] = [
  {
    title: 'Electrical Technicians',
    description:
      'Experienced electrical technicians for site installation, maintenance, and testing work across MV/LV systems.',
    examples: [
      'LV / MV installation technician',
      'Cable jointer and termination specialist',
      'Maintenance technician (switchgear, relays)',
    ],
    icon: 'Wrench',
  },
  {
    title: 'Commissioning Engineers',
    description:
      'Engineers with hands-on commissioning experience on electrical systems, switchgear, protection, and control.',
    examples: [
      'Commissioning engineer (MV/LV)',
      'Protection and relay testing engineer',
      'Site commissioning lead',
    ],
    icon: 'ClipboardCheck',
  },
  {
    title: 'HV Specialists',
    description:
      'HV-authorised personnel with safe systems of work competency on high-voltage systems and substations.',
    examples: [
      'HV authorised person (AP)',
      'HV commissioning engineer',
      'HV cable testing specialist',
    ],
    icon: 'Zap',
  },
  {
    title: 'Site Supervisors',
    description:
      'Experienced site electrical supervisors capable of coordinating installation and commissioning teams.',
    examples: [
      'Electrical site supervisor',
      'Construction electrical lead',
      'Shutdown / turnaround supervisor',
    ],
    icon: 'HardHat',
  },
  {
    title: 'Project & Design Engineers',
    description:
      'Engineering professionals capable of producing or reviewing electrical design documentation and studies.',
    examples: [
      'Electrical design engineer',
      'Protection engineer',
      'System studies engineer',
    ],
    icon: 'Cpu',
  },
  {
    title: 'Freelance & Contract Experts',
    description:
      'Specialist technical experts available on a contract or freelance basis for defined project scopes.',
    examples: [
      'Short-term specialist assignments',
      'Resident engineer roles',
      'Expert review and advisory',
    ],
    icon: 'Users',
  },
]
