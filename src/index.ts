export * from './utils/level';

import winston, { Logger } from 'winston';
import { defaultColors, defaultLevels, LevelsType, LoggerColors } from './consts';
import { defaultFormat, defaultTransports, FormatType, TransportsType } from './utils';

type CreateLoggerInput = {
    level?: string;
    levels?: LevelsType;
    format?: FormatType;
    transports?: TransportsType;
    colors: LoggerColors;
};

export class LoggerSingleton {
    private static instance: LoggerSingleton;

    private logger: Logger;

    private constructor({ format, level, levels, transports, colors }: CreateLoggerInput) {
        if (colors) winston.addColors(colors);

        this.logger = winston.createLogger({
            level,
            levels,
            format,
            transports,
        });
    }

    public static getInstance({
        format = defaultFormat,
        level = 'debug',
        levels = defaultLevels,
        transports = defaultTransports,
        colors = defaultColors,
    }: CreateLoggerInput): LoggerSingleton {
        if (!LoggerSingleton.instance) {
            LoggerSingleton.instance = new LoggerSingleton({
                format,
                level,
                levels,
                transports,
                colors,
            });
        }

        return LoggerSingleton.instance;
    }
}
