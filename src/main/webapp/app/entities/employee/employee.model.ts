export interface IEmployee {
  id?: number;
  name?: string | null;
  email?: string | null;
  salary?: string | null;
}

export class Employee implements IEmployee {
  constructor(public id?: number, public name?: string | null, public email?: string | null, public salary?: string | null) {}
}

export function getEmployeeIdentifier(employee: IEmployee): number | undefined {
  return employee.id;
}
