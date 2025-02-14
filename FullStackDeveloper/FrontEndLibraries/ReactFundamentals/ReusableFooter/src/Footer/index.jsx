export const Footer = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer>
      <p>© {yearText}</p>
      <ul>
        <li>
          <a className="footer-link" href="#">
            <i className="fas fa-shield-alt"></i> Privacy Policy
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            <i className="fas fa-file-contract"></i> Terms of Service
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a className="footer-link" href="#">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            GitHub
          </a>
        </li>
      </ul>
      <ul>
        <li>Developed by </li>
        <li>
          <a className="footer-link" href="#">
            Juan Diaz
          </a>
        </li>
      </ul>
    </footer>
  );
};
