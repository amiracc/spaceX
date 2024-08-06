export interface SanitizedLaunch {
  id: string;
  mission_name: string;
  launch_year: number;
  status: boolean | null;
  mission_patch: string;
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean;
  links: {
    patch: {
      small: string;
      large: string;
    };
  };
}
