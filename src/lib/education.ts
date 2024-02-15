
export interface UniversityInfo{
    startDate:string,
    endDate:string,
    collegeName:string,
    degree:string,
    field:string
} 


const Bit:UniversityInfo = {
    startDate:"Sept-2017",
    endDate:"June-2021",
    collegeName:"Birla Institute of Technology",
    degree:"B.E",
    field:"Mechanical Engineering"
}

const UWaterloo:UniversityInfo = {
    startDate:"Sept-2022",
    endDate:"Dec-2023",
    collegeName:"University of Waterloo",
    degree:"M.Eng",
    field:"Mechanical and Mechatronics Engineering"
}

export const colleges:UniversityInfo[] = [Bit,UWaterloo]