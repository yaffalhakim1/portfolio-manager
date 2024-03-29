import { z } from "zod";
import { portfolioSchema } from "./portfolio-schema";

export type Response<TData = unknown> = {
  success: boolean;
  message?: string;
  data?: TData;
};

export type Portfolios = {
  id: number;
} & z.infer<typeof portfolioSchema>;

// FOR SCHEMAS
export type ProfileSchema = z.infer<typeof portfolioSchema>;

export type PortfolioInputs = z.infer<typeof portfolioSchema>;

export interface Profile {
  id: number;
  username: string;
  description: string;
  title: string;
  avatar: string;
  backgroundImage: string;
  portfolios: Portfolio[];
}

export interface Portfolio {
  id: number;
  profileId: number;
  name: string;
  position: string;
  company: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface DBSchema {
  profile: Profile;
  portfolio: Portfolio[];
}
