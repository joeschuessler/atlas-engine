
export abstract class Entity {
  readonly id: string;
  name: string;
  createdAt: number;

  constructor(name: string) {
    this.id = '1';
    this.name = name;
    this.createdAt = Date.now();
  }
}