// med(typ=1) = AdmissionDiagnosisOperative.NonOperative
const medsys = ["System","Cardiovascular","Respiratory","Digestive","Neurologic","Metabolic","Hematologic","Genitourinary","Sepsis","Trauma","Miscellaneous"]
const meddia = [
    ["Diagnosis"],
    ["Diagnosis","AMI Ant","AMI Inf/Lat","AMI Non-Q","AMI Other","Cardiac Arrest","Cardiogenic Shock","Cardiomyopathy","Congestive HF","Chest Pain, rule out MI","Hypertension","Hypovolemia","Hemorrhage","Aortic Aneuysm","Peripheral Vascular Disease","Rythm Disturbance","Cardiac Drug Toxicity","Unstable Angina","Other"],
    ["Diagnosis","Airway Obstruction","Asthma","Aspiration Pneumonia","Bacterial Pneumonia","Viral Pneumonia","Parasitic/Fungal Pneumonia","COPD","Pleural Effusion","Edema noncardiac","Embolism","Respiratory Arrest","Cancer (lung, ENT)","Restrictive Disease","Other"],
    ["Diagnosis","Upper Bleeding","Lower Bleeding","Variceal Bleeding","Inflammatory Disease","Neoplasm","Obstruction","Perforation","Vascular Insufficiency","Hepatic Failure","Intra/Retroperitoneal Bleeding","Pancreatitis","Other"],
    ["Diagnosis","Intracerebral Hemorrhage","Neoplasm","Infection","Neuromuscular Disease","Drug Overdose","Subdural/Epidural Hematoma","SAH, Aneurysm","Seizure","Stroke","Other"],
    ["Diagnosis","Acid-base/Electrolyte Disorder","Diabetic Ketoacidosis","Hyperosmolar Diabetic Coma","Other"],
    ["Diagnosis","Coagulopathy, Neutro-/Thrombocyto-/Pancytopenia","Other"],
    ["Diagnosis","Renal/Other"],
    ["Diagnosis","Cutaneous","Gastrointestinal","Pulmonary","Urinary","Other","Unknown"],
    ["Diagnosis","Head with Chest/Abdomen/Pelvis/Spine","Head with Face/Extremity","Head only","Head with multi-trauma","Chest and Spine","Spine only","Multitrauma (no Head)"],
    ["Diagnosis","General/Other"]
]
export const vmeddia = [
    ["0"],
    ["0","0.085768512","-0.036016015","-0.057916835","0","-0.751470488","0.329989886","0.557005388","-0.219091549","-0.520128136","-0.067961418","-0.389881468","-0.381155309","1.310621507","0.844326529","-0.302546395","-0.882634505","-0.368981979","-0.132883369"],
    ["0","0.347148464","-0.542185912","0.860258427","1.306744601","1.156064757","1.619700546","-0.446092483","0.810093029","1.44275094","0.106834049","-0.053291846","-0.140474342","1.024903996","0.240490909"],
    ["0","0.021360405","0.185696594","-0.083385343","0.532982522","1.336831287","2.06861446","2.208699567","1.944060834","0.194945835","0.165265635","2.762688675","0.556588745"],
    ["0","0.86329482","0.974847187","1.16556532","3.92566043","-0.89006849","1.195315097","3.00860876","-0.330810671","0.313233793","0.357504381"],
    ["0","-0.382017407","-0.58421484","-0.081962609","-0.363969853"],
    ["0","0.399817416","-0.126173954"],
    ["0","-0.152233731"],
    ["0","1.56421957","1.245313673","1.926647999","0.453137242","0.649077107","0.402590257"],
    ["0","2.128908172","0.860033343","0.834081141","3.637560295","2.574268317","2.168142671","1.521187936"],
    ["0","-0.420843422"]
]
export const v2meddia = [
    ["0"],
    ["0","0.102949765","-0.152525079","-0.270872458","0","0.416919141","0.239711427","0.059962444","-0.422587793","-1.122354572","-0.813921325","-0.622592285","-0.656757432","0.649149305","-0.502752032","-0.603060945","-0.690943246","-1.212730735","-0.369658509"],
    ["0","-0.977669154","-1.540678498","-0.37223658","-0.043365914","0.254374904","1.056187347","-0.398697453","0.189900524","-0.2416873","-0.051527401","-0.390631425","0.966313802","1.55529658","-0.202823617"],
    ["0","-0.551832894","-0.579471867","-0.527719358","-0.211771894","0.195130291","-0.369945003","-0.327171182","0.714879336","-0.119675791","-0.659544401","-0.513627563","-0.252586643"],
    ["0","0.945056155","0.018952727","-0.535783229","-0.550653067","-1.55261952","0.295093901","0.615950385","-0.942170992","0.519453035","-0.176828697"],
    ["0","-0.640575517","-1.775702142","-0.927156778","-0.986438209"],
    ["0","0.258172435","-0.342352862"],
    ["0","-0.54158014"],
    ["0","0.126440315","-0.13010935","-0.258766455","-0.732788506","-0.04233671","-0.093377498"],
    ["0","-0.372350315","-0.364128015","0.595869416","-0.067960926","-0.717432122","0.033769484","-0.678110274"],
    ["0","-0.667576408"]
]

// chi(typ=2) = AdmissionDiagnosisOperative.PostOperative
const chisys = ["System","Cardiovascular","Respiratory","Digestive","Neurosurgery","Genitourinary","Trauma","Miscellaneous"]
const chidia = [
    ["Diagnosis"],
    ["Diagnosis","Heart Valve","CABG with double/redo Valve","CABG with Single Valve","Aortic Aneurysm, Elective","Aortic Aneurysm, Ruptured","Aortic Aneurysm, Dissection","Femoro-popeliteal Bypass","Aorto-iliac/-femoral Bypass","Peripheral Ischemia","Carotid","Other"],
    ["Diagnosis","Thoracotomy (Malignancy)","ENT Neoplasm","Thoracotomy (Lung biopy/Pleural Disease)","Thoracotomy (Infection)","Other"],
    ["Diagnosis","Malignancy","Bleeding","Fistula/Abcess","Cholecystitis/Cholangitis","GI Inflammation","Obstruction","Perforation","Ischemia","Liver Transplant","Other"],
    ["Diagnosis","Neoplasm (Craniotomy/Transphenoidal)","Intracranial Hemorrhage","SAH (Aneurysm/AVM)","Subdural/Epidural Hematoma","Spinal Cord Surgery","Other"],
    ["Diagnosis","Neoplasm (Renal/Bladder/Prostate)","Renal Transplant","Hysterectomy","Other"],
    ["Diagnosis","Head Only","Multitrauma with Head","Extremity","Multitrauma (no Head)"],
    ["Diagnosis","Amputation (nontraumatic"]  
]
export const vchidia = [
    ["0"],
    ["0","-2.076438218","-0.332456954","-1.358289429","0.773946463","2.77663888","1.110021457","-0.204188913","0.52392239","0.102293462","-0.14649332","-1.28358348"],
    ["0","0.199925455","-0.053892181","0.185974867","0.044451048","-0.359443815"],
    ["0","0.324865875","-0.045403893","0.719937797","-0.588512311","0.686936442","0.187304735","1.055374625","0.62069525","-0.848656603","0.217044719"],
    ["0","0.319065119","2.949869569","2.599592539","1.342344962","-0.251392367","0.551331225"],
    ["0","-0.423760975","-0.556650506","-0.162493249","-0.58901834"],
    ["0","2.102182643","3.20631279","-0.481004907","1.485430308"],
    ["0","-0.325703861"]
]
export const v2chidia = [
    ["0"],
    ["0","-1.371763972","-0.155141644","-1.99434806","-0.760703396","0.204404736","-0.178456475","-0.786571016","-0.831194514","-0.504208244","-1.332642438","-0.59044574"],
    ["0","0.086933576","-1.152870135","0.405738008","-0.005937516","-0.249217228"],
    ["0","0.136282662","-0.329679773","-0.556661177","-0.593293673","-0.165585527","-0.189005132","-0.189960264","0.498328014","-1.370278559","-0.295894316"],
    ["0","-0.437737676","0.52671741","0.318905704","0.715682622","-0.628609547","0.003996339"],
    ["0","-1.397212695","-1.308449407","-0.795847883","-0.693574061"],
    ["0","1.088819324","0.357797735","-0.180386981","-0.377807998"],
    ["0","0.604910303"]
]
