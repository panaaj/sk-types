import { ALARM_STATE, ALARM_METHOD } from './notification';

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
    path: string,
    value: {
        state: ALARM_STATE,
        method: Array<ALARM_METHOD>,
        message: string
    }
}
