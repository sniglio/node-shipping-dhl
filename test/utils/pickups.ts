
export const destroy = {
  RegionCode: 'AM',
  ConfirmationNumber: '743511',
  RequestorName: 'Rikhil',
  CountryCode: 'BR',
  OriginSvcArea: 'KUL',
  Reason: '001',
  PickupDate: '2013-10-10',
  CancelTime: '10:20'
};

export const post = {
  RegionCode: 'AM',
  Requestor: {
    AccountType: 'D',
    AccountNumber: '654031018',
    RequestorContact: {
      PersonName: 'fsddsf',
      Phone: '23162'
    }
  },
  Place: {
    LocationType: 'B',
    CompanyName: 'sdsfsd',
    Address1: 'String',
    Address2: 'sfsdf',
    PackageLocation: 'String',
    City: 'fdsdf',
    StateCode: 'CA',
    DivisionName: 'sd',
    CountryCode: 'CA',
    PostalCode: '66810'
  },
  Pickup: {
    PickupDate: '2017-11-25',
    ReadyByTime: '10:20',
    CloseTime: '14:20',
    AfterHoursClosingTime: '15:20',
    AfterHoursLocation: '',
    Pieces: 2,
    weight: {
      Weight: 20,
      WeightUnit: 'L'
    }
  },
  PickupContact: {
    PersonName: 'Subhayu',
    Phone: '4801313131'
  },
  ShipmentDetails: {
    AccountType: 'D',
    AccountNumber: '851624480',
    BillToAccountNumber: '100000000',
    AWBNumber: '7520067111',
    NumberOfPieces: 1,
    Weight: 10,
    WeightUnit: 'K',
    GlobalProductCode: 'D',
    DoorTo: 'DD',
    DimensionUnit: 'I',
    InsuredAmount: 999999,
    InsuredCurrencyCode: 'USD',
    Pieces: {
      Weight: 10,
      Width: 10,
      Height: 10,
      Depth: 10
    },
    SpecialService: 'S'
  }
};
