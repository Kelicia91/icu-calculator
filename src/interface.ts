export enum GCSEyes {
  Null = 0,
  Never,
  Painful,
  Verbal,
  Spontaneous,
}

export enum GCSVerbal {
  Null = 0,
  None,
  Incomprehensible,
  Inappropriate,
  Desoriented,
  Oriented,
}

export enum GCSMotor {
  Null = 0,
  None,
  DecerebrateExtension,
  DecorticateFlexion,
  WithdrawsFlexion,
  LocalizesPain,
  OnCommand,
}

export interface GCS {
  isNotAvailable: boolean; // sed(na=true,a=false)
  eyes: GCSEyes; // gce
  verbal: GCSVerbal; // gcv
  motor: GCSMotor; // gcm
}

export interface ChronicHealthCondition {
  crf: boolean; // hem(2=true,1=false)
  lymphoma: boolean; // lym
  cirrhosis: boolean; // cir
  leukemiaMyeloma: boolean; // leu
  hepaticFailure: boolean; // hep
  immunosuppression: boolean; // imm
  metastaticCarcinoma: boolean; // met
  aids: boolean; // aid
}

export enum AdmissionOrigin {
  Other = 0,
  Floor,
  OTRecovery,
  OtherHospital,
}

export interface AdmissionInfo {
  los: number;
  origin: AdmissionOrigin;
  readmission: number; // read(no=0,yes=1)
  emergencySurgery: number; // surg(no=0,yes=1)
}

export enum AdmissionDiagnosisOperative {
  Null = 0,
  NonOperative,
  PostOperative,
}

export interface AdmissionDiagnosis {
  operative: AdmissionDiagnosisOperative; // typ
  systemIndex: number; // sys
  diagnosisIndex: number; // gno
  thrombolysis: number; // thr(no=0,yes=1)
}
