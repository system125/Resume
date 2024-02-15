
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
            name: "Matlab",
            level: 4.8
        },
        {
            name:"C#",
            level:4.5
        },
        {
            name:"C++",
            level:4.5
        },
        {
            name:"Rust",
            level: 3.2
        }
    ]

}

const CadSkillz:SkillTree = {
    Category: "CAD",
    skills: [
        {
            name: "SolidWorks",
            level: 4.8
        },
        {
            name: "Fusion 360",
            level: 4.6
        },
        {
            name: "AutoCAD",
            level: 4.9
        }
    ]
}

const CEASkillz:SkillTree = {
    Category: "Simulation",
    skills: [
        {
            name: "OpenFOAM",
            level:4.5
        },
        {
            name: "Salome Meca",
            level: 3
        },
        {
            name: "Car Sim",
            level: 4
        }
    ]
}

export const Skillz:SkillTree[] = [programmingSkillz,CadSkillz,CEASkillz]