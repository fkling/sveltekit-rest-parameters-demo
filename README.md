# SvelteKit Rest Parameter Matching Demo

Demo of SvelteKit's rest parameter matching when multple rest parameters are present in the route.

Start the local dev server

```
npm run dev
```

Use the sidebar to navigate to one of the nested files.

The links under **Rest** don't use a parameter matcher. In this case the
parameters do not have the expected values:

**URL:** `/rest/foo/-/src/routes/rest/[...repo]/-/[...path]/+page.js`

**Actual result:**

Params have the following values

- `repo`: `foo/-/src/routes/rest/[...repo]`
- `path`: `[...path]/+page.js`

**Desired result:**

Params have the following values

- `repo`: `foo`
- `path`: `src/routes/rest/[...repo]/-/[...path]/+page.js`

The links under **Rest with parameter validator** use a route that ensures that `repo` does not contain
`/-/`. This has the effect that SvelteKit renders a 404 page.

**URL:** `/rest/foo/-/src/routes/rest/[...repo]/-/[...path]/+page.js`

**Actual result:**

SvelteKit renders a 404 (`repo` and `path` are not set)

**Desired result:**

As above.
