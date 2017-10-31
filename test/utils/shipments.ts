
export const post = {
  ShipmentRequest: {
    RegionCode: 'AM',
    RequestedPickupTime: 'N',
    NewShipper: 'N',
    LanguageCode: 'en',
    PiecesEnabled: 'Y',
    Billing: {
      ShipperAccountNumber: '753871175',
      ShippingPaymentType: 'S',
      BillingAccountNumber: '753871175',
      DutyPaymentType: 'S',
      DutyAccountNumber: '753871175'
    },
    Consignee: {
      CompanyName: 'IBM Singapore Pte Ltd',
      AddressLine: '9 Changi Business Park Central 1',
      City: 'Singapore',
      PostalCode: '486048',
      CountryCode: 'SG',
      CountryName: 'Singapore',
      Contact: {
        PersonName: 'Mrs Orlander',
        PhoneNumber: '506-851-2271',
        PhoneExtension: '7862',
        FaxNumber: '506-851-7403',
        Telex: '506-851-7121',
        Email: 'anc@email.com'
      }
    },
    Commodity: {
      CommodityCode: 'cc',
      CommodityName: 'cn'
    },
    Dutiable: {
      DeclaredValue: 200,
      DeclaredCurrency: 'USD',
      ScheduleB: '3002905110',
      ExportLicense: 'D123456',
      ShipperEIN: '112233445566',
      ShipperIDType: 'S',
      ImportLicense: 'ImportLic',
      ConsigneeEIN: 'ConEIN2123',
      TermsOfTrade: 'DAP'
    },
    Reference: {
      ReferenceID: 'AM international shipment',
      ReferenceType: 'St'
    },
    ShipmentDetails: {
      NumberOfPieces: 1,
      Pieces: {
        Piece: {
          PieceID: 1,
          PackageType: 'EE',
          Weight: 10,
          DimWeight: 1200,
          Width: 10,
          Height: 10,
          Depth: 10
        }
      },
      Weight: 10,
      WeightUnit: 'L',
      GlobalProductCode: 'P',
      LocalProductCode: 'P',
      Date: '2017-11-16',
      Contents: 'AM international shipment contents',
      DoorTo: 'DD',
      DimensionUnit: 'I',
      InsuredAmount: 1200,
      PackageType: 'EE',
      IsDutiable: 'Y',
      CurrencyCode: 'USD'
    },
    Shipper: {
      ShipperID: '751008818',
      CompanyName: 'IBM',
      RegisteredAccount: '751008818',
      AddressLine: '1 New Orchard Road',
      City: 'New York',
      Division: 'ny',
      DivisionCode: 'ny',
      PostalCode: '10504',
      CountryCode: 'US',
      CountryName: 'United States Of America',
      Contact: {
        PersonName: 'Mr peter',
        PhoneNumber: '1 905 8613402',
        PhoneExtension: '3403',
        FaxNumber: '1 905 8613411',
        Telex: '1245',
        Email: 'test@email.com'
      }
    },
    SpecialService: {
      SpecialServiceType: 'A'
    },
    EProcShip: 'N',
    LabelImageFormat: 'PDF'
  }
};
