# Analytics Worker

## Overview

This project is a worker service for analytics data processing.

## Requirements

* Node.js 14.17.0 or higher
* npm 6.14.13 or higher

## Installation

```bash
npm install
```

## Usage

To run the worker, execute the following command:

```bash
node index.js
```

## API Endpoints

### POST /process

* Request body: JSON object containing analytics data
* Response: JSON object with processed data

### GET /status

* Response: JSON object containing current worker status

## Configuration

Set environment variables:

* `ANALYTICS_API_KEY`: analytics API key
* `ANALYTICS_API_URL`: analytics API URL

## Tests

To run tests, execute the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License.