import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23lil1XdnoAOCF2fRo',
            clientSecret: '720888247746d0f65eadecf6374d4d0db9447082',
        })
    ]
};

export default NextAuth(authOptions);