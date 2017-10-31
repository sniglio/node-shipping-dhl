
export const get = {
  GetCapability: {
    From: {
      CountryCode: 'CA',
      Postalcode: 'V6A3E1',
      City: 'Vancouver'
    },
    BkgDetails: {
      PaymentCountryCode: 'CA',
      Date: '2017-08-24',
      ReadyTime: 'PT10H21M',
      ReadyTimeGMTOffset: '+01:00',
      DimensionUnit: 'CM',
      WeightUnit: 'KG',
      Pieces: {
        Piece: {
          PieceID: 1,
          Height: 30,
          Depth: 20,
          Width: 10,
          Weight: 1.0
        }
      },
      IsDutiable: 'N',
      NetworkTypeCode: 'AL',
      QtdShp: {
        QtdShpExChrg: {
          SpecialServiceType: 'OSINFO'
        }
      }
    },
    To: {
      CountryCode: 'CA',
      Postalcode: 'V6A3E1'
    },
    Dutiable: {
      DeclaredCurrency: 'CAD',
      DeclaredValue: '1002.00'
    }
  }
};
