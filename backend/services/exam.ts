import { Exam} from "../../api-types/exam";
import DB from './db';

const examSchema = new DB.Schema<Exam>({
        _id: String,
        name: String,
        created_at: Date,
        updated_at: Date,
        created_by: String,
        classes: [String],
        max_time: String,
        domande:[{}]
})

const ExamModel = DB.model("exam", examSchema);

//view all the exams
export const index= async()=>{
    return ExamModel.find({})
}

//find an exam by the id
export const view=async(_id)=>{
    return ExamModel.findById({_id});
}

//add an exam
export const add=async(exam:Exam)=>{
    const ExamData=new ExamModel(exam);
    return ExamData.save()
}


export const edit=async(_id, exam:Exam)=>{
    const examDocument=await ExamModel.findById(_id);

    if(!examDocument){
        throw new Error (`Cant' find the exam with id: ${exam._id}`)
    }

    examDocument.set(exam);
    return examDocument.save();
}

export const remove= async(_id:string)=>{
    return ExamModel.deleteOne({_id});
}