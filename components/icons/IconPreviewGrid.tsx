import React from 'react';
import BackendIcon from './BackendIcon';
import FrontendIcon from './FrontendIcon';
import DevopsIcon from './DevopsIcon';
import SecurityIcon from './SecurityIcon';
import DataScienceIcon from './DataScienceIcon';
import MobileIcon from './MobileIcon';
import AiIcon from './AiIcon';
import GameIcon from './GameIcon';
import CloudIcon from './CloudIcon';
import BlockchainIcon from './BlockchainIcon';
import IotIcon from './IotIcon';
import QaIcon from './QaIcon';
import EmbeddedIcon from './EmbeddedIcon';
import BusinessIcon from './BusinessIcon';
import LegalIcon from './LegalIcon';
import EducationIcon from './EducationIcon';
import ArtsIcon from './ArtsIcon';
import ScienceIcon from './ScienceIcon';
import EngineeringIcon from './EngineeringIcon';
import HospitalityIcon from './HospitalityIcon';
import ManufacturingIcon from './ManufacturingIcon';
import LogisticsIcon from './LogisticsIcon';
import MediaIcon from './MediaIcon';
import PsychologyIcon from './PsychologyIcon';
import AgricultureIcon from './AgricultureIcon';
import EnvironmentalIcon from './EnvironmentalIcon';
import BankingIcon from './BankingIcon';
import InvestmentIcon from './InvestmentIcon';
import EasyIcon from './EasyIcon';
import MediumIcon from './MediumIcon';
import HardIcon from './HardIcon';
import MadnessIcon from './MadnessIcon';
import UIDesignIcon from './UIDesignIcon';
import GraphicDesignIcon from './GraphicDesignIcon';
import ProductDesignIcon from './ProductDesignIcon';
import ProductOwnerIcon from './ProductOwnerIcon';
import ScrumMasterIcon from './ScrumMasterIcon';
import ProjectManagerIcon from './ProjectManagerIcon';
import AgileCoachIcon from './AgileCoachIcon';
import EngineeringManagerIcon from './EngineeringManagerIcon';
import ManagementIcon from './ManagementIcon';

const icons = [
  { name: 'Backend', Icon: BackendIcon },
  { name: 'Frontend', Icon: FrontendIcon },
  { name: 'DevOps', Icon: DevopsIcon },
  { name: 'Security', Icon: SecurityIcon },
  { name: 'Data Science', Icon: DataScienceIcon },
  { name: 'Mobile', Icon: MobileIcon },
  { name: 'AI/ML', Icon: AiIcon },
  { name: 'Game', Icon: GameIcon },
  { name: 'Cloud', Icon: CloudIcon },
  { name: 'Blockchain', Icon: BlockchainIcon },
  { name: 'Iot', Icon: IotIcon },
  { name: 'Qa', Icon: QaIcon },
  { name: 'Embedded', Icon: EmbeddedIcon },
  { name: 'UI/UX Design', Icon: UIDesignIcon },
  { name: 'Graphic Design', Icon: GraphicDesignIcon },
  { name: 'Product Design', Icon: ProductDesignIcon },
  { name: 'Management', Icon: ManagementIcon },
  { name: 'Product Owner', Icon: ProductOwnerIcon },
  { name: 'Scrum Master', Icon: ScrumMasterIcon },
  { name: 'Project Manager', Icon: ProjectManagerIcon },
  { name: 'Agile Coach', Icon: AgileCoachIcon },
  { name: 'Engineering Manager', Icon: EngineeringManagerIcon },
  { name: 'Business', Icon: BusinessIcon },
  { name: 'Legal', Icon: LegalIcon },
  { name: 'Education', Icon: EducationIcon },
  { name: 'Arts', Icon: ArtsIcon },
  { name: 'Science', Icon: ScienceIcon },
  { name: 'Engineering', Icon: EngineeringIcon },
  { name: 'Hospitality', Icon: HospitalityIcon },
  { name: 'Manufacturing', Icon: ManufacturingIcon },
  { name: 'Logistics', Icon: LogisticsIcon },
  { name: 'Media', Icon: MediaIcon },
  { name: 'Psychology', Icon: PsychologyIcon },
  { name: 'Agriculture', Icon: AgricultureIcon },
  { name: 'Environmental', Icon: EnvironmentalIcon },
  { name: 'Banking', Icon: BankingIcon },
  { name: 'Investment', Icon: InvestmentIcon },
  { name: 'Easy', Icon: EasyIcon },
  { name: 'Medium', Icon: MediumIcon },
  { name: 'Hard', Icon: HardIcon },
  { name: 'Madness', Icon: MadnessIcon },
];

const IconPreviewGrid: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-8">
    {icons.map(({ name, Icon }) => (
      <div key={name} className="flex flex-col items-center">
        <Icon width={48} height={48} />
        <span className="mt-2 text-cyan-400 font-semibold text-sm text-center">
          {name}
        </span>
      </div>
    ))}
  </div>
);

export default IconPreviewGrid;
