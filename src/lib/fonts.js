import { Raleway, Poppins } from 'next/font/google'
export const nunito_sans_init = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito_sans',
    weights: ["300", "600"]
})
export const poppins_init = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ["400", "500", "600", "700", "800", "900"],
})
export const poppins = poppins_init.variable
export const nunito_sans = nunito_sans_init.variable