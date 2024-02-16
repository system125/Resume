
export interface TrainingData {
    acquiredSkills:string[],trainingTitle:string,company:string|null
}

const publicSpeaking:TrainingData = {
    trainingTitle: "Public Speaking Level-1",
    acquiredSkills: [
        "Completed public speaking course emphasizing effective presentation skills.",
        "Learned stress management techniques for maintaining composure during presentations.",
        "Acquired proficiency in utilizing impactful body language for enhanced communication."
    ],
    company: null
}

const stema:TrainingData = {
    trainingTitle: "",
    acquiredSkills: [
        "",
        "",
        ""
    ],
    company: null
}

export const TrainingsCompleted = [publicSpeaking]