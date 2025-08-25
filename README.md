https://github.com/faastgaming/Node-Project-Practices/releases

# Node Project Practices — Patterns, Tools, Examples, Templates 🚀

[![Releases](https://img.shields.io/badge/Releases-View-blue?logo=github)](https://github.com/faastgaming/Node-Project-Practices/releases)  
![Node.js](https://nodejs.org/static/images/logo.svg)

This repository collects practical Node.js patterns, examples, and templates. Use it to learn good habits. Use it to bootstrap new services. Use it to test approaches before you add them to a real project.

Badges
- Build status: [![Build](https://img.shields.io/badge/build-passing-brightgreen)](#)
- License: [![License](https://img.shields.io/badge/license-MIT-green)](#)
- Releases: [![Releases](https://img.shields.io/badge/releases-download-orange)](https://github.com/faastgaming/Node-Project-Practices/releases)

Releases
- Visit the releases page at https://github.com/faastgaming/Node-Project-Practices/releases to get builds and sample assets.
- Download the release file and execute it to try a packaged example. The release asset contains runnable code and scripts. Follow the asset README inside the release archive and run the provided start commands.

Why this repo
- Collect tested patterns for common tasks.
- Show how to structure Node.js services and libraries.
- Offer ready-to-run examples for web APIs, workers, and CLI tools.
- Explain trade-offs in plain terms.

Core topics covered
- Project layout and module boundaries.
- Dependency injection and config patterns.
- Error handling and structured logs.
- Async patterns: async/await, streams, events.
- Testing: unit, integration, contract tests.
- Performance: clustering, worker threads, caching.
- Devops: Dockerfiles, CI pipelines, deployment tips.

Quick start (local)
1. Clone the repo.
2. Pick an example folder under /examples.
3. Install deps: npm ci
4. Start the example: npm start
5. If you use a release asset from the releases page, extract it and run the included script.

Commands used in examples
- npm run start — runs the example in dev mode.
- npm run test — runs unit and integration tests.
- npm run lint — runs ESLint.
- npm run build — compiles TypeScript when present.

Project layout (one recommended layout)
- /examples - runnable example apps and microservices
  - /http-service - Express + async handlers
  - /worker - background job processing
  - /cli - command-line utilities
- /packages - small reusable libs (logger, config, utils)
- /scripts - helper scripts for build and dev
- /docs - design notes and patterns
- /test - shared test helpers
- package.json - top-level task runner and workspace config

Recommended module patterns
- Use small focused modules. Keep functions single-purpose.
- Export plain functions and objects. Avoid global state.
- Prefer dependency injection for external clients (DB, HTTP).
- Keep side-effects in a single bootstrap file (app start).

Configuration strategy
- Load config from environment first.
- Fall back to a config file for local dev.
- Use a strict schema for config (Joi, zod, or custom validator).
- Keep secrets out of the repo. Use env var stores.

Logging and errors
- Use structured logs (JSON) in services.
- Include a request id in logs for traceability.
- Return clear error objects from business logic.
- Map errors to HTTP codes at the API boundary.
- Do not expose internal stack traces in production responses.

API example (plain)
- Use express or fastify for HTTP.
- Validate input in middleware.
- Keep business logic out of controllers.
- Use async/await and catch errors at the top-level middleware.

Example: async handler pattern
- Keep handlers small.
- Call service layers that return plain results or throw typed errors.
- Use top-level middleware to normalize responses and errors.

Testing approach
- Unit tests for pure logic with mocks for external calls.
- Integration tests for API endpoints using a test DB or in-memory emulation.
- E2E examples use test containers or Docker Compose.
- Keep tests deterministic. Seed mock data. Reset state between tests.

Sample test commands
- Run tests: npm test
- Run a specific test: npm test -- -t "handler test"
- Generate coverage: npm run coverage

Performance and scaling
- Use Node.js cluster to use multiple cores when useful.
- Prefer worker threads for CPU-bound tasks.
- Use caching for repeated reads. Invalidate cache on writes.
- Use streams for large payloads to reduce memory use.
- Profile with Node.js built-in profiler or 3rd-party tools.

Security basics
- Sanitize inputs before passing to DB queries.
- Use parameterized queries or an ORM that does it.
- Limit rate on public endpoints.
- Keep dependencies updated and run audit tools.

Devtools and linting
- ESLint with recommended rules.
- Prettier for consistent formatting.
- Husky for pre-commit checks.
- Git hooks run lint and tests before commit.

CI and CD
- Provide sample GitHub Actions workflows under .github/workflows.
- Run lint, test, and build on PRs.
- Build release artifacts and attach them to GitHub releases.
- For releases, the release asset needs to be downloaded and executed to run packaged demos.

Examples and templates (what you get)
- HTTP API template: Express, request logging, health checks.
- Worker template: BullMQ or simple Redis queue example.
- CLI template: Oclif-style or yargs with subcommands and tests.
- Library template: Reusable utils with proper package.json and tests.

Code style
- Use TypeScript where it helps. Keep types small and focused.
- Prefer explicit types for public APIs.
- Keep internal code loose when it helps speed development.
- Use JSDoc to document tricky functions.

Contributing
- Fork the repo.
- Create a feature branch.
- Run tests and lint before you push.
- Open a PR with a clear description and tests.
- Tag issues you fix with a reference.

Release process
- Use semantic versioning.
- Attach compiled artifacts to GitHub releases.
- Update changelog on release.
- Release builds live under: https://github.com/faastgaming/Node-Project-Practices/releases
- Download the release asset and execute it to try packaged examples or demos.

Common patterns explained (short)
- Circuit breaker: wrap remote calls and open on repeated failure.
- Bulkhead: isolate resources per operation to prevent global failure.
- Retry with backoff: retry idempotent calls and add jitter.

Useful commands and tips
- Start a service in dev: NODE_ENV=development npm run start
- Run a script with node: node ./scripts/run-demo.js
- Check installed node: node -v
- Use nvm to manage node versions.

Images and diagrams
- Use architecture diagrams in /docs to show flows.
- Include sequence diagrams for critical flows.
- Keep diagrams simple and labeled.

FAQ
- Q: How do I run examples in a portable way?
  A: Use the release artifact or Docker image. The release asset contains start scripts.
- Q: Which Node version is supported?
  A: Check engines in package.json. Tests run on the listed versions.
- Q: How do I add a new example?
  A: Add a folder under /examples. Include package.json, README, and start script.

License
- MIT. See the LICENSE file.

Contact
- Use GitHub issues for bugs and feature requests.
- Open PRs with fixes or enhancements.

Quick checklist for new projects
- Choose layout from this repo.
- Add config validation.
- Add structured logs and correlation ids.
- Add tests for business logic.
- Add CI with lint and test steps.
- Add release pipeline and attach assets to GitHub Releases.

Explore releases
- Visit the releases page to download example artifacts and run demos: https://github.com/faastgaming/Node-Project-Practices/releases

Files to look at first
- examples/http-service/README.md
- packages/logger/README.md
- .github/workflows/ci.yml
- docs/architecture.md

Keep each example small. Keep code readable. Keep tests fast.