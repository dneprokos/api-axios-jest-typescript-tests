import 'dotenv/config';

function readEnvStringValue(name: string): string {
    const envValue = process.env[name];
    if (envValue === undefined) {
        throw new Error(`${name} environment variable is not defined.`);
    }
    return envValue;
}

function readEnvNumberValue(name: string): number {
    const envValue = process.env[name];
    if (envValue === undefined) {
        throw new Error(`${name} environment variable is not defined.`);
    }
    const parsedValue = Number.parseInt(envValue, 10);
    if (isNaN(parsedValue)) {
        throw new Error(`${name} environment variable is not a valid number.`);
    }
    return parsedValue;
}

function readEnvBooleanValue(name: string): boolean {
    const envValue = process.env[name];
    if (envValue === undefined) {
        throw new Error(`${name} environment variable is not defined.`);
    }
    return envValue.toLowerCase() === 'true';

}

export { readEnvStringValue, readEnvNumberValue, readEnvBooleanValue };