import { AuthenticationParams } from '@/domain/usecases/authentication'
import faker from 'faker'

// Fonction qui retourne un object
export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
