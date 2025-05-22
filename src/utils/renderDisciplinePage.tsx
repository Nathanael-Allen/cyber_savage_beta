import ComTacticalPDF from "../components/DisciplinePDFComponents/ComTacticalPDF";
import ComBarbaric from "../components/DisciplinePDFComponents/ComBarbaricPDF";
import ComGamblersPDF from "../components/DisciplinePDFComponents/ComGamblersPDF";
import ComTechniciansPDF from "../components/DisciplinePDFComponents/ComTechniciansPDF";

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
    default:
      return null;
  }
}