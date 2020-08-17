export class UnexpectedError extends Error {
  constructor () {
    super('Requisição inválida')
    this.name = 'UnexpectedError'
  }
}
