import Link from "next/link";

//I've added some custom icons for when incase we need them I wasn't sure if we wer going to use a cdn or not but this is pretty easy to use.
//cams-?

export const LocationIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${color}`}
      style={{ color: "var(--gray-400)" }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CalenderIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${color}`}
      style={{ color: "var(--gray-400)" }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ClockIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${color}`}
      style={{ color: "var(--gray-400)" }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const EventDetailsButton = ({ size, color, url }) => {
  return (
    <Link href={url} passHref>
      <a
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            textDecoration: "none",
            color: "var(--accent-primary)",
            fontWeight: "bold",
            fontSize: "20px",
            margin: "0 20px 0 47px",
          }}
        >
          View Event Details
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${size} ${color}`}
          style={{
            backgroundColor: "var(--accent-primary)",
            borderRadius: "100%",
            width: "var(--xl)",
            color: "white",
            justifySelf: "flex-end",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </Link>
  );
};

export default LocationIcon;
