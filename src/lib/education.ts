
export interface UniversityInfo{
    startDate:string,
    endDate:string,
    collegeName:string,
    degree:string,
    field:string,
    cGpa:number
} 


const Bit:UniversityInfo = {
    startDate:"Sept-2017",
    endDate:"June-2021",
    collegeName:"Birla Institute of Technology",
    degree:"B.E",
    field:"Mechanical Engineering",
    cGpa: 9.5
}

const UWaterloo:UniversityInfo = {
    startDate:"Sept-2022",
    endDate:"Dec-2023",
    collegeName:"University of Waterloo",
    degree:"M.Eng",
    field:"Mechanical and Mechatronics Engineering",
    cGpa: 8.55
}

export const colleges:UniversityInfo[] = [Bit,UWaterloo]