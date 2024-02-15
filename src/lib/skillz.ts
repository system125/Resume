
export interface Skill{level:number,name:string}
export interface SkillTree{skills: Skill[],Category:string}

const programmingSkillz:SkillTree = {
    Category:"Programming",
    skills: [
        {
            name:"Python",
            level: 5
        },
        {
            name:"C#",
            level:4.5
        },
        {
            name:"C++",
            level:4
        },
        {
            name:"Rust",
            level: 3
        }
    ]

}

const CadSkillz:SkillTree = {
    Category: "CAD",
    skills: [
        {
            name: "SolidWorks",
            level: 4.5
        },
        {
            name: "Fusion 360",
            level: 4.5
        }
    ]
}

const CEASkillz:SkillTree = {
    Category: "CEA",
    skills: [
        {
            name: "OpenFOAM",
            level:4.5
        },
        {
            name: "Salome Meca",
            level: 3
        }
    ]
}

export const Skillz:SkillTree[] = [programmingSkillz,CadSkillz,CEASkillz]