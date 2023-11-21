import { PDFRender } from "./components/PDFRender";

const pdfFilePath = 'https://cdn.ueno.ltd/%C3%A5%C2%BD%C2%B1%C3%A8%C2%A7%C2%86%C3%A5%C2%B9%C2%B3%C3%A5%C2%8F%C2%B0%C3%A5%C2%90%C2%8E%C3%A5%C2%8F%C2%B0%C3%A7%C2%AE%C2%A1%C3%A7%C2%90%C2%86%C3%A7%C2%B3%C2%BB%C3%A7%C2%BB%C2%9F-v02.pdf'

export const App = () => {
  return (
    <PDFRender src={pdfFilePath} />
  )
}