import { Author, Blog } from "./types";

export type CardProps = Omit<Blog, "author"> & { author?: Author };
