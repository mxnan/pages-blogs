export interface SnippetMetadata {
  title: string;
  description: string;
  icon: string;
}

export interface Snippet {
  slug: string;
  metadata: SnippetMetadata;
  content: string[];
}
