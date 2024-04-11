import { env_isPROD, env_isDEV, env_MODE, env_RUNTIME, env_API_ROUTE } from '@constants/envVars';
import chalk from 'chalk';

export const logEnvVars = () => {
    console.log(chalk.hex('#2eb0ff')(`
        env_isPROD: ${!!env_isPROD ? chalk.bold.green(env_isPROD) : chalk.bold.red(env_isPROD)}
        env_isDEV: ${!!env_isDEV ? chalk.bold.green(env_isDEV) : chalk.bold.red(env_isDEV)}
        env_MODE: ${chalk.bold.yellow(env_MODE)}
        env_RUNTIME: ${chalk.bold.yellow(env_RUNTIME)}
        env_API_ROUTE: ${chalk.bold.green(env_API_ROUTE)}
    `));
};

export const logBoldGreen = (str: string) => {
    console.log(chalk.bold.green(`
        ${str}
    `));
};
