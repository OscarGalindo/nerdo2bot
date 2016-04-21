export class Message {
  constructor(public message: string) {
  }

  isCommand(): boolean {
    return /^!\w+/.test(this.message);
  }

  getCommand(): string {
    var indexOfSpace = this.message.indexOf(' ');
    var end = (indexOfSpace === -1) ? undefined : indexOfSpace;

    return this.message.slice(1, end);
  }

  getArguments(): string[] {
    var indexOfSpace = this.message.indexOf(' ');
    if (indexOfSpace === -1) {
      return [''];
    }

    return this.message.slice(indexOfSpace + 1).split(' ');
  }
}
