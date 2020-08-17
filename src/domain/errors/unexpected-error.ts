export class UnexpectedError extends Error {
  constructor () {
    super('Try again in a few moment !')
    this.name = 'UnexpectedError'
  }
}
