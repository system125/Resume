import type Work from "../components/Work.svelte";

export interface WorkInfo{startDate:string,endDate:string,companyName:string,title:string,workRoles:string[],location:string} 

const Abm:WorkInfo = {
    startDate: "Jan 2021",
    endDate: "Aug 2022",
    title: "Sales Executive",
    companyName: "ABM Textiles Industries F.Z.E",
    location:"Ajman,U.A.E",
    workRoles: [
        "Spearheaded the development of a Management Information System (MIS)",
        "Enhanced customer service by implementing features for tracking interactions and ensuring timely responses.",
        "Optimized logistical operations by integrating order and delivery tracking functionalities",
        "Collaborated cross-functionally to deploy the MIS software and provided ongoing support and enhancements."
    ]
}

const goldStar:WorkInfo = {
    startDate: "Jan 2024",
    endDate: "ongoing",
    title: "Dotnet Developer Intern",
    companyName:"Goldstar Accountant L.T.D",
    location: "Kathmandu, Nepal",
    workRoles: [
        "Help develop office extensions using .Net Technologies",
        "Integrate extensions with online apis to retrieve and manipulate data",
        "Communicate with employee for technical requirements",
        "Test the extensions for accuracy and reliablity",
        "Create documentation and provide ongoing support"
    ]
}

export const WorkExperienceData:WorkInfo[] = [Abm,]
export const InternExperienceData:WorkInfo[] = [goldStar]