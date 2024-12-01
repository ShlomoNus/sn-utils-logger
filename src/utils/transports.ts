import winston from 'winston';

export const defaultTransports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    new winston.transports.File({ filename: 'logs/all.log' }),
];

export type TransportsType = typeof defaultTransports;

export const transports = winston.transports;
