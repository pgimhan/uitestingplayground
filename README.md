# UI Testing Playground with Playwright

This project contains automated tests for [UI Testing Playground](http://uitestingplayground.com/) using Playwright test framework.

## Prerequisites

- Node.js 16 or higher
- npm (Node Package Manager)

## Getting Started

1. Clone the repository
```sh
git clone <repository-url>
cd uitestingplayground
```

2. Install dependencies
```sh
npm install
```

## Running Tests

To run all tests:
```sh
npx playwright test
```

To run tests in UI mode:
```sh
npx playwright test --ui
```

To run tests in a specific browser:
```sh
npx playwright test --project=chromium
```

## Test Reports

After test execution, HTML report will be generated in the `playwright-report` directory. To view the report:
```sh
npx playwright show-report
```

## Project Structure

```
├── tests/
│   └── main.spec.ts     # Test specifications
├── playwright-report/    # Test execution reports
├── test-results/        # Test results and artifacts
├── playwright.config.ts # Playwright configuration
└── package.json         # Project dependencies
```

## Configuration

The project uses Playwright's default configuration with:
- HTML reporter
- Trace capture on first retry
- Chrome (Chromium) as the primary browser
- Parallel test execution enabled

For detailed configuration, see [playwright.config.ts](playwright.config.ts).
