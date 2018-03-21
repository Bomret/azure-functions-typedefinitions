# Azure Functions Type Definitions

These are Typescript type definitions that were extracted from the official [Azure Functions Nodejs Worker](https://github.com/Azure/azure-functions-nodejs-worker) repository on GitHub.

Current state: `2018-03-21`

## Install

```
npm i -D azure-functions-typedefinitions
```

## Usage

```
import { IContext, IHttpRequest } from 'azure-functions-typedefinitions'

export function run (context: IContext, req: IHttpRequest): void {
    context.log.info(`${context.bindingData.sys.utcNow}: Function ${context.executionContext.functionName} (${context.invocationId}) started.`)

    context.res
        .status(200)
        .json({ message: 'success' })
}
```