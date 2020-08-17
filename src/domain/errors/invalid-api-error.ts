export class InvalidApiError extends Error {
  constructor () {
    super('API não encontrada')
    this.name = 'InvalidApiError'
  }
}
