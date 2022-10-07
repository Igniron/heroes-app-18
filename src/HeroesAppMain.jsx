import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesAppMain = () => {
  return (
    <AuthProvider>
    
      <AppRouter/>

    </AuthProvider>
  )
}
