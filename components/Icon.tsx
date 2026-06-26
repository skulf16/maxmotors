import type { IconName } from "@/lib/content";

type Props = { name: IconName; size?: number };

// Schlanke Linien-Icons, currentColor, 1.6px – passend zum „technische Zeichnung"-Look.
export default function Icon({ name, size = 26 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "engine":
      return (
        <svg {...common}>
          <path d="M5 9h2l2-2h4v2h3l2 2h2v5h-2l-2 2H9l-2-2H5z" />
          <path d="M9 7V5h4v2M5 11H3v3h2M19 10l2-1" />
        </svg>
      );
    case "spray":
      return (
        <svg {...common}>
          <path d="M10 8h5a2 2 0 0 1 2 2v10H8V10a2 2 0 0 1 2-2Z" />
          <path d="M10 8V5h3v3M16 6h2M16 4h3M16 8h2" />
          <path d="M11 13h3" />
        </svg>
      );
    case "lift":
      return (
        <svg {...common}>
          <path d="M3 20h18M5 20V8m14 12V8M5 8h14" />
          <path d="M8 8V5h8v3M12 8v5m-3 0h6" />
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path d="M5 21V4m0 0 5 2 4-2 5 2v9l-5-2-4 2-5-2" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M15 4a4 4 0 0 0-5 5L4 15v4h4l6-6a4 4 0 0 0 5-5l-2.5 2.5L14 9l1.5-2.5Z" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M4 18a8 8 0 1 1 16 0" />
          <path d="M12 14l4-3M9 18.5h6" />
        </svg>
      );
    case "brake":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
        </svg>
      );
    case "tire":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        </svg>
      );
    case "snow":
      return (
        <svg {...common}>
          <path d="M12 3v18M5 7l14 10M19 7 5 17" />
          <path d="M12 6l2-2M12 6l-2-2M12 18l2 2M12 18l-2 2" />
        </svg>
      );
    case "oil":
      return (
        <svg {...common}>
          <path d="M5 12h7l3-3 4 1v4a4 4 0 0 1-4 4H8a3 3 0 0 1-3-3z" />
          <path d="M8 12V8h3l1.5 1.5M5 14H3" />
        </svg>
      );
    case "diagnose":
      return (
        <svg {...common}>
          <path d="M3 12h4l2 5 3-10 2 5h4" />
          <path d="M19 9V6a2 2 0 0 0-2-2H7" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "badge":
      return (
        <svg {...common}>
          <path d="M12 3l2.2 1.6 2.7-.2 1 2.5 2.2 1.5-.6 2.6.6 2.6-2.2 1.5-1 2.5-2.7-.2L12 21l-2.2-1.6-2.7.2-1-2.5L3.9 16l.6-2.6L3.9 11l2.2-1.5 1-2.5 2.7.2z" />
          <path d="M9.5 12l1.8 1.8L15 10" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M3 12V5h7l10 10-7 7L3 12Z" />
          <circle cx="7.5" cy="8.5" r="1.3" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.7" />
          <circle cx="17" cy="18" r="1.7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m3.5 6.5 8.5 6 8.5-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    default:
      return null;
  }
}
