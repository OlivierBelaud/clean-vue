import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models/account-model'
import faker from 'faker'

// Fonction qui retourne un object
export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
