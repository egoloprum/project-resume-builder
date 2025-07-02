export interface Resume {
  name: {
    firstName: string
    middleName: string
    lastName: string | null
  }
  gender: 'male' | 'female'
  birthday: string
  telephone: string
  email: string
  city: string

  desiredPosition: DesiredPosition | null
  workExperience: WorkExperience[] | []
  education: Education[] | []
  skills: string[] | []
  languages: {
    type: string
    level:
      | 'C2 (proficient)'
      | 'C1 (Advanced)'
      | 'B2 (Upper Intermediate)'
      | 'B1 (Intermediate)'
      | 'A2 (Elementary)'
      | 'A1 (Beginner)'
  }
}

export interface DesiredPosition {
  position: string
  specialization: string
  employment:
    | 'Full time'
    | 'Part time'
    | 'Contract worker'
    | 'Volunteer'
    | 'Intern'
  schedule: 'Full day' | 'Shift' | 'Flexible' | 'Remote'
  travelTimeToWork:
    | "it doesn't matter"
    | 'Not longer than 1 hour'
    | 'Not longer than 1.5 hour'
  businessTrip: 'Never' | 'Always' | 'Sometimes'
}

export interface WorkExperience {
  companyName: string
  city: string
  branch: string
  position: string

  startDate: string
  endDate: string | null
  workerResponsibility: string
}

export interface Education {
  institutionName: string
  department: string
  specialization: string
  endDate: string
}
