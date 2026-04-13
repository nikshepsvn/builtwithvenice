# Contributing to Built with Venice

A community-curated showcase of projects, tools, and content built on the Venice AI ecosystem.

## How to submit

### Option 1: Submit via form (easiest)

[**Open a submission**](https://github.com/nikshepsvn/builtwithvenice/issues/new?template=submit-project.yml&title=%5BProject%5D+) — fill out the form and we'll add it for you.

### Option 2: Submit via pull request

1. Fork this repo
2. Add your entry to `src/data/projects.ts`
3. Open a pull request with one entry per PR
4. The team reviews and merges

## Project categories

- **`ecosystem`** — Tools, dashboards, SDKs, and infrastructure built *for* the Venice community (e.g. VeniceStats, a language SDK)
- **`powered-by`** — Apps and integrations that use the Venice API to power their product (e.g. a chatbot, a research tool)

## Adding a Website

```ts
{
  title: "My Project",
  description: "What it does in 1-2 sentences.",
  type: "Website",
  url: "https://myproject.com",
  tags: ["Tag1", "Tag2"],
  category: "powered-by",   // or "ecosystem"
  preview: "/preview-myproject.png",  // optional — add screenshot to public/
  submittedBy: "your-name",
}
```

If including a preview screenshot, add a 1200x750 PNG to the `public/` directory.

## Adding a GitHub Repo

```ts
{
  title: "my-repo",
  description: "What it does in 1-2 sentences.",
  type: "GitHub Repo",
  url: "https://github.com/owner/repo",
  tags: ["Tag1", "Tag2"],
  category: "ecosystem",    // or "powered-by"
  owner: "owner",
  repo: "repo",
  stars: 42,       // optional
  forks: 5,        // optional
  language: "TypeScript",
  submittedBy: "your-name",
}
```

## Quality bar

Projects must offer something beyond the base Venice platform. We're looking for:

- Original tools, dashboards, or integrations
- SDKs and libraries that make Venice easier to use
- Creative applications of the Venice API
- Useful community infrastructure

We will not accept:

- Bare API wrappers with no added functionality
- Projects that are not publicly accessible
- Placeholder or demo-only projects

## PR checklist

- [ ] One entry per pull request
- [ ] TypeScript compiles (`npm run build`)
- [ ] Entry includes all required fields
- [ ] URL is publicly accessible
- [ ] Description is accurate and concise

## Disclaimer

Listing on Built with Venice does not imply endorsement by Venice AI, Inc.
