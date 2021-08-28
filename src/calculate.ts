import * as def from './definition'
import {
  GCS,
  ChronicHealthCondition,
  AdmissionInfo,
  AdmissionDiagnosis,
  AdmissionDiagnosisOperative
} from './interface'

export function toName(): string {
  return "calculate";
}

interface ICUInput {
  age: number;
  temparature: number; // tem
  map: number;
  hr: number;
  rr: number;
  ventilation: boolean; // ven
  fio2: number; // fio
  po2: number; // oxy
  pco2: number; // pco
  ph: number; // pha (float)
  na: number; // nas
  urine: number; // uri
  creatinine: number; // cre
  urea: number; // ure
  bsl: number;
  albumin: number; // alb
  bilirubin: number; // bil
  ht: number; // hto(hematocrit)
  wbc: number;
  gcs: GCS;
  chronicHealthCondition: ChronicHealthCondition;
  admissionInfo: AdmissionInfo;
  admissionDiagnosis: AdmissionDiagnosis;
}

interface ICUOutput {
  apacheIVScore: number; // 286
  apsScore: number; // 239
  estimatedMortalityRate: number; // %
  estimatedLengthOfStay: number; // days
}

function calculate({
  age,
  temparature,
  map,
  hr,
  rr,
  ventilation,
  fio2,
  po2,
  pco2,
  ph,
  na,
  urine,
  creatinine,
  urea,
  bsl,
  albumin,
  bilirubin,
  ht,
  wbc,
  gcs,
  chronicHealthCondition,
  admissionInfo,
  admissionDiagnosis,
}: ICUInput): ICUOutput {

  const { x, y } = convert(admissionDiagnosis)
  // @todo: apachcalc()

  return {
    apacheIVScore: 286,
    apsScore: 239,
    estimatedMortalityRate: 100,
    estimatedLengthOfStay: 1.2,
  }
}

function convert(
  gno: AdmissionDiagnosis
): { x: string; y: string } {
  switch(gno.operative) {
    case AdmissionDiagnosisOperative.NonOperative: return {
      x: def.v2meddia[gno.systemIndex][gno.diagnosisIndex],
      y: def.vmeddia[gno.systemIndex][gno.diagnosisIndex]
    }
    case AdmissionDiagnosisOperative.PostOperative: return {
      x: def.v2chidia[gno.systemIndex][gno.diagnosisIndex],
      y: def.vchidia[gno.systemIndex][gno.diagnosisIndex]
    }
    default: return { x: "0", y: "0" }
  } // switch
}
