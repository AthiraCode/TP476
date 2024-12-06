class PasswordBuilder {
    constructor() {
        this.password = '';
        this.length = 8; // Default length
        this.complexityRank = 1; // Default complexity (1 = simple, 2 = advanced)
    }

    setLength(length) {
        this.length = length;
        return this;
    }

    setComplexityRank(rank) {
        this.complexityRank = rank;
        return this;
    }

    generatePassword() {
        let password = '';
        const charset = this.complexityRank === 1
            ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
            : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

        for (let i = 0; i < this.length; i++) {
            const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
            password += randomChar;
        }

        this.password = password;
        return this;
    }

    getPassword() {
        return this.password;
    }
}

export default PasswordBuilder;
