import ComTacticalPDF from "../components/DisciplinePDFComponents/ComTacticalPDF";
import ComGamblersPDF from "../components/DisciplinePDFComponents/ComGamblersPDF";
import ComTechniciansPDF from "../components/DisciplinePDFComponents/ComTechniciansPDF";
import ComBeastTamersPDF from "../components/DisciplinePDFComponents/ComBeastTamersPDF";
import ComHonorBoundPDF from "../components/DisciplinePDFComponents/ComHonorBoundPDF";
import ComReinforcedPDF from "../components/DisciplinePDFComponents/ComReinforcedPDF";
import ComPredatoryPDF from "../components/DisciplinePDFComponents/ComPredatoryPDF";
import ComCultistsPDF from "../components/DisciplinePDFComponents/ComCultistsPDF";
import ComBarbaricPDF from "../components/DisciplinePDFComponents/ComBarbaricPDF";
import ComStandardBearersPDF from "../components/DisciplinePDFComponents/ComStandardBearersPDF";
import ComAirSupportPDF from "../components/DisciplinePDFComponents/ComAirSupportPDF";
import ComJudicialPDF from "../components/DisciplinePDFComponents/ComJudicialPDF";

export default function renderDisciplinePage(discipline: string): JSX.Element | null {
  switch (discipline.toLowerCase()) {
    case ("tactical"):
      return ComTacticalPDF();
    case ("barbaric"):
      return ComBarbaricPDF();
    case ("gamblers"):
      return ComGamblersPDF();
    case("technicians"):
      return ComTechniciansPDF();
    case("beast tamers"):
      return ComBeastTamersPDF();
    case("honor-bound"):
      return ComHonorBoundPDF();
    case ("reinforced"):
      return ComReinforcedPDF();
    case ("standard bearers"):
      return ComStandardBearersPDF();
    case ("predatory"):
      return ComPredatoryPDF();
    case ("cultists"):
      return ComCultistsPDF();
    case ("air support"):
      return ComAirSupportPDF();
    case ("judicial"):
      return ComJudicialPDF();
    default:
      return null;
  }
}