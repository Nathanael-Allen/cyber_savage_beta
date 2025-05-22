import ComTacticalPDF from "../components/DisciplinePDFComponents/ComTacticalPDF";
import ComBarbaric from "../components/DisciplinePDFComponents/ComBarbaricPDF";
import ComGamblersPDF from "../components/DisciplinePDFComponents/ComGamblersPDF";
import ComTechniciansPDF from "../components/DisciplinePDFComponents/ComTechniciansPDF";
import ComBeastTamersPDF from "../components/DisciplinePDFComponents/ComBeastTamersPDF";
import ComHonorBoundPDF from "../components/DisciplinePDFComponents/ComHonorBoundPDF";

export default function renderDisciplinePage(discipline: string): JSX.Element | null {
  switch (discipline.toLowerCase()) {
    case ("tactical"):
      return ComTacticalPDF();
    case ("barbaric"):
      return ComBarbaric();
    case ("gamblers"):
      return ComGamblersPDF();
    case("technicians"):
      return ComTechniciansPDF();
    case("beast tamers"):
      return ComBeastTamersPDF();
    case("honor-bound"):
      return ComHonorBoundPDF();
    default:
      return null;
  }
}