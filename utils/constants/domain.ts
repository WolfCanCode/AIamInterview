import { DomainGroup } from '@/utils/types/Domain';
import BackendIcon from '@/components/icons/BackendIcon';
import FrontendIcon from '@/components/icons/FrontendIcon';
import DevopsIcon from '@/components/icons/DevopsIcon';
import SecurityIcon from '@/components/icons/SecurityIcon';
import DataScienceIcon from '@/components/icons/DataScienceIcon';
import MobileIcon from '@/components/icons/MobileIcon';
import AiIcon from '@/components/icons/AiIcon';
import GameIcon from '@/components/icons/GameIcon';
import CloudIcon from '@/components/icons/CloudIcon';
import BlockchainIcon from '@/components/icons/BlockchainIcon';
import IotIcon from '@/components/icons/IotIcon';
import QaIcon from '@/components/icons/QaIcon';
import EmbeddedIcon from '@/components/icons/EmbeddedIcon';
import BusinessIcon from '@/components/icons/BusinessIcon';
import LegalIcon from '@/components/icons/LegalIcon';
import EducationIcon from '@/components/icons/EducationIcon';
import ArtsIcon from '@/components/icons/ArtsIcon';
import ScienceIcon from '@/components/icons/ScienceIcon';
import EngineeringIcon from '@/components/icons/EngineeringIcon';
import HospitalityIcon from '@/components/icons/HospitalityIcon';
import LogisticsIcon from '@/components/icons/LogisticsIcon';
import ManufacturingIcon from '@/components/icons/ManufacturingIcon';
import HealthcareIcon from '@/components/icons/HealthcareIcon';
import EnvironmentalIcon from '@/components/icons/EnvironmentalIcon';
import AgricultureIcon from '@/components/icons/AgricultureIcon';
import MediaIcon from '@/components/icons/MediaIcon';
import PsychologyIcon from '@/components/icons/PsychologyIcon';
import ArchitectureIcon from '@/components/icons/ArchitectureIcon';
import BankingIcon from '@/components/icons/BankingIcon';
import InvestmentIcon from '@/components/icons/InvestmentIcon';
import InsuranceIcon from '@/components/icons/InsuranceIcon';
import ManagementIcon from '@/components/icons/ManagementIcon';
import ProductOwnerIcon from '@/components/icons/ProductOwnerIcon';
import ScrumMasterIcon from '@/components/icons/ScrumMasterIcon';
import ProjectManagerIcon from '@/components/icons/ProjectManagerIcon';
import AgileCoachIcon from '@/components/icons/AgileCoachIcon';
import EngineeringManagerIcon from '@/components/icons/EngineeringManagerIcon';
import GraphicDesignIcon from '@/components/icons/GraphicDesignIcon';
import ProductDesignIcon from '@/components/icons/ProductDesignIcon';
import UIDesignIcon from '@/components/icons/UIDesignIcon';

export const domainGroups: DomainGroup[] = [
  {
    key: 'technology',
    group: 'domain_group_technology',
    icon: BackendIcon,
    domains: [
      {
        key: 'backend',
        name: 'domain_backend',
        icon: BackendIcon,
        description: 'domain_backend_desc',
        children: [
          'domain_backend_child_nodejs',
          'domain_backend_child_python',
          'domain_backend_child_java',
          'domain_backend_child_go',
          'domain_backend_child_ruby',
          'domain_backend_child_php',
          'domain_backend_child_dotnet',
        ],
      },
      {
        key: 'frontend',
        name: 'domain_frontend',
        icon: FrontendIcon,
        description: 'domain_frontend_desc',
        children: [
          'domain_frontend_child_react',
          'domain_frontend_child_vue',
          'domain_frontend_child_angular',
          'domain_frontend_child_svelte',
          'domain_frontend_child_javascript',
          'domain_frontend_child_typescript',
          'domain_frontend_child_htmlcss',
        ],
      },
      {
        key: 'devops',
        name: 'domain_devops',
        icon: DevopsIcon,
        description: 'domain_devops_desc',
        children: [
          'domain_devops_child_docker',
          'domain_devops_child_kubernetes',
          'domain_devops_child_cicd',
          'domain_devops_child_aws',
          'domain_devops_child_azure',
          'domain_devops_child_gcp',
          'domain_devops_child_linux',
        ],
      },
      {
        key: 'security',
        name: 'domain_security',
        icon: SecurityIcon,
        description: 'domain_security_desc',
        children: [
          'domain_security_child_pentesting',
          'domain_security_child_cryptography',
          'domain_security_child_network',
          'domain_security_child_web',
        ],
      },
      {
        key: 'datascience',
        name: 'domain_datascience',
        icon: DataScienceIcon,
        description: 'domain_datascience_desc',
        children: [
          'domain_datascience_child_python',
          'domain_datascience_child_r',
          'domain_datascience_child_sql',
          'domain_datascience_child_statistics',
          'domain_datascience_child_visualization',
        ],
      },
      {
        key: 'mobile',
        name: 'domain_mobile',
        icon: MobileIcon,
        description: 'domain_mobile_desc',
        children: [
          'domain_mobile_child_ios',
          'domain_mobile_child_android',
          'domain_mobile_child_reactnative',
          'domain_mobile_child_flutter',
          'domain_mobile_child_kotlin',
          'domain_mobile_child_swift',
        ],
      },
      {
        key: 'aiml',
        name: 'domain_aiml',
        icon: AiIcon,
        description: 'domain_aiml_desc',
        children: [
          'domain_aiml_child_machinelearning',
          'domain_aiml_child_deeplearning',
          'domain_aiml_child_nlp',
          'domain_aiml_child_computervision',
        ],
      },
      {
        key: 'game',
        name: 'domain_game',
        icon: GameIcon,
        description: 'domain_game_desc',
        children: [
          'domain_game_child_unity',
          'domain_game_child_unreal',
          'domain_game_child_gamedesign',
          'domain_game_child_graphics',
        ],
      },
      {
        key: 'cloud',
        name: 'domain_cloud',
        icon: CloudIcon,
        description: 'domain_cloud_desc',
        children: [
          'domain_cloud_child_aws',
          'domain_cloud_child_azure',
          'domain_cloud_child_gcp',
          'domain_cloud_child_architecture',
          'domain_cloud_child_serverless',
        ],
      },
      {
        key: 'blockchain',
        name: 'domain_blockchain',
        icon: BlockchainIcon,
        description: 'domain_blockchain_desc',
        children: [
          'domain_blockchain_child_smartcontracts',
          'domain_blockchain_child_dapps',
          'domain_blockchain_child_crypto',
          'domain_blockchain_child_web3',
        ],
      },
      {
        key: 'iot',
        name: 'domain_iot',
        icon: IotIcon,
        description: 'domain_iot_desc',
        children: [
          'domain_iot_child_embedded',
          'domain_iot_child_sensors',
          'domain_iot_child_protocols',
          'domain_iot_child_edge',
        ],
      },
      {
        key: 'qa',
        name: 'domain_qa',
        icon: QaIcon,
        description: 'domain_qa_desc',
        children: [
          'domain_qa_child_automation',
          'domain_qa_child_manual',
          'domain_qa_child_performance',
          'domain_qa_child_security',
        ],
      },
      {
        key: 'embedded',
        name: 'domain_embedded',
        icon: EmbeddedIcon,
        description: 'domain_embedded_desc',
        children: [
          'domain_embedded_child_c',
          'domain_embedded_child_cpp',
          'domain_embedded_child_arm',
          'domain_embedded_child_rtos',
          'domain_embedded_child_iot',
          'domain_embedded_child_firmware',
        ],
      },
    ],
  },
  {
    key: 'management',
    group: 'domain_group_management',
    icon: ManagementIcon,
    domains: [
      {
        key: 'product_owner',
        name: 'domain_product_owner',
        icon: ProductOwnerIcon,
        description: 'domain_product_owner_desc',
        children: [
          'domain_product_owner_child_responsibilities',
          'domain_product_owner_child_backlog',
          'domain_product_owner_child_stakeholder',
          'domain_product_owner_child_value',
        ],
      },
      {
        key: 'scrum_master',
        name: 'domain_scrum_master',
        icon: ScrumMasterIcon,
        description: 'domain_scrum_master_desc',
        children: [
          'domain_scrum_master_child_responsibilities',
          'domain_scrum_master_child_ceremonies',
          'domain_scrum_master_child_impediments',
          'domain_scrum_master_child_coaching',
        ],
      },
      {
        key: 'project_manager',
        name: 'domain_project_manager',
        icon: ProjectManagerIcon,
        description: 'domain_project_manager_desc',
        children: [
          'domain_project_manager_child_planning',
          'domain_project_manager_child_execution',
          'domain_project_manager_child_risk',
          'domain_project_manager_child_communication',
        ],
      },
      {
        key: 'agile_coach',
        name: 'domain_agile_coach',
        icon: AgileCoachIcon,
        description: 'domain_agile_coach_desc',
        children: [
          'domain_agile_coach_child_transformation',
          'domain_agile_coach_child_mentoring',
          'domain_agile_coach_child_training',
          'domain_agile_coach_child_metrics',
        ],
      },
      {
        key: 'engineering_manager',
        name: 'domain_engineering_manager',
        icon: EngineeringManagerIcon,
        description: 'domain_engineering_manager_desc',
        children: [
          'domain_engineering_manager_child_leadership',
          'domain_engineering_manager_child_delivery',
          'domain_engineering_manager_child_growth',
          'domain_engineering_manager_child_process',
        ],
      },
    ],
  },
  {
    key: 'design',
    group: 'domain_group_design',
    icon: UIDesignIcon,
    domains: [
      {
        key: 'uiux',
        name: 'domain_uiux',
        icon: UIDesignIcon,
        description: 'domain_uiux_desc',
        children: [
          'domain_uiux_child_uxresearch',
          'domain_uiux_child_uidesign',
          'domain_uiux_child_interaction',
          'domain_uiux_child_usability',
          'domain_uiux_child_ia',
          'domain_uiux_child_designsystems',
        ],
      },
      {
        key: 'graphic',
        name: 'domain_graphic',
        icon: GraphicDesignIcon,
        description: 'domain_graphic_desc',
        children: [
          'domain_graphic_child_brand',
          'domain_graphic_child_print',
          'domain_graphic_child_digital',
          'domain_graphic_child_motion',
          'domain_graphic_child_typography',
          'domain_graphic_child_identity',
        ],
      },
      {
        key: 'product',
        name: 'domain_product',
        icon: ProductDesignIcon,
        description: 'domain_product_desc',
        children: [
          'domain_product_child_strategy',
          'domain_product_child_research',
          'domain_product_child_roadmap',
          'domain_product_child_agile',
          'domain_product_child_analytics',
          'domain_product_child_gtm',
        ],
      },
    ],
  },
  {
    key: 'business',
    group: 'domain_group_business',
    icon: BusinessIcon,
    domains: [
      {
        key: 'business_strategy',
        name: 'domain_business_strategy',
        icon: BusinessIcon,
        description: 'domain_business_strategy_desc',
        children: [
          'domain_business_strategy_child_planning',
          'domain_business_strategy_child_development',
          'domain_business_strategy_child_digital',
          'domain_business_strategy_child_ecommerce',
          'domain_business_strategy_child_innovation',
        ],
      },
      {
        key: 'marketing',
        name: 'domain_marketing',
        icon: BusinessIcon,
        description: 'domain_marketing_desc',
        children: [
          'domain_marketing_child_digital',
          'domain_marketing_child_content',
          'domain_marketing_child_social',
          'domain_marketing_child_brand',
          'domain_marketing_child_research',
        ],
      },
      {
        key: 'sales',
        name: 'domain_sales',
        icon: BusinessIcon,
        description: 'domain_sales_desc',
        children: [
          'domain_sales_child_b2b',
          'domain_sales_child_b2c',
          'domain_sales_child_strategy',
          'domain_sales_child_account',
          'domain_sales_child_lead',
        ],
      },
      {
        key: 'finance_accounting',
        name: 'domain_finance_accounting',
        icon: BusinessIcon,
        description: 'domain_finance_accounting_desc',
        children: [
          'domain_finance_accounting_child_analysis',
          'domain_finance_accounting_child_accounting',
          'domain_finance_accounting_child_investment',
          'domain_finance_accounting_child_risk',
          'domain_finance_accounting_child_tax',
        ],
      },
      {
        key: 'hr',
        name: 'domain_hr',
        icon: BusinessIcon,
        description: 'domain_hr_desc',
        children: [
          'domain_hr_child_acquisition',
          'domain_hr_child_development',
          'domain_hr_child_performance',
          'domain_hr_child_compensation',
          'domain_hr_child_analytics',
        ],
      },
    ],
  },
  {
    key: 'legal',
    group: 'domain_group_legal',
    icon: LegalIcon,
    domains: [
      {
        key: 'legal',
        name: 'domain_legal',
        icon: LegalIcon,
        description: 'domain_legal_desc',
        children: [
          'domain_legal_child_corporate',
          'domain_legal_child_ip',
          'domain_legal_child_contract',
          'domain_legal_child_employment',
          'domain_legal_child_compliance',
        ],
      },
    ],
  },
  {
    key: 'education',
    group: 'domain_group_education',
    icon: EducationIcon,
    domains: [
      {
        key: 'teaching',
        name: 'domain_teaching',
        icon: EducationIcon,
        description: 'domain_teaching_desc',
        children: [
          'domain_teaching_child_k12',
          'domain_teaching_child_higher',
          'domain_teaching_child_online',
          'domain_teaching_child_special',
          'domain_teaching_child_stem',
          'domain_teaching_child_language',
        ],
      },
      {
        key: 'curriculum',
        name: 'domain_curriculum',
        icon: EducationIcon,
        description: 'domain_curriculum_desc',
        children: [
          'domain_curriculum_child_development',
          'domain_curriculum_child_edtech',
          'domain_curriculum_child_assessment',
          'domain_curriculum_child_analytics',
          'domain_curriculum_child_instructional',
          'domain_curriculum_child_elearning',
        ],
      },
    ],
  },
  {
    key: 'arts',
    group: 'domain_group_arts',
    icon: ArtsIcon,
    domains: [
      {
        key: 'visual_arts',
        name: 'domain_visual_arts',
        icon: ArtsIcon,
        description: 'domain_visual_arts_desc',
        children: [
          'domain_visual_arts_child_digital',
          'domain_visual_arts_child_traditional',
          'domain_visual_arts_child_animation',
          'domain_visual_arts_child_photography',
          'domain_visual_arts_child_illustration',
          'domain_visual_arts_child_sculpture',
        ],
      },
      {
        key: 'performing_arts',
        name: 'domain_performing_arts',
        icon: ArtsIcon,
        description: 'domain_performing_arts_desc',
        children: [
          'domain_performing_arts_child_music',
          'domain_performing_arts_child_theater',
          'domain_performing_arts_child_dance',
          'domain_performing_arts_child_film',
          'domain_performing_arts_child_direction',
          'domain_performing_arts_child_performance',
        ],
      },
      {
        key: 'conservatory_music',
        name: 'domain_conservatory_music',
        icon: ArtsIcon,
        description: 'domain_conservatory_music_desc',
        children: [
          'domain_conservatory_music_child_theory',
          'domain_conservatory_music_child_instrumental',
          'domain_conservatory_music_child_orchestration',
          'domain_conservatory_music_child_composition',
          'domain_conservatory_music_child_conducting',
          'domain_conservatory_music_child_vocal',
        ],
      },
    ],
  },
  {
    key: 'science',
    group: 'domain_group_science',
    icon: ScienceIcon,
    domains: [
      {
        key: 'research',
        name: 'domain_research',
        icon: ScienceIcon,
        description: 'domain_research_desc',
        children: [
          'domain_research_child_methods',
          'domain_research_child_analysis',
          'domain_research_child_writing',
          'domain_research_child_lab',
        ],
      },
      {
        key: 'applied_science',
        name: 'domain_applied_science',
        icon: ScienceIcon,
        description: 'domain_applied_science_desc',
        children: [
          'domain_applied_science_child_physics',
          'domain_applied_science_child_chemistry',
          'domain_applied_science_child_biology',
          'domain_applied_science_child_environmental',
        ],
      },
    ],
  },
  {
    key: 'engineering',
    group: 'domain_group_engineering',
    icon: EngineeringIcon,
    domains: [
      {
        key: 'mechanical',
        name: 'domain_mechanical',
        icon: EngineeringIcon,
        description: 'domain_mechanical_desc',
        children: [
          'domain_mechanical_child_cad',
          'domain_mechanical_child_solidworks',
          'domain_mechanical_child_thermodynamics',
          'domain_mechanical_child_materials',
          'domain_mechanical_child_manufacturing',
        ],
      },
      {
        key: 'electrical',
        name: 'domain_electrical',
        icon: EngineeringIcon,
        description: 'domain_electrical_desc',
        children: [
          'domain_electrical_child_industrial',
          'domain_electrical_child_power',
          'domain_electrical_child_circuit',
          'domain_electrical_child_fpga',
          'domain_electrical_child_chip',
          'domain_electrical_child_digital',
        ],
      },
      {
        key: 'embedded',
        name: 'domain_embedded',
        icon: EngineeringIcon,
        description: 'domain_embedded_desc',
        children: [
          'domain_embedded_child_c',
          'domain_embedded_child_cpp',
          'domain_embedded_child_arm',
          'domain_embedded_child_rtos',
          'domain_embedded_child_iot',
          'domain_embedded_child_firmware',
        ],
      },
      {
        key: 'hvac_piping',
        name: 'domain_hvac_piping',
        icon: EngineeringIcon,
        description: 'domain_hvac_piping_desc',
        children: [
          'domain_hvac_piping_child_hvac',
          'domain_hvac_piping_child_piping',
          'domain_hvac_piping_child_ductwork',
          'domain_hvac_piping_child_revit',
          'domain_hvac_piping_child_chiller',
          'domain_hvac_piping_child_pump',
          'domain_hvac_piping_child_fire',
          'domain_hvac_piping_child_plumbing',
        ],
      },
    ],
  },
  {
    key: 'hospitality',
    group: 'domain_group_hospitality',
    icon: HospitalityIcon,
    domains: [
      {
        key: 'tourism',
        name: 'domain_tourism',
        icon: HospitalityIcon,
        description: 'domain_tourism_desc',
        children: [
          'domain_tourism_child_planning',
          'domain_tourism_child_management',
          'domain_tourism_child_services',
          'domain_tourism_child_marketing',
        ],
      },
      {
        key: 'hotel_management',
        name: 'domain_hotel_management',
        icon: HospitalityIcon,
        description: 'domain_hotel_management_desc',
        children: [
          'domain_hotel_child_operations',
          'domain_hotel_child_front',
          'domain_hotel_child_housekeeping',
          'domain_hotel_child_food',
          'domain_hotel_child_revenue',
        ],
      },
      {
        key: 'restaurant_management',
        name: 'domain_restaurant_management',
        icon: HospitalityIcon,
        description: 'domain_restaurant_management_desc',
        children: [
          'domain_restaurant_child_operations',
          'domain_restaurant_child_kitchen',
          'domain_restaurant_child_menu',
          'domain_restaurant_child_safety',
          'domain_restaurant_child_service',
        ],
      },
    ],
  },
  {
    key: 'logistics',
    group: 'domain_group_logistics',
    icon: LogisticsIcon,
    domains: [
      {
        key: 'transportation',
        name: 'domain_transportation',
        icon: LogisticsIcon,
        description: 'domain_transportation_desc',
        children: [
          'domain_transportation_child_fleet',
          'domain_transportation_child_route',
          'domain_transportation_child_planning',
          'domain_transportation_child_shipping',
        ],
      },
      {
        key: 'logistics_management',
        name: 'domain_logistics_management',
        icon: LogisticsIcon,
        description: 'domain_logistics_management_desc',
        children: [
          'domain_logistics_child_supply',
          'domain_logistics_child_warehouse',
          'domain_logistics_child_inventory',
          'domain_logistics_child_distribution',
        ],
      },
    ],
  },
  {
    key: 'manufacturing',
    group: 'domain_group_manufacturing',
    icon: ManufacturingIcon,
    domains: [
      {
        key: 'production',
        name: 'domain_production',
        icon: ManufacturingIcon,
        description: 'domain_production_desc',
        children: [
          'domain_production_child_planning',
          'domain_production_child_quality',
          'domain_production_child_optimization',
          'domain_production_child_operations',
        ],
      },
      {
        key: 'skilled_labor',
        name: 'domain_skilled_labor',
        icon: ManufacturingIcon,
        description: 'domain_skilled_labor_desc',
        children: [
          'domain_skilled_labor_child_assembly',
          'domain_skilled_labor_child_operation',
          'domain_skilled_labor_child_maintenance',
          'domain_skilled_labor_child_craftsmanship',
        ],
      },
    ],
  },
  {
    key: 'healthcare',
    group: 'domain_group_healthcare',
    icon: HealthcareIcon,
    domains: [
      {
        key: 'nursing',
        name: 'domain_nursing',
        icon: HealthcareIcon,
        description: 'domain_nursing_desc',
        children: [
          'domain_nursing_child_clinical',
          'domain_nursing_child_emergency',
          'domain_nursing_child_patient',
          'domain_nursing_child_procedures',
        ],
      },
      {
        key: 'pharmacy',
        name: 'domain_pharmacy',
        icon: HealthcareIcon,
        description: 'domain_pharmacy_desc',
        children: [
          'domain_pharmacy_child_pharmacology',
          'domain_pharmacy_child_interactions',
          'domain_pharmacy_child_care',
          'domain_pharmacy_child_clinical',
        ],
      },
      {
        key: 'healthcare_admin',
        name: 'domain_healthcare_admin',
        icon: HealthcareIcon,
        description: 'domain_healthcare_admin_desc',
        children: [
          'domain_healthcare_admin_child_hospital',
          'domain_healthcare_admin_child_policy',
          'domain_healthcare_admin_child_records',
          'domain_healthcare_admin_child_operations',
        ],
      },
    ],
  },
  {
    key: 'environmental',
    group: 'domain_group_environmental',
    icon: EnvironmentalIcon,
    domains: [
      {
        key: 'environmental_management',
        name: 'domain_environmental_management',
        icon: EnvironmentalIcon,
        description: 'domain_environmental_management_desc',
        children: [
          'domain_environmental_management_child_impact',
          'domain_environmental_management_child_waste',
          'domain_environmental_management_child_conservation',
          'domain_environmental_management_child_sustainability',
        ],
      },
      {
        key: 'renewable_energy',
        name: 'domain_renewable_energy',
        icon: EnvironmentalIcon,
        description: 'domain_renewable_energy_desc',
        children: [
          'domain_renewable_energy_child_solar',
          'domain_renewable_energy_child_wind',
          'domain_renewable_energy_child_hydro',
          'domain_renewable_energy_child_storage',
        ],
      },
    ],
  },
  {
    key: 'agriculture',
    group: 'domain_group_agriculture',
    icon: AgricultureIcon,
    domains: [
      {
        key: 'agribusiness',
        name: 'domain_agribusiness',
        icon: AgricultureIcon,
        description: 'domain_agribusiness_desc',
        children: [
          'domain_agribusiness_child_management',
          'domain_agribusiness_child_economics',
          'domain_agribusiness_child_supply',
          'domain_agribusiness_child_production',
        ],
      },
      {
        key: 'food_science',
        name: 'domain_food_science',
        icon: AgricultureIcon,
        description: 'domain_food_science_desc',
        children: [
          'domain_food_science_child_processing',
          'domain_food_science_child_safety',
          'domain_food_science_child_development',
          'domain_food_science_child_quality',
        ],
      },
    ],
  },
  {
    key: 'media',
    group: 'domain_group_media',
    icon: MediaIcon,
    domains: [
      {
        key: 'journalism',
        name: 'domain_journalism',
        icon: MediaIcon,
        description: 'domain_journalism_desc',
        children: [
          'domain_journalism_child_news',
          'domain_journalism_child_investigative',
          'domain_journalism_child_digital',
          'domain_journalism_child_broadcasting',
        ],
      },
      {
        key: 'public_relations',
        name: 'domain_public_relations',
        icon: MediaIcon,
        description: 'domain_public_relations_desc',
        children: [
          'domain_public_relations_child_media',
          'domain_public_relations_child_crisis',
          'domain_public_relations_child_corporate',
          'domain_public_relations_child_public',
        ],
      },
    ],
  },
  {
    key: 'psychology',
    group: 'domain_group_psychology',
    icon: PsychologyIcon,
    domains: [
      {
        key: 'clinical_psychology',
        name: 'domain_clinical_psychology',
        icon: PsychologyIcon,
        description: 'domain_clinical_psychology_desc',
        children: [
          'domain_clinical_psychology_child_assessment',
          'domain_clinical_psychology_child_therapy',
          'domain_clinical_psychology_child_mental_health',
          'domain_clinical_psychology_child_behavioral',
        ],
      },
      {
        key: 'organizational_psychology',
        name: 'domain_organizational_psychology',
        icon: PsychologyIcon,
        description: 'domain_organizational_psychology_desc',
        children: [
          'domain_organizational_psychology_child_workplace',
          'domain_organizational_psychology_child_employee',
          'domain_organizational_psychology_child_team',
          'domain_organizational_psychology_child_leadership',
        ],
      },
    ],
  },
  {
    key: 'architecture',
    group: 'domain_group_architecture',
    icon: ArchitectureIcon,
    domains: [
      {
        key: 'architectural_design',
        name: 'domain_architectural_design',
        icon: ArchitectureIcon,
        description: 'domain_architectural_design_desc',
        children: [
          'domain_architectural_design_child_building',
          'domain_architectural_design_child_cad',
          'domain_architectural_design_child_sustainable',
          'domain_architectural_design_child_urban',
        ],
      },
      {
        key: 'construction_management',
        name: 'domain_construction_management',
        icon: BankingIcon,
        description: 'domain_construction_management_desc',
        children: [
          'domain_construction_management_child_project',
          'domain_construction_management_child_planning',
          'domain_construction_management_child_cost',
          'domain_construction_management_child_supervision',
        ],
      },
    ],
  },
  {
    key: 'banking',
    group: 'domain_group_banking',
    icon: BankingIcon,
    domains: [
      {
        key: 'retail_banking',
        name: 'domain_retail_banking',
        icon: BankingIcon,
        description: 'domain_retail_banking_desc',
        children: [
          'domain_retail_banking_child_personal',
          'domain_retail_banking_child_credit',
          'domain_retail_banking_child_mortgage',
          'domain_retail_banking_child_consumer',
          'domain_retail_banking_child_digital',
        ],
      },
      {
        key: 'investment_banking',
        name: 'domain_investment_banking',
        icon: BankingIcon,
        description: 'domain_investment_banking_desc',
        children: [
          'domain_investment_banking_child_corporate',
          'domain_investment_banking_child_mergers',
          'domain_investment_banking_child_capital',
          'domain_investment_banking_child_securities',
          'domain_investment_banking_child_advisory',
        ],
      },
      {
        key: 'wealth_management',
        name: 'domain_wealth_management',
        icon: BankingIcon,
        description: 'domain_wealth_management_desc',
        children: [
          'domain_wealth_management_child_portfolio',
          'domain_wealth_management_child_estate',
          'domain_wealth_management_child_private',
          'domain_wealth_management_child_asset',
          'domain_wealth_management_child_investment',
        ],
      },
      {
        key: 'risk_compliance',
        name: 'domain_risk_compliance',
        icon: BankingIcon,
        description: 'domain_risk_compliance_desc',
        children: [
          'domain_risk_compliance_child_assessment',
          'domain_risk_compliance_child_compliance',
          'domain_risk_compliance_child_anti',
          'domain_risk_compliance_child_credit',
          'domain_risk_compliance_child_market',
        ],
      },
    ],
  },
  {
    key: 'investment',
    group: 'domain_group_investment',
    icon: InvestmentIcon,
    domains: [
      {
        key: 'securities_trading',
        name: 'domain_securities_trading',
        icon: InvestmentIcon,
        description: 'domain_securities_trading_desc',
        children: [
          'domain_securities_trading_child_equity',
          'domain_securities_trading_child_fixed',
          'domain_securities_trading_child_derivatives',
          'domain_securities_trading_child_forex',
          'domain_securities_trading_child_technical',
        ],
      },
      {
        key: 'portfolio_management',
        name: 'domain_portfolio_management',
        icon: InvestmentIcon,
        description: 'domain_portfolio_management_desc',
        children: [
          'domain_portfolio_management_child_allocation',
          'domain_portfolio_management_child_risk',
          'domain_portfolio_management_child_analysis',
          'domain_portfolio_management_child_strategy',
          'domain_portfolio_management_child_management',
        ],
      },
      {
        key: 'alternative_investments',
        name: 'domain_alternative_investments',
        icon: InvestmentIcon,
        description: 'domain_alternative_investments_desc',
        children: [
          'domain_alternative_investments_child_private',
          'domain_alternative_investments_child_hedge',
          'domain_alternative_investments_child_real',
          'domain_alternative_investments_child_venture',
          'domain_alternative_investments_child_cryptocurrency',
        ],
      },
      {
        key: 'market_analysis',
        name: 'domain_market_analysis',
        icon: InvestmentIcon,
        description: 'domain_market_analysis_desc',
        children: [
          'domain_market_analysis_child_fundamental',
          'domain_market_analysis_child_research',
          'domain_market_analysis_child_economic',
          'domain_market_analysis_child_quantitative',
          'domain_market_analysis_child_esg',
        ],
      },
    ],
  },
  {
    key: 'insurance',
    group: 'domain_group_insurance',
    icon: InsuranceIcon,
    domains: [
      {
        key: 'life_health_insurance',
        name: 'domain_life_health_insurance',
        icon: InsuranceIcon,
        description: 'domain_life_health_insurance_desc',
        children: [
          'domain_life_health_insurance_child_life',
          'domain_life_health_insurance_child_health',
          'domain_life_health_insurance_child_medical',
          'domain_life_health_insurance_child_group',
          'domain_life_health_insurance_child_planning',
        ],
      },
      {
        key: 'property_casualty',
        name: 'domain_property_casualty',
        icon: InsuranceIcon,
        description: 'domain_property_casualty_desc',
        children: [
          'domain_property_casualty_child_property',
          'domain_property_casualty_child_auto',
          'domain_property_casualty_child_liability',
          'domain_property_casualty_child_commercial',
          'domain_property_casualty_child_risk',
        ],
      },
      {
        key: 'insurance_underwriting',
        name: 'domain_insurance_underwriting',
        icon: InsuranceIcon,
        description: 'domain_insurance_underwriting_desc',
        children: [
          'domain_insurance_underwriting_child_risk',
          'domain_insurance_underwriting_child_pricing',
          'domain_insurance_underwriting_child_claims',
          'domain_insurance_underwriting_child_actuarial',
          'domain_insurance_underwriting_child_guidelines',
        ],
      },
      {
        key: 'claims_management',
        name: 'domain_claims_management',
        icon: InsuranceIcon,
        description: 'domain_claims_management_desc',
        children: [
          'domain_claims_management_child_processing',
          'domain_claims_management_child_investigation',
          'domain_claims_management_child_settlement',
          'domain_claims_management_child_fraud',
          'domain_claims_management_child_customer',
        ],
      },
    ],
  },
];
