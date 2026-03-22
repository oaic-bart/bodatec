export interface Industry {
  slug: string
  title: string
  description: string
  icon: string
  capabilities: string[]
}

export const industries: Industry[] = [
  {
    slug: 'utilities-grid',
    title: 'Utilities & Grid Infrastructure',
    description:
      'Bodatec supports transmission and distribution network operators with commissioning, testing, and maintenance across HV substations and grid infrastructure assets.',
    icon: 'Network',
    capabilities: [
      'HV/MV substation commissioning',
      'Protection relay testing and settings',
      'Cable testing and fault location',
      'Planned outage execution support',
      'Asset condition assessment',
    ],
  },
  {
    slug: 'industrial-plants',
    title: 'Industrial Plants & Manufacturing',
    description:
      'From greenfield build to brownfield modification and shutdown support, Bodatec delivers electrical installation, testing, and specialist engineering across all industrial sectors.',
    icon: 'Factory',
    capabilities: [
      'Electrical installation and cabling',
      'MV/LV switchgear commissioning',
      'Shutdown and turnaround execution',
      'Maintenance programme support',
      'Specialist fault investigation',
    ],
  },
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy',
    description:
      'Bodatec supports renewable energy developers with grid connection works, substation commissioning, and on-site electrical testing for wind, solar, and storage projects.',
    icon: 'Wind',
    capabilities: [
      'Substation and grid connection commissioning',
      'Protection relay testing',
      'Cable installation and testing',
      'Energisation support',
      'O&M electrical support',
    ],
  },
  {
    slug: 'substations',
    title: 'Substations',
    description:
      'Substations are a core area for Bodatec. We support clients across the full lifecycle — from design input and FAT witnessing through to commissioning, testing, and long-term maintenance.',
    icon: 'Building2',
    capabilities: [
      'Primary and secondary equipment testing',
      'Protection and control system commissioning',
      'Transformer and reactor commissioning',
      'GIS and AIS switchgear testing',
      'Busbar and feeder protection commissioning',
    ],
  },
  {
    slug: 'offshore-wind',
    title: 'Offshore Wind & Marine Energy',
    description:
      'Bodatec has experience supporting offshore wind electrical systems — from onshore substation works to export cable systems and transition piece electrical scope.',
    icon: 'Anchor',
    capabilities: [
      'Onshore substation commissioning support',
      'Export cable testing coordination',
      'Offshore electrical scope witnessing',
      'Protection relay settings and testing',
      'Technical documentation support',
    ],
  },
  {
    slug: 'critical-infrastructure',
    title: 'Critical & Commercial Infrastructure',
    description:
      'Bodatec supports data centres, hospitals, transport hubs, and other critical facilities requiring reliable, compliant electrical installations and ongoing specialist support.',
    icon: 'Shield',
    capabilities: [
      'LV switchgear installation and commissioning',
      'UPS and standby power systems',
      'Earthing and lightning protection',
      'Maintenance and inspection programmes',
      'Emergency and critical system testing',
    ],
  },
]
