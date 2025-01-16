import bcrypt from "bcrypt";

const saltRounds = 10;

export async function hashPassword(plainTextPassword: string): Promise<string> {
    return await bcrypt.hash(plainTextPassword, saltRounds);
}

export async function verifyPassword(plainTextPassword: string, hashedPassword :string):Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}