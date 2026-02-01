import { Container } from '../../components/Container/index.tsx'
import { Logo } from '../../components/Logo/index.tsx'
import { Menu } from '../../components/Menu/index.tsx'
import { Footer } from '../../components/Footer/index.tsx'


type MainTempleteProps = {
    children: React.ReactNode
}

export function MainTemplete({ children }: MainTempleteProps) {
    return (
        <>
            < Container>
                < Logo />
            </Container>

            < Container>
                < Menu />
            </Container>

            {children}

            < Container>
                 < Footer />
            </Container>
        </>
    )
}