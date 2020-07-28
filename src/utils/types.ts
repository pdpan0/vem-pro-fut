export type Category = {
  title: string;
  link: string;
  color: string;
  link_extra: LinkExtra;
  videos: Video[];
};

type LinkExtra = {
  text: string;
  url: string;
};

type Video = {
  title: string;
  url: string;
};
