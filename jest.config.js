module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['jest-enzyme'],
    testEnvironment: 'enzyme',
    testPathIgnorePatterns: ['/node_modules/', '.*.resource.ts*?'],
    snapshotSerializers: ['enzyme-to-json/serializer']
};

