/* eslint-disable @typescript-eslint/no-explicit-any */
export type httpRequest = {
  body: any;
  url: string;
  headers: any;
  method: "get" | "post" | "put" | "delete";
};

export type useAxiosRequestProps = {
  RequestResponse: any;
};

export type httpClientResponse<T = any> = {
  body: T;
  statusCode: number;
};

export type gitHubUserResponse = {
  id: number;
  url: string;
  blog: string;
  type: string;
  login: string;
  node_id: string;
  html_url: string;
  followers: number;
  gists_url: string;
  following: number;
  repos_url: string;
  avatar_url: string;
  created_at: string;
  bio: string | null;
  events_url: string;
  updated_at: string;
  site_admin: boolean;
  starred_url: string;
  gravatar_id: string;
  name: string | null;
  email: string | null;
  public_gists: number;
  public_repos: number;
  followers_url: string;
  following_url: string;
  company: string | null;
  location: string | null;
  hireable: boolean | null;
  organizations_url: string;
  subscriptions_url: string;
  received_events_url: string;
  user_view_type: string | null;
  twitter_username: string | null;
};

export type stack = {
  id: number;
  url: string;
  name: string;
};

export type project = {
  id: number;
  images: any;
  banner: any;
  text: string;
  date: string;
  title: string;
  slugs: string[];
  description: string;
  slugs_primary: string[];
};