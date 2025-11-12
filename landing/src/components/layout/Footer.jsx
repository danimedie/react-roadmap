export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center">
      <p className="p-8 text-xs">{currentYear} &copy; Daniel del Pozo Medié</p>
      <p className="underline p-8 text-xs">*Available for work</p>
    </footer>
  );
}
