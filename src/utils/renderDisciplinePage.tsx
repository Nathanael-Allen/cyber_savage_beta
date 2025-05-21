import ComTacticalPDF from "../components/DisciplinePDFComponents/ComTacticalPDF";
import ComBarbaric from "../components/DisciplinePDFComponents/ComBarbaricPDF";

export default function renderDisciplinePage(discipline: string): JSX.Element | null {
  switch (discipline.toLowerCase()) {
    case ("tactical"):
      return ComTacticalPDF();
    case ("barbaric"):
      return ComBarbaric();
    default:
      return null;
  }
}