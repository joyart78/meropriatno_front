export type IconName =
  | "wedding"
  | "corporate"
  | "birthday"
  | "party"
  | "graduation"
  | "location"
  | "phone"
  | "email"
  | "clock"
  | "telegram"
  | "vk";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const s = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
});

export function Icon({ name, size = 24, className }: IconProps) {
  const cls = `icon-${name}${className ? ` ${className}` : ""}`;

  switch (name) {
    case "wedding":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <circle cx="9.5" cy="12" r="4.5" />
          <circle cx="14.5" cy="12" r="4.5" />
          <path d="M12 2v4" />
          <path d="M9.5 16.5L12 19l2.5-2.5" />
        </svg>
      );

    case "corporate":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <rect x="4" y="8" width="16" height="14" rx="1" />
          <path d="M8 8V5a1 1 0 011-1h6a1 1 0 011 1v3" />
          <path d="M8 12h8M8 16h8" />
        </svg>
      );

    case "birthday":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <rect x="4" y="14" width="16" height="8" rx="1" />
          <path d="M8 14v-2a4 4 0 018 0v2" />
          <path d="M12 4v4M10 6l2-2 2 2" />
          <path d="M6 18h2M16 18h2" />
        </svg>
      );

    case "party":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" />
          <path d="M8 14s-2 3 2 5" />
          <path d="M16 14s2 3-2 5" />
          <path d="M12 16v5" />
        </svg>
      );

    case "graduation":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M2 10l10-5 10 5-10 5-10-5z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      );

    case "location":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "phone":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      );

    case "email":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );

    case "clock":
      return (
        <svg
          {...s(size)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );

    case "telegram":
      return (
        <svg {...s(size)} viewBox="0 0 48 48" className={cls}>
          <circle cx="24" cy="24" r="20" fill="#29b6f6" />
          <path
            fill="#fff"
            d="M33.95 15l-3.746 19.126s-.161.874-1.245.874c-.576 0-.873-.274-.873-.274l-8.114-6.733-3.97-2.001-5.095-1.355s-.907-.262-.907-1.012c0-.625.933-.923.933-.923l21.316-8.468s.651-.235 1.126-.234c.334 0 .669.125.669.5 0 .25-.05.5-.05.5z"
          />
          <path
            fill="#b0bec5"
            d="M23 30.505l-3.426 3.374s-.149.115-.348.12c-.069.002-.143-.009-.219-.043l.964-5.965L23 30.505z"
          />
          <path
            fill="#cfd8dc"
            d="M29.897 18.196c-.169-.22-.481-.26-.701-.093L16 26s2.106 5.892 2.427 6.912c.322 1.021.58 1.045.58 1.045l.964-5.965 9.832-9.096c.22-.174.261-.487.094-.707z"
          />
        </svg>
      );

    case "vk":
      return (
        <svg {...s(size)} viewBox="0 0 48 48" className={cls}>
          <circle cx="24" cy="24" r="20" fill="#1976d2" />
          <path
            fill="#fff"
            d="M35.937 18.041c.046-.151.068-.291.062-.416C35.984 17.263 35.735 17 35.149 17h-2.618c-.661 0-.966.4-1.144.801 0 0-1.632 3.359-3.513 5.574-.61.641-.92.625-1.25.625C26.447 24 26 23.786 26 23.199v-5.185C26 17.32 25.827 17 25.268 17h-4.649C20.212 17 20 17.32 20 17.641c0 .667.898.827 1 2.696v3.623C21 24.84 20.847 25 20.517 25c-.89 0-2.642-3-3.815-6.932C16.448 17.294 16.194 17 15.533 17h-2.643C12.127 17 12 17.374 12 17.774c0 .721.6 4.619 3.875 9.101C18.25 30.125 21.379 32 24.149 32c1.678 0 1.85-.427 1.85-1.094v-2.972C26 27.133 26.183 27 26.717 27c.381 0 1.158.25 2.658 2 1.73 2.018 2.044 3 3.036 3h2.618c.608 0 .957-.255.971-.75.003-.126-.015-.267-.056-.424-.194-.576-1.084-1.984-2.194-3.326-.615-.743-1.222-1.479-1.501-1.879C32.062 25.36 31.991 25.176 32 25c.009-.185.105-.361.249-.607C32.223 24.393 35.607 19.642 35.937 18.041z"
          />
        </svg>
      );

    default:
      return null;
  }
}
