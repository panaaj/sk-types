import { ALARM_STATE, ALARM_METHOD } from './notification';

export enum ServerRoles {
    master= "master",
    main= "main",
    aux= "aux",
    slave= "slave"
}

export interface DeltaHello {
    version: string;
    roles: Array<ServerRoles>;
    name?: string;
    timestamp?: string;
    self?: string;
    startTime?: string;
    playbackRate?: number;
}

export interface DeltaMessage {
    path: string; 
    value: any;
}

export interface DeltaUpdate {
    updates: [{
        values: Array<DeltaMessage>
    }]
}

export interface DeltaNotification extends DeltaMessage {
    value: {
        state: ALARM_STATE,
        method: Array<ALARM_METHOD>,
        message: string
    }
}

