export const Footer = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer>
      <p>© {yearText}</p>
      <p>
        Developed by
        <a className="footer-link" href="https://www.linkedin.com/in/1diazdev/">
          Juan Diaz
        </a>
      </p>
    </footer>
  );
};
