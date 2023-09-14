export enum LookupType {
  UnitOfMeasure,
  Material,
  Equipment,
  Labour,
  StaffOnSite
}

export interface Lookup {
  id: string;
  name: string;
  lookupType: LookupType;
  description: string;
}
