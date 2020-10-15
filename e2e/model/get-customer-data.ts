export interface GetCustomerData {
  customerNumber: string;
  companyName: string | null;
  customerType: {
    customerType: string | null;
  } | null;
  potential: boolean;
  taxID: string | null;
  resident: boolean;
  customerPersonal: {
    firstName: string | null;
    lastName: string | null;
    dateOfBirth: Date | null;
    pesel: string | null;
    secondName: string | null;
    identityCardNumber: string | null;
    passportNumber: string | null;

  } | null;
  branchOfOwnership: {
    addressZipCode: string | null;
    addressCity: string | null;
  } | null;
  customerFirm: {
    regon: string | null;
    krs: string | null;
    numberOfEmployees: number;
  } | null;

}
