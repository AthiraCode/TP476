import PasswordBuilder from './PasswordBuilder';

export const generatePassword = (type) => {
    const passwordBuilder = new PasswordBuilder();

    if (type === 'personal') {
        passwordBuilder.setLength(8).setComplexityRank(1); // Personal password with 8 chars, simple complexity
    } else if (type === 'enterprise') {
        passwordBuilder.setLength(16).setComplexityRank(2); // Enterprise password with 16 chars, advanced complexity
    }

    passwordBuilder.generatePassword();
    return { password: passwordBuilder.getPassword() };
};
