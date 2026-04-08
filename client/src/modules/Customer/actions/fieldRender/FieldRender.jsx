import { extractUrlId, formatEmail, formatPhone } from "../../../../utils/formatters";

const FieldRender = ({ type = "text", value }) => {
  if (!value) return "-";
  switch (type) {
    case "link":
      return value ? (
        <a
          href={value.startsWith("http") ? value : `https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {extractUrlId(value)}
        </a>
      ) : (
        "URL not found"
      );

    case "email":
      return <a href={formatEmail(value)}>{value}</a>;

    case "phone":
      return <a href={formatPhone(value)}>{value}</a>;

    default:
      return <span>{value}</span>;
  }
};

export default FieldRender;
