# Azure Functions Type Definitions

[![npm](https://img.shields.io/npm/v/azure-functions-typedefinitions.svg)](https://www.npmjs.com/package/azure-functions-typedefinitions)
[![npm](https://img.shields.io/david/bomret/azure-functions-typedefinitions.svg)](https://github.com/bomret/azure-functions-typedefinitions/blob/master)


These are Typescript type definitions that were extracted from the official [Azure Functions Nodejs Worker](https://github.com/Azure/azure-functions-nodejs-worker) repository on GitHub.

Current state: `2018-05-25`

## Install

```
npm i -D azure-functions-typedefinitions
```

## Usage

```typescript
import { IContext, HttpRequest } from 'azure-functions-typedefinitions'

export function run (context: IContext, req: HttpRequest): void {
  context.log.info('Hello from a typed function!')

  const resBody = {
    invocationId: context.invocationId,
    name: context.executionContext.functionName,
    startTimeUtc: context.bindingData.sys.utcNow
  }

  context.res
    .status(200)
    .json(resBody)
}
```
