import { DeltaMessage } from './delta';

interface Request {
    context?: string;
    requestId: string;
}


export interface RequestPut extends Request {
    put: Array<DeltaMessage>
}

export interface RequestQuery extends Request {
    query: boolean;
}



interface Response {
    requestId: string;
    state: string;
    statusCode: number;
    message?: string;
}

export interface StreamResponse extends Response {
    login?: {
      token: string
    }
}

export interface RESTResponse extends Response  {
    token?: string;
    href?: string;
}

